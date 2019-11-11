import Destination from './destination.js'

export default class WindowDestination extends Destination {
  constructor (name, { targetURL, targetIframeID } = {}) {
    super(name)

    if (!targetURL) {
      throw new Error('Target URL is not provided')
    }

    if (!targetIframeID) {
      throw new Error('Target iframe ID is not provided')
    }

    this._targetURL = targetURL
    this._targetIframeID = targetIframeID
    this._messageCallback = null
    window.addEventListener('message', this.receiveMessage, false)
  }

  registerMessageCallback (callbackFn) {
    this._messageCallback = callbackFn
  }

  sendMessage (message) {
    const iframe = document.querySelector(`#${this._targetIframeID}`)
    if (!iframe) {
      throw new Error(`An #${this._targetIframeID} iframe does not exist in the document`)
    }
    const iframeWindow = iframe.contentWindow
    iframeWindow.postMessage(message, this._targetURL)
  }

  receiveMessage (event) {
    console.info('Receive message has been called')
    if (event.origin !== this._targetURL) {
      // Message came from a destination we're not listening for
      return
    }
    console.info('A CEDICT response has been received', event)

    let message = event.data // eslint-disable-line prefer-const
    message.commType = 'postMessage'
    message.originURL = event.origin

    if (this._messageCallback) {
      this._messageCallback(message)
    }
  }
}
