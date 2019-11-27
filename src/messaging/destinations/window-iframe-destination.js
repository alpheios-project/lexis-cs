/**
 * @module WindowIframeDestination
 */
import Destination from '@lexisCs/messaging/destinations/destination.js'

/** WindowIframeDestination represents a content window within an iframe */
export default class WindowIframeDestination extends Destination {
  /**
   * @param {string} name - A name of a destination (for addressing a destination in a messaging service).
   * @param {string} targetURL - A URL of a document within an iframe where messages will be sent.
   * @param {string} targetIframeID - An ID of an iframe element (without `#`).
   */
  constructor ({ name, targetURL, targetIframeID } = {}) {
    super({ name })

    if (!targetURL) {
      throw new Error('Target URL is not provided')
    }

    if (!targetIframeID) {
      throw new Error('Target iframe ID is not provided')
    }

    /**
     * A URL of a document within an iframe where messages will be sent.
     *
     * @type {string}
     * @private
     */
    this._targetURL = targetURL

    /**
     * An ID of an iframe element (without `#`).
     *
     * @type {string}
     * @private
     */
    this._targetIframeID = targetIframeID

    window.addEventListener('message', this._responseHandler.bind(this), false)
  }

  /**
   * Registers a function to be called an a receiving side when a message from origin to destination will arrive.
   * This callback will receive the following arguments: the request object (of `RequestMessage` type)
   * and the function that can be used to send a response.
   *
   * @param {Function} callbackFn - A function that will be called when a request will arrive to its destination.
   */
  registerReceiverCallback (callbackFn) {
    window.addEventListener('message', this._requestHandler.bind(this, callbackFn), false)
  }

  /**
   * A function that will be called to send a request from origin to destination.
   *
   * @param {RequestMessage} requestMessage - A request message object.
   */
  sendRequest (requestMessage) {
    const iframe = document.querySelector(`#${this._targetIframeID}`)
    if (!iframe) {
      throw new Error(`An #${this._targetIframeID} iframe does not exist in the document`)
    }
    const iframeWindow = iframe.contentWindow
    iframeWindow.postMessage(requestMessage, this._targetURL)
  }

  /**
   * A function that is used to send a response from destination to origin.
   *
   * @param {ResponseMessage} responseMessage - A response message object.
   */
  sendResponse (responseMessage) {
    window.parent.postMessage(responseMessage, responseMessage.requestHeader.origin)
  }

  /**
   * An internal handler that is called when request arrives to its destination.
   *
   * @param {Function} callbackFn - A client's callback function that will be called and
   *                                passed a request (a `RequestMessage` object).
   * @param {Event} event - A browser's event object.
   * @private
   */
  _requestHandler (callbackFn, event) {
    // `data` prop of an event contains a request message object
    let request = event.data // eslint-disable-line prefer-const
    request.header.origin = event.origin
    callbackFn(request, this.sendResponse.bind(this))
  }

  /**
   * An internal handler that is called when response arrives from destination to origin.
   *
   * @param {Event} event - A browser's event object.
   * @private
   */
  _responseHandler (event) {
    if (event.origin !== this._targetURL) {
      // Message came from a destination we're not listening for
      return
    }

    // `data` prop of an event contains a response message object
    const responseMessage = event.data
    if (this._responseCallback) {
      this._responseCallback(responseMessage)
    }
  }
}
