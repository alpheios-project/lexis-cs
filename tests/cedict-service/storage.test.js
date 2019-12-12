/* eslint-env jest */
import Storage from '@lexisCs/cedict-service/storage.js'

describe('Storage class', () => {
  const configuration = { name: 'A storage name', version: '123' }
  const storage = new Storage(configuration)

  it('constructor: must store configuration internally', () => {
    const storage = new Storage(configuration)
    expect(storage._configuration).toBe(configuration)
  })

  it('constructor: configuration must have a name prop', () => {
    let config = JSON.parse(JSON.stringify(configuration)) // eslint-disable-line prefer-const
    delete config.name
    expect(() => new Storage(config)).toThrowError(Storage.errMsgs.CONF_NO_NAME)
  })

  it('constructor: configuration must have a version prop', () => {
    let config = JSON.parse(JSON.stringify(configuration)) // eslint-disable-line prefer-const
    delete config.version
    expect(() => new Storage(config)).toThrowError(Storage.errMsgs.CONF_NO_VER)
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
    expect(storage.getIntegrityData()).toBeInstanceOf(Promise)
  })
})
