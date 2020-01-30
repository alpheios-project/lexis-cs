(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: MessagingService, WindowIframeDestination, RequestMessage, CedictDestinationConfig, CedictCharacterForms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lexisCs_messaging_messaging_service_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lexisCs/messaging/messaging-service.js */ "./src/messaging/messaging-service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessagingService", function() { return _lexisCs_messaging_messaging_service_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _lexisCs_messaging_destinations_window_iframe_destination_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lexisCs/messaging/destinations/window-iframe-destination.js */ "./src/messaging/destinations/window-iframe-destination.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WindowIframeDestination", function() { return _lexisCs_messaging_destinations_window_iframe_destination_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _lexisCs_messaging_messages_request_message_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lexisCs/messaging/messages/request-message.js */ "./src/messaging/messages/request-message.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RequestMessage", function() { return _lexisCs_messaging_messages_request_message_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _lexisCs_cedict_service_constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lexisCs/cedict-service/constants.js */ "./src/cedict-service/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CedictCharacterForms", function() { return _lexisCs_cedict_service_constants_js__WEBPACK_IMPORTED_MODULE_3__["CedictCharacterForms"]; });

/* harmony import */ var _lexisCs_configurations_destinations_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lexisCs/configurations/destinations.js */ "./src/configurations/destinations.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CedictDestinationConfig", function() { return _lexisCs_configurations_destinations_js__WEBPACK_IMPORTED_MODULE_4__["CedictDestinationConfig"]; });










/***/ }),

/***/ "./node_modules/uuid/lib/bytesToUuid.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/bytesToUuid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "./node_modules/uuid/lib/rng-browser.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/rng-browser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "./node_modules/uuid/v4.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v4.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ "./src/cedict-service/constants.js":
/*!*****************************************!*\
  !*** ./src/cedict-service/constants.js ***!
  \*****************************************/
/*! exports provided: CedictCharacterForms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CedictCharacterForms", function() { return CedictCharacterForms; });
/**
 * Character forms that are supported with the current version of the service.
 *
 * @type {{SIMPLIFIED: string, TRADITIONAL: string}}
 */
const CedictCharacterForms = {
  SIMPLIFIED: 'simplified',
  TRADITIONAL: 'traditional'
}


/***/ }),

/***/ "./src/configurations/destinations.js":
/*!********************************************!*\
  !*** ./src/configurations/destinations.js ***!
  \********************************************/
/*! exports provided: CedictDestinationConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CedictDestinationConfig", function() { return CedictDestinationConfig; });
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


/***/ }),

/***/ "./src/messaging/destinations/destination.js":
/*!***************************************************!*\
  !*** ./src/messaging/destinations/destination.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Destination; });
/**
 * @module Destination
 */

/** Destination represents a place where messages are sent to and are received from (e.g. a windows) */
class Destination {
  /**
   * Creates an instance of a Destination object. Descendants may take configuration parameters through
   * a second argument that they can define.
   *
   * @param {object} [configuration={}] - A configuration object for a destination.
   * @param {string} configuration.name - A name of a particular destination.
   */
  constructor ({ name } = {}) {
    if (!name) {
      throw new Error('Destination name is missing')
    }

    /**
     * A name of a destination. Used to refer to it within a messaging service.
     *
     * @type {string}
     * @public
     */
    this.name = name

    /**
     * A function that will be called when a response from destination is received.
     *
     * @type {Function}
     * @private
     */
    this._responseCallback = null
  }

  /**
   * Registers a function to call when a response from destination is received.
   *
   * @param {Function} callbackFn - A function to be called when response is received.
   */
  registerResponseCallback (callbackFn) {
    this._responseCallback = callbackFn
  }
}


/***/ }),

/***/ "./src/messaging/destinations/window-iframe-destination.js":
/*!*****************************************************************!*\
  !*** ./src/messaging/destinations/window-iframe-destination.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WindowIframeDestination; });
/* harmony import */ var _lexisCs_messaging_destinations_destination_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lexisCs/messaging/destinations/destination.js */ "./src/messaging/destinations/destination.js");
/**
 * @module WindowIframeDestination
 */


/** WindowIframeDestination represents a content window within an iframe */
class WindowIframeDestination extends _lexisCs_messaging_destinations_destination_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * @param {object} [configuration={}] - An object containing configuration parameters.
   * @param {string} configuration.name - A name of a destination (for addressing a destination in a messaging service).
   * @param {string} configuration.targetURL - A URL of a document within an iframe where messages will be sent.
   * @param {string} configuration.targetIframeID - An ID of an iframe element (without `#`).
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


/***/ }),

/***/ "./src/messaging/messages/message.js":
/*!*******************************************!*\
  !*** ./src/messaging/messages/message.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Message; });
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid/v4 */ "./node_modules/uuid/v4.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @module Message
 */


/** A base class for all types of messages */
class Message {
  /**
   * @param {object} [body={}] - A plain JS object (with no methods) representing a body of the message.
   */
  constructor (body = {}) {
    /**
     * A message's role (@see {@link Message.roles}). Will be defined in descendants.
     *
     * @type {string | undefined}
     */
    this.role = undefined

    /**
     * A type of the message. Used to distinguish one kind of message from the other (@see {@link Message.types}).
     *
     * @type {string | undefined}
     */
    this.type = Message.types.GENERIC

    /**
     * A unique identifier of the message.
     *
     * @type {string}
     */
    this.ID = uuid_v4__WEBPACK_IMPORTED_MODULE_0___default()()

    /**
     * An object with no methods representing a message body.
     *
     * @type {object}
     */
    this.body = body
  }
}

/**
 * Specifies whether a message is request or response.
 */
Message.roles = {
  REQUEST: 'Request',
  RESPONSE: 'Response'
}

/**
 * Specifies a message type: what kind of message it is and what purpose it serves.
 */
Message.types = {
  GENERIC: 'Generic'
}


/***/ }),

/***/ "./src/messaging/messages/request-message.js":
/*!***************************************************!*\
  !*** ./src/messaging/messages/request-message.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RequestMessage; });
/* harmony import */ var _message_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message.js */ "./src/messaging/messages/message.js");
/**
 * @module RequestMessage
 */


/** A request message */
class RequestMessage extends _message_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * @param {object} [body={}] - A plain JS object (with no methods) representing a body of the message.
   */
  constructor (body = {}) {
    super(body)
    this.role = _message_js__WEBPACK_IMPORTED_MODULE_0__["default"].roles.REQUEST

    /**
     * A message header. Will contain routing information usually.
     *
     * @type {object}
     */
    this.header = {}
  }
}


/***/ }),

/***/ "./src/messaging/messages/response-message.js":
/*!****************************************************!*\
  !*** ./src/messaging/messages/response-message.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResponseMessage; });
/* harmony import */ var _lexisCs_messaging_messages_message_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lexisCs/messaging/messages/message.js */ "./src/messaging/messages/message.js");
/* harmony import */ var _lexisCs_messaging_messages_request_message_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lexisCs/messaging/messages/request-message.js */ "./src/messaging/messages/request-message.js");
/**
 * @module ResponseMessage
 */



/** A response message that is sent as an answer to the request message. */
class ResponseMessage extends _lexisCs_messaging_messages_message_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * @param {RequestMessage} request - A request that initiated this response. Used to copy routing information mostly.
   * @param {object} [body={}] - A body of the response, a plain JS object with no methods.
   * @param {string} responseCode - A code to indicate results of the request handling: Success, Failure, etc.
   */
  constructor (request, body = {}, responseCode = ResponseMessage.responseCodes.UNDEFINED) {
    super(body)
    if (!request) throw new Error('Request is not provided')
    if (!request.ID) throw new Error('Request has no ID')
    this.role = _lexisCs_messaging_messages_message_js__WEBPACK_IMPORTED_MODULE_0__["default"].roles.RESPONSE
    this.requestHeader = request.header || {}
    this.requestID = request.ID // ID of the request to match request and response
    this.responseCode = responseCode
  }

  /**
   * A builder for a response message with a SUCCESS response code.
   *
   * @param {RequestMessage} request - An original request.
   * @param {object} [body={}] - A body of response message.
   * @returns {ResponseMessage} - A newly created response message with the SUCCESS return code.
   * @class
   */
  static Success (request, body = {}) {
    return new this(request, body, ResponseMessage.responseCodes.SUCCESS)
  }

  /**
   * A builder for a message with an ERROR response code. Error information will be sent within the message body.
   *
   * @param {RequestMessage} request - An original request.
   * @param {Error} error - An error object containing error information.
   * @returns {ResponseMessage} - A newly created response message with the SUCCESS return code.
   * @class
   */
  static Error (request, error) {
    return new this(request, error, ResponseMessage.responseCodes.ERROR)
  }

  /**
   * Checks if this message is a response (i.e. if it follows a response message format and conventions).
   *
   * @param {RequestMessage | ResponseMessage} message - A request or response message to be tested.
   * @returns {boolean} - True if the message is a response, false otherwise.
   */
  static isResponse (message) {
    return message.role &&
      message.role === _lexisCs_messaging_messages_message_js__WEBPACK_IMPORTED_MODULE_0__["default"].roles.RESPONSE &&
      message.requestHeader &&
      message.requestID
  }
}

/**
 * Specifies whether a request was processed successfully or not.
 */
ResponseMessage.responseCodes = {
  // Request was processed successfully.
  // In this case a message body may contain a response data object or be empty.
  SUCCESS: 'Success',

  // There is no information about what was the outcome of request.
  UNDEFINED: 'Undefined',

  // Request failed. A message body will have information about an error.
  ERROR: 'Error'
}


/***/ }),

/***/ "./src/messaging/messaging-service.js":
/*!********************************************!*\
  !*** ./src/messaging/messaging-service.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MessagingService; });
/* harmony import */ var _messages_response_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages/response-message */ "./src/messaging/messages/response-message.js");
/* harmony import */ var _stored_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stored-request */ "./src/messaging/stored-request.js");
/**
 * @module MessagingService
 */



/**
 * A map to keep "single" instances of MessagingService objects.
 *
 * @type {Map<string, MessagingService>}
 */
let services = new Map() // eslint-disable-line prefer-const

/** A messaging for sending and receiving messages to and from various destinations */
class MessagingService {
  /**
   * Creates an instance of a messaging service.
   *
   * @param {string} name - A name of a messaging service. Useful in identifying the service when
   *        several clients need to share the same instance of a service.
   * @param {Destination || Destination[]} destinations - One or several
   *        destination objects to be used with the messaging service.
   */
  constructor (name, destinations = []) {
    if (!name) throw new Error(MessagingService.errMsgs.NO_NAME)
    this.name = name
    /**
     * A map object where outgoing messages will be stored. The key is the message ID and the value is an object
     * that stores details about the message being sent.
     *
     * @type {Map<string, StoredRequest>}
     */
    this._messages = new Map()

    /**
     * A map object where outgoing messages will be stored. The key is a destination name and the value is
     * the Destination object.
     *
     * @type {Map<string, Destination>}
     */
    this._destinations = new Map()

    // If provided as a singular value convert destination into an array
    if (!Array.isArray(destinations)) { destinations = [destinations] }
    destinations.forEach(destination => this.registerDestination(destination))
  }

  /**
   * Check if service with a given name has already been created.
   *
   * @param {string} name - A name of a service.
   * @returns {boolean} Returns true if service has already been created or false otherwise.
   */
  static hasService (name) {
    return services.has(name)
  }

  /**
   * Returns an instance of a service or `undefined` if service does not exist.
   *
   * @param {string} name - A name of a service.
   * @returns {MessagingService|undefined} If service exists, returns an instance of a service.
   *          If it does not, returns `undefined`.
   */
  static getService (name) {
    return services.get(name)
  }

  /**
   * Creates an instance of a MessagingService and adds it to the map of instances.
   *
   * @param {string} name - A map of messaging service to create.
   * @param {Destination|Destination[]} destinations - One or several
   *        destination objects to be used with the messaging service.
   * @returns {MessagingService} An instance of a newly created messaging service.
   */
  static createService (name, destinations = []) {
    const service = new MessagingService(name, destinations)
    services.set(name, service)
    return service
  }

  /**
   * Removes an instance of a MessagingService form the map of instances.
   *
   * @param {string} name - A name of a service to remove.
   * @returns {boolean} True if a service in the map existed and has been removed,
   *          or false if the service does not exist.
   */
  static deleteService (name) {
    return services.delete(name)
  }

  /**
   * Registers a new destination by adding it to the destinations map and setting a response callback.
   *
   * @param {Destination} destination - A destination object to register.
   */
  registerDestination (destination) {
    if (this._destinations.has(destination.name)) {
      throw new Error('Destination already exists')
    }
    this._destinations.set(destination.name, destination)
    destination.registerResponseCallback(this.dispatchMessage.bind(this))
  }

  /**
   * Updates a destinations that is already registered.
   *
   * @param {Destination} destination - A destination object to register.
   */
  updateDestination (destination) {
    if (!this._destinations.has(destination.name)) {
      throw new Error('Cannot update a destination that does not exist')
    }
    this._destinations.set(destination.name, destination)
    destination.registerResponseCallback(this.dispatchMessage.bind(this))
  }

  /**
   * A function to handle incoming messages.
   *
   * @param {ResponseMessage} message - An incoming response message.
   */
  dispatchMessage (message) {
    if (!_messages_response_message__WEBPACK_IMPORTED_MODULE_0__["default"].isResponse(message)) {
      console.error('A message not following a response format will be ignored:', message)
      return
    }

    if (!this._messages.has(message.requestID)) {
      /*
      Silently ignore a message with request ID not registered in the map.
      It may be a message that is handled by the other messaging service.
      */
      return
    }
    const requestInfo = this._messages.get(message.requestID)
    window.clearTimeout(requestInfo.timeoutID) // Clear a timeout
    const responseCode = message.responseCode

    if (responseCode === _messages_response_message__WEBPACK_IMPORTED_MODULE_0__["default"].responseCodes.ERROR) {
      // There was an error returned. An error info is in the message body.
      requestInfo.reject(message.body)
    } else {
      // Request was processed without errors
      requestInfo.resolve(message)
    }
    this._messages.delete(message.requestID) // Remove request info from the map
  }

  /**
   * Registers an outgoing request within a request map. Returns a promise that will be fulfilled when
   * a response will be received or rejected when a timeout will expire.
   *
   * @param {RequestMessage} request - An outgoing request.
   * @param {number} timeout - A number of milliseconds we'll wait for response before rejecting a promise.
   * @returns {Promise} - A promise that will be resolved with the message response or rejected with an error info.
   */
  registerRequest (request, timeout = 10000) {
    if (this._messages.has(request.ID)) throw new Error(`Request with ${request.ID} ID is already registered`)
    let storedRequest = new _stored_request__WEBPACK_IMPORTED_MODULE_1__["default"](request) // eslint-disable-line prefer-const
    this._messages.set(request.ID, storedRequest)
    storedRequest.timeoutID = window.setTimeout((requestID) => {
      storedRequest.reject(new Error(`Timeout has been expired for a message with request ID ${request.ID}`))
      this._messages.delete(requestID) // Remove request record from the map
    }, timeout)
    return storedRequest.promise
  }

  /**
   * Sends a request message to a specific destination.
   *
   * @param {string} destName - A name of a destination where request will be sent to.
   * @param {RequestMessage} request - A request message to be sent.
   * @param {number} timeout - How many milliseconds to wait for a response.
   * @returns {Promise<ResponseMessage> | Promise<Error> | Promise<object>} - A promise either resolved
   *          with response message or rejected with the error info.
   */
  sendRequestTo (destName, request, timeout = 10000) {
    if (!destName) {
      throw new Error('Destination name is not provided')
    }

    if (!this._destinations.has(destName)) {
      throw new Error(`Unknown destination ${destName}`)
    }

    const promise = this.registerRequest(request, timeout)
    this._destinations.get(destName).sendRequest(request)
    return promise
  }

  /**
   * Sets a function to be called on a destination side every time a message from the origin arrives.
   *
   * @param {string} destName - A name of a destination to listen to messages from.
   * @param {Function} callbackFn - A function to call when message is arrived. A message will be passed
   *                                to this function as an argument.
   */
  registerReceiverCallback (destName, callbackFn) {
    if (!destName) {
      throw new Error('No destination name provided')
    }

    if (!this._destinations.has(destName)) {
      throw new Error(`Unknown destination ${destName}`)
    }

    this._destinations.get(destName).registerReceiverCallback(callbackFn)
  }
}

MessagingService.errMsgs = {
  NO_NAME: 'MessagingService must be created with a name'
}


/***/ }),

/***/ "./src/messaging/stored-request.js":
/*!*****************************************!*\
  !*** ./src/messaging/stored-request.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StoredRequest; });
/**
 * @module StoredRequest
 */

/** Stores information about request being sent via the messaging service */
class StoredRequest {
  constructor () {
    /**
     * A function to resolve the request's promise.
     *
     * @type {Function}
     */
    this.resolve = null

    /**
     * A function to reject the request's promise.
     *
     * @type {Function}
     */
    this.reject = null

    // A promise that will be resolved or rejected when the response will arrive or the timeout will expire
    this.promise = new Promise(this.executor.bind(this))
  }

  executor (resolve, reject) {
    this.resolve = resolve
    this.reject = reject
  }
}


/***/ })

/******/ });
});
//# sourceMappingURL=lexis-cs-test-bundle.js.map