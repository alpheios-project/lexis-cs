/* eslint-env jest */
import Store from '@lexisCs/cedict-service/store.js'

describe('Store class', () => {
  const configuration = { name: 'A store name', someProp: 'Some value' }
  const incorrectConfig = { someProp: 'Some value' }
  const store = new Store(configuration)

  it('Constructor: must store configuration internally', () => {
    const store = new Store(configuration)
    expect(store._configuration).toBe(configuration)
  })

  it('Constructor: must call checkConfiguration', () => {
    const checkConfiguration = jest.fn()
    const checkConfigurationOriginal = Store.checkConfiguration
    // Replace a check method with a mock
    Store.checkConfiguration = checkConfiguration
    const store = new Store(configuration) // eslint-disable-line no-unused-vars
    expect(checkConfiguration).toBeCalledWith(configuration)
    // Restore the original method
    Store.checkConfiguration = checkConfigurationOriginal
  })

  it('checkConfiguration: name must be present', () => {
    // eslint-disable-next-line no-unused-vars
    expect(() => Store.checkConfiguration(incorrectConfig)).toThrowError('A store name is missing from a configuration')
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
