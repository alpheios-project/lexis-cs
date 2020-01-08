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

    this._storage = new CedictPermanentStorage(this._configuration.storage)

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

    /*
    If characterForm is not specified in the request we will search for records with the
    preferred character form specified below first. If any results for that character form will be found,
    only those ones will be returned to the client. If no results for the preferred character form
    are in the dictionary then we will search for records with other character forms.
    ATTENTION! This constant is used in a stub `client-adapters/src/adapters/chineseloc/adapter.js`.
    if you will change it please update it in a stab as well.
     */
    this.preferredCharacterForm = Cedict.characterForms.TRADITIONAL

    /*
    This is a character form we will fallback into if matches for the preferred one are not found.
    ATTENTION! This constant is used in a stub `client-adapters/src/adapters/chineseloc/adapter.js`.
    if you will change it please update it in a stab as well.
     */
    this.fallbackCharacterForm = Cedict.characterForms.SIMPLIFIED
  }

  /**
   * Checks if the configuration supplied has all the necessary information in it.
   * If configuration is not valid it will throw an error indicating which check failed.
   *
   * @param {object} configuration - A JSON like configuration object.
   */
  static checkConfiguration (configuration) {
    if (!configuration.storage) throw new Error(Cedict.errMsgs.CONF_NO_STORAGE)
    if (!configuration.storage.stores) throw new Error(Cedict.errMsgs.CONF_NO_STORES)
    if (!configuration.storage.stores.dictionary) throw new Error(Cedict.errMsgs.CONF_NO_DICT)
    if (!configuration.storage.stores.dictionary.primaryIndex) throw new Error(Cedict.errMsgs.CONF_NO_DICT_PRIMARY_IDX)
    if (!configuration.storage.stores.dictionary.primaryIndex.hasOwnProperty('keyPath')) throw new Error(Cedict.errMsgs.CONF_NO_DICT_PRIMARY_IDX_KEY_PATH)
    if (!configuration.storage.stores.dictionary.volatileStorage) throw new Error(Cedict.errMsgs.CONF_NO_DICT_VOLATILE)
    if (!configuration.storage.stores.dictionary.volatileStorage.hasOwnProperty('enabled')) throw new Error(Cedict.errMsgs.CONF_NO_DICT_VOLATILE_ENABLED)
    if (!configuration.storage.stores.dictionary.volatileStorage.hasOwnProperty('indexed')) throw new Error(Cedict.errMsgs.CONF_NO_DICT_VOLATILE_INDEXED)
    if (!configuration.storage.stores.dictionary.permanentStorage) throw new Error(Cedict.errMsgs.CONF_NO_DICT_PERM)
    if (!configuration.storage.stores.dictionary.permanentStorage.hasOwnProperty('enabled')) throw new Error(Cedict.errMsgs.CONF_NO_DICT_PERM_ENABLED)
    if (!configuration.storage.stores.dictionary.permanentStorage.hasOwnProperty('indexed')) throw new Error(Cedict.errMsgs.CONF_NO_DICT_PERM_INDEXED)
    if (!configuration.data) throw new Error(Cedict.errMsgs.CONF_NO_DATA)
    if (!configuration.data.version) throw new Error(Cedict.errMsgs.CONF_NO_DATA_VER)
    if (!configuration.data.revision) throw new Error(Cedict.errMsgs.CONF_NO_DATA_REV)
    if (!configuration.data.recordsCount) throw new Error(Cedict.errMsgs.CONF_NO_DATA_REC_COUNT)
    if (!configuration.data.URI) throw new Error(Cedict.errMsgs.CONF_NO_DATA_URI)
    if (!configuration.data.chunks || configuration.data.chunks.length === 0) throw new Error(Cedict.errMsgs.CONF_NO_DATA_CHUNKS)
  }

  /**
   * Initializes a data object.
   *
   * @returns {Promise<undefined> | Promise<Error>} - A promise
   */
  init () {
    return new Promise((resolve, reject) => {
      // `storage.connect()` will create a database if it does not exist yet.
      return this._storage.connect()
        .catch((error) => {
          console.error('Connection to storage cannot be established')
          reject(error)
        })
        .then(() => this._storage.getIntegrityData())
        .then((integrityData) => {
          /*
          Integrity data has been returned successfully which means database structure is OK.
          Let's check if there is a new version of data available on a server.
           */
          if (!this.isStorageIntact(integrityData)) {
            throw new Error('Storage is outdated')
          }
          // Data in storage is fresh so we can read it into memory structures if we have that option enabled
          if (this._configuration.storage.stores.dictionary.volatileStorage.enabled) {
            return this._storage.getStore('dictionary').getAllEntries()
              .then((entries) => this._populateVolatileStorage(integrityData.metadata, entries))
              .catch((error) => reject(error))
          }
        })
        .catch(() => {
          // Data in permanent storage needs to be updated
          return this.removePermanentData()
            // `connect()` will create storage and stores
            .then(() => this._storage.connect())
            .then(() => this._downloadData())
            .then(({ meta, dictionary }) => {
              if (this._configuration.storage.stores.dictionary.volatileStorage.enabled) {
                this._populateVolatileStorage(meta, dictionary)
              }
              // Even if permanent storage is disabled we will still populate in order to avoid downloading data again
              return this._populatePermanentStorage(meta, dictionary)
                .then(() => Promise.resolve())
                .catch((error) => {
                  console.error('Unable to store CEDICT data to IndexedDB.', error)
                  // Cannot write CEDICT data to IndexedDB. Will fall back to an in-memory location
                  if (!this._configuration.storage.stores.dictionary.volatileStorage.enabled) {
                    console.warn('Switched to in-memory placement of CEDICT data')
                    this._configuration.storage.stores.dictionary.volatileStorage.enabled = true
                    this._populateVolatileStorage(meta, dictionary)
                  }
                  return Promise.resolve()
                })
            })
        })
        .catch((error) => reject(error))
        .then(() => {
          this.isReady = true
          resolve()
        })
    })
  }

  /**
   * Deletes all permanent data associated with CEDICT data object.
   *
   * @returns {Promise<undefined>|Promise<Error>} A promise that is resolved if data is cleared successfully
   *          or rejected if operation failed.
   */
  removePermanentData () {
    return this._storage.destroy()
  }

  /**
   * Checks if the character form supplied is the one we have records upon.
   *
   * @param {Cedict.characterForms} characterForm - A string identifying a character form.
   * @returns {boolean} True if there is information on this form, false otherwise.
   */
  static isSupportedCharacterForm (characterForm) {
    return Array.from(Object.values(Cedict.characterForms)).includes(characterForm)
  }

  /**
   * Verifies whether data in a storage is OK by checking its integrity information.
   *
   * @param {object} integrityData - A JSON-like object containing a storage integrity data.
   * @returns {boolean} True if storage is intact and false otherwise.
   */
  isStorageIntact (integrityData) {
    return (
      integrityData.recordsInMeta === 1 &&
      integrityData.recordsInDictionary === this._configuration.data.recordsCount &&
      integrityData.metadata.version === this._configuration.data.version &&
      integrityData.metadata.revision === this._configuration.data.revision
    )
  }

  /**
   * Returns one or several records from CEDICT dictionary for one or several Chinese words.
   * ATTENTION! There is a stub that implements this method in `client-adapters/src/adapters/chineseloc/adapter.js`.
   * If business logic here will be updated please update the stub as well.
   *
   * @param {string|[string]} words - A single Chinese word or an array of Chinese words.
   * @param {string|undefined} [characterForm=undefined] - A string constant that specifies
   *        a character form in words (simplified or traditional).
   * @returns {object} - Returns an object whose keys are character forms and values are
   *          objects with requested words as keys and values are arrays of CEDICT records
   *          that has those words.
   */
  getWords (words, characterForm) {
    // CedictData object is not prepared to serve this request
    if (!this.isReady) return Promise.reject(new Error(Cedict.errMsgs.NOT_READY))

    let characterFormIsNotKnown = true
    // If character form is not specified it will try to find a best suitable one
    if (typeof characterForm !== 'undefined') {
      // Some value is provided for a characterForm
      if (!Cedict.isSupportedCharacterForm(characterForm)) return Promise.reject(new Error(`${Cedict.errMsgs.BAD_CHAR_FORM} "${characterForm}"`))
      characterFormIsNotKnown = false
    }

    // Nothing to do
    if (!words) return Promise.resolve({})

    // Decide whether word entries will be retrieved from memory or form a permanent storage
    const getWordsFunc = this._configuration.storage.stores.dictionary.volatileStorage.enabled
      ? this._getWordsFromVolatileStorage.bind(this)
      : this._getWordsFromPermanentStorage.bind(this)

    return new Promise((resolve, reject) => {
      if (characterFormIsNotKnown) {
        // Search using preferred character form first
        getWordsFunc(words, this.preferredCharacterForm)
          .then((entries) => {
            if (Cedict._getResultRecordsCount(entries) > 0) {
              // There are matches with the preferred character form, we need to search no longer
              resolve({ [this.preferredCharacterForm]: entries })
            } else {
              // Search using fallback character form
              return getWordsFunc(words, this.fallbackCharacterForm)
            }
          })
          .then((entries) => {
            // Results for the fallback character form
            const result = (Cedict._getResultRecordsCount(entries) > 0) ? { [this.fallbackCharacterForm]: entries } : {}
            resolve(result)
          })
          .catch((error) => reject(error))
      } else {
        // Return records for a specified character set
        getWordsFunc(words, characterForm)
          .then((entries) => {
            const result = (Cedict._getResultRecordsCount(entries) > 0) ? { [characterForm]: entries } : {}
            resolve(result)
          })
          .catch((error) => reject(error))
      }
    })
  }

  /**
   * Returns one or several records for given words from an in-memory storage.
   * It returns a promise to make it signature compatible with other word retrieval functions.
   *
   * @param {[string]} words - An array of Chinese words.
   * @param {string} characterForm - A string constant that specifies
   *        a character form in words (simplified or traditional).
   * @returns {Promise<object> | Promise<Error>} - Returns a promise that is resolved with an object
   *          whose keys are the words requested and values are arrays of CEDICT records that has those words.
   *          If an error occurred, the promise is rejected with an error.
   */
  _getWordsFromVolatileStorage (words, characterForm) {
    return new Promise((resolve, reject) => {
      try {
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
        resolve(result)
      } catch (error) {
        reject(error)
      }
    })
  }

  /**
   * Returns one or several records for given words from a permanent storage.
   *
   * @param {[string]} words - An array of Chinese words.
   * @param {string} characterForm - A string constant that specifies
   *        a character form in words (simplified or traditional).
   * @returns {Promise<object> | Promise<Error>} - Returns a promise that is resolved with an object
   *          whose keys are the words requested and values are arrays of CEDICT records that has those words.
   *          If an error occurred, the promise is rejected with an error.
   */
  _getWordsFromPermanentStorage (words, characterForm) {
    const index = (characterForm === Cedict.characterForms.SIMPLIFIED) ? 'simplifiedHwIdx' : 'traditionalHwIdx'
    return this._storage.getStore('dictionary').getEntries(words, { index })
  }

  /**
   * Loads fresh CEDICT data from a remote server.
   *
   * @returns {Promise<{meta: object, dictionary: object[]}> | Promise<Error>} - Returns a promise that will be resolved with undefined
   *          if data was loaded successfully or that will be rejected with an error with data loading will fail.
   */
  _downloadData () {
    const requests = this._configuration.data.chunks.map(chunk => this._loadJson(`${this._configuration.data.URI}/${chunk}`))
    return Promise.all(requests).then(chunks => {
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
  _populateVolatileStorage (meta, dictionary) {
    this.cedict.meta = meta
    if (this._configuration.storage.stores.dictionary.volatileStorage.indexed) {
      // Dictionary entries will be placed into a map using a primary key.
      this.cedict.dictionary = new Map()
      dictionary.forEach(entry => this.cedict.dictionary.set(entry[this._configuration.storage.stores.dictionary.primaryIndex.keyPath], entry))
      // Additional maps will be created for each index.
      this._indexVolatileStorage()
    } else {
      // No indexes will be created and dictionary entries will be placed into an array
      this.cedict.dictionary = dictionary
    }
  }

  /**
   * Creates indexes for an in-memory storage.
   */

  _indexVolatileStorage () {
    this.cedict.traditionalHeadwordsIdx = new Map()
    this.cedict.simplifiedHeadwordsIdx = new Map()
    this.cedict.dictionary.forEach(entry => {
      this.cedict.traditionalHeadwordsIdx.has(entry.traditional.headword)
        ? this.cedict.traditionalHeadwordsIdx.get(entry.traditional.headword).push(entry.index)
        : this.cedict.traditionalHeadwordsIdx.set(entry.traditional.headword, [entry.index])
      this.cedict.simplifiedHeadwordsIdx.has(entry.simplified.headword)
        ? this.cedict.simplifiedHeadwordsIdx.get(entry.simplified.headword).push(entry.index)
        : this.cedict.simplifiedHeadwordsIdx.set(entry.simplified.headword, [entry.index])
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
  _populatePermanentStorage (meta, dictionary) {
    /*
    `update` is used instead of `insert` here because `meta` store has only one record
    and it's index must be as defined in `this.cedict.metaKey`.
    Only the use of `update` allow to specify an index for the record.
     */
    const metaUpdate = this._storage.getStore('meta').update([meta, this.cedict.metaKey])
    const dictionaryUpdate = this._storage.getStore('dictionary').insert(dictionary)
    return Promise.all([metaUpdate, dictionaryUpdate])
  }

  /**
   * Loads a single JSON file from a specified URL and decodes it.
   *
   * @param {string} url - A strings that specifies a URL of a JSON file
   * @returns {Promise<object>|Promise<Error>} - A promise that is resolved with a JSON object or
   *          rejected with the error.
   */
  _loadJson (url) {
    return fetch(url).then(response => response.json())
  }

  static _getResultRecordsCount (resultsObject) {
    return Object.values(resultsObject).flat().length
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

Cedict.errMsgs = {
  CONF_NO_STORAGE: 'Storage tree is missing from a configuration',
  CONF_NO_STORES: 'Stores data is missing from a configuration',
  CONF_NO_DICT: 'Dictionary tree is missing from a configuration',
  CONF_NO_DICT_PRIMARY_IDX: 'A primaryIndex tree of a dictionary is missing from a configuration',
  CONF_NO_DICT_PRIMARY_IDX_KEY_PATH: 'A keyPath option of a primaryIndex tree of a dictionary is missing from a configuration',
  CONF_NO_DICT_VOLATILE: 'A volatileStorage tree of a dictionary is missing from a configuration',
  CONF_NO_DICT_VOLATILE_ENABLED: 'enabled option of a volatileStorage tree of a dictionary is missing from a configuration',
  CONF_NO_DICT_VOLATILE_INDEXED: 'indexed option of a volatileStorage tree of a dictionary is missing from a configuration',
  CONF_NO_DICT_PERM: 'A permanentStorage tree of a dictionary is missing from a configuration',
  CONF_NO_DICT_PERM_ENABLED: 'enabled option of a permanentStorage tree of a dictionary is missing from a configuration',
  CONF_NO_DICT_PERM_INDEXED: 'indexed option of a permanentStorage tree of a dictionary is missing from a configuration',
  CONF_NO_DATA: 'Date tree is missing from a configuration',
  CONF_NO_DATA_VER: 'Data version is missing from a configuration',
  CONF_NO_DATA_REV: 'Data revision is missing from a configuration',
  CONF_NO_DATA_REC_COUNT: 'Data records count is missing from a configuration',
  CONF_NO_DATA_URI: 'Data URI is missing from a configuration',
  CONF_NO_DATA_CHUNKS: 'Data chunks are missing from a configuration',
  NOT_READY: 'CEDICT data is not ready',
  BAD_CHAR_FORM: 'Unknown character form'
}
