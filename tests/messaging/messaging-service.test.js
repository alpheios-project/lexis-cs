/* eslint-env jest */
import Destination from '@lexisCs/messaging/destinations/destination.js'
import MessagingService from '@lexisCs/messaging/messaging-service.js'

describe('MessagingService class', () => {
  const destOne = new Destination({ name: 'Destination one' })
  const destTwo = new Destination({ name: 'Destination two' })

  it('MessagingService constructor: messages map', () => {
    const messagingService = new MessagingService()
    expect(messagingService._messages instanceof Map).toBeTruthy()
    expect(messagingService._messages.size).toBe(0)
  })

  it('MessagingService constructor: destinations map', () => {
    const messagingService = new MessagingService()
    expect(messagingService._destinations instanceof Map).toBeTruthy()
    expect(messagingService._destinations.size).toBe(0)
  })

  it('MessagingService constructor: with a single destination', () => {
    const messagingService = new MessagingService(destOne)
    expect(Array.from(messagingService._destinations.keys())).toMatchObject(['Destination one'])
    expect(Array.from(messagingService._destinations.values())).toMatchObject([destOne])
  })

  it('MessagingService constructor: with multiple destinations', () => {
    const messagingService = new MessagingService([destOne, destTwo])
    expect(Array.from(messagingService._destinations.keys())).toMatchObject(['Destination one', 'Destination two'])
    expect(Array.from(messagingService._destinations.values())).toMatchObject([destOne, destTwo])
  })

  it('registerDestination: add a new one', () => {
    const messagingService = new MessagingService()
    expect(messagingService._destinations.size).toBe(0)
    messagingService.registerDestination(destOne)
    expect(Array.from(messagingService._destinations.keys())).toMatchObject(['Destination one'])
    expect(Array.from(messagingService._destinations.values())).toMatchObject([destOne])
  })
})
