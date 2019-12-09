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
    this.stores = {}
    // A key that provides access to the metadata object in the `meta` store.
    this.metaKey = 1
    Object.values(this._configuration.stores).forEach(configuration => { this.stores[configuration.name] = new IndexedDbStore(configuration) })
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
   * Returns information to verify storage integrity. Integrity data is specific for each particular
   * storage type.
   *
   * @returns {Promise<{metadata: {object}, recordsInMeta: {number}, recordsInDictionary: {number}}>|Promise<Error>}
   *          Returns a promise that is resolved an object with storage integrity data or is rejected
   *          if storage integrity is broken. Integrity data object contains the following information:
   *          a CEDICT metadata object that is contained in the `meta` store, number of records
   *          in `meta` and `dictionary` stores.
   */
  getIntergrityData () {
    let integrityRequests
    try {
      integrityRequests = [this.stores.meta, this.stores.dictionary].map(store => store.count()) // eslint-disable-line prefer-const
      integrityRequests.push(this.stores.meta.get(this.metaKey))
    } catch (error) {
      return Promise.reject(error)
    }
    return Promise.all(integrityRequests).then(([recordsInMeta, recordsInDictionary, metadata]) => {
      if (!metadata || metadata.length === 0) throw new Error('Metadata store has no records')
      if (metadata.length > 1) throw new Error('Metadata store has more than one record')
      return { recordsInMeta, recordsInDictionary, metadata: metadata[0] }
    })
  }

  /**
   * Called to create a storage when one does not exist or is of incorrect version.
   * This method cannot be called directly, only as a result of an onupgradeneeded event
   * triggered by the open DB request.
   *
   * @param {IDBOpenDBRequest} openRequest - An open request that caused an onupgradeneeded event.
   * @param {Function} reject - A reject function for promise declared in `connect()`.
   * @returns {Promise} A promise that is resolved if storage is created successfully or
   *                    is rejected otherwise.
   */
  create (openRequest, reject) {
    this._db = openRequest.result
    const storeCreateRequests = Object.values(this.stores).map(store => { store.associateWith(this._db).create() })
    return Promise.all(storeCreateRequests)
  }

  /**
   * Destroys a storage and all the stores it contains.
   *
   * @returns {Promise<undefined>|Promise<Error>} Returns a promise that is resolved if storage
   *          and all stores were destroyed successfully or is rejected if operations fails.
   */
  destroy () {
    return new Promise((resolve, reject) => {
      this.disconnect().then(() => {
        const deleteRequest = indexedDB.deleteDatabase(this._configuration.name)
        deleteRequest.onsuccess = () => { resolve() }
        deleteRequest.onerror = () => { reject(new Error('Storage cannot be destroyed')) }
      })
    })
  }

  /**
   * Establishes a connection to the storage. It, if necessary, initializes a storage and stores it contains.
   *
   * @returns {Promise<undefined>|Promise<Error>} Returns a promise that is resolved if connection is
   *          established successfully or is rejected if connection fails.
   */
  connect () {
    return new Promise((resolve, reject) => {
      // If database does not exist, openRequest will create it and will trigger an onupgradeneeded followed by onsuccess
      const openRequest = indexedDB.open(this._configuration.name, this._configuration.version) // eslint-disable-line prefer-const
      openRequest.onupgradeneeded = this.create.bind(this, openRequest)

      openRequest.onsuccess = () => {
        this._db = openRequest.result
        Object.values(this.stores).forEach((store) => store.associateWith(this._db))
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
      this._db.close()
    }
    return Promise.resolve()
  }
}

CedictPermanentStorage.errorMsgs = {
  NO_STORAGE_NAME: 'Storage name is missing from a configuration',
  NO_STORAGE_VERSION: 'Storage version is missing from a configuration',
  NO_STORES: 'No stores are defined in a configuration'
}
