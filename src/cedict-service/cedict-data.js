/**
 * @module CedictData
 */

/** A class to serve data from CEDICT */
export default class CedictData {
  /**
   * @param {object} schema - An object that describes a configuration of a CEDICT data object.
   */
  constructor (schema) {
    this._schema = schema

    /**
     * Whether the object is ready to serve data or not.
     *
     * @type {boolean}
     */
    this.isReady = false

    /**
     * If CEDICT be stored in memory this object will hold all its data.
     *
     * @type {{entries: [], meta: {}}}
     */
    this.cedict = {

      // A dictionary's metadata
      meta: {},

      /**
       * If data is stored in memory `entries` will keep either
       * an array of dictionary records (if no in memory indexes will be employed) or
       * a map of dictionary records (if in memory indexes will be used).
       * If dictionary data will be stored in permanents storage only `entries` will be null
       */
      entries: null,

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
   * Initializes a data object.
   *
   * @returns {Promise<undefined> | Promise<Error>} - A promise
   */
  init () {
    return new Promise((resolve, reject) => {

      this.updateFromServer().then(() => {
        console.info('Update from server complete')
        this.isReady = true
        resolve()
      })
    })
  }

  /**
   * Returns one or several records from CEDICT dictionary for one or several Chinese words.
   *
   * @param {[string]} words - An array of Chinese words.
   * @param {string} characterForm - A string constant that specifies
   *        a character form in words (simplified or traditional).
   * @returns {object} - Returns an object whose keys are the words requested and values are arrays of CEDICT records
   *          that has those words.
   */
  getWords (words, characterForm) {
    if (!words || !this._hasData) {
      // No records can be found.
      return []
    }

    // If a single word value is provided, convert it into an array.
    if (!Array.isArray(words)) { words = [words] }

    const startTime = Date.now()
    // Create an object with props for the words
    let result = words.reduce((accumulator, key) => { accumulator[key] = []; return accumulator }, {}) // eslint-disable-line prefer-const

    if (this._schema.db.stores.dict.inMemoryIndexes) {
      // Use in memory indexes to find values
      words.forEach(word => {
        const idx = (characterForm === CedictData.characterForms.SIMPLIFIED)
          ? this.cedict.simplifiedHeadwordsIdx.get(word)
          : this.cedict.traditionalHeadwordsIdx.get(word)
        result[word] = idx ? idx.map(idx => this.cedict.entries.get(idx)) : []
      })
    } else {
      // Indexes are not available, iterate over an array of values
      this.cedict.entries.forEach(entry => {
        const hw = (characterForm === CedictData.characterForms.SIMPLIFIED) ? entry.simplifiedHeadword : entry.traditionalHeadword
        words.forEach(word => {
          if (hw === word) {
            result[word].push(entry)
          }
        })
      })
    }
    console.info(`Request took ${Date.now() - startTime} ms`)
    return result
  }

  /**
   * Checks wither CEDICT dictionary has any data in it.
   *
   * @returns {boolean} - True if there is any dictionary records in the data object or false if otherwise.
   * @private
   */
  get _hasData () {
    return Boolean(this.cedict.entries)
  }

  getMetaFromStore () {
    let openRequest = indexedDB.open(this._schema.db.name, this._schema.db.version) // eslint-disable-line prefer-const
    openRequest.onerror = (event) => {
      console.info('Check version on error', event)
    }

    openRequest.onupgradeneeded = (event) => {
      console.info('Check version on upgrade needed', event)
    }

    openRequest.onsuccess = (event) => {
      console.info('Check version on success', event)

      // store the result of opening the database in the db variable. This is used a lot below
      const db = openRequest.result

      // This line will log the version of the connected database, which should be "4"
      console.info(`Database version is ${db.version}`)
    }
  }

  /**
   * Loads fresh CEDICT data from a remote server.
   *
   * @returns {Promise<undefined> | Promise<Error>} - Returns a promise that will be resolved with undefined
   *          if data was loaded successfully or that will be rejected with an error with data loading will fail.
   */
  updateFromServer () {
    const requests = this._schema.data.chunks.map(chunk => this.loadJson(`${this._schema.data.URI}/${chunk}`))
    return Promise.all(requests).then(chunks => {
      console.info('All chunks are loaded')
      this.cedict.meta = chunks[0].metadata
      delete this.cedict.meta.chunkNumber
      if (this._schema.db.stores.dict.inMemoryIndexes) {
        // Put dictionary entries into a map
        this.cedict.entries = new Map()
        this.cedict.entries = chunks
          .map(piece => piece.entries)
          .flat()
          .reduce((map, entry) => map.set(entry.index, entry), this.cedict.entries)
        this.buildIndexes()
      } else {
        // Put dictionary entries into an array
        this.cedict.entries = chunks.map(piece => piece.entries).flat()
      }
      if (this._schema.db.stores.dict.permanentStorage) {
        console.info('Preparing a permanent storage for data')
        return this.storeCedictData()
      } else {
        return Promise.resolve()
      }
    }).then(() => {
      console.info('Promise chain is finished')
    })
  }

  buildIndexes () {
    // Build an in-memory indexes
    this.cedict.traditionalHeadwordsIdx = new Map()
    this.cedict.simplifiedHeadwordsIdx = new Map()
    this.cedict.entries.forEach(entry => {
      this.cedict.traditionalHeadwordsIdx.has(entry.traditionalHeadword)
        ? this.cedict.traditionalHeadwordsIdx.get(entry.traditionalHeadword).push(entry.index)
        : this.cedict.traditionalHeadwordsIdx.set(entry.traditionalHeadword, [entry.index])
      this.cedict.simplifiedHeadwordsIdx.has(entry.simplifiedHeadword)
        ? this.cedict.simplifiedHeadwordsIdx.get(entry.simplifiedHeadword).push(entry.index)
        : this.cedict.simplifiedHeadwordsIdx.set(entry.simplifiedHeadword, [entry.index])
    })
  }

  storeCedictData () {
    return new Promise((resolve, reject) => {
      let openRequest = indexedDB.open(this._schema.db.name, this._schema.db.version) // eslint-disable-line prefer-const

      console.info('Starting to write data to database')
      openRequest.onupgradeneeded = () => {
        // This means that a database either does not exist or have incorrect
        // TODO: add removal of previous database version objects
        //       create a function to remove each previous version
        console.info('onUpgradeNeeded has been called')
        let db = openRequest.result // eslint-disable-line prefer-const

        // Create store for metadata
        db.createObjectStore(this._schema.db.stores.meta.name, { autoIncrement: true }) // eslint-disable-line prefer-const

        // Create store for dictionary entries
        let dictStore = db.createObjectStore(this._schema.db.stores.dict.name, { keyPath: 'index' }) // eslint-disable-line prefer-const
        if (this._schema.db.stores.dict.indexes) {
          Object.values(this._schema.db.stores.dict.indexes).forEach(idx => {
            console.info('Creating an index for', idx)
            dictStore.createIndex(idx.name, idx.keyPath, { unique: idx.unique })
          })
        }
      }

      openRequest.onsuccess = () => {
        /*
        Upgrade has been completed or were not needed
         */
        console.info('dbOpen onSuccess has been called')
        const startTime = Date.now()
        let db = openRequest.result // eslint-disable-line prefer-const

        let metaStoreTransaction = db.transaction(this._schema.db.stores.meta.name, 'readwrite') // eslint-disable-line prefer-const
        let metaStore = metaStoreTransaction.objectStore(this._schema.db.stores.meta.name) // eslint-disable-line prefer-const

        // Clear old data from a meta store before writing a new one
        // Is this a subtransaction within a metaTransaction?
        const metaClearTransaction = metaStore.clear()
        metaClearTransaction.onsuccess = () => {
          console.info('meta clear onSuccess')
          console.info('writing cedict metadata')
          metaStore.put(this.cedict.meta, 1)
        }

        /* metaClearTransaction.oncomplete = () => {
          console.info('meta clear onComplete')
        } */

        metaStoreTransaction.oncomplete = () => {
          console.info('meta onComplete has been called')
          // Will be closed later. How to prevent race conditions?
          // db.close()
        }

        /* metaStoreTransaction.onsuccess = () => {
          console.info('meta onSuccess has been called')
          // Will be closed later. How to prevent race conditions?
          // db.close()
        } */

        // Store dictionary data
        let dictWriteTransaction = db.transaction(this._schema.db.stores.dict.name, 'readwrite') // eslint-disable-line prefer-const
        let dictStore = dictWriteTransaction.objectStore(this._schema.db.stores.dict.name) // eslint-disable-line prefer-const

        // Clear old data from a dictionary store
        // TODO: This callback takes too long: 8000 ms. Can we do anything about it?
        const dictClearTransaction = dictStore.clear()
        dictClearTransaction.onsuccess = () => {
          console.info('dictionary clear onSuccess')

          /*
          Dictionary entries can be stored as either an array (if no in-memory indexes are created)
          or as a map (if there are in-memory indexes).
           */
          const entriesArr = this.cedict.entries instanceof Map ? Array.from(this.cedict.entries.values()) : this.cedict.entries
          entriesArr.forEach(entry => dictStore.put(entry))

          dictWriteTransaction.oncomplete = () => {
            console.info('dictionary write onComplete has been called')
            // TODO: This is guaranteed to finish later than the metadata transaction. Is it reliable enough?
            db.close()
            console.info(`All dictionary data has been recorded, duration is ${Date.now() - startTime}`)
            resolve()
          }
        }
        console.info(`onSuccess has been finished (${Date.now() - startTime}) ms`)
      }

      openRequest.onerror = (error) => {
        console.info('Onerror handler', error)
      }

      console.info('storeCedictData fallen through')
    })
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

// TODO: Shall probably move this to data models
CedictData.characterForms = {
  SIMPLIFIED: 'simplified',
  TRADITIONAL: 'traditional'
}
