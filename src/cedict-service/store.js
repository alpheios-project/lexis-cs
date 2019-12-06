/**
 * @module Store
 */

/**
 * A configuration object for Store must contain the following information:
 *
 * @typedef {object} StoreConfig
 * @property {string} name - A name of a store.
 */

/** A base class for data stores */
export default class Store {
  /**
   * @param {StoreConfig} configuration - An object with configuration parameters.
   */
  constructor (configuration) {
    this.constructor._checkConfiguration(configuration)
    this._configuration = configuration
  }

  /**
   * Called internally to check if the configuration supplied has all the information necessary in it.
   * If configuration is not valid it will throw an error indicating which check failed.
   *
   * @param {StoreConfig} configuration - An object with configuration parameters.
   * @private
   */
  static _checkConfiguration (configuration) {
    if (!configuration.name) throw new Error('A store name is missing from a configuration')
  }

  /**
   * Associates a store with a container where it exists: a remote storage, an IndexedDB, etc.
   *
   * @param {object} storeObject - A store object.
   * @returns {Store} A self-reference for chaining.
   */
  associateWith (storeObject) {
    return this
  }

  /**
   * Creates a store. Can be run from `onupgradeneeded` callback only.
   * Must be implemented in a subclass.
   *
   * @returns {Promise<undefined>|Promise<Error>} A promise that is resolved if store was created successfully
   *          and is rejected if creation failed.
   */
  create () {
    return new Promise((resolve) => {
      resolve()
    })
  }

  /**
   * Deletes all records from the store.
   * Must be implemented in a subclass.
   *
   * @returns {Promise<undefined>|Promise<Error>} A promise that is resolved if all records were removed successfully
   *          and is rejected if operation failed.
   */
  clear () {
    return new Promise((resolve) => {
      resolve()
    })
  }

  /**
   * Deletes a store from its container.
   * Must be implemented in a subclass.
   *
   * @returns {Promise<undefined>|Promise<Error>} A promise that is resolved if store was removed successfully
   *          and is rejected if operation failed.
   */
  destroy () {
    return new Promise((resolve) => {
      resolve()
    })
  }

  /**
   * Retrieves all records from the store for a single key. Options object is implementation specific.
   * Must be implemented in a subclass.
   *
   * @param {*} key - A key that specifies which records to retrieve.
   * @param {object} options - Additional configuration parameters.
   * @returns {Promise<object[]>|Promise<Error>} A promise that is resolved with an array of records if records
   *          exist in a store or with an empty array if not. A promise rejection is returned if operation failed.
   */
  get (key, options) {
    return new Promise((resolve) => {
      resolve()
    })
  }

  /**
   * Retrieves all records from the store for one or several keys. Options object is implementation specific.
   * Must be implemented in a subclass.
   *
   * @param {*|*[]} keys - A key or an array of keys that specifies which records to retrieve.
   * @param {object} [options={}] - Additional configuration parameters.
   * @returns {Promise<{key: object[]}>|Promise<Error>} A promise that is resolved with an object. If contains keys
   *          as its properties and values are arrays of records.
   *          A promise rejection is returned if operation failed.
   */
  getEntries (keys, { index = '' } = {}) {
    return new Promise((resolve) => {
      resolve()
    })
  }

  /**
   * Retrieves all records that exist in the store.
   * Must be implemented in a subclass.
   *
   * @returns {Promise<object[]>|Promise<Error>} A promise that is resolved with an array of records if records
   *          exist in a store or with an empty array if not. A promise rejection is returned if operation failed.
   */
  getAllEntries () {
    return new Promise((resolve) => {
      resolve()
    })
  }

  /**
   * Inserts new records into a store.
   * Must be implemented in a subclass.
   *
   * @param {object[]} records - An array of records to insert.
   * @returns {Promise<undefined>|Promise<Error>} A promise that is resolved if records were inserted
   *          successfully and is rejected if insertion failed.
   */
  insert (records) {
    return new Promise((resolve) => {
      resolve()
    })
  }

  /**
   * Updates records that already exist in a store.
   * Must be implemented in a subclass.
   *
   * @param {[any, object]|[[any, object]]} keyValRecordsArr - A single item or an array of items
   *        to insert. Each item is an array with key as a first member and a record to insert as a second one.
   * @returns {Promise<undefined>|Promise<Error>} A promise that is resolved if records were updated
   *          successfully and is rejected if operation failed.
   */
  update (keyValRecordsArr) {
    return new Promise((resolve) => {
      resolve()
    })
  }

  /**
   * Returns a total number of records in a store.
   * Must be implemented in a subclass.
   *
   * @returns {Promise<number>|Promise<Error>} A promise that is resolved with number of records
   *          in a store and is rejected if operation failed.
   */
  count () {
    return new Promise((resolve) => {
      resolve()
    })
  }
}

Store.accessModes = {
  READ: 'readonly',
  READ_WRITE: 'readwrite'
}
