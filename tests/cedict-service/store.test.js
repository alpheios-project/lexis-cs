/* eslint-env jest */
import Store from '@lexisCs/cedict-service/store.js'

describe('Store class', () => {
  const configuration = { name: 'A store name', someProp: 'Some value' }
  const incorrectConfig = { someProp: 'Some value' }
  const store = new Store(configuration)

  it('constructor: must store configuration internally', () => {
    const store = new Store(configuration)
    expect(store._configuration).toBe(configuration)
  })

  it('constructor: configuration must have a name prop', () => {
    expect(() => new Store(incorrectConfig)).toThrowError(Store.errMsgs.CONF_NO_NAME)
  })

  it('associateWith: must return an instance reference', () => {
    expect(store.associateWith({})).toBe(store)
  })

  it('create: must return a promise', () => {
    expect(store.create()).toBeInstanceOf(Promise)
  })

  it('clear: must return a promise', () => {
    expect(store.clear()).toBeInstanceOf(Promise)
  })

  it('destroy: must return a promise', () => {
    expect(store.destroy()).toBeInstanceOf(Promise)
  })

  it('get: must return a promise', () => {
    expect(store.get()).toBeInstanceOf(Promise)
  })

  it('getEntries: must return a promise', () => {
    expect(store.getEntries()).toBeInstanceOf(Promise)
  })

  it('getAllEntries: must return a promise', () => {
    expect(store.getAllEntries()).toBeInstanceOf(Promise)
  })

  it('insert: must return a promise', () => {
    expect(store.insert()).toBeInstanceOf(Promise)
  })

  it('update: must return a promise', () => {
    expect(store.update()).toBeInstanceOf(Promise)
  })

  it('count: must return a promise', () => {
    expect(store.count()).toBeInstanceOf(Promise)
  })

  it('Message: must have access mode definitions', () => {
    expect(Object.keys(Store.accessModes)).toMatchObject(['READ', 'READ_WRITE'])
  })
})
