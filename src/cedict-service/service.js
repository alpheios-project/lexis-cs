import MessagingService from '@lexisCs/messaging/messaging-service.js'
import ResponseMessage from '@lexisCs/messaging/messages/response-message.js'
import Destination from '@lexisCs/messaging/destinations/window-iframe-destination.js'

const messageHandler = (request, responseFn) => {
  const body = { text: 'Response message from CEDICT service' }
  responseFn(ResponseMessage.Success(request, body))
}

document.addEventListener('DOMContentLoaded', () => {
  const service = new MessagingService(new Destination(Destination.config.CEDICT))
  service.registerReceiverCallback(Destination.config.CEDICT.name, messageHandler)
})
