/* eslint-env jest */
import CedictPermanentStorage from '@lexisCs/cedict-service/cedict-permanent-storage.js'
require('fake-indexeddb/auto')

describe('CedictPermanentStorage class', () => {
  const configuration = {
    name: 'testStorage',
    version: '1',
    stores: {
      meta: {
        name: 'meta',
        primaryIndex: {
          auto: true
        }
      },
      dictionary: {
        name: 'dictionary',
        primaryIndex: {
          keyPath: 'index'
        },
        indexes: {
          traditional: {
            name: 'traditionalHwIdx',
            keyPath: 'traditionalHeadword',
            unique: false
          },
          simplified: {
            name: 'simplifiedHwIdx',
            keyPath: 'simplifiedHeadword',
            unique: false
          }
        }
      }
    }
  }

  const noNameConfig = {
    version: '123',
    someOtherProp: 'Some value'
  }

  const noVersionConfig = {
    name: 'A storage name',
    someOtherProp: 'Some value'
  }

  const noStoresConfig = {
    name: 'A storage name',
    version: '123'
  }

  const meta = {
    propOne: 'one',
    propTwo: 'two'
  }

  const dictRecordOne = {
    index: 48043,
    type: 'not specified',
    traditionalHeadword: '整形外科',
    simplifiedHeadword: '整形外科',
    pinyin: 'zheng3 xing2 wai4 ke1',
    descriptions: [
      'plastic surgery',
      'orthopedics'
    ]
  }

  const dictRecordTwo = {
    index: 72266,
    type: 'not specified',
    traditionalHeadword: '白眉鵐',
    simplifiedHeadword: '白眉鹀',
    pinyin: 'bai2 mei2 wu2',
    descriptions: [
      "(bird species of China) Tristram's bunting (Emberiza tristrami)"
    ]
  }

  it('constructor: must create an instance', () => {
    const storage = new CedictPermanentStorage(configuration)
    expect(storage instanceof CedictPermanentStorage).toBeTruthy()
  })

  it('constructor: configuration must have a name prop', () => {
    expect(() => new CedictPermanentStorage(noNameConfig)).toThrowError(CedictPermanentStorage.errorMsgs.NO_STORAGE_NAME)
  })

  it('constructor: configuration must have a version prop', () => {
    expect(() => new CedictPermanentStorage(noVersionConfig)).toThrowError(CedictPermanentStorage.errorMsgs.NO_STORAGE_VERSION)
  })

  it('constructor: configuration must have a stores tree', () => {
    expect(() => new CedictPermanentStorage(noStoresConfig)).toThrowError(CedictPermanentStorage.errorMsgs.NO_STORES)
  })

  it('getIntegrityData: returns number of records and metadata', async () => {
    const storage = new CedictPermanentStorage(configuration)
    await storage.connect()
    await storage.getStore('meta').update([meta, storage.metaKey])
    await storage.getStore('dictionary').insert([dictRecordOne, dictRecordTwo])
    await expect(storage.getIntegrityData()).resolves.toEqual({
      metadata: meta,
      recordsInMeta: 1,
      recordsInDictionary: 2
    })
    // Clear the storage
    await storage.clear()
    await storage.disconnect()
  })

  it('getIntegrityData: rejects if metadata is missing', async () => {
    const storage = new CedictPermanentStorage(configuration)
    await storage.connect()
    await storage.getStore('dictionary').insert([dictRecordOne, dictRecordTwo])
    await expect(storage.getIntegrityData()).rejects.toThrowError(CedictPermanentStorage.errorMsgs.NO_META)
    // Clear the storage
    await storage.clear()
    await storage.disconnect()
  })

  it('connect: establishes a connection', async () => {
    const storage = new CedictPermanentStorage(configuration)
    await storage.connect()
    await storage.getStore('dictionary').insert([dictRecordOne, dictRecordTwo])
    await expect(storage.getStore('dictionary').getAllEntries()).resolves.toEqual([dictRecordOne, dictRecordTwo])
    // Clear the storage
    await storage.clear()
    await storage.disconnect()
  })

  it('disconnect: closes a connection', async () => {
    const storage = new CedictPermanentStorage(configuration)
    await storage.connect()
    await storage.getStore('dictionary').insert([dictRecordOne, dictRecordTwo])
    // Verify that a connection is established and store contains records
    await expect(storage.getStore('dictionary').getAllEntries()).resolves.toEqual([dictRecordOne, dictRecordTwo])
    await storage.disconnect()
    // getStore will throw an error if connection is closed
    expect(() => storage.getStore('dictionary')).toThrowError('')
    // Clear the storage
    await storage.connect()
    await storage.clear()
    await storage.disconnect()
  })
})
