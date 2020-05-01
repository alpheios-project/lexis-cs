import { MessagingService, ResponseMessage, WindowIframeDestination as Destination, CedictDestinationConfig } from 'alpheios-messaging'
import { CedictCharacterForms } from '@lexisCs/cedict-service/constants.js'
import Cedict from '@lexisCs/cedict-service/cedict.js'
import CedictConfig from '@lexisCs/configurations/cedict.js'

const messagingServiceName = 'CedictRequestListener'
let cedictData

/*
NOTE: The request/response format described below is temporary and will change in phase three.
After discussion we decided to add more flexibility for the client in specifying what data it wants to get back.

CEDICT service supports the following requests:
getWords:
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

loadData:
{
  loadData: {}
}
This request starts an initialization of a CEDICT service.
If service was initialized successfully, an empty success response is returned.
An error request is returned if initialization failed.
 */

const messageHandler = async (request, responseFn) => {
  if (request.body.loadData) {
    if (!cedictData.isReady) {
      try {
        await cedictData.init()
        // TODO: A message to ease manual testing. We will probably want to remove it later
        console.log('CEDICT service is ready')
        responseFn(ResponseMessage.Success(request, {}))
      } catch (err) {
        console.error(`Cannot initialize a CEDICT service: ${err.message}`)
        responseFn(ResponseMessage.Error(request, new Error('Initialization error'), ResponseMessage.errorCodes.INITIALIZATION_ERROR))
      }
    } else {
      // Service has already been initialized, return an empty success message
      responseFn(ResponseMessage.Success(request, {}))
    }
  } else if (request.body.getWords) {
    if (!cedictData.isReady) {
      // If data is loaded to IndexedDB already, we can initialize CEDICT fast and respond to the current request
      try {
        const hasData = await cedictData.hasDataLoaded()
        if (hasData) {
          await cedictData.init()
        }
      } catch (error) {
        // Data is not valid or IndexedDB is unavailable. Cannot initialize CEDICT without downloading of data
      }
    }

    if (!cedictData.isReady) {
      // Data is not loaded or is invalid; send an uninitialized response to the client
      responseFn(ResponseMessage.Error(request, new Error('Uninitialized'), ResponseMessage.errorCodes.SERVICE_UNINITIALIZED))
      return
    }

    // This is a get words request
    cedictData.getWords(request.body.getWords.words, request.body.getWords.characterForm)
      .then((result) => {
        responseFn(ResponseMessage.Success(request, result))
      }).catch((error) => responseFn(ResponseMessage.Error(request, error, ResponseMessage.errorCodes.INTERNAL_ERROR)))
  } else {
    responseFn(ResponseMessage.Error(request, new Error('Unsupported request'), ResponseMessage.errorCodes.UNKNOWN_REQUEST))
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line no-unused-vars
  const service = new MessagingService(
    messagingServiceName,
    new Destination({ ...CedictDestinationConfig, commModes: [Destination.commModes.RECEIVE], receiverCB: messageHandler })
  )

  try {
    cedictData = new Cedict(CedictConfig)
  } catch (error) {
    console.error(error)
  }
})

export { CedictDestinationConfig, CedictCharacterForms }
