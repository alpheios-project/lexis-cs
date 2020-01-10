/* eslint-env jest */
import Destination from '@lexisCs/messaging/destinations/destination.js'
import MessagingService from '@lexisCs/messaging/messaging-service.js'

describe('MessagingService class', () => {
  const serviceName = 'ServiceName'
  const destOne = new Destination({ name: 'Destination one' })
  const destTwo = new Destination({ name: 'Destination two' })

  it('MessagingService constructor: messages map', () => {
    const messagingService = new MessagingService(serviceName)
    expect(messagingService._messages instanceof Map).toBeTruthy()
    expect(messagingService._messages.size).toBe(0)
  })

  it('MessagingService constructor: destinations map', () => {
    const messagingService = new MessagingService(serviceName)
    expect(messagingService._destinations instanceof Map).toBeTruthy()
    expect(messagingService._destinations.size).toBe(0)
  })

  it('MessagingService constructor: with a single destination', () => {
    const messagingService = new MessagingService(serviceName, destOne)
    expect(Array.from(messagingService._destinations.keys())).toMatchObject(['Destination one'])
    expect(Array.from(messagingService._destinations.values())).toMatchObject([destOne])
  })

  it('MessagingService constructor: with multiple destinations', () => {
    const messagingService = new MessagingService(serviceName, [destOne, destTwo])
    expect(Array.from(messagingService._destinations.keys())).toMatchObject(['Destination one', 'Destination two'])
    expect(Array.from(messagingService._destinations.values())).toMatchObject([destOne, destTwo])
  })

  it('MessagingService constructor: throws an error when no name is provided', () => {
    expect(() => new MessagingService()).toThrowError(MessagingService.errMsgs.NO_NAME)
  })

  it('hasService: returns true if service exists', () => {
    MessagingService.createService(serviceName)
    expect(MessagingService.hasService(serviceName)).toBeTruthy()
    MessagingService.deleteService(serviceName)
  })

  it('hasService: returns false if there is no such service', () => {
    expect(MessagingService.hasService('unknown service')).toBeFalsy()
  })

  it('getService: returns an instance of the service if service exists', () => {
    MessagingService.createService(serviceName)
    expect(MessagingService.getService(serviceName).name).toBe(serviceName)
    MessagingService.deleteService(serviceName)
  })

  it('getService: returns undefined if service does not exist', () => {
    MessagingService.createService(serviceName)
    expect(MessagingService.getService('unknown name')).toBeUndefined()
    MessagingService.deleteService(serviceName)
  })

  it('creatService: creates an instance of a service', () => {
    MessagingService.createService(serviceName)
    expect(MessagingService.hasService(serviceName)).toBeTruthy()
    MessagingService.deleteService(serviceName)
  })

  it('creatService: throws an error if parameters are incorrect', () => {
    expect(() => MessagingService.createService()).toThrowError(MessagingService.errMsgs.NO_NAME)
  })

  it('registerDestination: add a new one', () => {
    const messagingService = new MessagingService(serviceName)
    expect(messagingService._destinations.size).toBe(0)
    messagingService.registerDestination(destOne)
    expect(Array.from(messagingService._destinations.keys())).toMatchObject(['Destination one'])
    expect(Array.from(messagingService._destinations.values())).toMatchObject([destOne])
  })

  it('registerDestination: add an existing one', () => {
    const messagingService = new MessagingService(serviceName)
    expect(messagingService._destinations.size).toBe(0)
    messagingService.registerDestination(destOne)
    expect(() => messagingService.registerDestination(destOne)).toThrowError('Destination already exists')
  })

  it('updateDestination: destination exists', () => {
    const destName = 'Destination one'
    const destOneType = 'Destination one type'
    const destOneUpdatedType = 'Destination one type updated'
    const messagingService = new MessagingService(serviceName)
    expect(messagingService._destinations.size).toBe(0)
    let destOne = new Destination({ name: destName }) // eslint-disable-line prefer-const
    destOne.type = destOneType
    let destOneUpdated = new Destination({ name: destName }) // eslint-disable-line prefer-const
    destOneUpdated.type = destOneUpdatedType
    messagingService.registerDestination(destOne)
    expect(messagingService._destinations.get(destName).type).toBe(destOneType)
    messagingService.updateDestination(destOneUpdated)
    expect(messagingService._destinations.get(destName).type).toBe(destOneUpdatedType)
  })

  it('updateDestination: destination does not exist', () => {
    const messagingService = new MessagingService(serviceName)
    expect(messagingService._destinations.size).toBe(0)
    const destOne = new Destination({ name: 'Destination name' })
    const destOneUpdated = new Destination({ name: 'A new destination name' })
    messagingService.registerDestination(destOne)
    expect(() => messagingService.updateDestination(destOneUpdated)).toThrowError('Cannot update a destination that does not exist')
  })
})
