/* eslint-env jest */
import Cedict from '@lexisCs/cedict-service/cedict'
import CedictPermanentStorage from '@lexisCs/cedict-service/cedict-permanent-storage.js'
import CedictConfig from '@lexisCs/configurations/cedict.js'
import CedictC1 from '@lexisCsCedict/cedict-v20191029-c001.json'
import CedictC2 from '@lexisCsCedict/cedict-v20191029-c002.json'
import CedictC3 from '@lexisCsCedict/cedict-v20191029-c003.json'
import CedictC4 from '@lexisCsCedict/cedict-v20191029-c004.json'
require('fake-indexeddb/auto')

describe('CedictPermanentStorage class', () => {
  /**
   * Replaces an original loader with a stub that will load local test data.
   *
   * @param {string} url - A URL of a chunk to be fetched.
   * @returns {Promise<object>} Returns a promise that is resolved with
   *          an object containing dictionary data.
   */
  Cedict.prototype._loadJson = (url) => {
    const resources = {
      'http://data-dev.alpheios.net/cedict/cedict-v20191029-c001.json': CedictC1,
      'http://data-dev.alpheios.net/cedict/cedict-v20191029-c002.json': CedictC2,
      'http://data-dev.alpheios.net/cedict/cedict-v20191029-c003.json': CedictC3,
      'http://data-dev.alpheios.net/cedict/cedict-v20191029-c004.json': CedictC4
    }
    return Promise.resolve(resources[url])
  }

  let dictionary = new Map() // eslint-disable-line prefer-const
  ;[CedictC1.entries, CedictC2.entries, CedictC3.entries, CedictC4.entries].flat()
    .forEach(entry => dictionary.set(entry.index, entry))
  const dictionaryEntriesTotal = 33

  let storedMeta = CedictC1.metadata // eslint-disable-line prefer-const
  delete storedMeta.chunkNumber

  const integrityData = {
    metadata: storedMeta,
    recordsInMeta: 1,

    // A total number of dictionary records in all test data chunks
    recordsInDictionary: dictionaryEntriesTotal
  }

  CedictConfig.data.recordsCount = dictionaryEntriesTotal

  it('constructor: must create an instance', () => {
    expect(new Cedict(CedictConfig)).toBeInstanceOf(Cedict)
  })

  it('constructor: configuration must have a storage tree', () => {
    let configuration = JSON.parse(JSON.stringify(CedictConfig)) // eslint-disable-line prefer-const
    delete configuration.storage
    expect(() => new Cedict(configuration)).toThrowError(Cedict.errMsgs.CONF_NO_STORAGE)
  })

  it('constructor: configuration must have a stores tree', () => {
    let configuration = JSON.parse(JSON.stringify(CedictConfig)) // eslint-disable-line prefer-const
    delete configuration.storage.stores
    expect(() => new Cedict(configuration)).toThrowError(Cedict.errMsgs.CONF_NO_STORES)
  })

  it('constructor: configuration must have a dictionary tree', () => {
    let configuration = JSON.parse(JSON.stringify(CedictConfig)) // eslint-disable-line prefer-const
    delete configuration.storage.stores.dictionary
    expect(() => new Cedict(configuration)).toThrowError(Cedict.errMsgs.CONF_NO_DICT)
  })

  it('constructor: dictionary must have a primaryIndex subtree', () => {
    let configuration = JSON.parse(JSON.stringify(CedictConfig)) // eslint-disable-line prefer-const
    delete configuration.storage.stores.dictionary.primaryIndex
    expect(() => new Cedict(configuration)).toThrowError(Cedict.errMsgs.CONF_NO_DICT_PRIMARY_IDX)
  })

  it('constructor: primaryIndex must have a keyPath', () => {
    let configuration = JSON.parse(JSON.stringify(CedictConfig)) // eslint-disable-line prefer-const
    delete configuration.storage.stores.dictionary.primaryIndex.keyPath
    expect(() => new Cedict(configuration)).toThrowError(Cedict.errMsgs.CONF_NO_DICT_PRIMARY_IDX_KEY_PATH)
  })

  it('constructor: dictionary must have a volatileStorage tree', () => {
    let configuration = JSON.parse(JSON.stringify(CedictConfig)) // eslint-disable-line prefer-const
    delete configuration.storage.stores.dictionary.volatileStorage
    expect(() => new Cedict(configuration)).toThrowError(Cedict.errMsgs.CONF_NO_DICT_VOLATILE)
  })

  it('constructor: volatileStorage must have an enabled key', () => {
    let configuration = JSON.parse(JSON.stringify(CedictConfig)) // eslint-disable-line prefer-const
    delete configuration.storage.stores.dictionary.volatileStorage.enabled
    expect(() => new Cedict(configuration)).toThrowError(Cedict.errMsgs.CONF_NO_DICT_VOLATILE_ENABLED)
  })

  it('constructor: volatileStorage must have an indexed key', () => {
    let configuration = JSON.parse(JSON.stringify(CedictConfig)) // eslint-disable-line prefer-const
    delete configuration.storage.stores.dictionary.volatileStorage.indexed
    expect(() => new Cedict(configuration)).toThrowError(Cedict.errMsgs.CONF_NO_DICT_VOLATILE_INDEXED)
  })

  it('constructor: dictionary must have a permanentStorage tree', () => {
    let configuration = JSON.parse(JSON.stringify(CedictConfig)) // eslint-disable-line prefer-const
    delete configuration.storage.stores.dictionary.permanentStorage
    expect(() => new Cedict(configuration)).toThrowError(Cedict.errMsgs.CONF_NO_DICT_PERM)
  })

  it('constructor: permanentStorage must have an enabled key', () => {
    let configuration = JSON.parse(JSON.stringify(CedictConfig)) // eslint-disable-line prefer-const
    delete configuration.storage.stores.dictionary.permanentStorage.enabled
    expect(() => new Cedict(configuration)).toThrowError(Cedict.errMsgs.CONF_NO_DICT_PERM_ENABLED)
  })

  it('constructor: permanentStorage must have an indexed key', () => {
    let configuration = JSON.parse(JSON.stringify(CedictConfig)) // eslint-disable-line prefer-const
    delete configuration.storage.stores.dictionary.permanentStorage.indexed
    expect(() => new Cedict(configuration)).toThrowError(Cedict.errMsgs.CONF_NO_DICT_PERM_INDEXED)
  })

  it('constructor: configuration must have a data tree', () => {
    let configuration = JSON.parse(JSON.stringify(CedictConfig)) // eslint-disable-line prefer-const
    delete configuration.data
    expect(() => new Cedict(configuration)).toThrowError(Cedict.errMsgs.CONF_NO_DATA)
  })

  it('constructor: data tree must have a version key', () => {
    let configuration = JSON.parse(JSON.stringify(CedictConfig)) // eslint-disable-line prefer-const
    delete configuration.data.version
    expect(() => new Cedict(configuration)).toThrowError(Cedict.errMsgs.CONF_NO_DATA_VER)
  })

  it('constructor: data tree must have a revision key', () => {
    let configuration = JSON.parse(JSON.stringify(CedictConfig)) // eslint-disable-line prefer-const
    delete configuration.data.revision
    expect(() => new Cedict(configuration)).toThrowError(Cedict.errMsgs.CONF_NO_DATA_REV)
  })

  it('constructor: data tree must have a recordsCount key', () => {
    let configuration = JSON.parse(JSON.stringify(CedictConfig)) // eslint-disable-line prefer-const
    delete configuration.data.recordsCount
    expect(() => new Cedict(configuration)).toThrowError(Cedict.errMsgs.CONF_NO_DATA_REC_COUNT)
  })

  it('constructor: data tree must have a URI key', () => {
    let configuration = JSON.parse(JSON.stringify(CedictConfig)) // eslint-disable-line prefer-const
    delete configuration.data.URI
    expect(() => new Cedict(configuration)).toThrowError(Cedict.errMsgs.CONF_NO_DATA_URI)
  })

  it('constructor: data tree must have a chunks array', () => {
    let configuration = JSON.parse(JSON.stringify(CedictConfig)) // eslint-disable-line prefer-const
    delete configuration.data.chunks
    expect(() => new Cedict(configuration)).toThrowError(Cedict.errMsgs.CONF_NO_DATA_CHUNKS)
  })

  it('constructor: data tree must have a non-empty chunks array', () => {
    let configuration = JSON.parse(JSON.stringify(CedictConfig)) // eslint-disable-line prefer-const
    configuration.data.chunks = []
    expect(() => new Cedict(configuration)).toThrowError(Cedict.errMsgs.CONF_NO_DATA_CHUNKS)
  })

  it('init: must complete without errors', async () => {
    const cedict = new Cedict(CedictConfig)
    await expect(cedict.init()).resolves.toBeUndefined()
    await cedict.removePermanentData()
  })

  it('init: must put metadata to a permanent storage', async () => {
    const cedict = new Cedict(CedictConfig)
    await cedict.init()
    await expect(cedict._storage.getIntegrityData()).resolves.toEqual(integrityData)
    await cedict.removePermanentData()
  })

  // TODO: Maybe not the cleanest way to test it because `removePermanentData()` deletes the database
  //       and `connect()` recreates it but probably there is nothing better is available at the moment.
  it('destroy: must remove all data from a permanent storage', async () => {
    const cedict = new Cedict(CedictConfig)
    await cedict.init()
    // removePermanentData() will close a database connection
    await cedict.removePermanentData()
    // so we'll need to reopen it
    await cedict._storage.connect()
    await expect(cedict._storage.getIntegrityData()).rejects.toThrowError(CedictPermanentStorage.errorMsgs.NO_META)
    await cedict._storage.disconnect()
  })

  it('isSupportedCharacterForm: shall recognize simplified Chinese', async () => {
    await expect(Cedict.isSupportedCharacterForm(Cedict.characterForms.SIMPLIFIED)).toBeTruthy()
  })

  it('isSupportedCharacterForm: shall recognize traditional Chinese', async () => {
    await expect(Cedict.isSupportedCharacterForm(Cedict.characterForms.TRADITIONAL)).toBeTruthy()
  })

  it('isSupportedCharacterForm: shall fail on unsupported form', async () => {
    await expect(Cedict.isSupportedCharacterForm('The unknown form')).toBeFalsy()
  })

  it('isStorageIntact: must verify correct store data', async () => {
    const cedict = new Cedict(CedictConfig)
    await cedict.init()
    const integrityData = await cedict._storage.getIntegrityData()
    expect(cedict.isStorageIntact(integrityData)).toBeTruthy()
    await cedict.removePermanentData()
  })

  it('getWords: returns data for a single traditional Chinese word', async () => {
    const testWord = '白眉鶇'
    const cedict = new Cedict(CedictConfig)
    await cedict.init()
    await expect(cedict.getWords(testWord)).resolves.toEqual({
      traditional: {
        [testWord]: [dictionary.get(72267)]
      }
    })
    await cedict.removePermanentData()
  })

  it('getWords: returns data for a single simplified Chinese word', async () => {
    const testWord = '陇'
    const cedict = new Cedict(CedictConfig)
    await cedict.init()
    await expect(cedict.getWords(testWord)).resolves.toEqual({
      simplified: {
        [testWord]: [dictionary.get(108835)]
      }
    })
    await cedict.removePermanentData()
  })

  it('getWords: returns data for multiple traditional Chinese words', async () => {
    const testWords = ['白眉鶇', '隱飾']
    const cedict = new Cedict(CedictConfig)
    await cedict.init()
    await expect(cedict.getWords(testWords)).resolves.toEqual({
      traditional: {
        [testWords[0]]: [dictionary.get(72267)],
        [testWords[1]]: [dictionary.get(108832)]
      }
    })
    await cedict.removePermanentData()
  })

  it('getWords: returns data for multiple simplified Chinese words', async () => {
    const testWords = ['陇', '幻灭']
    const cedict = new Cedict(CedictConfig)
    await cedict.init()
    await expect(cedict.getWords(testWords)).resolves.toEqual({
      simplified: {
        [testWords[0]]: [dictionary.get(108835)],
        [testWords[1]]: [dictionary.get(35909)]
      }
    })
    await cedict.removePermanentData()
  })

  it('getWords: returns data for the first form found for a mix of words in different forms', async () => {
    const testWords = ['白眉鶇', '幻灭']
    const cedict = new Cedict(CedictConfig)
    await cedict.init()
    await expect(cedict.getWords(testWords)).resolves.toEqual({
      traditional: {
        [testWords[0]]: [dictionary.get(72267)],
        [testWords[1]]: []
      }
    })
    await cedict.removePermanentData()
  })

  it('getWords: returns an empty object if no words are provided', async () => {
    const cedict = new Cedict(CedictConfig)
    await cedict.init()
    await expect(cedict.getWords()).resolves.toEqual({})
    await cedict.removePermanentData()
  })

  it('getWords: rejects if data is not available', async () => {
    const cedict = new Cedict(CedictConfig)
    await expect(cedict.getWords()).rejects.toThrowError(Cedict.errMsgs.NOT_READY)
  })
})