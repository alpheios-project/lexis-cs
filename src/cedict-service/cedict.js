/**
 * @module CedictData
 */
import CedictPermanentStorage from '@lexisCs/cedict-service/cedict-permanent-storage.js'

/** A class to serve data from CEDICT */
export default class Cedict {
  /**
   * @param {object} configuration - An object that describes a configuration of a CEDICT data object.
   */
  constructor (configuration) {
    Cedict.checkConfiguration(configuration)
    this._configuration = configuration

    /**
     * Whether the object is ready to serve data or not.
     *
     * @type {boolean}
     */
    this.isReady = false

    this._storage = null

    /**
     * If CEDICT be stored in memory this object will hold all its data.
     *
     * @type {{entries: object[]|Map, meta: {}}}
     */
    this.cedict = {

      // A dictionary's metadata
      meta: {},

      metaKey: 1,

      /**
       * If data is stored in memory `entries` will keep either
       * an array of dictionary records (if no in memory indexes will be employed) or
       * a map of dictionary records (if in memory indexes will be used).
       * If dictionary data will be stored in permanents storage only `entries` will be null
       */
      dictionary: null,

      /**
       * If in memory indexes be used, `traditionalHeadwordsIdx`
       * will hold a map: Map<traditionalHeadword, Array[entryIndex]>. Otherwise it will be null.
       */
      traditionalHeadwordsIdx: null,

      /**
       * If in memory indexes be used, `simplifiedHeadwordsIdx`
       * will hold a map: Map<simplifiedHeadword, Array[entryIndex]>. Otherwise it will be null.
       */
      simplifiedHeadwordsIdx: null
    }
  }

  /**
   * Checks if the configuration supplied has all the necessary information in it.
   * If configuration is not valid it will throw an error indicating which check failed.
   *
   * @param {object} configuration - A JSON like configuration object.
   */
  static checkConfiguration (configuration) {
    if (!configuration.storage) throw new Error('Storage tree is missing from a configuration')
    if (!configuration.storage.stores) throw new Error('Stores data is missing from a configuration')
    if (!configuration.storage.stores.dictionary) throw new Error('Dictionary tree is missing from a configuration')
    if (!configuration.storage.stores.dictionary.primaryIndex) throw new Error('A primaryIndex tree of a dictionary is missing from a configuration')
    if (!configuration.storage.stores.dictionary.primaryIndex.hasOwnProperty('keyPath')) throw new Error('A keyPath option of a primaryIndex tree of a dictionary is missing from a configuration') // eslint-disable-line no-prototype-builtins
    if (!configuration.storage.stores.dictionary.volatileStorage) throw new Error('A volatileStorage tree of a dictionary is missing from a configuration')
    if (!configuration.storage.stores.dictionary.volatileStorage.hasOwnProperty('enabled')) throw new Error('enabled option of a volatileStorage tree of a dictionary is missing from a configuration') // eslint-disable-line no-prototype-builtins
    if (!configuration.storage.stores.dictionary.volatileStorage.hasOwnProperty('indexed')) throw new Error('indexed option of a volatileStorage tree of a dictionary is missing from a configuration') // eslint-disable-line no-prototype-builtins
    if (!configuration.storage.stores.dictionary.permanentStorage) throw new Error('A permanentStorage tree of a dictionary is missing from a configuration')
    if (!configuration.storage.stores.dictionary.permanentStorage.hasOwnProperty('enabled')) throw new Error('enabled option of a permanentStorage tree of a dictionary is missing from a configuration') // eslint-disable-line no-prototype-builtins
    if (!configuration.storage.stores.dictionary.permanentStorage.hasOwnProperty('indexed')) throw new Error('indexed option of a permanentStorage tree of a dictionary is missing from a configuration') // eslint-disable-line no-prototype-builtins
    if (!configuration.data) throw new Error('Date tree is missing from a configuration')
    if (!configuration.data.version) throw new Error('Data version is missing from a configuration')
    if (!configuration.data.revision) throw new Error('Data revision is missing from a configuration')
    if (!configuration.data.recordsCount) throw new Error('Data records count is missing from a configuration')
    if (!configuration.data.URI) throw new Error('Data URI is missing from a configuration')
    if (!configuration.data.chunks || configuration.data.chunks.length === 0) throw new Error('Data chunks are missing from a configuration')
  }

  /**
   * Initializes a data object.
   *
   * @returns {Promise<undefined> | Promise<Error>} - A promise
   */
  init () {
    return new Promise((resolve, reject) => {
      this._storage = new CedictPermanentStorage(this._configuration.storage)
      // `storage.connect()` will create a database if it does not exist yet.
      return this._storage.connect()
        .catch((error) => {
          console.error('Connection to storage cannot be established')
          reject(error)
        })
        .then(() => {
          console.info('Connection was established')
          return this._storage.getIntergrityData()
        })
        .then((storageData) => {
          console.info('Check integrity returned', storageData)
          /*
          Integrity data has been returned successfully which means database structure is OK.
          Let's check if there is a new version of data available on a server.
           */
          if (
            storageData.recordsInMeta !== 1 ||
            storageData.recordsInDictionary !== this._configuration.data.recordsCount ||
            storageData.metadata.version !== this._configuration.data.version ||
            storageData.metadata.revision !== this._configuration.data.revision
          ) {
            throw new Error('Store is outdated')
          }
          console.info('In-memory storage state is', this.cedict)
          console.info('Configuration', this._configuration)
          // Data in storage is fresh so we can read it into memory structures if we have that option enabled
          this.cedict.meta = storageData.metadata
          if (this._configuration.storage.stores.dictionary.volatileStorage.enabled) {
            return this._storage.stores.dictionary.getAllEntries()
              .then((entries) => {
                this.populateVolatileStorage(entries)
                console.info('In-memory storage state after data loading is', this.cedict)
              }).catch((error) => reject(error))
          }
        })
        .catch((error) => {
          console.info('Integrity check failed, need to recreate a database', error)
          // Data in permanent storage needs to be updated
          console.info('Data needs to be updated')
          return this._storage.destroy()
          // `connect()` will create storage and stores
            .then(() => this._storage.connect())
            .then(() => this.downloadData())
            .then(({ meta, dictionary }) => {
              console.info('Downloaded the following data: ', meta, dictionary)
              console.info('Configuration', this._configuration)
              if (this._configuration.storage.stores.dictionary.volatileStorage.enabled) {
                this.populateVolatileStorage(meta, dictionary)
              }
              return this.populatePermanentStorage(meta, dictionary)
            })
        })
        .catch((error) => {
          console.info('Cannot download data from server', error)
          reject(error)
        })
        .then(() => {
          this.isReady = true
          console.info('Initialization is completed', this.cedict)
          resolve()
        })
    })
  }

  /**
   * Checks if the character form supplied is the one we have records upon.
   *
   * @param {Cedict.characterForms} characterForm - A string identifying a character form.
   * @returns {boolean} True if there is information on this form, false otherwise.
   */
  static isKnownCharacterForm (characterForm) {
    return Array.from(Object.values(Cedict.characterForms)).includes(characterForm)
  }

  /**
   * Returns one or several records from CEDICT dictionary for one or several Chinese words.
   *
   * @param {[string]} words - An array of Chinese words.
   * @param {string} characterForm - A string constant that specifies
   *        a character form in words (simplified or traditional).
   * @returns {object} - Returns an object whose keys are character forms and values are
   *          objects with requested words as keys and values are arrays of CEDICT records
   *          that has those words.
   */
  getWords (words, characterForm) {
    // CedictData object is not prepared to serve this request
    if (!this.isReady) return Promise.reject(new Error('CEDICT data is not ready'))

    let getAllCharacterForms = true
    // If character form is not specified we will return all records for all character forms
    if (typeof characterForm !== 'undefined') {
      // Some value is provided for a characterForm
      if (!Cedict.isKnownCharacterForm(characterForm)) return Promise.reject(new Error(`Unknown character form "${characterForm}"`))
      getAllCharacterForms = false
    }

    // Nothing to do
    if (!words) return Promise.resolve({})

    // Always prefer volatile storage to a permanent one
    if (this._configuration.storage.stores.dictionary.volatileStorage.enabled) {
      return new Promise((resolve, reject) => {
        try {
          const startTime = Date.now()
          if (getAllCharacterForms) {
            // Return records for all known character forms
            const result = {
              [Cedict.characterForms.SIMPLIFIED]: this._getWordsFromVolatileStorage(words, Cedict.characterForms.SIMPLIFIED),
              [Cedict.characterForms.TRADITIONAL]: this._getWordsFromVolatileStorage(words, Cedict.characterForms.TRADITIONAL)
            }
            console.info(`Request took ${Date.now() - startTime} ms`)
            resolve(result)
          } else {
            // Return records for a specified character set
            const result = {
              [characterForm]: this._getWordsFromVolatileStorage(words, characterForm)
            }
            console.info(`Request took ${Date.now() - startTime} ms`)
            resolve(result)
          }
        } catch (error) {
          reject(error)
        }
      })
    } else {
      // Use permanent storage
      if (getAllCharacterForms) {
        // Return records for all known character forms
        const requests = [
          this._getWordsFromPermanentStorage(words, Cedict.characterForms.SIMPLIFIED),
          this._getWordsFromPermanentStorage(words, Cedict.characterForms.TRADITIONAL)
        ]
        return Promise.all(requests).then((results) => ({
          [Cedict.characterForms.SIMPLIFIED]: results[0],
          [Cedict.characterForms.TRADITIONAL]: results[1]
        }))
      } else {
        // Return records for a specified character set
        return this._getWordsFromPermanentStorage(words, characterForm).then((result) => ({ [characterForm]: result }))
      }
    }
  }

  /**
   * Returns one or several records for given words from an in-memory storage.
   *
   * @param {[string]} words - An array of Chinese words.
   * @param {string} characterForm - A string constant that specifies
   *        a character form in words (simplified or traditional).
   * @returns {object} - Returns an object whose keys are the words requested and values are arrays of CEDICT records
   *          that has those words.
   */
  _getWordsFromVolatileStorage (words, characterForm) {
    // If a single word value is provided, convert it into an array
    if (!Array.isArray(words)) { words = [words] }
    // Create an object with props for the words
    let result = words.reduce((accumulator, key) => { accumulator[key] = []; return accumulator }, {}) // eslint-disable-line prefer-const
    // Retrieve from memory
    if (this._configuration.storage.stores.dictionary.volatileStorage.indexed) {
      // Use in memory indexes to find values
      words.forEach(word => {
        const idx = (characterForm === Cedict.characterForms.SIMPLIFIED)
          ? this.cedict.simplifiedHeadwordsIdx.get(word)
          : this.cedict.traditionalHeadwordsIdx.get(word)
        result[word] = idx ? idx.map(idx => this.cedict.dictionary.get(idx)) : []
      })
    } else {
      // Indexes are not available, iterate over an array of values
      this.cedict.dictionary.forEach(entry => {
        const hw = (characterForm === Cedict.characterForms.SIMPLIFIED) ? entry.simplifiedHeadword : entry.traditionalHeadword
        words.forEach(word => {
          if (hw === word) {
            result[word].push(entry)
          }
        })
      })
    }
    return result
  }

  /**
   * Returns one or several records for given words from a permanent storage.
   *
   * @param {[string]} words - An array of Chinese words.
   * @param {string} characterForm - A string constant that specifies
   *        a character form in words (simplified or traditional).
   * @returns {object} - Returns an object whose keys are the words requested and values are arrays of CEDICT records
   *          that has those words.
   */
  _getWordsFromPermanentStorage (words, characterForm) {
    const index = (characterForm === Cedict.characterForms.SIMPLIFIED) ? 'simplifiedHwIdx' : 'traditionalHwIdx'
    return this._storage.stores.dictionary.getEntries(words, { index })
  }

  /**
   * Loads fresh CEDICT data from a remote server.
   *
   * @returns {Promise<{meta: object, dictionary: object[]}> | Promise<Error>} - Returns a promise that will be resolved with undefined
   *          if data was loaded successfully or that will be rejected with an error with data loading will fail.
   */
  downloadData () {
    const requests = this._configuration.data.chunks.map(chunk => this.loadJson(`${this._configuration.data.URI}/${chunk}`))
    return Promise.all(requests).then(chunks => {
      console.info('All chunks are loaded')
      let meta = chunks[0].metadata // eslint-disable-line prefer-const
      delete this.cedict.meta.chunkNumber
      return { meta, dictionary: chunks.map(piece => piece.entries).flat() }
    })
  }

  /**
   * Stores CEDICT dictionary data into an in-memory storage.
   *
   * @param {object} meta - A metadata object.
   * @param {object[]} dictionary - An array of dictionary records.
   */
  populateVolatileStorage (meta, dictionary) {
    this.cedict.meta = meta
    if (this._configuration.storage.stores.dictionary.volatileStorage.indexed) {
      // Dictionary entries will be placed into a map using a primary key.
      this.cedict.dictionary = new Map()
      dictionary.forEach(entry => this.cedict.dictionary.set(entry[this._configuration.storage.stores.dictionary.primaryIndex.keyPath], entry))
      // Additional maps will be created for each index.
      this.indexVolatileStorage()
    } else {
      // No indexes will be created and dictionary entries will be placed into an array
      this.cedict.dictionary = dictionary
    }
  }

  /**
   * Creates indexes for an in-memory storage.
   */
  indexVolatileStorage () {
    this.cedict.traditionalHeadwordsIdx = new Map()
    this.cedict.simplifiedHeadwordsIdx = new Map()
    this.cedict.dictionary.forEach(entry => {
      this.cedict.traditionalHeadwordsIdx.has(entry.traditionalHeadword)
        ? this.cedict.traditionalHeadwordsIdx.get(entry.traditionalHeadword).push(entry.index)
        : this.cedict.traditionalHeadwordsIdx.set(entry.traditionalHeadword, [entry.index])
      this.cedict.simplifiedHeadwordsIdx.has(entry.simplifiedHeadword)
        ? this.cedict.simplifiedHeadwordsIdx.get(entry.simplifiedHeadword).push(entry.index)
        : this.cedict.simplifiedHeadwordsIdx.set(entry.simplifiedHeadword, [entry.index])
    })
  }

  /**
   * Records CEDICT data to the permanent storage.
   *
   * @param {object} meta - A metadata object.
   * @param {object[]} dictionary - An array of dictionary records.
   * @returns {Promise<undefined>|Promise<Error>} A promise that is resolved if data has been written successfully
   *          or is reject if write operations failed.
   */
  populatePermanentStorage (meta, dictionary) {
    /*
    `update` is used instead of `insert` here because `meta` store has only one record
    and it's index must be as defined in `this.cedict.metaKey`.
    Only the use of `update` allow to specify an index for the record.
     */
    const metaUpdate = this._storage.stores.meta.update([this.cedict.metaKey, meta])
    console.info(`Write to storage, number of records is ${dictionary.length}`)
    const dictionaryUpdate = this._storage.stores.dictionary.insert(dictionary)
    return Promise.all([metaUpdate, dictionaryUpdate])
  }

  /**
   * Loads a single JSON file from a specified URL and decodes it.
   *
   * @param {string} url - A strings that specifies a URL of a JSON file
   * @returns {Promise<object>|Promise<Error>} - A promise that is resolved with a JSON object or
   *          rejected with the error.
   */
  loadJson (url) {
    return fetch(url).then(response => response.json())
  }
}

/**
 * Character forms that are supported with the current version of the service.
 *
 * @type {{SIMPLIFIED: string, TRADITIONAL: string}}
 */
Cedict.characterForms = {
  SIMPLIFIED: 'simplified',
  TRADITIONAL: 'traditional'
}
