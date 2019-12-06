/**
 * @module IndexedDbStore
 */
import Store from '@lexisCs/cedict-service/store.js'

/**
 * A configuration object for IndexedDbStore must contain the following information:
 *
 * @typedef {object} IndexedDbStoreConfig
 * @property {string} name - A name of an IndexedDbStore instance.
 * @param {object} primaryIndex - An object defining configuration of a primary index.
 * @property {string} primaryIndex.keyPath - A name of a prop in an entry object that will serve as primary key.
 */

/** A an IndexedDB store object */
export default class IndexedDbStore extends Store {
  /**
   * @param {IndexedDbStoreConfig} configuration - Configuration parameters for IndexedDbStore.
   */
  constructor (configuration) {
    super(configuration)
    this._configuration = configuration
    // DB object is not available when store object is created. It must be added later.
    this._db = null
  }

  /**
   * Called by a super class to check if the configuration supplied has all the necessary information in it.
   * If configuration is not valid it will throw an error indicating which check failed.
   *
   * @param {IndexedDbStoreConfig} configuration - Configuration parameters for IndexedDbStore.
   * @private
   */
  static _checkConfiguration (configuration) {
    if (!configuration.name) throw new Error(IndexedDbStore.errorMsgs.NO_STORE_NAME)
    if (!configuration.primaryIndex) throw new Error(IndexedDbStore.errorMsgs.NO_PRIMARY_INDEX)
    if (!configuration.primaryIndex.hasOwnProperty('keyPath')) throw new Error(IndexedDbStore.errorMsgs.NO_KEY_PATH)
  }

  /**
   * Associates a store with an IndexedDB interface of a database where it is located.
   *
   * @param {IDBDatabase} db - An interface for connecting to IndexedDB.
   * @returns {Store} A self-reference for chaining.
   */
  associateWith (db) {
    this._db = db
    return this
  }

  /**
   * Asserts that an IndexedDbStore is associated with a database.
   *
   * @private
   */
  _assertDb () {
    if (!this._db) throw new Error(IndexedDbStore.errorMsgs.NO_DB)
  }

  /**
   * Returns an array of secondary index objects.
   *
   * @returns {object} An array of secondary index objects.
   * @private
   */
  get _secondaryIndexes () {
    return Object.values(this._configuration.indexes)
  }

  /**
   * Returns an array of names of secondary indexes.
   *
   * @returns {string} An array of names of secondary indexes.
   * @private
   */
  get _secondaryIndexNames () {
    return Object.values(this._configuration.indexes).map(index => index.name)
  }

  /**
   * Creates a store. Can be run from `onupgradeneeded` callback only.
   *
   * @returns {Promise<undefined>|Promise<Error>} A promise that is resolved if store was created successfully
   *          and is rejected if creation failed.
   */
  create () {
    return new Promise((resolve, reject) => {
      this._assertDb()
      const options = this._configuration.primaryIndex.keyPath ? { keyPath: this._configuration.primaryIndex.keyPath } : undefined
      const store = this._db.createObjectStore(this._configuration.name, options)
      if (this._configuration.indexes) {
        this._secondaryIndexes.forEach(idx => {
          try {
            store.createIndex(idx.name, idx.keyPath, { unique: idx.unique })
          } catch (error) {
            reject(error)
          }
        })
      }
      resolve()
    })
  }

  /**
   * Deletes all records from the store.
   *
   * @returns {Promise<undefined>|Promise<Error>} A promise that is resolved if all records were removed successfully
   *          and is rejected if operation failed.
   */
  clear () {
    return new Promise((resolve, reject) => {
      this._assertDb()
      let transaction = this._db.transaction(this._configuration.name, IndexedDbStore.accessModes.READ_WRITE) // eslint-disable-line prefer-const
      transaction.onerror = (event) => reject(event)
      let objectStore = transaction.objectStore(this._configuration.name) // eslint-disable-line prefer-const
      let clearRequest = objectStore.clear() // eslint-disable-line prefer-const
      clearRequest.onsuccess = () => resolve()
    })
  }

  /**
   * Retrieves all records from the store for a single key. If records do not exist, returns an empty array.
   *
   * @param {*} key - A key that specifies which records to retrieve.
   * @param {object} [options={}] - Additional configuration parameters:
   * @param {string} options.index - If the key provided as a first argument is for a secondary index
   *        then this field must contain a name of a secondary index to use. If this field is not specified,
   *        then records will be retrieved using a primary index.
   * @returns {Promise<object[]>|Promise<Error>} A promise that is resolved with an array of records if records
   *          exist in a store or with an empty array if not. A promise rejection is returned if operation failed.
   */
  async get (key, options = {}) {
    if (key === undefined) throw new Error(IndexedDbStore.errorMsgs.NO_KEYS_PROVIDED)
    return this.getEntries([key], options).then((result) => result[key])
  }

  /**
   * Retrieves all records from the store for one or several keys. If records do not exist, returns an empty array.
   *
   * @param {*|*[]} keys - A key or an array of keys that specifies which records to retrieve.
   * @param {object} [options={}] - Additional configuration parameters:
   * @param {string} options.index - If the key provided as a first argument is for a secondary index
   *        then this field must contain a name of a secondary index to use. If this field is not specified,
   *        then records will be retrieved using a primary index.
   * @returns {Promise<{key: object[] }>|Promise<Error>} A promise that is resolved with an object. If contains keys
   *          as its properties and values are arrays of records.
   *          A promise rejection is returned if operation failed.
   */
  getEntries (keys, { index = '' } = {}) {
    return new Promise((resolve, reject) => {
      this._assertDb()
      if (keys === undefined) reject(new Error(IndexedDbStore.errorMsgs.NO_KEYS_PROVIDED))
      if (!Array.isArray(keys)) keys = [keys]
      if (keys.length === 0) reject(new Error(IndexedDbStore.errorMsgs.NO_KEYS_PROVIDED))
      const transaction = this._db.transaction(this._configuration.name, IndexedDbStore.accessModes.READ)
      const store = transaction.objectStore(this._configuration.name)
      // Create an object with keys as its props
      let result = keys.reduce((accumulator, key) => { accumulator[key] = []; return accumulator }, {}) // eslint-disable-line prefer-const
      /*
      The order of request execution is guaranteed in IndexedDB.
      This means that when the last request is completed all previous requests are done too.
       */
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i]
        let getRequest
        if (index) {
          if (!this._secondaryIndexNames.includes(index)) throw new Error(IndexedDbStore.errorMsgs.MISSING_SECONDARY_INDEX)
          // Use index to retrieve a record
          const dbIndex = store.index(index)
          getRequest = dbIndex.getAll(IDBKeyRange.only(key))
        } else {
          getRequest = store.getAll(IDBKeyRange.only(key))
        }
        getRequest.onsuccess = () => {
          result[key] = getRequest.result
          if (i === keys.length - 1) {
            // A last request has been completed
            resolve(result)
          }
        }
      }
    })
  }

  /**
   * Retrieves all records that exist in the store. If the store is empty returns an empty array.
   *
   * @returns {Promise<object[]>|Promise<Error>} A promise that is resolved with an array of records if records
   *          exist in a store or with an empty array if store is empty.
   *          A promise rejection is returned if operation failed.
   */
  getAllEntries () {
    return new Promise((resolve, reject) => {
      this._assertDb()
      const transaction = this._db.transaction(this._configuration.name, IndexedDbStore.accessModes.READ)
      transaction.onerror = (error) => { reject(error) }
      const store = transaction.objectStore(this._configuration.name)
      const getRequest = store.getAll()
      getRequest.onsuccess = () => {
        const records = getRequest.result
        resolve(records)
      }
    })
  }

  /**
   * Inserts new records into a store.
   *
   * @param {object|object[]} records - An array of records to insert.
   * @returns {Promise<undefined>|Promise<Error>} A promise that is resolved if records were inserted
   *          successfully and is rejected if insertion failed.
   */
  insert (records) {
    return new Promise((resolve, reject) => {
      if (!records) { resolve() } // Do nothing
      this._assertDb()
      if (!Array.isArray(records)) { records = [records] }
      let transaction = this._db.transaction(this._configuration.name, IndexedDbStore.accessModes.READ_WRITE) // eslint-disable-line prefer-const
      transaction.oncomplete = () => resolve()
      transaction.onerror = (error) => reject(error)
      const store = transaction.objectStore(this._configuration.name)
      records.forEach(record => store.put(record))
    })
  }

  /**
   * Updates records that already exist in a store.
   *
   * @param {[*, object]|[[*, object]]} keyValRecordsArr - A single item or an array of items
   *        to insert. Each item is an array with key as a first member and a record to insert as a second one.
   * @returns {Promise<undefined>|Promise<Error>} A promise that is resolved if records were updated
   *          successfully and is rejected if operation failed.
   */
  update (keyValRecordsArr) {
    return new Promise((resolve, reject) => {
      if (!keyValRecordsArr) resolve() // Do nothing
      if (!Array.isArray(keyValRecordsArr)) reject(new Error('Records format must be [key,val] or [[key,val]]'))
      if (!Array.isArray(keyValRecordsArr[0])) { keyValRecordsArr = [keyValRecordsArr] }
      this._assertDb()
      const transaction = this._db.transaction(this._configuration.name, IndexedDbStore.accessModes.READ_WRITE)
      transaction.oncomplete = () => resolve()
      transaction.onerror = (error) => reject(error)
      const store = transaction.objectStore(this._configuration.name)
      keyValRecordsArr.forEach(record => store.put(record[1], record[0]))
    })
  }

  /**
   * Returns a total number of records in a store.
   *
   * @returns {Promise<number>|Promise<Error>} A promise that is resolved with number of records
   *          in a store and is rejected if operation failed.
   */
  count () {
    return new Promise((resolve) => {
      this._assertDb()
      const transaction = this._db.transaction(this._configuration.name, IndexedDbStore.accessModes.READ)
      const store = transaction.objectStore(this._configuration.name)
      const countRequest = store.count()
      countRequest.onsuccess = () => { resolve(countRequest.result) }
    })
  }
}

IndexedDbStore.errorMsgs = {
  NO_DB: 'Store is not associated with a DB',
  NO_STORE_NAME: 'A store name is missing from a configuration',
  NO_PRIMARY_INDEX: 'A primaryIndex tree is missing from a configuration',
  NO_KEY_PATH: 'A keyPath prop of a primaryIndex tree is missing from a configuration',
  NO_KEYS_PROVIDED: 'No keys are provided',
  MISSING_SECONDARY_INDEX: 'Specified secondary index does not exist'
}
