/* eslint-env jest */
import WindowIframeDestination from '@lexisCs/messaging/destinations/window-iframe-destination.js'

describe('WindowIframeDestination class', () => {
  const configuration = {
    name: 'Destination name',
    targetURL: 'Target URL',
    targetIframeID: 'Target iframe ID'
  }

  it('Constructor: shall create an object', () => {
    const destination = new WindowIframeDestination(configuration)
    expect(destination).toMatchObject({
      name: configuration.name,
      _targetURL: configuration.targetURL,
      _targetIframeID: configuration.targetIframeID
    })
  })

  it('Constructor: name must be provided', () => {
    const configuration = {
      targetURL: 'Target URL',
      targetIframeID: 'Target iframe ID'
    }
    expect(() => new WindowIframeDestination(configuration)).toThrowError('Destination name is missing')
  })

  it('Constructor: targetURL must be provided', () => {
    const configuration = {
      name: 'Destination name',
      targetIframeID: 'Target iframe ID'
    }
    expect(() => new WindowIframeDestination(configuration)).toThrowError('Target URL is not provided')
  })

  it('Constructor: target iframe ID must be provided', () => {
    const configuration = {
      name: 'Destination name',
      targetURL: 'Target URL'
    }
    expect(() => new WindowIframeDestination(configuration)).toThrowError('Target iframe ID is not provided')
  })

  it('registerResponseCallback: assign a callback function', () => {
    const callbackFn = jest.fn()
    const destination = new WindowIframeDestination(configuration)
    destination.registerResponseCallback(callbackFn)
    expect(destination._responseCallback).toBe(callbackFn)
  })
})
