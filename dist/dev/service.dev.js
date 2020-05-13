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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/cedict-service/service.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/alpheios-messaging/dist/dev/alpheios-messaging.js":
/*!************************************************************************!*\
  !*** ./node_modules/alpheios-messaging/dist/dev/alpheios-messaging.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else { var i, a; }
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
/*! exports provided: MessagingService, WindowIframeDestination, RequestMessage, ResponseMessage, CedictDestinationConfig, CedictDestinationDevConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _messServ_core_messaging_service_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @messServ/core/messaging-service.js */ "./src/core/messaging-service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessagingService", function() { return _messServ_core_messaging_service_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _messServ_destinations_window_iframe_destination_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @messServ/destinations/window-iframe-destination.js */ "./src/destinations/window-iframe-destination.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WindowIframeDestination", function() { return _messServ_destinations_window_iframe_destination_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _messServ_messages_request_message_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @messServ/messages/request-message.js */ "./src/messages/request-message.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RequestMessage", function() { return _messServ_messages_request_message_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _messServ_messages_response_message_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @messServ/messages/response-message.js */ "./src/messages/response-message.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResponseMessage", function() { return _messServ_messages_response_message_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _messServ_configurations_destinations_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @messServ/configurations/destinations.js */ "./src/configurations/destinations.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CedictDestinationConfig", function() { return _messServ_configurations_destinations_js__WEBPACK_IMPORTED_MODULE_4__["CedictDestinationConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CedictDestinationDevConfig", function() { return _messServ_configurations_destinations_js__WEBPACK_IMPORTED_MODULE_4__["CedictDestinationDevConfig"]; });










/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/bytesToUuid.js":
/*!***********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/bytesToUuid.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  var bth = byteToHex; // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4

  return [bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]]].join('');
}

/* harmony default export */ __webpack_exports__["default"] = (bytesToUuid);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/index.js ***!
  \*****************************************************/
/*! exports provided: v1, v3, v4, v5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v1.js */ "./node_modules/uuid/dist/esm-browser/v1.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v1", function() { return _v1_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _v3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v3.js */ "./node_modules/uuid/dist/esm-browser/v3.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v3", function() { return _v3_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _v4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./v4.js */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v4", function() { return _v4_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _v5_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./v5.js */ "./node_modules/uuid/dist/esm-browser/v5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v5", function() { return _v5_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/md5.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/md5.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes == 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Array(msg.length);

    for (var i = 0; i < msg.length; i++) {
      bytes[i] = msg.charCodeAt(i);
    }
  }

  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */


function md5ToHexEncodedArray(input) {
  var i;
  var x;
  var output = [];
  var length32 = input.length * 32;
  var hexTab = '0123456789abcdef';
  var hex;

  for (i = 0; i < length32; i += 8) {
    x = input[i >> 5] >>> i % 32 & 0xff;
    hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }

  return output;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */


function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[(len + 64 >>> 9 << 4) + 14] = len;
  var i;
  var olda;
  var oldb;
  var oldc;
  var oldd;
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;

  for (i = 0; i < x.length; i += 16) {
    olda = a;
    oldb = b;
    oldc = c;
    oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }

  return [a, b, c, d];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */


function bytesToWords(input) {
  var i;
  var output = [];
  output[(input.length >> 2) - 1] = undefined;

  for (i = 0; i < output.length; i += 1) {
    output[i] = 0;
  }

  var length8 = input.length * 8;

  for (i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }

  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */


function safeAdd(x, y) {
  var lsw = (x & 0xffff) + (y & 0xffff);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */


function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */


function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}

function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}

function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}

function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

/* harmony default export */ __webpack_exports__["default"] = (md5);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rng; });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
// find the complete implementation of crypto (msCrypto) on IE11.
var getRandomValues = typeof crypto != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto != 'undefined' && typeof msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto);
var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

function rng() {
  if (!getRandomValues) {
    throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/sha1.js":
/*!****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/sha1.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;

    case 1:
      return x ^ y ^ z;

    case 2:
      return x & y ^ x & z ^ y & z;

    case 3:
      return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}

function sha1(bytes) {
  var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  var H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes == 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Array(msg.length);

    for (var i = 0; i < msg.length; i++) {
      bytes[i] = msg.charCodeAt(i);
    }
  }

  bytes.push(0x80);
  var l = bytes.length / 4 + 2;
  var N = Math.ceil(l / 16);
  var M = new Array(N);

  for (var i = 0; i < N; i++) {
    M[i] = new Array(16);

    for (var j = 0; j < 16; j++) {
      M[i][j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
    }
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (var i = 0; i < N; i++) {
    var W = new Array(80);

    for (var t = 0; t < 16; t++) {
      W[t] = M[i][t];
    }

    for (var t = 16; t < 80; t++) {
      W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
    }

    var a = H[0];
    var b = H[1];
    var c = H[2];
    var d = H[3];
    var e = H[4];

    for (var t = 0; t < 80; t++) {
      var s = Math.floor(t / 20);
      var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }

  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

/* harmony default export */ __webpack_exports__["default"] = (sha1);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v1.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v1.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bytesToUuid.js */ "./node_modules/uuid/dist/esm-browser/bytesToUuid.js");

 // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;

var _clockseq; // Previous uuid creation time


var _lastMSecs = 0;
var _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];
  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    var seedBytes = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : Object(_bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__["default"])(b);
}

/* harmony default export */ __webpack_exports__["default"] = (v1);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v3.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v3.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ "./node_modules/uuid/dist/esm-browser/v35.js");
/* harmony import */ var _md5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./md5.js */ "./node_modules/uuid/dist/esm-browser/md5.js");


var v3 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v3', 0x30, _md5_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (v3);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v35.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v35.js ***!
  \***************************************************/
/*! exports provided: DNS, URL, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DNS", function() { return DNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL", function() { return URL; });
/* harmony import */ var _bytesToUuid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bytesToUuid.js */ "./node_modules/uuid/dist/esm-browser/bytesToUuid.js");


function uuidToBytes(uuid) {
  // Note: We assume we're being passed a valid uuid string
  var bytes = [];
  uuid.replace(/[a-fA-F0-9]{2}/g, function (hex) {
    bytes.push(parseInt(hex, 16));
  });
  return bytes;
}

function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  var bytes = new Array(str.length);

  for (var i = 0; i < str.length; i++) {
    bytes[i] = str.charCodeAt(i);
  }

  return bytes;
}

var DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
var URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
/* harmony default export */ __webpack_exports__["default"] = (function (name, version, hashfunc) {
  var generateUUID = function generateUUID(value, namespace, buf, offset) {
    var off = buf && offset || 0;
    if (typeof value == 'string') value = stringToBytes(value);
    if (typeof namespace == 'string') namespace = uuidToBytes(namespace);
    if (!Array.isArray(value)) throw TypeError('value must be an array of bytes');
    if (!Array.isArray(namespace) || namespace.length !== 16) throw TypeError('namespace must be uuid string or an Array of 16 byte values'); // Per 4.3

    var bytes = hashfunc(namespace.concat(value));
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      for (var idx = 0; idx < 16; ++idx) {
        buf[off + idx] = bytes[idx];
      }
    }

    return buf || Object(_bytesToUuid_js__WEBPACK_IMPORTED_MODULE_0__["default"])(bytes);
  }; // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name;
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bytesToUuid.js */ "./node_modules/uuid/dist/esm-browser/bytesToUuid.js");



function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof options == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }

  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || Object(_bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ __webpack_exports__["default"] = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v5.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v5.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ "./node_modules/uuid/dist/esm-browser/v35.js");
/* harmony import */ var _sha1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sha1.js */ "./node_modules/uuid/dist/esm-browser/sha1.js");


var v5 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v5', 0x50, _sha1_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (v5);

/***/ }),

/***/ "./src/configurations/destinations.js":
/*!********************************************!*\
  !*** ./src/configurations/destinations.js ***!
  \********************************************/
/*! exports provided: CedictDestinationConfig, CedictDestinationDevConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CedictDestinationConfig", function() { return CedictDestinationConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CedictDestinationDevConfig", function() { return CedictDestinationDevConfig; });
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
/**
 * This is a development version of the above configuration
 *
 * @type {{targetIframeID: string, name: string, targetURL: string}}
 */
const CedictDestinationDevConfig = {
  name: 'cedict',
  targetURL: 'https://lexis-dev.alpheios.net/index-dev.html',
  targetIframeID: 'alpheios-lexis-cs'
}


/***/ }),

/***/ "./src/core/messaging-service.js":
/*!***************************************!*\
  !*** ./src/core/messaging-service.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MessagingService; });
/* harmony import */ var _messServ_messages_message_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @messServ/messages/message.js */ "./src/messages/message.js");
/* harmony import */ var _messServ_messages_response_message_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @messServ/messages/response-message.js */ "./src/messages/response-message.js");
/* harmony import */ var _messServ_core_stored_request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @messServ/core/stored-request.js */ "./src/core/stored-request.js");
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
    if (destination.ableToSend) { destination.registerResponseCallback(this.dispatchMessage.bind(this)) }
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
    // Call `deregister` on the destination in order to let it clean the things up
    this._destinations.get(destination.name).deregister()
    this._destinations.set(destination.name, destination)
    // Register a response callback only if destination supports a SEND mode
    if (destination.ableToSend) { destination.registerResponseCallback(this.dispatchMessage.bind(this)) }
  }

  /**
   * A function to handle incoming messages.
   *
   * @param {ResponseMessage} message - An incoming response message.
   */
  dispatchMessage (message) {
    if (!_messServ_messages_message_js__WEBPACK_IMPORTED_MODULE_0__["default"].isKnownType(message.type)) {
      // Ignore messages that we do not support
      return
    }
    if (!_messServ_messages_response_message_js__WEBPACK_IMPORTED_MODULE_1__["default"].isResponse(message)) {
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

    if (responseCode === _messServ_messages_response_message_js__WEBPACK_IMPORTED_MODULE_1__["default"].responseCodes.ERROR) {
      // The message returned an error. The message body may contain additional information about an error.
      requestInfo.reject(message)
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
    let storedRequest = new _messServ_core_stored_request_js__WEBPACK_IMPORTED_MODULE_2__["default"](request) // eslint-disable-line prefer-const
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

    try {
      this._destinations.get(destName).sendRequest(request)
    } catch (err) {
      throw new Error(`Request to ${destName} failed: ${err.message}`)
    }
    // Do not register request before we're sure that the message is sent successfully.
    return this.registerRequest(request, timeout)
  }
}

MessagingService.errMsgs = {
  NO_NAME: 'MessagingService must be created with a name'
}


/***/ }),

/***/ "./src/core/stored-request.js":
/*!************************************!*\
  !*** ./src/core/stored-request.js ***!
  \************************************/
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


/***/ }),

/***/ "./src/destinations/destination.js":
/*!*****************************************!*\
  !*** ./src/destinations/destination.js ***!
  \*****************************************/
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
   * @param {string[]} configuration.commModes - A list of communication modes that should be enabled for
   *        a destination. A list of available modes is defined in Destination.commModes.
   *        Defaults to a SEND mode.
   */
  constructor ({ name, commModes = [Destination.commModes.SEND] } = {}) {
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
     * An array of communication modes that are enabled for a destination.
     *
     * @type {string[]}
     * @public
     */
    this.commModes = commModes

    /**
     * A function that will be called when a response from destination is received.
     *
     * @type {Function}
     * @private
     */
    this._responseCallback = null
  }

  /**
   * Checks if a SEND communication mode is enabled for this destination.
   *
   * @returns {boolean} True if destination is in the SEND mode.
   */
  get ableToSend () {
    return this.commModes.includes(Destination.commModes.SEND)
  }

  /**
   * Checks if a RECEIVE communication mode is enabled for this destination.
   *
   * @returns {boolean} True if destination is in the RECEIVE mode.
   */
  get ableToReceive () {
    return this.commModes.includes(Destination.commModes.RECEIVE)
  }

  /**
   * This function will be called by the messaging service when a destination is deregistered or deleted.
   * It must do a cleanup necessary for a destination object. Its functionality should be defined within a subclass.
   */
  deregister () {
    throw new Error('Deregister method must be defined in a subclass')
  }
}

/*
A list of communication modes that a destination can support.
 */
Destination.commModes = {
  /*
  If a SEND mode is enabled, this destination can send messages to other destinations of the same type.
   */
  SEND: 'Send',

  /*
  A RECEIVE mode enables destination to receive messages from other destinations of the same type.
   */
  RECEIVE: 'Receive'
}


/***/ }),

/***/ "./src/destinations/window-iframe-destination.js":
/*!*******************************************************!*\
  !*** ./src/destinations/window-iframe-destination.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WindowIframeDestination; });
/* harmony import */ var _messServ_messages_message_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @messServ/messages/message.js */ "./src/messages/message.js");
/* harmony import */ var _messServ_destinations_destination_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @messServ/destinations/destination.js */ "./src/destinations/destination.js");
/**
 * @module WindowIframeDestination
 */



/** WindowIframeDestination represents a content window within an iframe */
class WindowIframeDestination extends _messServ_destinations_destination_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  /**
   * @param {object} [configuration={}] - An object containing configuration parameters.
   * @param {string} configuration.name - A name of a destination (for addressing a destination in a messaging service).
   * @param {string} configuration.targetURL - A URL of a document within an iframe where messages will be sent.
   * @param {string} configuration.targetIframeID - An ID of an iframe element (without `#`).
   * @param {string[]} configuration.commModes - A list of communication modes that should be enabled for
   *        a destination. A list of available modes is defined in Destination.commModes.
   * @param {Function} configuration.receiverCB - A function that will be called when destination is in the
   *        RECEIVE mode and the incoming request has arrived. This function will receive two parameters:
   *        the message object and the function that will need to be called in order to send a response back.
   */
  constructor ({ name, targetURL, targetIframeID, commModes, receiverCB } = {}) {
    super({ name, commModes })

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

    if (this.ableToReceive) {
      // Destination is initialized in the receive mode
      if (!receiverCB) {
        throw new Error('A receiver callback must be provided for a destination in the RECEIVE communication mode')
      }
      this._registeredRequestHandler = this._requestHandler.bind(this, receiverCB)
      window.addEventListener('message', this._registeredRequestHandler, false)
    }

    // The following two props will keep track of request and response handlers registered for this destination.
    this._registeredRequestHandler = null
    this._registeredResponseHandler = null
  }

  /**
   * Registers a function to call when a response from destination is received.
   *
   * @param {Function} callbackFn - A function to be called when response is received.
   */
  registerResponseCallback (callbackFn) {
    this._registeredResponseHandler = this._responseHandler.bind(this)
    window.addEventListener('message', this._registeredResponseHandler, false)
    this._responseCallback = callbackFn
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

    /*
    If we'll try to send a message to an iframe which content would not been loaded yet,
    `postMessage` will throw an error. It will be impossible, however, to catch this error here because `postMessage`
    executes asynchronously (please see https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage).
    Once the cross-origin iframe content became available, it will throw a DOM security exception
    if we try to access its `location` prop. We can use that to check whether an iframe content is loaded
    before trying to send a message to it.
     */
    let contentNotLoaded = false
    try {
      contentNotLoaded = iframeWindow.location.href === 'about:blank'
    } catch (err) {
      if (err instanceof DOMException) {
        // Do nothing. This error usually means that a cross-origin iframe content has become available.
      } else {
        // Re-throw an error
        throw err
      }
    }

    if (contentNotLoaded) {
      // If we can access a target iframe location and its URL is blank it means an iframe content is not loaded yet.
      throw new Error(`Target document ${this._targetURL} is not loaded yet`)
    }
    try {
      iframeWindow.postMessage(requestMessage, this._targetURL)
    } catch (err) {
      if (err instanceof DOMException && err.name === 'DataCloneError') {
        /*
        A message body does not confirm the structured clone algorithm and thus cannot be send via `postMessage`.
        See https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm
        for more details.
        We'll try to convert it to a plain object.
         */
        console.warn('Request that does not confirm to the structured clone algorithm cannot be sent, ' +
          'will try to convert it to a plain object and send again')
        requestMessage.body = WindowIframeDestination._toPostable(requestMessage.body)
        // Try to resend a message
        iframeWindow.postMessage(requestMessage, this._targetURL)
      } else {
        // Some other error occurred, rethrow it
        throw err
      }
    }
  }

  /**
   * A function that is used to send a response from destination to origin.
   *
   * @param {ResponseMessage} responseMessage - A response message object.
   */
  sendResponse (responseMessage) {
    try {
      window.parent.postMessage(responseMessage, responseMessage.requestHeader.origin)
    } catch (err) {
      if (err instanceof DOMException && err.name === 'DataCloneError') {
        /*
        A message body does not confirm the structured clone algorithm and thus cannot be send via `postMessage`.
        See https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm
        for more details.
        We'll try to convert it to a plain object.
         */
        console.warn('Response that does not confirm to the structured clone algorithm cannot be sent, ' +
                     'will try to convert it to a plain object and send again')
        responseMessage.body = WindowIframeDestination._toPostable(responseMessage.body)
        // Try to resend a message
        window.parent.postMessage(responseMessage, responseMessage.requestHeader.origin)
      } else {
        // Some other error occurred, rethrow it
        throw err
      }
    }
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
    // Check if an event contains a valid Alpheios message object.
    if (!WindowIframeDestination._isSupportedEvent(event)) { return }

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
    // Check if an event contains a valid Alpheios message object.
    if (!WindowIframeDestination._isSupportedEvent(event)) { return }

    // `data` prop of an event contains a response message object
    const responseMessage = event.data
    if (this._responseCallback) {
      this._responseCallback(responseMessage)
    }
  }

  /**
   * Checks whether an event contains a well-formed Alpheios message object.
   *
   * @param {Event} event - An event that may contain a message object in a `data` field.
   * @returns {boolean} - True if an event contains a well-formed Alpheios message object, false otherwise.
   * @private
   */
  static _isSupportedEvent (event) {
    return Boolean(event && event.data && event.data.type && _messServ_messages_message_js__WEBPACK_IMPORTED_MODULE_0__["default"].isKnownType(event.data.type))
  }

  /**
   * This function will be called by the messaging service when destination is deregistered or deleted.
   * It must do a cleanup for a destination object.
   */
  deregister () {
    // Remove event listeners for registered request and response handlers
    if (this._registeredResponseHandler) {
      window.removeEventListener('message', this._registeredResponseHandler, false)
      this._registeredResponseHandler = null
    }
    if (!this._registeredRequestHandler) {
      window.removeEventListener('message', this._registeredRequestHandler, false)
      this._registeredRequestHandler = null
    }
  }

  /**
   * Converts an object to the one that is conforms the structured clone algorithm.
   * See https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm
   * for more details.
   *
   * @param {object} message - An object to convert.
   * @returns {object} - An object that conforms to the structured clone algorithm.
   * @private
   */
  static _toPostable (message) {
    let postable
    if (message instanceof Error) {
      /*
      Due to the bug in FF, Errors cannot be sent via postMessage yet.
      Please see https://bugzilla.mozilla.org/show_bug.cgi?id=1556604 for more details.
      This code can be removed once the bug is fixed.
       */
      postable = {
        name: message.name,
        message: message.message
      }
    } else {
      postable = JSON.parse(JSON.stringify(message))
    }
    return postable
  }
}


/***/ }),

/***/ "./src/messages/message.js":
/*!*********************************!*\
  !*** ./src/messages/message.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Message; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
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
    this.ID = Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])()

    /**
     * An object with no methods representing a message body.
     *
     * @type {object}
     */
    this.body = body
  }

  static isKnownType (typeValue) {
    return Object.values(Message.types).includes(typeValue)
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
 * Message types are used to distinguish different types of messages from each other
 * and to distinguish Alpheios from non-Alpheios messages. All Alpheios messages
 * must start from an `ALPHEIOS_` prefix.
 */
Message.types = {
  GENERIC: 'ALPHEIOS_MESSAGE' // A generic message of general purpose
}


/***/ }),

/***/ "./src/messages/request-message.js":
/*!*****************************************!*\
  !*** ./src/messages/request-message.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RequestMessage; });
/* harmony import */ var _messServ_messages_message_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @messServ/messages/message.js */ "./src/messages/message.js");
/**
 * @module RequestMessage
 */


/** A request message */
class RequestMessage extends _messServ_messages_message_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * @param {object} [body={}] - A plain JS object (with no methods) representing a body of the message.
   */
  constructor (body = {}) {
    super(body)
    this.role = _messServ_messages_message_js__WEBPACK_IMPORTED_MODULE_0__["default"].roles.REQUEST

    /**
     * A message header. Will contain routing information usually.
     *
     * @type {object}
     */
    this.header = {}
  }
}


/***/ }),

/***/ "./src/messages/response-message.js":
/*!******************************************!*\
  !*** ./src/messages/response-message.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResponseMessage; });
/* harmony import */ var _messServ_messages_message_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @messServ/messages/message.js */ "./src/messages/message.js");
/* harmony import */ var _messServ_messages_request_message_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @messServ/messages/request-message.js */ "./src/messages/request-message.js");
/**
 * @module ResponseMessage
 */



/** A response message that is sent as an answer to the request message. */
class ResponseMessage extends _messServ_messages_message_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * @param {RequestMessage} request - A request that initiated this response. Used to copy routing information mostly.
   * @param {object} [body={}] - A body of the response, a plain JS object with no methods.
   * @param {string} responseCode - A code to indicate results of the request handling: Success, Failure, etc.
   * @param {object} options - Additional non-obligatory parameters:
   * @param {number} options.errorCode - An error code indicating why request has failed.
   */
  constructor (request, body = {}, responseCode = ResponseMessage.responseCodes.UNDEFINED, { errorCode } = {}) {
    super(body)
    if (!request) throw new Error('Request is not provided')
    if (!request.ID) throw new Error('Request has no ID')
    this.role = _messServ_messages_message_js__WEBPACK_IMPORTED_MODULE_0__["default"].roles.RESPONSE
    this.requestHeader = request.header || {}
    this.requestID = request.ID // ID of the request to match request and response
    this.responseCode = responseCode

    /**
     * If request failed this prop will contain an error code indicating the reason of the failure.
     *
     * @type {number}
     */
    this.errorCode = 0

    if (responseCode === ResponseMessage.responseCodes.ERROR) {
      // Request has failed. An error code must be provided.
      if (!errorCode) {
        throw new Error('An error code must be provided for failed requests')
      }
      this.errorCode = errorCode
    }
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
   * @param {number} errorCode - An error code indicating why a request failed.
   * @returns {ResponseMessage} - A newly created response message with the SUCCESS return code.
   * @class
   */
  static Error (request, error, errorCode) {
    return new this(request, error, ResponseMessage.responseCodes.ERROR, { errorCode })
  }

  /**
   * Checks if this message is a response (i.e. if it follows a response message format and conventions).
   *
   * @param {RequestMessage | ResponseMessage} message - A request or response message to be tested.
   * @returns {boolean} - True if the message is a response, false otherwise.
   */
  static isResponse (message) {
    return message.role &&
      message.role === _messServ_messages_message_js__WEBPACK_IMPORTED_MODULE_0__["default"].roles.RESPONSE &&
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

  // There is no information about what was the outcome of a request.
  UNDEFINED: 'Undefined',

  // Request failed. A message will contain information about an error.
  ERROR: 'Error'
}

/**
 * If request failed, the error code will be used to indicate the reason of a failure.
 */
ResponseMessage.errorCodes = {
  // A remote service has not been initialized yet
  SERVICE_UNINITIALIZED: 1,
  // An error occurred during initialization of a remote service
  INITIALIZATION_ERROR: 2,
  // Request of unknown type is received by a remote service
  UNKNOWN_REQUEST: 3,
  // An unspecified error has occurred inside a remote service
  INTERNAL_ERROR: 4
}


/***/ })

/******/ });
});


/***/ }),

/***/ "./src/cedict-service/cedict-permanent-storage.js":
/*!********************************************************!*\
  !*** ./src/cedict-service/cedict-permanent-storage.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CedictPermanentStorage; });
/* harmony import */ var _lexisCs_cedict_service_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lexisCs/cedict-service/storage.js */ "./src/cedict-service/storage.js");
/* harmony import */ var _lexisCs_cedict_service_indexed_db_store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lexisCs/cedict-service/indexed-db-store.js */ "./src/cedict-service/indexed-db-store.js");
/**
 * @module CedictStorage
 */



/** A representation of a permanent data storage for CEDICT dictionary */
class CedictPermanentStorage extends _lexisCs_cedict_service_storage_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor (configuration) {
    super(configuration)
    this._configuration = configuration
    this._db = null
    // A map to keep store objects

    /**
     * A map to keep store objects. CedictPermanentStorage has two: 'meta' and 'dictionary'.
     * The key is the store name and the value is a store object.
     *
     * @type {Map<string, IndexedDbStore>}
     */
    this._stores = new Map()
    // A key that provides access to the metadata object in the `meta` store.
    this.metaKey = 1
    Object.values(this._configuration.stores)
      .forEach(storeConfig => { this._stores.set(storeConfig.name, new _lexisCs_cedict_service_indexed_db_store_js__WEBPACK_IMPORTED_MODULE_1__["default"](storeConfig)) })
  }

  /**
   * Called internally by a super class to check if the configuration supplied has all the necessary information in it.
   * If configuration is not valid it will throw an error indicating which check failed.
   *
   * @param {object} configuration - A JSON like configuration object.
   * @private
   */
  static _checkConfiguration (configuration) {
    if (!configuration.name) throw new Error(CedictPermanentStorage.errMsgs.NO_STORAGE_NAME)
    if (!configuration.version) throw new Error(CedictPermanentStorage.errMsgs.NO_STORAGE_VERSION)
    if (!configuration.stores) throw new Error(CedictPermanentStorage.errMsgs.NO_STORES)
  }

  /**
   * Asserts that a database connection is opened.
   *
   * @private
   */
  _assertConnection () {
    if (!this._db) throw new Error(CedictPermanentStorage.errMsgs.CLOSED_CONNECTION)
  }

  /**
   * Checks if a store with a given name exists.
   *
   * @param {string} storeName - The name of the store.
   * @returns {boolean} true if store exists or false otherwise.
   */
  hasStore (storeName) {
    return this._stores.has(storeName)
  }

  /**
   * Returns a store object. It will throw an error if store does not exist
   * of if a connection to the database is closed.
   *
   * @param {string} storeName - A name of a store to get.
   * @returns {IndexedDbStore} An instance of a store object.
   */
  getStore (storeName) {
    if (!this._stores.has(storeName)) throw new Error(CedictPermanentStorage.errMsgs.MISSING_STORE)
    this._assertConnection()
    return this._stores.get(storeName)
  }

  /**
   * Returns information to verify storage integrity. Integrity data is specific for each particular
   * storage type.
   *
   * @returns {Promise<{metadata: {object}, recordsInMeta: {number}, recordsInDictionary: {number}}>|Promise<Error>}
   *          Returns a promise that is resolved an object with storage integrity data or is rejected
   *          if storage integrity is broken. Integrity data object contains the following information:
   *          a CEDICT metadata object that is contained in the `meta` store, number of records
   *          in `meta` and `dictionary` _stores.
   */
  getIntegrityData () {
    this._assertConnection()
    let integrityRequests
    try {
      integrityRequests = [this._stores.get('meta'), this._stores.get('dictionary')].map(store => store.count()) // eslint-disable-line prefer-const
      integrityRequests.push(this._stores.get('meta').get(this.metaKey))
    } catch (error) {
      return Promise.reject(error)
    }
    return Promise.all(integrityRequests).then(([recordsInMeta, recordsInDictionary, metadata]) => {
      if (!metadata || metadata.length === 0) throw new Error(CedictPermanentStorage.errMsgs.NO_META)
      return { recordsInMeta, recordsInDictionary, metadata: metadata[0] }
    })
  }

  /**
   * This is a primary method of establishing connection to the storage.
   * If storage and _stores it contains do not exist, connect() will create them.
   *
   * @returns {Promise<undefined>|Promise<Error>} Returns a promise that is resolved if connection is
   *          established successfully or is rejected if connection fails.
   */
  connect () {
    return new Promise((resolve, reject) => {
      let openRequest
      try {
        // If database does not exist, openRequest will create it and will trigger an onupgradeneeded followed by onsuccess
        openRequest = indexedDB.open(this._configuration.name, this._configuration.version) // eslint-disable-line prefer-const
      } catch (error) {
        reject(error)
      }
      openRequest.onupgradeneeded = this._create.bind(this, openRequest)
      openRequest.onblocked = () => reject(new Error(CedictPermanentStorage.errMsgs.BLOCKED_ON_OPEN))

      openRequest.onsuccess = () => {
        this._db = openRequest.result
        this._db.onversionchange = this._versionchangeHandler.bind(this, reject)
        this._stores.forEach(store => store.associateWith(this._db))
        resolve()
      }

      openRequest.onerror = (error) => { reject(error) }
    })
  }

  /**
   * Disconnects from the storage.
   *
   * @returns {Promise<undefined>} Always returns a resolved promise.
   */
  disconnect () {
    if (this._db) {
      this._stores.forEach(store => store.dissociate())
      this._db.close()
      this._db = null
    }
    return Promise.resolve()
  }

  /**
   * Clears all stores in a storage.
   *
   * @returns {Promise<any>|Promise<Error>} A promise that is resolved when all stores are cleared
   *          or is rejected if clearing at least one of the stores failed.
   */
  clear () {
    this._assertConnection()
    return Promise.all(Array.from(this._stores.values()).map(store => store.clear()))
  }

  /**
   * Called to create a storage when one does not exist or is of incorrect version.
   * This method cannot be called directly, only as a result of an onupgradeneeded event
   * triggered by the open DB request. Use 'connect()` to establish connection ot a database,
   * and it will invoke `_create()` if necessary.
   *
   * @param {IDBOpenDBRequest} openRequest - An open request that caused an onupgradeneeded event.
   * @param {Function} reject - A reject function for promise declared in `connect()`.
   * @returns {Promise} A promise that is resolved if storage is created successfully or
   *                    is rejected otherwise.
   */
  _create (openRequest, reject) {
    this._db = openRequest.result
    const storeCreateRequests = Array.from(this._stores.values()).map(store => store.associateWith(this._db).create())
    return Promise.all(storeCreateRequests)
  }

  /**
   * Destroys a storage and all the _stores it contains.
   *
   * @returns {Promise<undefined>|Promise<Error>} Returns a promise that is resolved if storage
   *          and all _stores were destroyed successfully or is rejected if operations fails.
   */
  destroy () {
    return new Promise((resolve, reject) => {
      this._assertConnection()
      this.disconnect().then(() => {
        const deleteRequest = indexedDB.deleteDatabase(this._configuration.name)
        deleteRequest.onsuccess = () => { resolve() }
        deleteRequest.onerror = () => { reject(new Error(CedictPermanentStorage.errMsgs.DESTRUCTION_ERROR)) }
      })
    })
  }

  async _versionchangeHandler (reject) {
    await this.disconnect()
    console.error(CedictPermanentStorage.errMsgs.VERSION_CHANGE)
    reject(new Error(CedictPermanentStorage.errMsgs.VERSION_CHANGE))
  }
}

CedictPermanentStorage.errMsgs = {
  NO_STORAGE_NAME: 'Storage name is missing from a configuration',
  NO_STORAGE_VERSION: 'Storage version is missing from a configuration',
  NO_STORES: 'No stores are defined in a configuration',
  NO_META: 'Metadata store has no records',
  DESTRUCTION_ERROR: 'Unable to destroy a storage',
  MISSING_STORE: 'The store requested does not exist',
  CLOSED_CONNECTION: 'Connection to the store is closed',
  BLOCKED_ON_OPEN: 'Request to open a database has been blocked',
  VERSION_CHANGE: 'A database change has occurred. You should refresh this browser window or close it down.'
}


/***/ }),

/***/ "./src/cedict-service/cedict.js":
/*!**************************************!*\
  !*** ./src/cedict-service/cedict.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cedict; });
/* harmony import */ var _lexisCs_cedict_service_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lexisCs/cedict-service/constants.js */ "./src/cedict-service/constants.js");
/* harmony import */ var _lexisCs_cedict_service_cedict_permanent_storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lexisCs/cedict-service/cedict-permanent-storage.js */ "./src/cedict-service/cedict-permanent-storage.js");
/**
 * @module CedictData
 */



/** A class to serve data from CEDICT */
class Cedict {
  /**
   * @param {object} configuration - An object that describes a configuration of a CEDICT data object.
   */
  constructor (configuration) {
    Cedict.checkConfiguration(configuration)
    this._configuration = configuration

    /**
     * Whether the object is ready to serve data or not.
     *
     * @type {boolean}
     */
    this.isReady = false

    this._storage = new _lexisCs_cedict_service_cedict_permanent_storage_js__WEBPACK_IMPORTED_MODULE_1__["default"](this._configuration.storage)

    /**
     * If CEDICT be stored in memory this object will hold all its data.
     *
     * @type {{entries: object[]|Map, meta: {}}}
     */
    this.cedict = {

      // A dictionary's metadata
      meta: {},

      metaKey: 1,

      /**
       * If data is stored in memory `entries` will keep either
       * an array of dictionary records (if no in memory indexes will be employed) or
       * a map of dictionary records (if in memory indexes will be used).
       * If dictionary data will be stored in permanents storage only `entries` will be null
       */
      dictionary: null,

      /**
       * If in memory indexes be used, `traditionalHeadwordsIdx`
       * will hold a map: Map<traditionalHeadword, Array[entryIndex]>. Otherwise it will be null.
       */
      traditionalHeadwordsIdx: null,

      /**
       * If in memory indexes be used, `simplifiedHeadwordsIdx`
       * will hold a map: Map<simplifiedHeadword, Array[entryIndex]>. Otherwise it will be null.
       */
      simplifiedHeadwordsIdx: null
    }

    /*
    If characterForm is not specified in the request we will search for records with the
    preferred character form specified below first. If any results for that character form will be found,
    only those ones will be returned to the client. If no results for the preferred character form
    are in the dictionary then we will search for records with other character forms.
    NOTE: This constant is used inside a stub in `fixtures/src/cedict/cedict-fixture.js`.
    If you will change this constant please update it in the stab as well.
     */
    this.preferredCharacterForm = _lexisCs_cedict_service_constants_js__WEBPACK_IMPORTED_MODULE_0__["CedictCharacterForms"].TRADITIONAL

    /*
    This is a character form we will fallback into if matches for the preferred one are not found.
    NOTE: This constant is used inside a stub in `fixtures/src/cedict/cedict-fixture.js`.
    If you will change this constant please update it in the stab as well.
     */
    this.fallbackCharacterForm = _lexisCs_cedict_service_constants_js__WEBPACK_IMPORTED_MODULE_0__["CedictCharacterForms"].SIMPLIFIED
  }

  /**
   * Checks if the configuration supplied has all the necessary information in it.
   * If configuration is not valid it will throw an error indicating which check failed.
   *
   * @param {object} configuration - A JSON like configuration object.
   */
  static checkConfiguration (configuration) {
    if (!configuration.storage) throw new Error(Cedict.errMsgs.CONF_NO_STORAGE)
    if (!configuration.storage.stores) throw new Error(Cedict.errMsgs.CONF_NO_STORES)
    if (!configuration.storage.stores.dictionary) throw new Error(Cedict.errMsgs.CONF_NO_DICT)
    if (!configuration.storage.stores.dictionary.primaryIndex) throw new Error(Cedict.errMsgs.CONF_NO_DICT_PRIMARY_IDX)
    if (!configuration.storage.stores.dictionary.primaryIndex.hasOwnProperty('keyPath')) throw new Error(Cedict.errMsgs.CONF_NO_DICT_PRIMARY_IDX_KEY_PATH)
    if (!configuration.storage.stores.dictionary.volatileStorage) throw new Error(Cedict.errMsgs.CONF_NO_DICT_VOLATILE)
    if (!configuration.storage.stores.dictionary.volatileStorage.hasOwnProperty('enabled')) throw new Error(Cedict.errMsgs.CONF_NO_DICT_VOLATILE_ENABLED)
    if (!configuration.storage.stores.dictionary.volatileStorage.hasOwnProperty('indexed')) throw new Error(Cedict.errMsgs.CONF_NO_DICT_VOLATILE_INDEXED)
    if (!configuration.storage.stores.dictionary.permanentStorage) throw new Error(Cedict.errMsgs.CONF_NO_DICT_PERM)
    if (!configuration.storage.stores.dictionary.permanentStorage.hasOwnProperty('enabled')) throw new Error(Cedict.errMsgs.CONF_NO_DICT_PERM_ENABLED)
    if (!configuration.storage.stores.dictionary.permanentStorage.hasOwnProperty('indexed')) throw new Error(Cedict.errMsgs.CONF_NO_DICT_PERM_INDEXED)
    if (!configuration.data) throw new Error(Cedict.errMsgs.CONF_NO_DATA)
    if (!configuration.data.version) throw new Error(Cedict.errMsgs.CONF_NO_DATA_VER)
    if (!configuration.data.revision) throw new Error(Cedict.errMsgs.CONF_NO_DATA_REV)
    if (!configuration.data.recordsCount) throw new Error(Cedict.errMsgs.CONF_NO_DATA_REC_COUNT)
    if (!configuration.data.URI) throw new Error(Cedict.errMsgs.CONF_NO_DATA_URI)
    if (!configuration.data.chunks || configuration.data.chunks.length === 0) throw new Error(Cedict.errMsgs.CONF_NO_DATA_CHUNKS)
  }

  /**
   * Initializes a data object.
   *
   * @returns {Promise<undefined> | Promise<Error>} Returns a promise that is resolved with undefined
   *          if initialization succeeded or is rejected with an error object if initialization failed.
   */
  async init () {
    let indexedDbSupported = true
    try {
      // Try to establish connection to an IndexedDB
      await this._storage.connect()
    } catch (error) {
      if (error.name === Cedict.errNames.SECURITY_ERR) {
        /*
        Security error indicates that IndexedDB is not available in the current environment.
        This can be a case of a cross origin use of IndexedDB in Safari.
         */
        indexedDbSupported = false
        console.warn('LexisCS will disable IndexedDB because it is not supported in the current environment')
      } else {
        throw error
      }
    }
    return indexedDbSupported ? this._initWithIndexedDb() : this._initWithoutIndexedDb()
  }

  /**
   * Checks if there is a valid CEDICT data stored in an IndexedDB
   *
   * @returns {Promise<boolean>} - A promise that is resolved with `true` if there is valid data
   *          or the promise resolved with `false` if data is incomplete, broken, or missing.
   */
  async hasDataLoaded () {
    let result
    try {
      await this._storage.connect()
      const integrityData = await this._storage.getIntegrityData()
      result = this.isStorageIntact(integrityData)
    } catch (error) {
      result = false
    } finally {
      await this._storage.disconnect()
    }
    return result
  }

  /**
   * This initialization method is called when IndexedDB is available, i.e. in majority of cases.
   *
   * @returns {Promise<undefined> | Promise<Error>} Returns a promise that is resolved with undefined
   *          if initialization succeeded or is rejected with an error object if initialization failed.
   * @private
   */
  _initWithIndexedDb () {
    /*
    This method is called when a caller has already establish a connection to the store successfully
    `storage.connect()` will create a database if it does not exist yet.
     */
    return new Promise((resolve, reject) => {
      return this._storage.getIntegrityData()
        .then((integrityData) => {
          /*
          Integrity data has been returned successfully which means database structure is OK.
          Let's check if there is a new version of data available on a server.
           */
          if (!this.isStorageIntact(integrityData)) {
            throw new Error('Storage is outdated')
          }
          // Data in storage is fresh so we can read it into memory structures if we have that option enabled
          if (this._configuration.storage.stores.dictionary.volatileStorage.enabled) {
            return this._storage.getStore('dictionary').getAllEntries()
              .then((entries) => this._populateVolatileStorage(integrityData.metadata, entries))
              .catch((error) => reject(error))
          }
        })
        .catch(() => {
          // Data in permanent storage needs to be updated
          return this.removePermanentData()
            // `connect()` will create storage and stores
            .then(() => this._storage.connect())
            .then(() => this._downloadData())
            .then(({ meta, dictionary }) => {
              if (this._configuration.storage.stores.dictionary.volatileStorage.enabled) {
                this._populateVolatileStorage(meta, dictionary)
              }
              // Even if permanent storage is disabled we will still populate in order to avoid downloading data again
              return this._populatePermanentStorage(meta, dictionary)
                .then(() => Promise.resolve())
                .catch((error) => {
                  console.error('Unable to store CEDICT data to IndexedDB.', error)
                  // Cannot write CEDICT data to IndexedDB. Will fall back to an in-memory location
                  if (!this._configuration.storage.stores.dictionary.volatileStorage.enabled) {
                    console.warn('Switched to in-memory placement of CEDICT data')
                    this._configuration.storage.stores.dictionary.volatileStorage.enabled = true
                    this._populateVolatileStorage(meta, dictionary)
                  }
                  return Promise.resolve()
                })
            })
        })
        .then(() => {
          this.isReady = true
          resolve()
        })
        .catch((error) => { reject(error) })
    })
  }

  /**
   * This initialization method is for situations when IndexedDB is not available.
   * This can happen in, for example, Safari, which does not allow to access
   * cross domain IndexedDBs from within an iframe.
   * In that case we will rely on in-memory placement only.
   *
   * @returns {Promise<void>|Promise<Error|*>} Promise that is resolved with undefined if initialization
   *          succeeded or is rejected with an error object if initialization fails.
   * @private
   */
  async _initWithoutIndexedDb () {
    const { meta, dictionary } = await this._downloadData()
    /*
    This init method is called when IndexedDB is not available.
    Because of this, we will force disable an IndexedDB permanent storage in a configuration.
    We will also force enable an indexed version of a volatile storage,
    that will be the only storage we will use in that case.
     */
    this._configuration.storage.stores.dictionary.permanentStorage.enabled = false
    this._configuration.storage.stores.dictionary.volatileStorage.enabled = true
    this._configuration.storage.stores.dictionary.volatileStorage.indexed = true
    await this._populateVolatileStorage(meta, dictionary)
    this.isReady = true
  }

  /**
   * Deletes all permanent data associated with CEDICT data object.
   *
   * @returns {Promise<undefined>|Promise<Error>} A promise that is resolved if data is cleared successfully
   *          or rejected if operation failed.
   */
  removePermanentData () {
    return this._storage.destroy()
  }

  /**
   * Checks if the character form supplied is the one we have records upon.
   *
   * @param {string} characterForm - A string identifying a character form
   *        as defined in CedictCharacterForms.
   * @returns {boolean} True if there is information on this form, false otherwise.
   */
  static isSupportedCharacterForm (characterForm) {
    return Array.from(Object.values(_lexisCs_cedict_service_constants_js__WEBPACK_IMPORTED_MODULE_0__["CedictCharacterForms"])).includes(characterForm)
  }

  /**
   * Verifies whether data in a storage is OK by checking its integrity information.
   *
   * @param {object} integrityData - A JSON-like object containing a storage integrity data.
   * @returns {boolean} True if storage is intact and false otherwise.
   */
  isStorageIntact (integrityData) {
    return (
      integrityData.recordsInMeta === 1 &&
      integrityData.recordsInDictionary === this._configuration.data.recordsCount &&
      integrityData.metadata.version === this._configuration.data.version &&
      integrityData.metadata.revision === this._configuration.data.revision
    )
  }

  /**
   * Returns one or several records from CEDICT dictionary for one or several Chinese words.
   * NOTE: The business logic from this method is used inside a `lexisCedictRequest()` stub
   * in `fixtures/src/cedict/cedict-fixture.js`. If the business logic will be updated
   * please update the stub to match the change.
   *
   * @param {string|[string]} words - A single Chinese word or an array of Chinese words.
   * @param {string|undefined} [characterForm=undefined] - A string constant that specifies
   *        a character form in words (simplified or traditional).
   * @returns {object} - Returns an object whose keys are character forms and values are
   *          objects with requested words as keys and values are arrays of CEDICT records
   *          that has those words.
   */
  getWords (words, characterForm) {
    // CedictData object is not prepared to serve this request
    if (!this.isReady) return Promise.reject(new Error(Cedict.errMsgs.NOT_READY))

    let characterFormIsNotKnown = true
    // If character form is not specified it will try to find a best suitable one
    if (typeof characterForm !== 'undefined') {
      // Some value is provided for a characterForm
      if (!Cedict.isSupportedCharacterForm(characterForm)) return Promise.reject(new Error(`${Cedict.errMsgs.BAD_CHAR_FORM} "${characterForm}"`))
      characterFormIsNotKnown = false
    }

    // Nothing to do
    if (!words) return Promise.resolve({})

    // Decide whether word entries will be retrieved from memory or form a permanent storage
    const getWordsFunc = this._configuration.storage.stores.dictionary.volatileStorage.enabled
      ? this._getWordsFromVolatileStorage.bind(this)
      : this._getWordsFromPermanentStorage.bind(this)

    return new Promise((resolve, reject) => {
      if (characterFormIsNotKnown) {
        // Search using preferred character form first
        getWordsFunc(words, this.preferredCharacterForm)
          .then((entries) => {
            if (Cedict._getResultRecordsCount(entries) > 0) {
              // There are matches with the preferred character form, we need to search no longer
              resolve({ [this.preferredCharacterForm]: entries })
            } else {
              // Search using fallback character form
              return getWordsFunc(words, this.fallbackCharacterForm)
            }
          })
          .then((entries) => {
            // Results for the fallback character form
            const result = (Cedict._getResultRecordsCount(entries) > 0) ? { [this.fallbackCharacterForm]: entries } : {}
            resolve(result)
          })
          .catch((error) => reject(error))
      } else {
        // Return records for a specified character set
        getWordsFunc(words, characterForm)
          .then((entries) => {
            const result = (Cedict._getResultRecordsCount(entries) > 0) ? { [characterForm]: entries } : {}
            resolve(result)
          })
          .catch((error) => reject(error))
      }
    })
  }

  /**
   * Returns one or several records for given words from an in-memory storage.
   * It returns a promise to make it signature compatible with other word retrieval functions.
   *
   * @param {[string]} words - An array of Chinese words.
   * @param {string} characterForm - A string constant that specifies
   *        a character form in words (simplified or traditional).
   * @returns {Promise<object> | Promise<Error>} - Returns a promise that is resolved with an object
   *          whose keys are the words requested and values are arrays of CEDICT records that has those words.
   *          If an error occurred, the promise is rejected with an error.
   */
  _getWordsFromVolatileStorage (words, characterForm) {
    return new Promise((resolve, reject) => {
      try {
        // If a single word value is provided, convert it into an array
        if (!Array.isArray(words)) { words = [words] }
        // Create an object with props for the words
        let result = words.reduce((accumulator, key) => { accumulator[key] = []; return accumulator }, {}) // eslint-disable-line prefer-const
        // Retrieve from memory
        if (this._configuration.storage.stores.dictionary.volatileStorage.indexed) {
          // Use in memory indexes to find values
          words.forEach(word => {
            const idx = (characterForm === _lexisCs_cedict_service_constants_js__WEBPACK_IMPORTED_MODULE_0__["CedictCharacterForms"].SIMPLIFIED)
              ? this.cedict.simplifiedHeadwordsIdx.get(word)
              : this.cedict.traditionalHeadwordsIdx.get(word)
            result[word] = idx ? idx.map(idx => this.cedict.dictionary.get(idx)) : []
          })
        } else {
          // Indexes are not available, iterate over an array of values
          this.cedict.dictionary.forEach(entry => {
            const hw = (characterForm === _lexisCs_cedict_service_constants_js__WEBPACK_IMPORTED_MODULE_0__["CedictCharacterForms"].SIMPLIFIED) ? entry.simplified.headword : entry.traditional.headword
            words.forEach(word => {
              if (hw === word) {
                result[word].push(entry)
              }
            })
          })
        }
        resolve(result)
      } catch (error) {
        reject(error)
      }
    })
  }

  /**
   * Returns one or several records for given words from a permanent storage.
   *
   * @param {[string]} words - An array of Chinese words.
   * @param {string} characterForm - A string constant that specifies
   *        a character form in words (simplified or traditional).
   * @returns {Promise<object> | Promise<Error>} - Returns a promise that is resolved with an object
   *          whose keys are the words requested and values are arrays of CEDICT records that has those words.
   *          If an error occurred, the promise is rejected with an error.
   */
  _getWordsFromPermanentStorage (words, characterForm) {
    const index = (characterForm === _lexisCs_cedict_service_constants_js__WEBPACK_IMPORTED_MODULE_0__["CedictCharacterForms"].SIMPLIFIED) ? 'simplifiedHwIdx' : 'traditionalHwIdx'
    return this._storage.getStore('dictionary').getEntries(words, { index })
  }

  /**
   * Loads fresh CEDICT data from a remote server.
   * NOTE: fixtures/src/cedict/cedict-fixture.js implements a stub for this method. If signature and/or business
   * logic of this method is changed, please update the stub accordingly.
   *
   * @returns {Promise<{meta: object, dictionary: object[]}> | Promise<Error>} - Returns a promise that will be resolved with undefined
   *          if data was loaded successfully or that will be rejected with an error with data loading will fail.
   */
  _downloadData () {
    const requests = this._configuration.data.chunks.map(chunk => this._loadJson(`${this._configuration.data.URI}/${chunk}`))
    return Promise.all(requests).then(chunks => {
      let meta = chunks[0].metadata // eslint-disable-line prefer-const
      // CEDICT metadata will be stored within a `cedict` property of an app-wide metadata object
      meta.cedict = chunks[0].cedictMeta
      delete meta.chunkNumber
      return { meta, dictionary: chunks.map(piece => piece.entries).flat() }
    })
  }

  /**
   * Stores CEDICT dictionary data into an in-memory storage.
   *
   * @param {object} meta - A metadata object.
   * @param {object[]} dictionary - An array of dictionary records.
   */
  _populateVolatileStorage (meta, dictionary) {
    this.cedict.meta = meta
    if (this._configuration.storage.stores.dictionary.volatileStorage.indexed) {
      // Dictionary entries will be placed into a map using a primary key.
      this.cedict.dictionary = new Map()
      dictionary.forEach(entry => this.cedict.dictionary.set(entry[this._configuration.storage.stores.dictionary.primaryIndex.keyPath], entry))
      // Additional maps will be created for each index.
      this._indexVolatileStorage()
    } else {
      // No indexes will be created and dictionary entries will be placed into an array
      this.cedict.dictionary = dictionary
    }
  }

  /**
   * Creates indexes for an in-memory storage.
   */

  _indexVolatileStorage () {
    this.cedict.traditionalHeadwordsIdx = new Map()
    this.cedict.simplifiedHeadwordsIdx = new Map()
    this.cedict.dictionary.forEach(entry => {
      this.cedict.traditionalHeadwordsIdx.has(entry.traditional.headword)
        ? this.cedict.traditionalHeadwordsIdx.get(entry.traditional.headword).push(entry.index)
        : this.cedict.traditionalHeadwordsIdx.set(entry.traditional.headword, [entry.index])
      this.cedict.simplifiedHeadwordsIdx.has(entry.simplified.headword)
        ? this.cedict.simplifiedHeadwordsIdx.get(entry.simplified.headword).push(entry.index)
        : this.cedict.simplifiedHeadwordsIdx.set(entry.simplified.headword, [entry.index])
    })
  }

  /**
   * Records CEDICT data to the permanent storage.
   *
   * @param {object} meta - A metadata object.
   * @param {object[]} dictionary - An array of dictionary records.
   * @returns {Promise<undefined>|Promise<Error>} A promise that is resolved if data has been written successfully
   *          or is reject if write operations failed.
   */
  async _populatePermanentStorage (meta, dictionary) {
    /*
    `update` is used instead of `insert` here because `meta` store has only one record
    and it's index must be as defined in `this.cedict.metaKey`.
    Only the use of `update` allow to specify an index for the record.
    Update and insert operations are executed one after the other to avoid mutual blocking.
     */
    await this._storage.getStore('meta').update([meta, this.cedict.metaKey])
    await this._storage.getStore('dictionary').insert(dictionary)
  }

  /**
   * Loads a single JSON file from a specified URL and decodes it.
   *
   * @param {string} url - A strings that specifies a URL of a JSON file
   * @returns {Promise<object>|Promise<Error>} - A promise that is resolved with a JSON object or
   *          rejected with the error.
   */
  _loadJson (url) {
    return fetch(url).then(response => response.json())
  }

  static _getResultRecordsCount (resultsObject) {
    return Object.values(resultsObject).flat().length
  }
}

Cedict.errMsgs = {
  CONF_NO_STORAGE: 'Storage tree is missing from a configuration',
  CONF_NO_STORES: 'Stores data is missing from a configuration',
  CONF_NO_DICT: 'Dictionary tree is missing from a configuration',
  CONF_NO_DICT_PRIMARY_IDX: 'A primaryIndex tree of a dictionary is missing from a configuration',
  CONF_NO_DICT_PRIMARY_IDX_KEY_PATH: 'A keyPath option of a primaryIndex tree of a dictionary is missing from a configuration',
  CONF_NO_DICT_VOLATILE: 'A volatileStorage tree of a dictionary is missing from a configuration',
  CONF_NO_DICT_VOLATILE_ENABLED: 'enabled option of a volatileStorage tree of a dictionary is missing from a configuration',
  CONF_NO_DICT_VOLATILE_INDEXED: 'indexed option of a volatileStorage tree of a dictionary is missing from a configuration',
  CONF_NO_DICT_PERM: 'A permanentStorage tree of a dictionary is missing from a configuration',
  CONF_NO_DICT_PERM_ENABLED: 'enabled option of a permanentStorage tree of a dictionary is missing from a configuration',
  CONF_NO_DICT_PERM_INDEXED: 'indexed option of a permanentStorage tree of a dictionary is missing from a configuration',
  CONF_NO_DATA: 'Date tree is missing from a configuration',
  CONF_NO_DATA_VER: 'Data version is missing from a configuration',
  CONF_NO_DATA_REV: 'Data revision is missing from a configuration',
  CONF_NO_DATA_REC_COUNT: 'Data records count is missing from a configuration',
  CONF_NO_DATA_URI: 'Data URI is missing from a configuration',
  CONF_NO_DATA_CHUNKS: 'Data chunks are missing from a configuration',
  NOT_READY: 'CEDICT data is not ready',
  BAD_CHAR_FORM: 'Unknown character form'
}

/*
Names of errors that can be thrown during operations
 */
Cedict.errNames = {
  SECURITY_ERR: 'SecurityError'
}


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

/***/ "./src/cedict-service/indexed-db-store.js":
/*!************************************************!*\
  !*** ./src/cedict-service/indexed-db-store.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IndexedDbStore; });
/* harmony import */ var _lexisCs_cedict_service_store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lexisCs/cedict-service/store.js */ "./src/cedict-service/store.js");
/**
 * @module IndexedDbStore
 */


/**
 * A configuration object for IndexedDbStore must contain the following information:
 *
 * @typedef {object} IndexedDbStoreConfig
 * @property {string} name - A name of an IndexedDbStore instance.
 * @param {object} primaryIndex - An object defining configuration of a primary index.
 * @property {string} primaryIndex.keyPath - A name of a prop in an entry object that will serve as primary key.
 */

/** A an IndexedDB store object */
class IndexedDbStore extends _lexisCs_cedict_service_store_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * @param {IndexedDbStoreConfig} configuration - Configuration parameters for IndexedDbStore.
   */
  constructor (configuration) {
    super(configuration)
    this._configuration = configuration
    // DB object is not available when store object is created. It must be added later.
    this._db = null
  }

  /**
   * Called by a super class to check if the configuration supplied has all the necessary information in it.
   * If configuration is not valid it will throw an error indicating which check failed.
   *
   * @param {IndexedDbStoreConfig} configuration - Configuration parameters for IndexedDbStore.
   * @private
   */
  static _checkConfiguration (configuration) {
    if (!configuration.name) throw new Error(IndexedDbStore.errMsgs.NO_STORE_NAME)
    if (!configuration.primaryIndex) throw new Error(IndexedDbStore.errMsgs.NO_PRIMARY_INDEX)
    if (
      !configuration.primaryIndex.hasOwnProperty('keyPath') &&
      !configuration.primaryIndex.hasOwnProperty('auto')
    ) throw new Error(IndexedDbStore.errMsgs.NO_PRIMARY_INDEX_PROPS)
  }

  /**
   * Associates a store with an IndexedDB interface of a database where it is located.
   *
   * @param {IDBDatabase} db - An interface for connecting to IndexedDB.
   * @returns {IndexedDbStore} A self-reference for chaining.
   */
  associateWith (db) {
    this._db = db
    return this
  }

  /**
   * Disassociate a store from IndexedDB. This method is called when client is disconnected from IndexedDB.
   *
   * @returns {IndexedDbStore} A self-reference for chaining.
   */
  dissociate () {
    this._db = null
    return this
  }

  /**
   * Asserts that an IndexedDbStore is associated with a database.
   *
   * @private
   */
  _assertDb () {
    if (!this._db) throw new Error(IndexedDbStore.errMsgs.NO_DB)
  }

  /**
   * Checks if store has an auto-incremented primary key
   *
   * @returns {boolean} True if primary key is auto-incremented.
   * @private
   */
  get _isAutoPrimaryKey () {
    return this._configuration.primaryIndex.hasOwnProperty('auto') && this._configuration.primaryIndex.auto
  }

  /**
   * Returns an array of secondary index objects.
   *
   * @returns {object} An array of secondary index objects.
   * @private
   */
  get _secondaryIndexes () {
    return Object.values(this._configuration.indexes)
  }

  /**
   * Returns an array of names of secondary indexes.
   *
   * @returns {string} An array of names of secondary indexes.
   * @private
   */
  get _secondaryIndexNames () {
    return Object.values(this._configuration.indexes).map(index => index.name)
  }

  /**
   * Creates a store. Can be run from `onupgradeneeded` callback only.
   *
   * @returns {Promise<undefined>|Promise<Error>} A promise that is resolved if store was created successfully
   *          and is rejected if creation failed.
   */
  create () {
    return new Promise((resolve, reject) => {
      this._assertDb()
      const options = this._configuration.primaryIndex.keyPath ? { keyPath: this._configuration.primaryIndex.keyPath } : undefined
      const store = this._db.createObjectStore(this._configuration.name, options)
      if (this._configuration.indexes) {
        this._secondaryIndexes.forEach(idx => {
          try {
            store.createIndex(idx.name, idx.keyPath, { unique: idx.unique })
          } catch (error) {
            reject(error)
          }
        })
      }
      resolve()
    })
  }

  /**
   * Deletes all records from the store.
   *
   * @returns {Promise<undefined>|Promise<Error>} A promise that is resolved if all records were removed successfully
   *          and is rejected if operation failed.
   */
  clear () {
    return new Promise((resolve, reject) => {
      this._assertDb()
      let transaction = this._db.transaction(this._configuration.name, IndexedDbStore.accessModes.READ_WRITE) // eslint-disable-line prefer-const
      transaction.onerror = (event) => reject(event)
      let objectStore = transaction.objectStore(this._configuration.name) // eslint-disable-line prefer-const
      let clearRequest = objectStore.clear() // eslint-disable-line prefer-const
      clearRequest.onsuccess = () => resolve()
    })
  }

  /**
   * Retrieves all records from the store for a single key. If records do not exist, returns an empty array.
   *
   * @param {*} key - A key that specifies which records to retrieve.
   * @param {object} [options={}] - Additional configuration parameters:
   * @param {string} options.index - If the key provided as a first argument is for a secondary index
   *        then this field must contain a name of a secondary index to use. If this field is not specified,
   *        then records will be retrieved using a primary index.
   * @returns {Promise<object[]>|Promise<Error>} A promise that is resolved with an array of records if records
   *          exist in a store or with an empty array if not. A promise rejection is returned if operation failed.
   */
  async get (key, options = {}) {
    if (key === undefined) throw new Error(IndexedDbStore.errMsgs.NO_KEYS_PROVIDED)
    return this.getEntries([key], options).then((result) => result[key])
  }

  /**
   * Retrieves all records from the store for one or several keys. If records do not exist, returns an empty array.
   *
   * @param {*|*[]} keys - A key or an array of keys that specifies which records to retrieve.
   * @param {object} [options={}] - Additional configuration parameters:
   * @param {string} options.index - If the key provided as a first argument is for a secondary index
   *        then this field must contain a name of a secondary index to use. If this field is not specified,
   *        then records will be retrieved using a primary index.
   * @returns {Promise<{key: object[] }>|Promise<Error>} A promise that is resolved with an object. If contains keys
   *          as its properties and values are arrays of records.
   *          A promise rejection is returned if operation failed.
   */
  getEntries (keys, { index = undefined } = {}) {
    return new Promise((resolve, reject) => {
      this._assertDb()
      if (keys === undefined) reject(new Error(IndexedDbStore.errMsgs.NO_KEYS_PROVIDED))
      if (!Array.isArray(keys)) keys = [keys]
      if (keys.length === 0) reject(new Error(IndexedDbStore.errMsgs.NO_KEYS_PROVIDED))
      const transaction = this._db.transaction(this._configuration.name, IndexedDbStore.accessModes.READ)
      const store = transaction.objectStore(this._configuration.name)
      // Create an object with keys as its props
      let result = keys.reduce((accumulator, key) => { accumulator[key] = []; return accumulator }, {}) // eslint-disable-line prefer-const
      /*
      The order of request execution is guaranteed in IndexedDB.
      This means that when the last request is completed all previous requests are done too.
       */
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i]
        let getRequest
        if (index === undefined) {
          // A secondary index is not set, we'll retrieve records by the primary index
          getRequest = store.getAll(IDBKeyRange.only(key))
        } else {
          // Check if secondary index is valid
          if (!this._secondaryIndexNames.includes(index)) throw new Error(IndexedDbStore.errMsgs.MISSING_SECONDARY_INDEX)
          // Use index to retrieve a record
          const dbIndex = store.index(index)
          getRequest = dbIndex.getAll(IDBKeyRange.only(key))
        }
        getRequest.onsuccess = () => {
          result[key] = getRequest.result
          if (i === keys.length - 1) {
            // A last request has been completed
            resolve(result)
          }
        }
      }
    })
  }

  /**
   * Retrieves all records that exist in the store. If the store is empty returns an empty array.
   *
   * @returns {Promise<object[]>|Promise<Error>} A promise that is resolved with an array of records if records
   *          exist in a store or with an empty array if store is empty.
   *          A promise rejection is returned if operation failed.
   */
  getAllEntries () {
    return new Promise((resolve, reject) => {
      this._assertDb()
      const transaction = this._db.transaction(this._configuration.name, IndexedDbStore.accessModes.READ)
      transaction.onerror = (error) => { reject(error) }
      const store = transaction.objectStore(this._configuration.name)
      const getRequest = store.getAll()
      getRequest.onsuccess = () => {
        const records = getRequest.result
        resolve(records)
      }
    })
  }

  /**
   * Inserts new records into a store. If one or several records already exist in a database
   * it rejects with an error.
   *
   * @param {object|object[]} records - An array of records to insert.
   * @returns {Promise<undefined>|Promise<Error>} A promise that is resolved if records were inserted
   *          successfully and is rejected if insertion failed.
   */
  insert (records) {
    return new Promise((resolve, reject) => {
      if (!records) { resolve() } // Do nothing
      this._assertDb()
      if (!Array.isArray(records)) { records = [records] }
      let transaction = this._db.transaction(this._configuration.name, IndexedDbStore.accessModes.READ_WRITE) // eslint-disable-line prefer-const
      transaction.oncomplete = () => resolve()
      transaction.onerror = (event) => reject(event)
      const store = transaction.objectStore(this._configuration.name)
      records.forEach(record => {
        let addRequest = store.add(record) // eslint-disable-line prefer-const
        addRequest.onerror = () => {
          if (addRequest.error.name === 'ConstraintError') {
            reject(new Error(IndexedDbStore.errMsgs.DUPLICATE_RECORD))
          }
          reject(addRequest.error)
        }
      })
    })
  }

  /**
   * Updates records that already exist in a store.
   * If a record given does not exist in a database yet it will be added there.
   * TODO: with what data format does this function is expected to use most?
   *
   * @param {[*, object]|[[*, object]]} keyValRecordsArr - A single item or an array of items
   *        to insert. Each item is an array with record as a first member and key as a second one.
   *        If database does not use external keys (such as auto-incremented ones) the key value
   *        will be ignored and can be omitted.
   * @returns {Promise<undefined>|Promise<Error>} A promise that is resolved if records were updated
   *          successfully and is rejected if operation failed.
   */
  update (keyValRecordsArr) {
    return new Promise((resolve, reject) => {
      if (!keyValRecordsArr) resolve() // Do nothing
      if (!Array.isArray(keyValRecordsArr)) reject(new Error('Records format must be [key,val] or [[key,val]]'))
      if (!Array.isArray(keyValRecordsArr[0])) { keyValRecordsArr = [keyValRecordsArr] }
      this._assertDb()
      const transaction = this._db.transaction(this._configuration.name, IndexedDbStore.accessModes.READ_WRITE)
      transaction.oncomplete = () => resolve()
      transaction.onerror = (error) => reject(error)
      const store = transaction.objectStore(this._configuration.name)
      keyValRecordsArr.forEach(record => {
        let addRequest = this._isAutoPrimaryKey ? store.put(record[0], record[1]) : store.put(record[0]) // eslint-disable-line prefer-const
        addRequest.onerror = () => reject(addRequest.error)
      })
    })
  }

  /**
   * Returns a total number of records in a store.
   *
   * @returns {Promise<number>|Promise<Error>} A promise that is resolved with number of records
   *          in a store and is rejected if operation failed.
   */
  count () {
    return new Promise((resolve, reject) => {
      this._assertDb()
      try {
        const transaction = this._db.transaction(this._configuration.name, IndexedDbStore.accessModes.READ)
        const store = transaction.objectStore(this._configuration.name)
        const countRequest = store.count()
        countRequest.onsuccess = () => { resolve(countRequest.result) }
      } catch (error) {
        reject(error)
      }
    })
  }
}

IndexedDbStore.errMsgs = {
  NO_DB: 'Store is not associated with a DB',
  NO_STORE_NAME: 'A store name is missing from a configuration',
  NO_PRIMARY_INDEX: 'A primaryIndex tree is missing from a configuration',
  NO_PRIMARY_INDEX_PROPS: 'A primaryIndex tree must have either a "keyPath" or "auto" props',
  NO_KEYS_PROVIDED: 'No keys are provided',
  MISSING_SECONDARY_INDEX: 'Specified secondary index does not exist',
  DUPLICATE_RECORD: 'Record already exists'
}


/***/ }),

/***/ "./src/cedict-service/service.js":
/*!***************************************!*\
  !*** ./src/cedict-service/service.js ***!
  \***************************************/
/*! exports provided: CedictDestinationConfig, CedictCharacterForms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var alpheios_messaging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! alpheios-messaging */ "./node_modules/alpheios-messaging/dist/dev/alpheios-messaging.js");
/* harmony import */ var alpheios_messaging__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(alpheios_messaging__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CedictDestinationConfig", function() { return alpheios_messaging__WEBPACK_IMPORTED_MODULE_0__["CedictDestinationConfig"]; });

/* harmony import */ var _lexisCs_cedict_service_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lexisCs/cedict-service/constants.js */ "./src/cedict-service/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CedictCharacterForms", function() { return _lexisCs_cedict_service_constants_js__WEBPACK_IMPORTED_MODULE_1__["CedictCharacterForms"]; });

/* harmony import */ var _lexisCs_cedict_service_cedict_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lexisCs/cedict-service/cedict.js */ "./src/cedict-service/cedict.js");
/* harmony import */ var _lexisCs_configurations_cedict_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lexisCs/configurations/cedict.js */ "./src/configurations/cedict.js");





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
        responseFn(alpheios_messaging__WEBPACK_IMPORTED_MODULE_0__["ResponseMessage"].Success(request, {}))
      } catch (err) {
        console.error(`Cannot initialize a CEDICT service: ${err.message}`)
        responseFn(alpheios_messaging__WEBPACK_IMPORTED_MODULE_0__["ResponseMessage"].Error(request, new Error('Initialization error'), alpheios_messaging__WEBPACK_IMPORTED_MODULE_0__["ResponseMessage"].errorCodes.INITIALIZATION_ERROR))
      }
    } else {
      // Service has already been initialized, return an empty success message
      responseFn(alpheios_messaging__WEBPACK_IMPORTED_MODULE_0__["ResponseMessage"].Success(request, {}))
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
      responseFn(alpheios_messaging__WEBPACK_IMPORTED_MODULE_0__["ResponseMessage"].Error(request, new Error('Uninitialized'), alpheios_messaging__WEBPACK_IMPORTED_MODULE_0__["ResponseMessage"].errorCodes.SERVICE_UNINITIALIZED))
      return
    }

    // This is a get words request
    cedictData.getWords(request.body.getWords.words, request.body.getWords.characterForm)
      .then((result) => {
        responseFn(alpheios_messaging__WEBPACK_IMPORTED_MODULE_0__["ResponseMessage"].Success(request, result))
      }).catch((error) => responseFn(alpheios_messaging__WEBPACK_IMPORTED_MODULE_0__["ResponseMessage"].Error(request, error, alpheios_messaging__WEBPACK_IMPORTED_MODULE_0__["ResponseMessage"].errorCodes.INTERNAL_ERROR)))
  } else {
    responseFn(alpheios_messaging__WEBPACK_IMPORTED_MODULE_0__["ResponseMessage"].Error(request, new Error('Unsupported request'), alpheios_messaging__WEBPACK_IMPORTED_MODULE_0__["ResponseMessage"].errorCodes.UNKNOWN_REQUEST))
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line no-unused-vars
  const service = new alpheios_messaging__WEBPACK_IMPORTED_MODULE_0__["MessagingService"](
    messagingServiceName,
    new alpheios_messaging__WEBPACK_IMPORTED_MODULE_0__["WindowIframeDestination"]({ ...alpheios_messaging__WEBPACK_IMPORTED_MODULE_0__["CedictDestinationConfig"], commModes: [alpheios_messaging__WEBPACK_IMPORTED_MODULE_0__["WindowIframeDestination"].commModes.RECEIVE], receiverCB: messageHandler })
  )

  try {
    cedictData = new _lexisCs_cedict_service_cedict_js__WEBPACK_IMPORTED_MODULE_2__["default"](_lexisCs_configurations_cedict_js__WEBPACK_IMPORTED_MODULE_3__["default"])
  } catch (error) {
    console.error(error)
  }
})




/***/ }),

/***/ "./src/cedict-service/storage.js":
/*!***************************************!*\
  !*** ./src/cedict-service/storage.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Storage; });
/**
 * @module Storage
 */

/** A base class for data storage. Storage is a container of several stores (e.g. a database with several tables) */
class Storage {
  constructor (configuration) {
    this.constructor._checkConfiguration(configuration)
    this._configuration = configuration
  }

  /**
   * An internal method to check if the configuration supplied has all the necessary information in it.
   * If configuration is not valid it will throw an error indicating which check failed.
   *
   * @param {object} configuration - A JSON like configuration object.
   * @private
   */
  static _checkConfiguration (configuration) {
    if (!configuration.name) throw new Error(Storage.errMsgs.CONF_NO_NAME)
    if (!configuration.version) throw new Error(Storage.errMsgs.CONF_NO_VER)
  }

  /**
   * Create a storage and all the stores it contains.
   *
   * @returns {Promise<undefined>|Promise<Error>} Returns a promise that is resolved if storage
   *          and all stores were created successfully or is rejected if operations fails.
   */
  create () {
    return new Promise((resolve) => {
      resolve()
    })
  }

  /**
   * Destroys a storage and all the stores it contains.
   *
   * @returns {Promise<undefined>|Promise<Error>} Returns a promise that is resolved if storage
   *          and all stores were destroyed successfully or is rejected if operations fails.
   */
  destroy () {
    return new Promise((resolve) => {
      resolve()
    })
  }

  /**
   * Establishes a connection to the storage. It, if necessary, initializes a storage and stores it contains.
   *
   * @returns {Promise<undefined>|Promise<Error>} Returns a promise that is resolved if connection is
   *          established successfully or is rejected if connection fails.
   */
  connect () {
    return new Promise((resolve) => {
      resolve()
    })
  }

  /**
   * Disconnects from the storage.
   *
   * @returns {Promise<undefined>|Promise<Error>} Returns a promise that is resolved if connection is
   *          closed successfully or is rejected if operations fails.
   */
  disconnect () {
    return new Promise((resolve) => {
      resolve()
    })
  }

  /**
   * Returns information to verify storage integrity. A set of integrity data is specific for each particular
   * storage type so each storage implementation must define this function on its own.
   *
   * @returns {Promise<{object}>|Promise<Error>}
   *          Returns a promise that is resolved with an object with storage integrity information or is rejected
   *          if storage integrity is broken.
   */
  getIntegrityData () {
    return new Promise((resolve) => {
      resolve({})
    })
  }
}

Storage.errMsgs = {
  CONF_NO_NAME: 'Storage name is missing from a configuration',
  CONF_NO_VER: 'Storage version is missing from a configuration'
}


/***/ }),

/***/ "./src/cedict-service/store.js":
/*!*************************************!*\
  !*** ./src/cedict-service/store.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Store; });
/**
 * @module Store
 */

/**
 * A configuration object for Store must contain the following information:
 *
 * @typedef {object} StoreConfig
 * @property {string} name - A name of a store.
 */

/** A base class for data stores */
class Store {
  /**
   * @param {StoreConfig} configuration - An object with configuration parameters.
   */
  constructor (configuration) {
    this.constructor._checkConfiguration(configuration)
    this._configuration = configuration
  }

  /**
   * Called internally to check if the configuration supplied has all the information necessary in it.
   * If configuration is not valid it will throw an error indicating which check failed.
   *
   * @param {StoreConfig} configuration - An object with configuration parameters.
   * @private
   */
  static _checkConfiguration (configuration) {
    if (!configuration.name) throw new Error(Store.errMsgs.CONF_NO_NAME)
  }

  /**
   * Associates a store with a container where it exists: a remote storage, an IndexedDB, etc.
   *
   * @param {object} storeObject - A store object.
   * @returns {Store} A self-reference for chaining.
   */
  associateWith (storeObject) {
    return this
  }

  /**
   * Creates a store. Can be run from `onupgradeneeded` callback only.
   * Must be implemented in a subclass.
   *
   * @returns {Promise<undefined>|Promise<Error>} A promise that is resolved if store was created successfully
   *          and is rejected if creation failed.
   */
  create () {
    return new Promise((resolve) => {
      resolve()
    })
  }

  /**
   * Deletes all records from the store.
   * Must be implemented in a subclass.
   *
   * @returns {Promise<undefined>|Promise<Error>} A promise that is resolved if all records were removed successfully
   *          and is rejected if operation failed.
   */
  clear () {
    return new Promise((resolve) => {
      resolve()
    })
  }

  /**
   * Deletes a store from its container.
   * Must be implemented in a subclass.
   *
   * @returns {Promise<undefined>|Promise<Error>} A promise that is resolved if store was removed successfully
   *          and is rejected if operation failed.
   */
  destroy () {
    return new Promise((resolve) => {
      resolve()
    })
  }

  /**
   * Retrieves all records from the store for a single key. Options object is implementation specific.
   * Must be implemented in a subclass.
   *
   * @param {*} key - A key that specifies which records to retrieve.
   * @param {object} options - Additional configuration parameters.
   * @returns {Promise<object[]>|Promise<Error>} A promise that is resolved with an array of records if records
   *          exist in a store or with an empty array if not. A promise rejection is returned if operation failed.
   */
  get (key, options) {
    return new Promise((resolve) => {
      resolve()
    })
  }

  /**
   * Retrieves all records from the store for one or several keys. Options object is implementation specific.
   * Must be implemented in a subclass.
   *
   * @param {*|*[]} keys - A key or an array of keys that specifies which records to retrieve.
   * @param {object} [options={}] - Additional configuration parameters.
   * @returns {Promise<{key: object[]}>|Promise<Error>} A promise that is resolved with an object. If contains keys
   *          as its properties and values are arrays of records.
   *          A promise rejection is returned if operation failed.
   */
  getEntries (keys, { index = '' } = {}) {
    return new Promise((resolve) => {
      resolve()
    })
  }

  /**
   * Retrieves all records that exist in the store.
   * Must be implemented in a subclass.
   *
   * @returns {Promise<object[]>|Promise<Error>} A promise that is resolved with an array of records if records
   *          exist in a store or with an empty array if not. A promise rejection is returned if operation failed.
   */
  getAllEntries () {
    return new Promise((resolve) => {
      resolve()
    })
  }

  /**
   * Inserts new records into a store.
   * Must be implemented in a subclass.
   *
   * @param {object[]} records - An array of records to insert.
   * @returns {Promise<undefined>|Promise<Error>} A promise that is resolved if records were inserted
   *          successfully and is rejected if insertion failed.
   */
  insert (records) {
    return new Promise((resolve) => {
      resolve()
    })
  }

  /**
   * Updates records that already exist in a store.
   * Must be implemented in a subclass.
   *
   * @param {[any, object]|[[any, object]]} keyValRecordsArr - A single item or an array of items
   *        to insert. Each item is an array with key as a first member and a record to insert as a second one.
   * @returns {Promise<undefined>|Promise<Error>} A promise that is resolved if records were updated
   *          successfully and is rejected if operation failed.
   */
  update (keyValRecordsArr) {
    return new Promise((resolve) => {
      resolve()
    })
  }

  /**
   * Returns a total number of records in a store.
   * Must be implemented in a subclass.
   *
   * @returns {Promise<number>|Promise<Error>} A promise that is resolved with number of records
   *          in a store and is rejected if operation failed.
   */
  count () {
    return new Promise((resolve) => {
      resolve()
    })
  }
}

Store.accessModes = {
  READ: 'readonly',
  READ_WRITE: 'readwrite'
}

Store.errMsgs = {
  CONF_NO_NAME: 'A store name is missing from a configuration'
}


/***/ }),

/***/ "./src/configurations/cedict.js":
/*!**************************************!*\
  !*** ./src/configurations/cedict.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
This object defines a configuration of a CEDICT service. We could have several configuration
files each targeted for a specific platform or purpose and specify a proper configuration
upon the service initialization.
 */
const cedict = {
  /*
  An information about how CEDICT data is stored within the CEDICT service.
   */
  storage: {
    name: 'cedict',
    /*
    Version defines a configuration of a storage schema, e.g. what tables are used to store data,
    what fields do they have, etc.
     */
    version: 1,
    stores: {
      /*
      A store to keep metadata about a dictionary. It will have only one entry with the metadata object.
       */
      meta: {
        name: 'meta',
        primaryIndex: {
          auto: true
        }
      },

      /*
      This is a store that keeps dictionary entries themselves.
       */
      dictionary: {
        name: 'dictionary',
        primaryIndex: {
          /*
          What property of a dictionary entry will become a primary index.
           */
          keyPath: 'index'
        },

        /*
        The following defines the secondary indexes. The name of an index is used to address it
        during queries. keyPath defines what prop of a dictionary entry will be used to build an index.
         */
        indexes: {
          traditional: {
            name: 'traditionalHwIdx',
            keyPath: 'traditional.headword',
            unique: false
          },
          simplified: {
            name: 'simplifiedHwIdx',
            keyPath: 'simplified.headword',
            unique: false
          }
        },
        volatileStorage: {
          /*
          If volatile storage is disabled, all queries will run against an IndexedDB. This will minimize
          RAM usage and is fast enough for most purposes (from several to tens of milliseconds). Enabling
          volatile storage will place data into RAM and data will be retrieved faster at cost of a higher
          RAM usage.
           */
          enabled: false,

          /*
          If volatile storage is indexed it will create additional in-memory maps to store headword indexes.
          It will result in almost instantaneous retrieval of data at cost of a higher RAM usage.
           */
          indexed: false
        },
        permanentStorage: {
          /*
          With permanents storage enabled all CEDICT data will be saved into an IndexedDB and will stay there
          between page reloads. This will allow not to download all CEDICT data each time the CEDICT service
          is started. It will decrease a service start time significantly (by tens of seconds, usually).It
          will also spare several megabytes of network traffic.

          With permanent storage enabled clients will be able to run searches directly against an IndexedDB
          thus keeping RAM usage at a minimum.

          It is highly recommended to have permanent storage always enabled except for cases when
          a target device does not support it.

          Please note: even if permanent storage is disabled, it will still be created in order to
          put downloaded data into it and to avoid downloading it again with each service initialization.
           */
          enabled: true,

          /*
          (Currently not implemented.)
          Disabling permanent store indexes will slow searches down significantly (up to more than a second).
          On the other hand, having indexes enabled to not increase IndexedDB size significantly.
          Because of that it is recommended to always have this option on.
           */
          indexed: true
        }
      }
    }
  },

  /*
  Describes CEDICT data on a remote server that is required to run the current version of CEDICT service.
   */
  data: {
    /*
    The date when CEDICT data was last edited.
     */
    version: 20191029,

    /*
    If data will be updated more than once a day revision will increment with each edition.
     */
    revision: 1,

    /*
    Number of records in the current CEDICT edition. It is used for integrity checking.
     */
    recordsCount: 117735,

    /*
    A URI where chunks of CEDICT data are located.
     */
    URI: 'https://lexis-cs.alpheios.net/cedict',

    /*
    Names of the chunks themselves.
     */
    chunks: [
      'cedict-v20191029-c001.json',
      'cedict-v20191029-c002.json',
      'cedict-v20191029-c003.json',
      'cedict-v20191029-c004.json',
      'cedict-v20191029-c005.json'
    ]
  }
}

/* harmony default export */ __webpack_exports__["default"] = (cedict);


/***/ })

/******/ });
});
//# sourceMappingURL=service.dev.js.map