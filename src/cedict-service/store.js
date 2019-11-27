export default class Store {
  constructor (schema) {
    Store.checkSchemaValidity(schema)
    this._schema = schema
    // DB info is not available when store object is created. It must be added later.
    this._db = null
    console.info(`Constructor of ${this._schema.name} store`, schema)
  }

  /**
   * Checks if the schema supplied has all the necessary information in it.
   * If schema is not valid it will throw an error indicating which check failed.
   *
   * @param {object} schema - A JSON like schema object.
   */
  static checkSchemaValidity (schema) {
    if (!schema.name) throw new Error('Store name is missing from a schema')
  }

  get storeName () {
    return this._schema.name
  }

  associateWith (db) {
    console.info(`${this.storeName}: associate with `, db)
    this._db = db
    return this
  }

  /**
   * This method can be run only from `onupgradeneeded` callback
   *
   */
  create (db) {
    return new Promise((resolve, reject) => {
      this._db = db
      const options = this._schema.keyPath ? { keyPath: this._schema.keyPath } : undefined
      console.info(`${this.storeName} store create`, options)
      const store = this._db.createObjectStore(this.storeName, options)
      if (this._schema.indexes) {
        Object.values(this._schema.indexes).forEach(idx => {
          console.info('Creating an index for', idx)
          try {
            store.createIndex(idx.name, idx.keyPath, { unique: idx.unique })
          } catch (error) {
            reject(error)
          }
        })
      }
    })
  }

  destroy () {
    try {
      this._db.deleteObjectStore(this.storeName)
    } catch (error) {
      console.error(error)
    }
  }

  clear () {
    let transaction = this._db.transaction(this.storeName, Store.accessModes.READ_WRITE) // eslint-disable-line prefer-const

    // report on the success of the transaction completing, when everything is done
    transaction.oncomplete = (event) => {
      console(`${this.storeName}: clear transaction has been completed`, event)
    }

    transaction.onerror = (event) => {
      console(`${this.storeName}: clear transaction error`, event)
    }

    // create an object store on the transaction
    let objectStore = transaction.objectStore(this.storeName) // eslint-disable-line prefer-const

    // Make a request to clear all the data out of the object store
    let objectStoreRequest = objectStore.clear() // eslint-disable-line prefer-const

    objectStoreRequest.onsuccess = (event) => {
      // report the success of our request
      console(`${this.storeName}: clear request success`, event)
    }
  }

  get (key) {
    return new Promise((resolve, reject) => {
      if (!key) { resolve() } // Do nothing
      if (!this._db) reject(new Error('Database object is missing'))
      const transaction = this._db.transaction(this._schema.name, Store.accessModes.READ)
      const store = transaction.objectStore(this._schema.name)
      const getRequest = store.get(key)
      getRequest.onsuccess = () => {
        const records = getRequest.result
        console.info('Records returned are:', records)
        resolve(records)
      }
      transaction.oncomplete = () => console.info('get transaction is complete')
      transaction.onerror = (error) => { console.info('get transaction error'); reject(error) }
    })
  }

  insert (records) {
    return new Promise((resolve, reject) => {
      if (!records) { resolve() } // Do nothing
      if (!Array.isArray(records)) { records = [records] }
      if (!this._db) reject(new Error('Database object is missing'))
      const transaction = this._db.transaction(this._schema.name, Store.accessModes.READ_WRITE)
      const store = transaction.objectStore(this._schema.name)
      records.forEach(record => store.put(record))
      transaction.oncomplete = () => resolve()
      transaction.onerror = (error) => reject(error)
    })
  }

  update (keyValRecordsArr) {
    return new Promise((resolve, reject) => {
      if (!keyValRecordsArr) resolve() // Do nothing
      if (!Array.isArray(keyValRecordsArr)) reject(new Error('Record format must be [key,val] or [[key,val]]'))
      if (!Array.isArray(keyValRecordsArr[0])) { keyValRecordsArr = [keyValRecordsArr] }
      if (!this._db) reject(new Error('Database object is missing'))
      const transaction = this._db.transaction(this._schema.name, Store.accessModes.READ_WRITE)
      const store = transaction.objectStore(this._schema.name)
      keyValRecordsArr.forEach(record => store.put(record[1], record[0]))
      transaction.oncomplete = () => resolve()
      transaction.onerror = (error) => reject(error)
    })
  }

  count () {
    return new Promise((resolve) => {
      if (!this._db) throw new Error('Database object is missing')
      const transaction = this._db.transaction(this._schema.name, Store.accessModes.READ)
      const store = transaction.objectStore(this._schema.name)
      const countRequest = store.count()
      countRequest.onsuccess = () => { resolve(countRequest.result) }
    })
  }
}

Store.accessModes = {
  READ: 'readonly',
  READ_WRITE: 'readwrite'
}
