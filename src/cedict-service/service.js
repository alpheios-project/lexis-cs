import MessagingService from '@lexisCs/messaging/messaging-service.js'
import ResponseMessage from '@lexisCs/messaging/messages/response-message.js'
import Destination from '@lexisCs/messaging/destinations/window-iframe-destination.js'
import Cedict from '@lexisCs/cedict-service/cedict.js'
import CedictConfig from '@lexisCs/configurations/cedict.js'
const CedictCharacterForms = Cedict.characterForms

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
  if (!cedictData.isReady) {
    responseFn(ResponseMessage.Error(request, new Error('Uninitialized')))
    return
  }

  if (request.body.getWords) {
    // This is a get words request
    const startTime = Date.now()
    cedictData.getWords(request.body.getWords.words, request.body.getWords.characterForm)
      .then((result) => {
        console.info(`Request processing completed in ${Date.now() - startTime} ms`)
        responseFn(ResponseMessage.Success(request, result))
      }).catch((error) => responseFn(ResponseMessage.Error(request, error)))
  } else {
    responseFn(ResponseMessage.Error(request, new Error('Unsupported request')))
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const service = new MessagingService(new Destination(CedictDestinationConfig))
  service.registerReceiverCallback(CedictDestinationConfig.name, messageHandler)

  try {
    cedictData = new Cedict(CedictConfig)
  } catch (error) {
    console.error(error)
    return
  }
  cedictData.init().then(() => {
    // TODO: A message to ease manual testing. Shall be removed in production
    console.log('CEDICT service is ready')
  }).catch((error) => console.error(error))
})

export { CedictDestinationConfig, CedictCharacterForms }
