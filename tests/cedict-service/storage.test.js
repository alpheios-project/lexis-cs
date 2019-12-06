/* eslint-env jest */
import Storage from '@lexisCs/cedict-service/storage.js'

describe('Storage class', () => {
  const configuration = { name: 'A storage name', version: '123' }
  const noNameConfig = { version: '123', someOtherProp: 'Some value' }
  const noVersionConfig = { name: 'A storage name', someOtherProp: 'Some value' }
  const storage = new Storage(configuration)

  it('constructor: must store configuration internally', () => {
    const storage = new Storage(configuration)
    expect(storage._configuration).toBe(configuration)
  })

  it('constructor: configuration must have a name prop', () => {
    expect(() => new Storage(noNameConfig)).toThrowError('Storage name is missing from a configuration')
  })

  it('constructor: configuration must have a version prop', () => {
    expect(() => new Storage(noVersionConfig)).toThrowError('Storage version is missing from a configuration')
  })

  it('create: must return a promise', () => {
    expect(storage.create()).toBeInstanceOf(Promise)
  })

  it('destroy: must return a promise', () => {
    expect(storage.destroy()).toBeInstanceOf(Promise)
  })

  it('connect: must return a promise', () => {
    expect(storage.connect()).toBeInstanceOf(Promise)
  })

  it('disconnect: must return a promise', () => {
    expect(storage.disconnect()).toBeInstanceOf(Promise)
  })

  it('getIntegrityData: must return a promise', () => {
    expect(storage.getIntergrityData()).toBeInstanceOf(Promise)
  })
})
