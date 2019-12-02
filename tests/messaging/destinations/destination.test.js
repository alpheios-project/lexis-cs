/* eslint-env jest */
import Destination from '@lexisCs/messaging/destinations/destination.js'

describe('Destination class', () => {
  it('Constructor: shall create a Destination object', () => {
    const destinationName = 'Destination name'
    const destination = new Destination({ name: destinationName })
    expect(destination).toMatchObject({
      name: destinationName,
      _responseCallback: null
    })
  })

  it('Constructor: name must be provided', () => {
    expect(() => new Destination()).toThrowError('Destination name is missing')
  })

  it('registerResponseCallback: assign a callback function', () => {
    const callbackFn = jest.fn()
    const destinationName = 'Destination name'
    const destination = new Destination({ name: destinationName })
    destination.registerResponseCallback(callbackFn)
    expect(destination._responseCallback).toBe(callbackFn)
  })
})
