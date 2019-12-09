/* eslint-env jest */
import IndexedDbStore from '@lexisCs/cedict-service/indexed-db-store.js'
require('fake-indexeddb/auto')

describe('IndexedDbStore class', () => {
  const indexedDbConfig = {
    name: 'testIndexedDb',
    version: 1
  }
  const storeConfiguration = {
    name: 'testStore',
    primaryIndex: {
      keyPath: 'index'
    },
    indexes: {
      secondary: {
        name: 'secondaryIndexName',
        keyPath: 'secondaryIndex',
        unique: true
      }
    }
  }

  const testRecordOne = {
    index: 998,
    secondaryIndex: 'f',
    value: 'Test value one'
  }

  const testRecordTwo = {
    index: 999,
    secondaryIndex: 'g',
    value: 'Test value two'
  }

  const testRecordOneUpdated = {
    index: 998,
    secondaryIndex: 'F',
    value: 'TEST VALUE ONE'
  }

  const testRecordTwoUpdated = {
    index: 999,
    secondaryIndex: 'G',
    value: 'TEST VALUE TWO'
  }

  /*
  A helper method to run operations on an IndexedDB mock.
   */
  const execute = (onOpen, onUpgrade) => {
    return new Promise((resolve, reject) => {
      // If database does not exist, openRequest will create it and will trigger an onupgradeneeded followed by onsuccess
      const openRequest = indexedDB.open(indexedDbConfig.name, indexedDbConfig.version) // eslint-disable-line prefer-const
      openRequest.onupgradeneeded = async () => {
        const db = openRequest.result
        try {
          if (onUpgrade) {
            await onUpgrade(db)
          }
        } catch (error) {
          // Tear down the database
          db.close()
          const deleteRequest = indexedDB.deleteDatabase(indexedDbConfig.name)
          deleteRequest.onerror = (error) => reject(error)
          deleteRequest.onsuccess = () => reject(error)
        }
      }

      openRequest.onsuccess = async () => {
        const db = openRequest.result
        let result
        try {
          result = await onOpen(db)
        } catch (error) {
          // Tear down the database
          db.close()
          const deleteRequest = indexedDB.deleteDatabase(indexedDbConfig.name)
          deleteRequest.onerror = (error) => reject(error)
          deleteRequest.onsuccess = () => reject(error)
        }

        // Tear down the database
        db.close()
        const deleteRequest = indexedDB.deleteDatabase(indexedDbConfig.name)
        deleteRequest.onerror = (error) => reject(error)
        deleteRequest.onsuccess = () => resolve(result)
      }
      openRequest.onerror = (error) => reject(error)
    })
  }

  beforeEach(() => {
    jest.resetModules()
  })

  it('constructor: creates an instance of an IndexedDbStore class', () => {
    const indexedDbStore = new IndexedDbStore(storeConfiguration)
    expect(indexedDbStore instanceof IndexedDbStore).toBeTruthy()
  })

  it('constructor: configuration has a name prop', () => {
    let incorrectConfig = Object.assign({}, storeConfiguration) // eslint-disable-line prefer-const
    delete incorrectConfig.name
    expect(() => new IndexedDbStore(incorrectConfig)).toThrowError(IndexedDbStore.errorMsgs.NO_STORE_NAME)
  })

  it('constructor: configuration has a primaryIndex prop', () => {
    let incorrectConfig = Object.assign({}, storeConfiguration) // eslint-disable-line prefer-const
    delete incorrectConfig.primaryIndex
    expect(() => new IndexedDbStore(incorrectConfig)).toThrowError(IndexedDbStore.errorMsgs.NO_PRIMARY_INDEX)
  })

  it('constructor: configuration has a keyPath prop', () => {
    // eslint-disable-next-line prefer-const
    let incorrectConfig = JSON.parse(JSON.stringify(storeConfiguration)) // To create a deep copy of a simple object
    delete incorrectConfig.primaryIndex.keyPath
    expect(() => new IndexedDbStore(incorrectConfig)).toThrowError(IndexedDbStore.errorMsgs.NO_KEY_PATH)
  })

  it('associateWith: returns a reference to an IndexedDbStore instance', () => {
    const indexedDbStore = new IndexedDbStore(storeConfiguration)
    expect(indexedDbStore.associateWith()).toBe(indexedDbStore)
  })

  it('create: creates a store', async () => {
    const indexedDbStore = new IndexedDbStore(storeConfiguration)
    const onOpen = async (db) => db.objectStoreNames
    const onUpgrade = (db) => indexedDbStore.associateWith(db).create()
    await expect(execute(onOpen, onUpgrade)).resolves.toMatchObject([storeConfiguration.name])
  })

  it('create: fails if not associated with a DB first', async () => {
    const indexedDbStore = new IndexedDbStore(storeConfiguration)
    const onOpen = async (db) => db.objectStoreNames
    const onUpgrade = () => indexedDbStore.create()
    await expect(execute(onOpen, onUpgrade)).rejects.toThrowError(IndexedDbStore.errorMsgs.NO_DB)
  })

  it('clear: deletes all records from a store', async () => {
    const indexedDbStore = new IndexedDbStore(storeConfiguration)
    const onOpen = async () => {
      await indexedDbStore.insert(testRecordOne)
      const before = await indexedDbStore.getAllEntries()
      await indexedDbStore.clear()
      const after = await indexedDbStore.getAllEntries()
      return { before, after }
    }
    const onUpgrade = async (db) => {
      return indexedDbStore.associateWith(db).create()
    }
    await expect(execute(onOpen, onUpgrade)).resolves.toMatchObject({
      before: [testRecordOne],
      after: []
    })
  })

  it('get: retrieves a record by a primary index', async () => {
    const indexedDbStore = new IndexedDbStore(storeConfiguration)
    const onOpen = async () => {
      await indexedDbStore.insert(testRecordOne)
      return indexedDbStore.get(testRecordOne.index)
    }
    const onUpgrade = async (db) => {
      return indexedDbStore.associateWith(db).create()
    }
    await expect(execute(onOpen, onUpgrade)).resolves.toMatchObject([testRecordOne])
  })

  it('get: retrieves a record by a secondary index', async () => {
    const indexedDbStore = new IndexedDbStore(storeConfiguration)
    const onOpen = async () => {
      await indexedDbStore.insert(testRecordOne)
      return indexedDbStore.get(
        testRecordOne[storeConfiguration.indexes.secondary.keyPath],
        { index: storeConfiguration.indexes.secondary.name }
      )
    }
    const onUpgrade = async (db) => {
      return indexedDbStore.associateWith(db).create()
    }
    await expect(execute(onOpen, onUpgrade)).resolves.toMatchObject([testRecordOne])
  })

  it('get: returns an empty array if a primary index key is not found', async () => {
    const indexedDbStore = new IndexedDbStore(storeConfiguration)
    const onOpen = async () => {
      await indexedDbStore.insert(testRecordOne)
      return indexedDbStore.get(0)
    }
    const onUpgrade = async (db) => {
      return indexedDbStore.associateWith(db).create()
    }
    await expect(execute(onOpen, onUpgrade)).resolves.toMatchObject([])
  })

  it('get: returns an empty array if a secondary index key is not found', async () => {
    const indexedDbStore = new IndexedDbStore(storeConfiguration)
    const onOpen = async () => {
      await indexedDbStore.insert(testRecordOne)
      return indexedDbStore.get(
        'a',
        { index: storeConfiguration.indexes.secondary.name }
      )
    }
    const onUpgrade = async (db) => {
      return indexedDbStore.associateWith(db).create()
    }
    await expect(execute(onOpen, onUpgrade)).resolves.toMatchObject([])
  })

  it('get: rejects if no key is provided', async () => {
    const indexedDbStore = new IndexedDbStore(storeConfiguration)
    const onOpen = async () => {
      await indexedDbStore.insert(testRecordOne)
      return indexedDbStore.get()
    }
    const onUpgrade = async (db) => {
      return indexedDbStore.associateWith(db).create()
    }
    await expect(execute(onOpen, onUpgrade)).rejects.toThrowError(IndexedDbStore.errorMsgs.NO_KEYS_PROVIDED)
  })

  it('get: rejects if a secondary index name is incorrect', async () => {
    const indexedDbStore = new IndexedDbStore(storeConfiguration)
    const onOpen = async () => {
      await indexedDbStore.insert(testRecordOne)
      return indexedDbStore.get(testRecordOne[storeConfiguration.indexes.secondary.keyPath], { index: 'incorrect' })
    }
    const onUpgrade = async (db) => {
      return indexedDbStore.associateWith(db).create()
    }
    await expect(execute(onOpen, onUpgrade)).rejects.toThrowError(IndexedDbStore.errorMsgs.MISSING_SECONDARY_INDEX)
  })

  it('getEntries: retrieves a single record by a primary index', async () => {
    const indexedDbStore = new IndexedDbStore(storeConfiguration)
    const onOpen = async () => {
      await indexedDbStore.insert(testRecordOne)
      return indexedDbStore.getEntries(testRecordOne.index)
    }
    const onUpgrade = async (db) => {
      return indexedDbStore.associateWith(db).create()
    }
    await expect(execute(onOpen, onUpgrade)).resolves.toMatchObject({ [testRecordOne.index]: [testRecordOne] })
  })

  it('getEntries: retrieves several records by a primary index', async () => {
    const indexedDbStore = new IndexedDbStore(storeConfiguration)
    const onOpen = async () => {
      await indexedDbStore.insert([testRecordOne, testRecordTwo])
      return indexedDbStore.getEntries([testRecordOne.index, testRecordTwo.index])
    }
    const onUpgrade = async (db) => {
      return indexedDbStore.associateWith(db).create()
    }
    await expect(execute(onOpen, onUpgrade)).resolves.toMatchObject({
      [testRecordOne.index]: [testRecordOne],
      [testRecordTwo.index]: [testRecordTwo]
    })
  })

  it('getEntries: retrieves a single record by a secondary index', async () => {
    const indexedDbStore = new IndexedDbStore(storeConfiguration)
    const keyPath = storeConfiguration.indexes.secondary.keyPath
    const onOpen = async () => {
      await indexedDbStore.insert(testRecordOne)
      return indexedDbStore.getEntries(
        testRecordOne[keyPath],
        { index: storeConfiguration.indexes.secondary.name }
      )
    }
    const onUpgrade = async (db) => {
      return indexedDbStore.associateWith(db).create()
    }
    await expect(execute(onOpen, onUpgrade)).resolves
      .toMatchObject({ [testRecordOne[keyPath]]: [testRecordOne] })
  })

  it('getEntries: retrieves several records by a secondary index', async () => {
    const indexedDbStore = new IndexedDbStore(storeConfiguration)
    const keyPath = storeConfiguration.indexes.secondary.keyPath
    const onOpen = async () => {
      await indexedDbStore.insert([testRecordOne, testRecordTwo])
      return indexedDbStore.getEntries(
        [testRecordOne[keyPath], testRecordTwo[keyPath]],
        { index: storeConfiguration.indexes.secondary.name }
      )
    }
    const onUpgrade = async (db) => {
      return indexedDbStore.associateWith(db).create()
    }
    await expect(execute(onOpen, onUpgrade)).resolves.toMatchObject({
      [testRecordOne[keyPath]]: [testRecordOne],
      [testRecordTwo[keyPath]]: [testRecordTwo]
    })
  })

  it('getEntries: returns an empty object if primary index key is not found', async () => {
    const indexedDbStore = new IndexedDbStore(storeConfiguration)
    const missingKey = 0
    const onOpen = async () => {
      await indexedDbStore.insert(testRecordOne)
      return indexedDbStore.getEntries(missingKey)
    }
    const onUpgrade = async (db) => {
      return indexedDbStore.associateWith(db).create()
    }
    await expect(execute(onOpen, onUpgrade)).resolves.toMatchObject({ [missingKey]: [] })
  })

  it('getEntries: returns an empty object if several primary index keys are not found', async () => {
    const indexedDbStore = new IndexedDbStore(storeConfiguration)
    const missingKeys = [0, '1']
    const onOpen = async () => {
      await indexedDbStore.insert(testRecordOne)
      return indexedDbStore.getEntries(missingKeys)
    }
    const onUpgrade = async (db) => {
      return indexedDbStore.associateWith(db).create()
    }
    await expect(execute(onOpen, onUpgrade)).resolves.toMatchObject({
      [missingKeys[0]]: [],
      [missingKeys[1]]: []
    })
  })

  it('getEntries: returns an empty object if secondary index key is not found', async () => {
    const indexedDbStore = new IndexedDbStore(storeConfiguration)
    const missingKey = 'a'
    const onOpen = async () => {
      await indexedDbStore.insert(testRecordOne)
      return indexedDbStore.getEntries(
        missingKey,
        { index: storeConfiguration.indexes.secondary.name }
      )
    }
    const onUpgrade = async (db) => {
      return indexedDbStore.associateWith(db).create()
    }
    await expect(execute(onOpen, onUpgrade)).resolves.toMatchObject({ [missingKey]: [] })
  })

  it('getEntries: returns an empty object if several secondary index keys are not found', async () => {
    const indexedDbStore = new IndexedDbStore(storeConfiguration)
    const missingKeys = ['a', 3]
    const onOpen = async () => {
      await indexedDbStore.insert(testRecordOne)
      return indexedDbStore.getEntries(
        missingKeys,
        { index: storeConfiguration.indexes.secondary.name }
      )
    }
    const onUpgrade = async (db) => {
      return indexedDbStore.associateWith(db).create()
    }
    await expect(execute(onOpen, onUpgrade)).resolves
      .toMatchObject({ [missingKeys[0]]: [], [missingKeys[1]]: [] })
  })

  it('getEntries: rejects if a key is not provided', async () => {
    const indexedDbStore = new IndexedDbStore(storeConfiguration)
    const onOpen = async () => {
      await indexedDbStore.insert(testRecordOne)
      return indexedDbStore.getEntries()
    }
    const onUpgrade = async (db) => {
      return indexedDbStore.associateWith(db).create()
    }
    await expect(execute(onOpen, onUpgrade)).rejects.toThrowError(IndexedDbStore.errorMsgs.NO_KEYS_PROVIDED)
  })

  it('getEntries: rejects if an array of keys is empty', async () => {
    const indexedDbStore = new IndexedDbStore(storeConfiguration)
    const onOpen = async () => {
      await indexedDbStore.insert(testRecordOne)
      return indexedDbStore.getEntries([])
    }
    const onUpgrade = async (db) => {
      return indexedDbStore.associateWith(db).create()
    }
    await expect(execute(onOpen, onUpgrade)).rejects.toThrowError(IndexedDbStore.errorMsgs.NO_KEYS_PROVIDED)
  })

  it('getEntries: rejects if a secondary key is not provided', async () => {
    const indexedDbStore = new IndexedDbStore(storeConfiguration)
    const incorrectKey = undefined
    const onOpen = async () => {
      await indexedDbStore.insert(testRecordOne)
      return indexedDbStore.getEntries(incorrectKey, { index: storeConfiguration.indexes.secondary.name })
    }
    const onUpgrade = async (db) => {
      return indexedDbStore.associateWith(db).create()
    }
    await expect(execute(onOpen, onUpgrade)).rejects.toThrowError(IndexedDbStore.errorMsgs.NO_KEYS_PROVIDED)
  })

  it('getEntries: rejects if an array of secondary keys is empty', async () => {
    const indexedDbStore = new IndexedDbStore(storeConfiguration)
    const onOpen = async () => {
      await indexedDbStore.insert(testRecordOne)
      return indexedDbStore.getEntries([], { index: storeConfiguration.indexes.secondary.name })
    }
    const onUpgrade = async (db) => {
      return indexedDbStore.associateWith(db).create()
    }
    await expect(execute(onOpen, onUpgrade)).rejects.toThrowError(IndexedDbStore.errorMsgs.NO_KEYS_PROVIDED)
  })

  it('getEntries: rejects if secondary index name is incorrect', async () => {
    const indexedDbStore = new IndexedDbStore(storeConfiguration)
    const onOpen = async () => {
      await indexedDbStore.insert(testRecordOne)
      return indexedDbStore.getEntries(testRecordOne[storeConfiguration.indexes.secondary.keyPath], { index: 'incorrect' })
    }
    const onUpgrade = async (db) => {
      return indexedDbStore.associateWith(db).create()
    }
    await expect(execute(onOpen, onUpgrade)).rejects.toThrowError(IndexedDbStore.errorMsgs.MISSING_SECONDARY_INDEX)
  })

  it('getAllEntries: returns all records', async () => {
    const indexedDbStore = new IndexedDbStore(storeConfiguration)
    const onOpen = async () => {
      await indexedDbStore.insert([testRecordOne, testRecordTwo])
      return indexedDbStore.getAllEntries()
    }
    const onUpgrade = async (db) => {
      return indexedDbStore.associateWith(db).create()
    }
    await expect(execute(onOpen, onUpgrade)).resolves.toMatchObject([testRecordOne, testRecordTwo])
  })

  it('getAllEntries: returns an empty array if there are no records', async () => {
    const indexedDbStore = new IndexedDbStore(storeConfiguration)
    const onOpen = async () => {
      return indexedDbStore.getAllEntries()
    }
    const onUpgrade = async (db) => {
      return indexedDbStore.associateWith(db).create()
    }
    await expect(execute(onOpen, onUpgrade)).resolves.toMatchObject([])
  })

  it('insert: adds one record to a database', async () => {
    const indexedDbStore = new IndexedDbStore(storeConfiguration)
    const onOpen = async () => {
      const before = await indexedDbStore.getAllEntries()
      await indexedDbStore.insert(testRecordOne)
      const after = await indexedDbStore.getAllEntries()
      return { before, after }
    }
    const onUpgrade = async (db) => {
      return indexedDbStore.associateWith(db).create()
    }
    await expect(execute(onOpen, onUpgrade)).resolves.toMatchObject({
      before: [],
      after: [testRecordOne]
    })
  })

  it('insert: adds several record to the database', async () => {
    const indexedDbStore = new IndexedDbStore(storeConfiguration)
    const onOpen = async () => {
      const before = await indexedDbStore.getAllEntries()
      await indexedDbStore.insert([testRecordOne, testRecordTwo])
      const after = await indexedDbStore.getAllEntries()
      return { before, after }
    }
    const onUpgrade = async (db) => {
      return indexedDbStore.associateWith(db).create()
    }
    await expect(execute(onOpen, onUpgrade)).resolves.toMatchObject({
      before: [],
      after: [testRecordOne, testRecordTwo]
    })
  })

  it('insert: does nothing if no records provided', async () => {
    const indexedDbStore = new IndexedDbStore(storeConfiguration)
    const onOpen = async () => {
      const before = await indexedDbStore.getAllEntries()
      await indexedDbStore.insert()
      const after = await indexedDbStore.getAllEntries()
      return { before, after }
    }
    const onUpgrade = async (db) => {
      return indexedDbStore.associateWith(db).create()
    }
    await expect(execute(onOpen, onUpgrade)).resolves.toMatchObject({
      before: [],
      after: []
    })
  })

  it('insert: throws an error if record already exists', async () => {
    const indexedDbStore = new IndexedDbStore(storeConfiguration)
    const onOpen = async () => {
      const before = await indexedDbStore.getAllEntries()
      await indexedDbStore.insert([testRecordOne, testRecordTwo])
      await indexedDbStore.insert([testRecordTwo, testRecordOneUpdated])
      const after = await indexedDbStore.getAllEntries()
      return { before, after }
    }
    const onUpgrade = async (db) => {
      return indexedDbStore.associateWith(db).create()
    }
    await expect(execute(onOpen, onUpgrade)).rejects.toThrowError(IndexedDbStore.errorMsgs.DUPLICATE_RECORD)
  })

  it('update: updates one record in a database', async () => {
    const indexedDbStore = new IndexedDbStore(storeConfiguration)
    const onOpen = async () => {
      await indexedDbStore.insert(testRecordOne)
      const before = await indexedDbStore.getAllEntries()
      await indexedDbStore.update([testRecordOneUpdated])
      const after = await indexedDbStore.getAllEntries()
      return { before, after }
    }
    const onUpgrade = async (db) => {
      return indexedDbStore.associateWith(db).create()
    }
    await expect(execute(onOpen, onUpgrade)).resolves.toMatchObject({
      before: [testRecordOne],
      after: [testRecordOneUpdated]
    })
  })

  it('update: updates several records in the database', async () => {
    const indexedDbStore = new IndexedDbStore(storeConfiguration)
    const onOpen = async () => {
      await indexedDbStore.insert([testRecordOne, testRecordTwo])
      const before = await indexedDbStore.getAllEntries()
      await indexedDbStore.update([
        [testRecordOneUpdated],
        [testRecordTwoUpdated]
      ])
      const after = await indexedDbStore.getAllEntries()
      return { before, after }
    }
    const onUpgrade = async (db) => {
      return indexedDbStore.associateWith(db).create()
    }
    await expect(execute(onOpen, onUpgrade)).resolves.toMatchObject({
      before: [testRecordOne, testRecordTwo],
      after: [testRecordOneUpdated, testRecordTwoUpdated]
    })
  })

  it('update: does nothing if no records provided', async () => {
    const indexedDbStore = new IndexedDbStore(storeConfiguration)
    const onOpen = async () => {
      const before = await indexedDbStore.getAllEntries()
      await indexedDbStore.update()
      const after = await indexedDbStore.getAllEntries()
      return { before, after }
    }
    const onUpgrade = async (db) => {
      return indexedDbStore.associateWith(db).create()
    }
    await expect(execute(onOpen, onUpgrade)).resolves.toMatchObject({
      before: [],
      after: []
    })
  })

  it('update: inserts a record if one does not exist already', async () => {
    const indexedDbStore = new IndexedDbStore(storeConfiguration)
    const onOpen = async () => {
      const before = await indexedDbStore.getAllEntries()
      await indexedDbStore.update([[testRecordOne]])
      const after = await indexedDbStore.getAllEntries()
      return { before, after }
    }
    const onUpgrade = async (db) => {
      return indexedDbStore.associateWith(db).create()
    }
    await expect(execute(onOpen, onUpgrade)).resolves.toMatchObject({
      before: [],
      after: [testRecordOne]
    })
  })

  it('update: inserts several records if they do not exist already', async () => {
    const indexedDbStore = new IndexedDbStore(storeConfiguration)
    const onOpen = async () => {
      const before = await indexedDbStore.getAllEntries()
      await indexedDbStore.update([[testRecordOne], [testRecordTwo]])
      const after = await indexedDbStore.getAllEntries()
      return { before, after }
    }
    const onUpgrade = async (db) => {
      return indexedDbStore.associateWith(db).create()
    }
    await expect(execute(onOpen, onUpgrade)).resolves.toMatchObject({
      before: [],
      after: [testRecordOne, testRecordTwo]
    })
  })

  it('count: return total number of records in a database', async () => {
    const indexedDbStore = new IndexedDbStore(storeConfiguration)
    const onOpen = async () => {
      const before = await indexedDbStore.count()
      await indexedDbStore.insert([testRecordOne, testRecordTwo])
      const after = await indexedDbStore.count()
      return { before, after }
    }
    const onUpgrade = async (db) => {
      return indexedDbStore.associateWith(db).create()
    }
    await expect(execute(onOpen, onUpgrade)).resolves.toMatchObject({
      before: 0,
      after: 2
    })
  })

  it('count: return zero if database is empty', async () => {
    const indexedDbStore = new IndexedDbStore(storeConfiguration)
    const onOpen = async () => {
      return indexedDbStore.count()
    }
    const onUpgrade = async (db) => {
      return indexedDbStore.associateWith(db).create()
    }
    await expect(execute(onOpen, onUpgrade)).resolves.toBe(0)
  })
})
