/**
 * @module CedictStorage
 */
import Storage from '@lexisCs/cedict-service/storage.js'
import IndexedDbStore from '@lexisCs/cedict-service/indexed-db-store.js'

/** A representation of a permanent data storage for CEDICT dictionary */
export default class CedictPermanentStorage extends Storage {
  constructor (configuration) {
    super(configuration)
    this._configuration = configuration
    this._db = null
    // A map to keep store objects

    /**
     * A map to keep store objects. CedictPermanentStorage has two: 'meta' and 'dictionary'.
     * The key is the store name and the value is a store object.
     *
     * @type {Map<string, IndexedDbStore>}
     */
    this._stores = new Map()
    // A key that provides access to the metadata object in the `meta` store.
    this.metaKey = 1
    Object.values(this._configuration.stores)
      .forEach(storeConfig => { this._stores.set(storeConfig.name, new IndexedDbStore(storeConfig)) })
  }

  /**
   * Called internally by a super class to check if the configuration supplied has all the necessary information in it.
   * If configuration is not valid it will throw an error indicating which check failed.
   *
   * @param {object} configuration - A JSON like configuration object.
   * @private
   */
  static _checkConfiguration (configuration) {
    if (!configuration.name) throw new Error(CedictPermanentStorage.errorMsgs.NO_STORAGE_NAME)
    if (!configuration.version) throw new Error(CedictPermanentStorage.errorMsgs.NO_STORAGE_VERSION)
    if (!configuration.stores) throw new Error(CedictPermanentStorage.errorMsgs.NO_STORES)
  }

  /**
   * Asserts that a database connection is opened.
   *
   * @private
   */
  _assertConnection () {
    if (!this._db) throw new Error(CedictPermanentStorage.errorMsgs.CLOSED_CONNECTION)
  }

  /**
   * Returns a store object. It will throw an error if store does not exist
   * of if a connection to the database is closed.
   *
   * @param {string} storeName - A name of a store to get.
   * @returns {IndexedDbStore} An instance of a store object.
   */
  getStore (storeName) {
    if (!this._stores.has(storeName)) throw new Error(CedictPermanentStorage.errorMsgs.MISSING_STORE)
    this._assertConnection()
    return this._stores.get(storeName)
  }

  /**
   * Returns information to verify storage integrity. Integrity data is specific for each particular
   * storage type.
   *
   * @returns {Promise<{metadata: {object}, recordsInMeta: {number}, recordsInDictionary: {number}}>|Promise<Error>}
   *          Returns a promise that is resolved an object with storage integrity data or is rejected
   *          if storage integrity is broken. Integrity data object contains the following information:
   *          a CEDICT metadata object that is contained in the `meta` store, number of records
   *          in `meta` and `dictionary` _stores.
   */
  getIntegrityData () {
    this._assertConnection()
    let integrityRequests
    try {
      integrityRequests = [this._stores.get('meta'), this._stores.get('dictionary')].map(store => store.count()) // eslint-disable-line prefer-const
      integrityRequests.push(this._stores.get('meta').get(this.metaKey))
    } catch (error) {
      return Promise.reject(error)
    }
    return Promise.all(integrityRequests).then(([recordsInMeta, recordsInDictionary, metadata]) => {
      if (!metadata || metadata.length === 0) throw new Error(CedictPermanentStorage.errorMsgs.NO_META)
      return { recordsInMeta, recordsInDictionary, metadata: metadata[0] }
    })
  }

  /**
   * This is a primary method of establishing connection to the storage.
   * If storage and _stores it contains do not exist, connect() will create them.
   *
   * @returns {Promise<undefined>|Promise<Error>} Returns a promise that is resolved if connection is
   *          established successfully or is rejected if connection fails.
   */
  connect () {
    return new Promise((resolve, reject) => {
      // If database does not exist, openRequest will create it and will trigger an onupgradeneeded followed by onsuccess
      const openRequest = indexedDB.open(this._configuration.name, this._configuration.version) // eslint-disable-line prefer-const
      openRequest.onupgradeneeded = this._create.bind(this, openRequest)

      openRequest.onsuccess = () => {
        this._db = openRequest.result
        this._stores.forEach(store => store.associateWith(this._db))
        resolve()
      }

      openRequest.onerror = (error) => { reject(error) }
    })
  }

  /**
   * Disconnects from the storage.
   *
   * @returns {Promise<undefined>} Always returns a resolved promise.
   */
  disconnect () {
    if (this._db) {
      this._stores.forEach(store => store.dissociate())
      this._db.close()
      this._db = null
    }
    return Promise.resolve()
  }

  /**
   * Clears all stores in a storage.
   *
   * @returns {Promise<any>|Promise<Error>} A promise that is resolved when all stores are cleared
   *          or is rejected if clearing at least one of the stores failed.
   */
  clear () {
    this._assertConnection()
    return Promise.all(Array.from(this._stores.values()).map(store => store.clear()))
  }

  /**
   * Called to create a storage when one does not exist or is of incorrect version.
   * This method cannot be called directly, only as a result of an onupgradeneeded event
   * triggered by the open DB request. Use 'connect()` to establish connection ot a database,
   * and it will invoke `_create()` if necessary.
   *
   * @param {IDBOpenDBRequest} openRequest - An open request that caused an onupgradeneeded event.
   * @param {Function} reject - A reject function for promise declared in `connect()`.
   * @returns {Promise} A promise that is resolved if storage is created successfully or
   *                    is rejected otherwise.
   */
  _create (openRequest, reject) {
    this._db = openRequest.result
    const storeCreateRequests = Array.from(this._stores.values()).map(store => store.associateWith(this._db).create())
    return Promise.all(storeCreateRequests)
  }

  /**
   * Destroys a storage and all the _stores it contains.
   *
   * @returns {Promise<undefined>|Promise<Error>} Returns a promise that is resolved if storage
   *          and all _stores were destroyed successfully or is rejected if operations fails.
   */
  _destroy () {
    return new Promise((resolve, reject) => {
      this.disconnect().then(() => {
        const deleteRequest = indexedDB.deleteDatabase(this._configuration.name)
        deleteRequest.onsuccess = () => { resolve() }
        deleteRequest.onerror = () => { reject(new Error(CedictPermanentStorage.errorMsgs.DESTRUCTION_ERROR)) }
      })
    })
  }
}

CedictPermanentStorage.errorMsgs = {
  NO_STORAGE_NAME: 'Storage name is missing from a configuration',
  NO_STORAGE_VERSION: 'Storage version is missing from a configuration',
  NO_STORES: 'No stores are defined in a configuration',
  NO_META: 'Metadata store has no records',
  DESTRUCTION_ERROR: 'Unable to destroy a storage',
  MISSING_STORE: 'The store requested does not exist',
  CLOSED_CONNECTION: 'Connection to the store is closed'
}
