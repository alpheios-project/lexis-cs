import MessagingService from '@lexisCs/messaging/messaging-service.js'
import ResponseMessage from '@lexisCs/messaging/messages/response-message.js'
import Destination from '@lexisCs/messaging/destinations/window-iframe-destination.js'
import Cedict from '@lexisCs/cedict-service/cedict.js'
import CedictConfig from '@lexisCs/configurations/cedict.js'
const CedictCharacterForms = Cedict.characterForms

const messagingServiceName = 'CedictRequestListener'

/**
 * This is a configuration of a WindowsIframeDestination that can be used to connect to CEDICT client service.
 *
 * @type {{targetIframeID: string, name: string, targetURL: string}}
 */
const CedictDestinationConfig = {
  name: 'cedict',
  targetURL: 'https://lexis-dev.alpheios.net',
  targetIframeID: 'alpheios-lexis-cs'
}

let cedictData

/*
NOTE: The request/response format described below is temporary and will change in phase three.
After discussion we decided to add more flexibility for the client in specifying what data it wants to get back.

CEDICT service receive request in the following format:
{
  getWords: {
    words: words,
    characterForm: characterForm
  }
}, where:
  getWords is a type of incoming request;
  words contains an array of words to retrieve;
  characterForm specifies a Chinese character form that will be used during lookups.
  If character form is not known, it can be omitted. In that case CEDICT service will
  check records for traditional Chinese first and, if any matches are found, will return it back.
  If nothing is found within a traditional Chinese, it will look in a simplified one.
  Results for only one character form or no results at all, if no matches are found, will be returned.

Results will be returned in the following format.

If any matches are found:
{
    characterForm: {
        word1: [array of records],
        word2: [an empty array if no records are found for this word]
    }
}

If no matches are found an empty object will be returned:
{}

NOTE: fixtures/src/cedict/cedict-fixture.js implements a stub for `getWords` request of CEDICT service.
      If signature and/or business logic of this request is changed, please update the stub accordingly.
 */

const messageHandler = (request, responseFn) => {
  if (!cedictData.isReady) {
    responseFn(ResponseMessage.Error(request, new Error('Uninitialized')))
    return
  }

  if (request.body.getWords) {
    // This is a get words request
    cedictData.getWords(request.body.getWords.words, request.body.getWords.characterForm)
      .then((result) => {
        responseFn(ResponseMessage.Success(request, result))
      }).catch((error) => responseFn(ResponseMessage.Error(request, error)))
  } else {
    responseFn(ResponseMessage.Error(request, new Error('Unsupported request')))
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const service = new MessagingService(messagingServiceName, new Destination(CedictDestinationConfig))
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
