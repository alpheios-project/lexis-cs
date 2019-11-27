import Store from '@lexisCs/cedict-service/store.js'

export default class CedictStorage {
  constructor (schema) {
    console.info(schema)
    CedictStorage.checkSchemaValidity(schema)
    this._schema = schema
    this._db = null
    this.stores = {}
    Object.values(this._schema.stores).forEach(schema => { this.stores[schema.name] = new Store(schema) })
    console.info('CedictStorage has been created', this._schema, this.stores)
  }

  /**
   * Checks if the schema supplied has all the necessary information in it.
   * If schema is not valid it will throw an error indicating which check failed.
   *
   * @param {object} schema - A JSON like schema object.
   */
  static checkSchemaValidity (schema) {
    if (!schema.name) throw new Error('Storage name is missing from a schema')
    if (!schema.version) throw new Error('Storage version is missing from a schema')
    if (!schema.stores) throw new Error('No stores are defined from a schema')
  }

  connect () {
    console.info('connect has been called')
    return new Promise((resolve, reject) => {
      // If database does not exist, openRequest will create it and will trigger an onupgradeneeded followed by onsuccess
      const openRequest = indexedDB.open(this._schema.name, this._schema.version) // eslint-disable-line prefer-const
      openRequest.onupgradeneeded = this._create.bind(this, openRequest)

      openRequest.onsuccess = () => {
        console.info('DB open on success')
        this._db = openRequest.result
        Object.values(this.stores).forEach((store) => store.associateWith(this._db))
        resolve()
      }

      openRequest.onerror = (error) => reject(error)
    })
  }

  disconnect () {
    if (this._db) {
      this._db.close()
    }
  }

  /**
   * Called when database does not exist or is of incorrect version.
   * This method cannot be called directly, only as a result of an onupgradeneeded event
   * triggered by the open DB request.
   *
   * @param {IDBOpenDBRequest} openRequest - An open request that caused an onupgradeneeded event.
   * @param {Function} reject - A reject function for promise declared in `connect()`.
   */
  _create (openRequest, reject) {
    console.info('DB open on upgrade needed (create)', openRequest)
    this._db = openRequest.result
    const storeCreateRequests = Object.values(this.stores).map(store => { store.create(this._db) })
    return Promise.all(storeCreateRequests)
  }

  destroy () {
    return new Promise((resolve, reject) => {
      this.disconnect()
      const deleteRequest = indexedDB.deleteDatabase(this._schema.name)
      deleteRequest.onsuccess = () => { console.info('database has been destroyed'); resolve() }
      deleteRequest.onerror = () => { reject(new Error('Storage cannot be destroyed')) }
    })
  }
}
