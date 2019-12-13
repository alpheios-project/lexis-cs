/**
 * @module Storage
 */

/** A base class for data storage. Storage is a container of several stores (e.g. a database with several tables) */
export default class Storage {
  constructor (configuration) {
    this.constructor._checkConfiguration(configuration)
    this._configuration = configuration
  }

  /**
   * An internal method to check if the configuration supplied has all the necessary information in it.
   * If configuration is not valid it will throw an error indicating which check failed.
   *
   * @param {object} configuration - A JSON like configuration object.
   * @private
   */
  static _checkConfiguration (configuration) {
    if (!configuration.name) throw new Error(Storage.errMsgs.CONF_NO_NAME)
    if (!configuration.version) throw new Error(Storage.errMsgs.CONF_NO_VER)
  }

  /**
   * Create a storage and all the stores it contains.
   *
   * @returns {Promise<undefined>|Promise<Error>} Returns a promise that is resolved if storage
   *          and all stores were created successfully or is rejected if operations fails.
   */
  create () {
    return new Promise((resolve) => {
      resolve()
    })
  }

  /**
   * Destroys a storage and all the stores it contains.
   *
   * @returns {Promise<undefined>|Promise<Error>} Returns a promise that is resolved if storage
   *          and all stores were destroyed successfully or is rejected if operations fails.
   */
  destroy () {
    return new Promise((resolve) => {
      resolve()
    })
  }

  /**
   * Establishes a connection to the storage. It, if necessary, initializes a storage and stores it contains.
   *
   * @returns {Promise<undefined>|Promise<Error>} Returns a promise that is resolved if connection is
   *          established successfully or is rejected if connection fails.
   */
  connect () {
    return new Promise((resolve) => {
      resolve()
    })
  }

  /**
   * Disconnects from the storage.
   *
   * @returns {Promise<undefined>|Promise<Error>} Returns a promise that is resolved if connection is
   *          closed successfully or is rejected if operations fails.
   */
  disconnect () {
    return new Promise((resolve) => {
      resolve()
    })
  }

  /**
   * Returns information to verify storage integrity. A set of integrity data is specific for each particular
   * storage type so each storage implementation must define this function on its own.
   *
   * @returns {Promise<{object}>|Promise<Error>}
   *          Returns a promise that is resolved with an object with storage integrity information or is rejected
   *          if storage integrity is broken.
   */
  getIntegrityData () {
    return new Promise((resolve) => {
      resolve({})
    })
  }
}

Storage.errMsgs = {
  CONF_NO_NAME: 'Storage name is missing from a configuration',
  CONF_NO_VER: 'Storage version is missing from a configuration'
}
