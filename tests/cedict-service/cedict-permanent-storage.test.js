/* eslint-env jest */
import CedictPermanentStorage from '@lexisCs/cedict-service/cedict-permanent-storage.js'
require('fake-indexeddb/auto')

describe('CedictPermanentStorage class', () => {
  const configuration = {
    name: 'A storage name',
    version: '123',
    stores: {}
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
  const storage = new CedictPermanentStorage(configuration)

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

  it('create: must return a promise', () => {
    expect(storage.create()).toBeInstanceOf(Promise)
  })
})
