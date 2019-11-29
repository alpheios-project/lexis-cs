/**
 * @module Storage
 */

/** A base class for data storage. Storage is a container of several stores (e.g. a database with several tables) */
export default class Storage {
  constructor (configuration) {
    this.constructor.checkConfiguration(configuration)
    this._configuration = configuration
  }

  /**
   * Checks if the configuration supplied has all the necessary information in it.
   * If configuration is not valid it will throw an error indicating which check failed.
   *
   * @param {object} configuration - A JSON like configuration object.
   */
  static checkConfiguration (configuration) {
    if (!configuration.name) throw new Error('Storage name is missing from a configuration')
    if (!configuration.version) throw new Error('Storage version is missing from a configuration')
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
}
