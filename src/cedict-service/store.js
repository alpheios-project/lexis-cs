export default class Store {
  constructor (schema) {
    Store.checkSchemaValidity(schema)
    this._schema = schema
    // DB object is not available when store object is created. It must be added later.
    this._db = null
  }

  /**
   * Checks if the schema supplied has all the necessary information in it.
   * If schema is not valid it will throw an error indicating which check failed.
   *
   * @param {object} schema - A JSON like schema object.
   */
  static checkSchemaValidity (schema) {
    if (!schema.name) throw new Error('A store name is missing from a schema')
    if (!schema.primaryIndex) throw new Error('A primaryIndex tree is missing from a schema')
  }

  associateWith (db) {
    this._db = db
    return this
  }

  /**
   * This method can be run only from `onupgradeneeded` callback
   */
  create () {
    return new Promise((resolve, reject) => {
      const options = this._schema.primaryIndex.keyPath ? { keyPath: this._schema.primaryIndex.keyPath } : undefined
      console.info(`${this._schema.name} store create`, options)
      const store = this._db.createObjectStore(this._schema.name, options)
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

  clear () {
    let transaction = this._db.transaction(this._schema.name, Store.accessModes.READ_WRITE) // eslint-disable-line prefer-const

    // create an object store on the transaction
    let objectStore = transaction.objectStore(this._schema.name) // eslint-disable-line prefer-const

    // Make a request to clear all the data out of the object store
    let objectStoreRequest = objectStore.clear() // eslint-disable-line prefer-const

    objectStoreRequest.onsuccess = (event) => {
      // report the success of our request
      console(`${this._schema.name}: clear request success`, event)
    }

    // report on the success of the transaction completing, when everything is done
    transaction.oncomplete = (event) => {
      console(`${this._schema.name}: clear transaction has been completed`, event)
    }

    transaction.onerror = (event) => {
      console(`${this._schema.name}: clear transaction error`, event)
    }
  }

  destroy () {
    try {
      this._db.deleteObjectStore(this._schema.name)
    } catch (error) {
      console.error(error)
    }
  }

  // All records for a specific key
  get (key, options) {
    return this.getEntries([key], options).then((result) => result[key])
  }

  // Return all records for specific keys
  getEntries (keys, { index = '' } = {}) {
    return new Promise((resolve, reject) => {
      if (!this._db) reject(new Error('Database object is missing'))
      if (!keys) keys = reject(new Error('No keys provided'))
      if (!Array.isArray(keys)) keys = [keys]
      const transaction = this._db.transaction(this._schema.name, Store.accessModes.READ)
      const store = transaction.objectStore(this._schema.name)
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

  getAllEntries () {
    return new Promise((resolve, reject) => {
      if (!this._db) reject(new Error('Database object is missing'))
      const transaction = this._db.transaction(this._schema.name, Store.accessModes.READ)
      const store = transaction.objectStore(this._schema.name)
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
