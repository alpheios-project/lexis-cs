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

/* harmony import */ var _lexisCs_cedict_service_service_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lexisCs/cedict-service/service.js */ "./src/cedict-service/service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CedictDestinationConfig", function() { return _lexisCs_cedict_service_service_js__WEBPACK_IMPORTED_MODULE_3__["CedictDestinationConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CedictCharacterForms", function() { return _lexisCs_cedict_service_service_js__WEBPACK_IMPORTED_MODULE_3__["CedictCharacterForms"]; });









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
/* harmony import */ var _lexisCs_cedict_service_cedict_permanent_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lexisCs/cedict-service/cedict-permanent-storage.js */ "./src/cedict-service/cedict-permanent-storage.js");
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

    this._storage = new _lexisCs_cedict_service_cedict_permanent_storage_js__WEBPACK_IMPORTED_MODULE_0__["default"](this._configuration.storage)

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
    this.preferredCharacterForm = Cedict.characterForms.TRADITIONAL

    /*
    This is a character form we will fallback into if matches for the preferred one are not found.
    NOTE: This constant is used inside a stub in `fixtures/src/cedict/cedict-fixture.js`.
    If you will change this constant please update it in the stab as well.
     */
    this.fallbackCharacterForm = Cedict.characterForms.SIMPLIFIED
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
   * @param {Cedict.characterForms} characterForm - A string identifying a character form.
   * @returns {boolean} True if there is information on this form, false otherwise.
   */
  static isSupportedCharacterForm (characterForm) {
    return Array.from(Object.values(Cedict.characterForms)).includes(characterForm)
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
            const idx = (characterForm === Cedict.characterForms.SIMPLIFIED)
              ? this.cedict.simplifiedHeadwordsIdx.get(word)
              : this.cedict.traditionalHeadwordsIdx.get(word)
            result[word] = idx ? idx.map(idx => this.cedict.dictionary.get(idx)) : []
          })
        } else {
          // Indexes are not available, iterate over an array of values
          this.cedict.dictionary.forEach(entry => {
            const hw = (characterForm === Cedict.characterForms.SIMPLIFIED) ? entry.simplified.headword : entry.traditional.headword
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
    const index = (characterForm === Cedict.characterForms.SIMPLIFIED) ? 'simplifiedHwIdx' : 'traditionalHwIdx'
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

/**
 * Character forms that are supported with the current version of the service.
 *
 * @type {{SIMPLIFIED: string, TRADITIONAL: string}}
 */
Cedict.characterForms = {
  SIMPLIFIED: 'simplified',
  TRADITIONAL: 'traditional'
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CedictDestinationConfig", function() { return CedictDestinationConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CedictCharacterForms", function() { return CedictCharacterForms; });
/* harmony import */ var _lexisCs_messaging_messaging_service_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lexisCs/messaging/messaging-service.js */ "./src/messaging/messaging-service.js");
/* harmony import */ var _lexisCs_messaging_messages_response_message_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lexisCs/messaging/messages/response-message.js */ "./src/messaging/messages/response-message.js");
/* harmony import */ var _lexisCs_messaging_destinations_window_iframe_destination_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lexisCs/messaging/destinations/window-iframe-destination.js */ "./src/messaging/destinations/window-iframe-destination.js");
/* harmony import */ var _lexisCs_cedict_service_cedict_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lexisCs/cedict-service/cedict.js */ "./src/cedict-service/cedict.js");
/* harmony import */ var _lexisCs_configurations_cedict_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lexisCs/configurations/cedict.js */ "./src/configurations/cedict.js");





const CedictCharacterForms = _lexisCs_cedict_service_cedict_js__WEBPACK_IMPORTED_MODULE_3__["default"].characterForms

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
    responseFn(_lexisCs_messaging_messages_response_message_js__WEBPACK_IMPORTED_MODULE_1__["default"].Error(request, new Error('Uninitialized')))
    return
  }

  if (request.body.getWords) {
    // This is a get words request
    cedictData.getWords(request.body.getWords.words, request.body.getWords.characterForm)
      .then((result) => {
        responseFn(_lexisCs_messaging_messages_response_message_js__WEBPACK_IMPORTED_MODULE_1__["default"].Success(request, result))
      }).catch((error) => responseFn(_lexisCs_messaging_messages_response_message_js__WEBPACK_IMPORTED_MODULE_1__["default"].Error(request, error)))
  } else {
    responseFn(_lexisCs_messaging_messages_response_message_js__WEBPACK_IMPORTED_MODULE_1__["default"].Error(request, new Error('Unsupported request')))
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const service = new _lexisCs_messaging_messaging_service_js__WEBPACK_IMPORTED_MODULE_0__["default"](messagingServiceName, new _lexisCs_messaging_destinations_window_iframe_destination_js__WEBPACK_IMPORTED_MODULE_2__["default"](CedictDestinationConfig))
  service.registerReceiverCallback(CedictDestinationConfig.name, messageHandler)

  try {
    cedictData = new _lexisCs_cedict_service_cedict_js__WEBPACK_IMPORTED_MODULE_3__["default"](_lexisCs_configurations_cedict_js__WEBPACK_IMPORTED_MODULE_4__["default"])
  } catch (error) {
    console.error(error)
    return
  }
  cedictData.init().then(() => {
    // TODO: A message to ease manual testing. Shall be removed in production
    console.log('CEDICT service is ready')
  }).catch((error) => console.error(`Cannot initialize CEDICT service: ${error.message}`))
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
    URI: 'https://lexis-dev.alpheios.net/cedict',

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