import MessagingService from '@lexisCs/messaging/messaging-service.js'
import ResponseMessage from '@lexisCs/messaging/messages/response-message.js'
import Destination from '@lexisCs/messaging/destinations/window-iframe-destination.js'
import CedictData from '@lexisCs/cedict-service/cedict-data.js'
import CedictSchema from '@lexisCs/schemas/cedict.js'

/**
 * This is a configuration of a WindowsIframeDestination that can be used to connect to CEDICT client service.
 *
 * @type {{targetIframeID: string, name: string, targetURL: string}}
 */
const CedictDestinationConfig = {
  name: 'cedict',
  targetURL: 'http://data-dev.alpheios.net',
  targetIframeID: 'alpheios-lexis-cs'
}

let cedictData

const messageHandler = (request, responseFn) => {
  console.info('A message handler')
  let response
  if (!cedictData.isReady) {
    responseFn(ResponseMessage.Error(request, new Error('Uninitialized')))
    return
  }

  if (request.body.getWords) {
    // This is a get words request
    response = cedictData.getWords(request.body.getWords.words, request.body.getWords.characterForm)
    responseFn(ResponseMessage.Success(request, response))
  } else {
    responseFn(ResponseMessage.Error(request, new Error('Unsupported request')))
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const service = new MessagingService(new Destination(Destination.config.CEDICT))
  service.registerReceiverCallback(CedictDestinationConfig.name, messageHandler)

  try {
    cedictData = new CedictData(CedictSchema)
  } catch (error) {
    console.error(`Cannot create CEDICT data object: ${error}`)
    return
  }
  console.info('before init')
  cedictData.init().then(() => {
    // TODO: A message to ease manual testing. Shall be removed in production
    console.log('CEDICT service is ready')
  }).catch((error) => console.error(`Cannot initialize CEDICT data object: ${error}`))
  console.info('after init')
})

export default CedictDestinationConfig
