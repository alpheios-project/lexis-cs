/**
 * @module IndexedDbStore
 */
import Store from '@lexisCs/cedict-service/store.js'

/** A an IndexedDB store object */
export default class IndexedDbStore extends Store {
  constructor (configuration) {
    super(configuration)
    this._configuration = configuration
    // DB object is not available when store object is created. It must be added later.
    this._db = null
  }

  /**
   * Checks if the configuration supplied has all the necessary information in it.
   * If configuration is not valid it will throw an error indicating which check failed.
   *
   * @param {object} configuration - A JSON like configuration object.
   */
  static checkConfiguration (configuration) {
    if (!configuration.name) throw new Error('A store name is missing from a configuration')
    if (!configuration.primaryIndex) throw new Error('A primaryIndex tree is missing from a configuration')
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
   * Creates a store. Can be run from `onupgradeneeded` callback only.
   *
   * @returns {Promise<undefined>|Promise<Error>} A promise that is resolved if store was created successfully
   *          and is rejected if creation failed.
   */
  create () {
    return new Promise((resolve, reject) => {
      const options = this._configuration.primaryIndex.keyPath ? { keyPath: this._configuration.primaryIndex.keyPath } : undefined
      console.info(`${this._configuration.name} store create`, options)
      const store = this._db.createObjectStore(this._configuration.name, options)
      if (this._configuration.indexes) {
        Object.values(this._configuration.indexes).forEach(idx => {
          console.info('Creating an index for', idx)
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
      let transaction = this._db.transaction(this._configuration.name, IndexedDbStore.accessModes.READ_WRITE) // eslint-disable-line prefer-const
      let objectStore = transaction.objectStore(this._configuration.name) // eslint-disable-line prefer-const
      let clearRequest = objectStore.clear() // eslint-disable-line prefer-const
      clearRequest.onsuccess = () => resolve()
      transaction.onerror = (event) => reject(event)
    })
  }

  /**
   * Deletes a store from an IndexedDB database. Can be run from `onupgradeneeded` callback only.
   *
   * @returns {Promise<undefined>|Promise<Error>} A promise that is resolved if store was removed successfully
   *          and is rejected if operation failed.
   */
  destroy () {
    return new Promise((resolve) => {
      this._db.deleteObjectStore(this._configuration.name)
      resolve()
    })
  }

  /**
   * Retrieves all records from the store for a single key.
   *
   * @param {any} key - A key that specifies which records to retrieve.
   * @param {object} options - Additional configuration parameters:
   * @param {string} options.index - If the key provided as a first argument is for a secondary index
   *        then this field must contain a name of a secondary index to use. If this field is not specified,
   *        then records will be retrieved using a primary index.
   * @returns {Promise<object[]>|Promise<Error>} A promise that is resolved with an array of records if records
   *          exist in a store or with an empty array if not. A promise rejection is returned if operation failed.
   */
  get (key, options) {
    return this.getEntries([key], options).then((result) => result[key])
  }

  /**
   * Retrieves all records from the store for one or several keys. Options object is implementation specific.
   *
   * @param {any|any[]} keys - A key or an array of keys that specifies which records to retrieve.
   * @param {object} options - Additional configuration parameters:
   * @param {string} options.index - If the key provided as a first argument is for a secondary index
   *        then this field must contain a name of a secondary index to use. If this field is not specified,
   *        then records will be retrieved using a primary index.
   * @returns {Promise<{key: object[] }>|Promise<Error>} A promise that is resolved with an object. If contains keys
   *          as its properties and values are arrays of records.
   *          A promise rejection is returned if operation failed.
   */
  getEntries (keys, { index = '' } = {}) {
    return new Promise((resolve, reject) => {
      if (!this._db) reject(new Error('Database object is missing'))
      if (!keys) keys = reject(new Error('No keys provided'))
      if (!Array.isArray(keys)) keys = [keys]
      const transaction = this._db.transaction(this._configuration.name, IndexedDbStore.accessModes.READ)
      const store = transaction.objectStore(this._configuration.name)
      // Create an object with keys as its props
      let result = keys.reduce((accumulator, key) => { accumulator[key] = []; return accumulator }, {}) // eslint-disable-line prefer-const
      console.info('getEntries result is:', result)
      /*
      The order of request execution is guaranteed in IndexedDB.
      This means that when the last request is completed all previous requests are done too.
       */
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i]
        let getRequest
        if (index) {
          // Use index to retrieve a record
          console.info(`Retrieving using a ${index} index`)
          const dbIndex = store.index(index)
          getRequest = dbIndex.getAll(IDBKeyRange.only(key))
        } else {
          console.info('Retrieving without index')
          getRequest = store.getAll(IDBKeyRange.only(key))
        }
        getRequest.onsuccess = () => {
          const records = getRequest.result
          console.info(`(${i}) Records returned for ${key} key are:`, records)
          result[key] = getRequest.result
          if (i === keys.length - 1) {
            // A last request has been completed
            resolve(result)
          }
        }
      }
      // Transaction is completed later than `getRequest.onsuccess` is triggered
      transaction.oncomplete = () => console.info('getAll transaction is complete')
      transaction.onerror = (error) => { console.info('getAll transaction error'); reject(error) }
    })
  }

  /**
   * Retrieves all records that exist in the store.
   *
   * @returns {Promise<object[]>|Promise<Error>} A promise that is resolved with an array of records if records
   *          exist in a store or with an empty array if store is empty.
   *          A promise rejection is returned if operation failed.
   */
  getAllEntries () {
    return new Promise((resolve, reject) => {
      if (!this._db) reject(new Error('Database object is missing'))
      const transaction = this._db.transaction(this._configuration.name, IndexedDbStore.accessModes.READ)
      const store = transaction.objectStore(this._configuration.name)
      const getRequest = store.getAll()
      getRequest.onsuccess = () => {
        const records = getRequest.result
        console.info('Records returned are:', records)
        resolve(records)
      }
      // Transaction is completer later than `getRequest.onsuccess` is triggered
      transaction.oncomplete = () => console.info('getAll transaction is complete')
      transaction.onerror = (error) => { console.info('getAll transaction error'); reject(error) }
    })
  }

  /**
   * Inserts new records into a store.
   *
   * @param {object[]} records - An array of records to insert.
   * @returns {Promise<undefined>|Promise<Error>} A promise that is resolved if records were inserted
   *          successfully and is rejected if insertion failed.
   */
  insert (records) {
    return new Promise((resolve, reject) => {
      if (!records) { resolve() } // Do nothing
      if (!this._db) reject(new Error('Database object is missing'))
      if (!Array.isArray(records)) { records = [records] }
      let transaction = this._db.transaction(this._configuration.name, IndexedDbStore.accessModes.READ_WRITE) // eslint-disable-line prefer-const
      const store = transaction.objectStore(this._configuration.name)
      records.forEach(record => store.put(record))
      transaction.oncomplete = () => resolve()
      transaction.onerror = (error) => reject(error)
    })
  }

  /**
   * Updates records that already exist in a store.
   *
   * @param {[any, object]|[[any, object]]} keyValRecordsArr - A single item or an array of items
   *        to insert. Each item is an array with key as a first member and a record to insert as a second one.
   * @returns {Promise<undefined>|Promise<Error>} A promise that is resolved if records were updated
   *          successfully and is rejected if operation failed.
   */
  update (keyValRecordsArr) {
    return new Promise((resolve, reject) => {
      if (!keyValRecordsArr) resolve() // Do nothing
      if (!Array.isArray(keyValRecordsArr)) reject(new Error('Records format must be [key,val] or [[key,val]]'))
      if (!Array.isArray(keyValRecordsArr[0])) { keyValRecordsArr = [keyValRecordsArr] }
      if (!this._db) reject(new Error('Database object is missing'))
      const transaction = this._db.transaction(this._configuration.name, IndexedDbStore.accessModes.READ_WRITE)
      const store = transaction.objectStore(this._configuration.name)
      keyValRecordsArr.forEach(record => store.put(record[1], record[0]))
      transaction.oncomplete = () => resolve()
      transaction.onerror = (error) => reject(error)
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
      if (!this._db) throw new Error('Database object is missing')
      const transaction = this._db.transaction(this._configuration.name, IndexedDbStore.accessModes.READ)
      const store = transaction.objectStore(this._configuration.name)
      const countRequest = store.count()
      countRequest.onsuccess = () => { resolve(countRequest.result) }
    })
  }
}