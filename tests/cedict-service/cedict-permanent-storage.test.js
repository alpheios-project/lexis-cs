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

  it('getIntegrityData: ', async () => {
    const storage = new CedictPermanentStorage(configuration)
    await storage.connect()
    await storage.stores.dictionary.insert([dictRecordOne, dictRecordTwo])
    await storage.stores.meta.update([meta, storage.metaKey])
    await expect(storage.getIntergrityData()).resolves.toEqual({
      metadata: meta,
      recordsInMeta: 1,
      recordsInDictionary: 2
    })
  })
})
