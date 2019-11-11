import ResponseMessage from './messages/response-message'
import StoredRequest from './stored-request'

export default class MessagingService {
  constructor () {
    /**
     * A map where outgoing messages will be stored.
     *
     * @type {Map<string, StoredRequest>}
     */
    this._messages = new Map()
    this._destinations = new Map()
  }

  registerDestination (destination) {
    this._destinations.set(destination.name, destination)
    destination.registerMessageCallback(this.dispatchMessage.bind(this))
  }

  /**
   * A message dispatcher function
   */
  dispatchMessage (message) {
    if (!message.requestID) {
      console.error('A message with an unknown request ID will be ignored:', message)
      return
    }

    if (!this._messages.has(message.requestID)) {
      console.error(`A message with a request ID ${message.requestID} is not registered in a request list`, message)
      return
    }

    this.fulfillRequest(message)
  }

  /**
   * Registers an outgoing request in a request map. Returns a promise that will be fulfilled when when
   * a response will be received or will be rejected when a timeout will expire.
   * @param {RequestMessage} request - An outgoing request.
   * @param {number} timeout - A number of milliseconds we'll wait for response before rejecting a promise.
   * @return {Promise} - An asynchronous result of an operation.
   */
  registerRequest (request, timeout = 10000) {
    let storedRequest = new StoredRequest(request) // eslint-disable-line prefer-const
    this._messages.set(request.ID, storedRequest)
    storedRequest.timeoutID = window.setTimeout((requestID) => {
      storedRequest.reject(new Error('Timeout has been expired'))
      this._messages.delete(requestID) // Remove from map
    }, timeout)
    return storedRequest.promise
  }

  /**
   * Passes a response information to the request callback by resolving or rejecting a promise.
   * If request has been completed successfully, promise is resolved with the response message object.
   * If request failed, a responseCode is ERROR and a response body contains
   * a TranferrableError JSON-like object. In this case an error instance will be created
   * and a promise will be rejected with this error object.
   * @param responseMessage
   */
  fulfillRequest (responseMessage) {
    if (this._messages.has(responseMessage.requestID)) {
      const requestInfo = this._messages.get(responseMessage.requestID)
      const responseCode = ResponseMessage.responseCode(responseMessage)
      window.clearTimeout(requestInfo.timeoutID) // Clear a timeout
      if (responseCode === ResponseMessage.responseCodes.ERROR) {
        // There was an error
        if (!responseMessage.body.name) {
          // No error information in the message body
          requestInfo.reject(responseMessage) // Resolve with a response message body
        } else if (knownErrors.has(responseMessage.body.name)) {
          // This is a known error
          requestInfo.reject(knownErrors.get(responseMessage.body.name).fromJSON(responseMessage.body))
        } else {
          // It is an error, but not known to the Service. Reject with a base error object.
          requestInfo.reject(TransferrableError.fromJSON(responseMessage.body))
        }
      } else {
        // Request was processed without errors
        requestInfo.resolve(responseMessage)
      }

      this._messages.delete(responseMessage.requestID) // Remove request from a map
    }
  }

  rejectRequest (requestID, error) {
    if (requestID && this._messages.has(requestID)) {
      let requestInfo = this._messages.get(requestID) // eslint-disable-line prefer-const
      window.clearTimeout(requestInfo.timeoutID) // Clear a timeout
      requestInfo.reject(error)
      this._messages.delete(requestID) // Remove request from a map
    }
  }

  sendRequestTo (destName, request, timeout = 10000) {
    if (!destName) {
      throw new Error('Destination name is not provided')
    }

    if (!this._destinations.has(destName)) {
      throw new Error(`Unknown destination ${destName}`)
    }

    const promise = this.registerRequest(request, timeout)
    this._destinations.get(destName).sendMessage(request)
    return promise
  }

  sendResponseTo (request, response) {
    if (!destName) {
      throw new Error('Destination name is not provided')
    }

    if (!this._destinations.has(destName)) {
      throw new Error(`Unknown destination ${destName}`)
    }

    const promise = this.registerRequest(request, timeout)
    this._destinations.get(destName).sendMessage(request)
    return promise
  }

  sendRequestToTab (request, timeout, tabID) {
    const promise = this.registerRequest(request, timeout)

    browser.tabs.sendMessage(tabID, request).catch(error => {
      logger.error('Tabs.sendMessage() failed:', error)
      this.rejectRequest(request.ID, error)
    })
    return promise
  }

  /**
   * Sends a request to the background with a specified timout.
   * @param request
   * @param timeout
   * @return {Promise}
   */
  sendRequestToBg (request, timeout) {
    const promise = this.registerRequest(request, timeout)
    browser.runtime.sendMessage(request).catch(error => {
      logger.error('Sending request to a background failed:', error)
      this.rejectRequest(request.ID, error)
    })
    return promise
  }

  sendResponseToTab (message, tabID) {
    return browser.tabs.sendMessage(tabID, message)
  }

  sendResponseToBg (message) {
    return browser.runtime.sendMessage(message)
  }

  sendMessageToTab (request, tabID) {
    return browser.tabs.sendMessage(tabID, request)
  }

  sendMessageToBg (request) {
    return browser.runtime.sendMessage(request)
  }
}
