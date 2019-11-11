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
/*! exports provided: MessagingService, WindowDestination, RequestMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lexisCs_messaging_messaging_service_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lexisCs/messaging/messaging-service.js */ "./src/messaging/messaging-service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessagingService", function() { return _lexisCs_messaging_messaging_service_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _lexisCs_messaging_destinations_window_destination_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lexisCs/messaging/destinations/window-destination.js */ "./src/messaging/destinations/window-destination.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WindowDestination", function() { return _lexisCs_messaging_destinations_window_destination_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _lexisCs_messaging_messages_request_message_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lexisCs/messaging/messages/request-message.js */ "./src/messaging/messages/request-message.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RequestMessage", function() { return _lexisCs_messaging_messages_request_message_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });








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

/***/ "./src/messaging/destinations/destination.js":
/*!***************************************************!*\
  !*** ./src/messaging/destinations/destination.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Destination; });
class Destination {
  constructor (name) {
    if (!name) {
      throw new Error('Destination name is missing')
    }
    this.name = name
  }
}


/***/ }),

/***/ "./src/messaging/destinations/window-destination.js":
/*!**********************************************************!*\
  !*** ./src/messaging/destinations/window-destination.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WindowDestination; });
/* harmony import */ var _destination_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./destination.js */ "./src/messaging/destinations/destination.js");


class WindowDestination extends _destination_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
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


class Message {
  constructor (body) {
    this.role = undefined
    this.type = Message.types.GENERIC
    this.ID = uuid_v4__WEBPACK_IMPORTED_MODULE_0___default()()
    this.requestID = null
    this.body = body
  }
}

/**
 * Specifies a message type
 */
Message.types = {
  GENERIC: 'Generic'
}

/**
 * Specifies whether a message is a request or response
 */
Message.roles = {
  REQUEST: 'Request',
  RESPONSE: 'Response'
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


class RequestMessage extends _message_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor (body) {
    super(body)
    this.role = _message_js__WEBPACK_IMPORTED_MODULE_0__["default"].roles.REQUEST
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
/* harmony import */ var _message_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message.js */ "./src/messaging/messages/message.js");


/**
 * A generic response to a request message
 */
class ResponseMessage extends _message_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * @param {RequestMessage} request - A request that resulted in this response
   * @param {Object} body - A response message body
   * @param {symbol} responseCode - A status code for a request that initiated this response
   * (i.e. Success, Failure, etc.)
   */
  constructor (request, body = {}, responseCode = ResponseMessage.responseCodes.UNDEFINED) {
    super(body)
    this.role = _message_js__WEBPACK_IMPORTED_MODULE_0__["default"].roles.RESPONSE
    this.requestID = request.ID // ID of the request to match request and response
    this.responseCode = responseCode
  }

  /**
   * A builder for a message with a SUCCESS response code.
   *
   * @param request
   * @param {Object} body - A response message body
   * @return {ResponseMessage}
   * @constructor
   */
  static Success (request, body) {
    return new this(request, body, ResponseMessage.responseCodes.SUCCESS)
  }

  /**
   * A builder for a message with an Error response code.
   *
   * @param request
   * @param {Error} error - An error object
   * @return {ResponseMessage}
   * @constructor
   */
  static Error (request, error) {
    return new this(request, error, ResponseMessage.responseCodes.ERROR)
  }

  /**
   * Checks if this message is a response (i.e. follows a response message format)
   *
   * @param message
   */
  static isResponse (message) {
    return message.role &&
    Symbol.for(message.role) === _message_js__WEBPACK_IMPORTED_MODULE_0__["default"].roles.RESPONSE && message.requestID
  }
}

/**
 * Specifies whether a request was processed successfully or not
 */
ResponseMessage.responseCodes = {
  // Request was processed successfully.
  // In this case a message body may contain a response data object or be empty
  SUCCESS: 'Success',

  // There is no information about what was the outcome of request
  UNDEFINED: 'Undefined',

  // Request failed
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



class MessagingService {
  constructor () {
    /**
     * A map where outgoing messages will be stored.
     *
     * @type {Map<string, StoredRequest>}
     */
    this._messages = new Map()
    this._destinations = new Map()

    console.info('A messaging service has been created')
  }

  registerDestination (destination) {
    this._destinations.set(destination.name, destination)
    destination.registerMessageCallback(this.dispatchMessage.bind(this))
  }

  /**
   * A message dispatcher function
   *
   * @param message
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
    let storedRequest = new _stored_request__WEBPACK_IMPORTED_MODULE_1__["default"](request) // eslint-disable-line prefer-const
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
   *
   * @param responseMessage
   */
  fulfillRequest (responseMessage) {
    if (this._messages.has(responseMessage.requestID)) {
      const requestInfo = this._messages.get(responseMessage.requestID)
      const responseCode = _messages_response_message__WEBPACK_IMPORTED_MODULE_0__["default"].responseCode(responseMessage)
      window.clearTimeout(requestInfo.timeoutID) // Clear a timeout
      if (responseCode === _messages_response_message__WEBPACK_IMPORTED_MODULE_0__["default"].responseCodes.ERROR) {
        // There was an error
        requestInfo.reject(responseMessage) // Resolve with a response message body
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
class StoredRequest {
  constructor () {
    this.resolve = undefined
    this.reject = undefined
    // Promise sets reject and resolve
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
//# sourceMappingURL=lexis-cs.js.map