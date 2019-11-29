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
    this.stores = {}
    // A key that provides access to the metadata object in the `meta` store.
    this.metaKey = 1
    Object.values(this._configuration.stores).forEach(configuration => { this.stores[configuration.name] = new _lexisCs_cedict_service_indexed_db_store_js__WEBPACK_IMPORTED_MODULE_1__["default"](configuration) })
  }

  /**
   * Checks if the configuration supplied has all the necessary information in it.
   * If configuration is not valid it will throw an error indicating which check failed.
   *
   * @param {object} configuration - A JSON like configuration object.
   */
  static checkConfiguration (configuration) {
    if (!configuration.name) throw new Error('Storage name is missing from a configuration')
    if (!configuration.version) throw new Error('Storage version is missing from a configuration')
    if (!configuration.stores) throw new Error('No stores are defined from a configuration')
  }

  /**
   * Returns information to verify storage integrity.
   *
   * @returns {Promise<{metadata: {object}, recordsInMeta: {number}, recordsInDictionary: {number}}>|Promise<Error>}
   *          Returns a promise that is resolved an object with storage integrity data or is rejected
   *          if storage integrity is broken. Integrity data object contains the following information:
   *          a CEDICT metadata object that is contained in the `meta` store, number of records
   *          in `meta` and `dictionary` stores.
   */
  getIntergrityData () {
    console.info('Checking a database integrity')
    let integrityRequests
    try {
      integrityRequests = [this.stores.meta, this.stores.dictionary].map(store => store.count()) // eslint-disable-line prefer-const
      integrityRequests.push(this.stores.meta.get(this.metaKey))
    } catch (error) {
      return Promise.reject(error)
    }
    return Promise.all(integrityRequests).then(([recordsInMeta, recordsInDictionary, metadata]) => {
      if (!metadata || metadata.length === 0) throw new Error('Metadata store has no records')
      if (metadata.length > 1) throw new Error('Metadata store has more than one record')
      return { recordsInMeta, recordsInDictionary, metadata: metadata[0] }
    })
  }

  /**
   * Called to create a storage when one does not exist or is of incorrect version.
   * This method cannot be called directly, only as a result of an onupgradeneeded event
   * triggered by the open DB request.
   *
   * @param {IDBOpenDBRequest} openRequest - An open request that caused an onupgradeneeded event.
   * @param {Function} reject - A reject function for promise declared in `connect()`.
   * @returns {Promise} A promise that is resolved if storage is created successfully or
   *                    is rejected otherwise.
   */
  create (openRequest, reject) {
    console.info('DB open on upgrade needed (create)', openRequest)
    this._db = openRequest.result
    const storeCreateRequests = Object.values(this.stores).map(store => { store.associateWith(this._db).create() })
    return Promise.all(storeCreateRequests)
  }

  /**
   * Destroys a storage and all the stores it contains.
   *
   * @returns {Promise<undefined>|Promise<Error>} Returns a promise that is resolved if storage
   *          and all stores were destroyed successfully or is rejected if operations fails.
   */
  destroy () {
    console.info('destory is called')
    return new Promise((resolve, reject) => {
      this.disconnect().then(() => {
        console.info('Destory after diconnect', this._configuration.name)
        const deleteRequest = indexedDB.deleteDatabase(this._configuration.name)
        deleteRequest.onsuccess = () => { console.info('database has been destroyed'); resolve() }
        deleteRequest.onerror = () => { reject(new Error('Storage cannot be destroyed')) }
      })
    })
  }

  /**
   * Establishes a connection to the storage. It, if necessary, initializes a storage and stores it contains.
   *
   * @returns {Promise<undefined>|Promise<Error>} Returns a promise that is resolved if connection is
   *          established successfully or is rejected if connection fails.
   */
  connect () {
    console.info('connect has been called')
    return new Promise((resolve, reject) => {
      // If database does not exist, openRequest will create it and will trigger an onupgradeneeded followed by onsuccess
      const openRequest = indexedDB.open(this._configuration.name, this._configuration.version) // eslint-disable-line prefer-const
      console.info('before onupgradeneeded')
      openRequest.onupgradeneeded = this.create.bind(this, openRequest)
      console.info('after onupgradeneeded')

      openRequest.onsuccess = () => {
        console.info('DB open on success')
        this._db = openRequest.result
        Object.values(this.stores).forEach((store) => store.associateWith(this._db))
        resolve()
      }

      openRequest.onerror = (error) => { console.info('dbopen onerror'); reject(error) }
    })
  }

  /**
   * Disconnects from the storage.
   *
   * @returns {Promise<undefined>} Always returns a resolved promise.
   */
  disconnect () {
    console.info('disconnect has been called')
    if (this._db) {
      this._db.close()
    }
    return Promise.resolve()
  }
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

    this._storage = null

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
  }

  /**
   * Checks if the configuration supplied has all the necessary information in it.
   * If configuration is not valid it will throw an error indicating which check failed.
   *
   * @param {object} configuration - A JSON like configuration object.
   */
  static checkConfiguration (configuration) {
    if (!configuration.storage) throw new Error('Storage tree is missing from a configuration')
    if (!configuration.storage.stores) throw new Error('Stores data is missing from a configuration')
    if (!configuration.storage.stores.dictionary) throw new Error('Dictionary tree is missing from a configuration')
    if (!configuration.storage.stores.dictionary.primaryIndex) throw new Error('A primaryIndex tree of a dictionary is missing from a configuration')
    if (!configuration.storage.stores.dictionary.primaryIndex.hasOwnProperty('keyPath')) throw new Error('A keyPath option of a primaryIndex tree of a dictionary is missing from a configuration') // eslint-disable-line no-prototype-builtins
    if (!configuration.storage.stores.dictionary.volatileStorage) throw new Error('A volatileStorage tree of a dictionary is missing from a configuration')
    if (!configuration.storage.stores.dictionary.volatileStorage.hasOwnProperty('enabled')) throw new Error('enabled option of a volatileStorage tree of a dictionary is missing from a configuration') // eslint-disable-line no-prototype-builtins
    if (!configuration.storage.stores.dictionary.volatileStorage.hasOwnProperty('indexed')) throw new Error('indexed option of a volatileStorage tree of a dictionary is missing from a configuration') // eslint-disable-line no-prototype-builtins
    if (!configuration.storage.stores.dictionary.permanentStorage) throw new Error('A permanentStorage tree of a dictionary is missing from a configuration')
    if (!configuration.storage.stores.dictionary.permanentStorage.hasOwnProperty('enabled')) throw new Error('enabled option of a permanentStorage tree of a dictionary is missing from a configuration') // eslint-disable-line no-prototype-builtins
    if (!configuration.storage.stores.dictionary.permanentStorage.hasOwnProperty('indexed')) throw new Error('indexed option of a permanentStorage tree of a dictionary is missing from a configuration') // eslint-disable-line no-prototype-builtins
    if (!configuration.data) throw new Error('Date tree is missing from a configuration')
    if (!configuration.data.version) throw new Error('Data version is missing from a configuration')
    if (!configuration.data.revision) throw new Error('Data revision is missing from a configuration')
    if (!configuration.data.recordsCount) throw new Error('Data records count is missing from a configuration')
    if (!configuration.data.URI) throw new Error('Data URI is missing from a configuration')
    if (!configuration.data.chunks || configuration.data.chunks.length === 0) throw new Error('Data chunks are missing from a configuration')
  }

  /**
   * Initializes a data object.
   *
   * @returns {Promise<undefined> | Promise<Error>} - A promise
   */
  init () {
    return new Promise((resolve, reject) => {
      this._storage = new _lexisCs_cedict_service_cedict_permanent_storage_js__WEBPACK_IMPORTED_MODULE_0__["default"](this._configuration.storage)
      // `storage.connect()` will create a database if it does not exist yet.
      return this._storage.connect()
        .catch((error) => {
          console.error('Connection to storage cannot be established')
          reject(error)
        })
        .then(() => {
          console.info('Connection was established')
          return this._storage.getIntergrityData()
        })
        .then((storageData) => {
          console.info('Check integrity returned', storageData)
          /*
          Integrity data has been returned successfully which means database structure is OK.
          Let's check if there is a new version of data available on a server.
           */
          if (
            storageData.recordsInMeta !== 1 ||
            storageData.recordsInDictionary !== this._configuration.data.recordsCount ||
            storageData.metadata.version !== this._configuration.data.version ||
            storageData.metadata.revision !== this._configuration.data.revision
          ) {
            throw new Error('Store is outdated')
          }
          console.info(`In-memory storage state is`, this.cedict)
          console.info('Configuration', this._configuration)
          // Data in storage is fresh so we can read it into memory structures if we have that option enabled
          this.cedict.meta = storageData.metadata
          if (this._configuration.storage.stores.dictionary.volatileStorage.enabled) {
            return this._storage.stores.dictionary.getAllEntries()
              .then((entries) => {
                this.populateVolatileStorage(entries)
                console.info(`In-memory storage state after data loading is`, this.cedict)
              }).catch((error) => reject(error))
          }
        })
        .catch((error) => {
          console.info('Integrity check failed, need to recreate a database', error)
          // Data in permanent storage needs to be updated
          console.info('Data needs to be updated')
          return this._storage.destroy()
          // `connect()` will create storage and stores
            .then(() => this._storage.connect())
            .then(() => this.downloadData())
            .then(({ meta, dictionary }) => {
              console.info('Downloaded the following data: ', meta, dictionary)
              console.info('Configuration', this._configuration)
              if (this._configuration.storage.stores.dictionary.volatileStorage.enabled) {
                this.populateVolatileStorage(meta, dictionary)
              }
              return this.populatePermanentStorage(meta, dictionary)
            })
        })
        .catch((error) => {
          console.info('Cannot download data from server', error)
          reject(error)
        })
        .then(() => {
          this.isReady = true
          console.info('Initialization is completed', this.cedict)
          resolve()
        })
    })
  }

  /**
   * Checks if the character form supplied is the one we have records upon.
   *
   * @param {Cedict.characterForms} characterForm - A string identifying a character form.
   * @returns {boolean} True if there is information on this form, false otherwise.
   */
  static isKnownCharacterForm (characterForm) {
    return Array.from(Object.values(Cedict.characterForms)).includes(characterForm)
  }

  /**
   * Returns one or several records from CEDICT dictionary for one or several Chinese words.
   *
   * @param {[string]} words - An array of Chinese words.
   * @param {string} characterForm - A string constant that specifies
   *        a character form in words (simplified or traditional).
   * @returns {object} - Returns an object whose keys are character forms and values are
   *          objects with requested words as keys and values are arrays of CEDICT records
   *          that has those words.
   */
  getWords (words, characterForm) {
    // CedictData object is not prepared to serve this request
    if (!this.isReady) return Promise.reject(new Error('CEDICT data is not ready'))

    let getAllCharacterForms = true
    // If character form is not specified we will return all records for all character forms
    if (typeof characterForm !== 'undefined') {
      // Some value is provided for a characterForm
      if (!Cedict.isKnownCharacterForm(characterForm)) return Promise.reject(new Error(`Unknown character form "${characterForm}"`))
      getAllCharacterForms = false
    }

    // Nothing to do
    if (!words) return Promise.resolve({})

    // Always prefer volatile storage to a permanent one
    if (this._configuration.storage.stores.dictionary.volatileStorage.enabled) {
      return new Promise((resolve, reject) => {
        try {
          const startTime = Date.now()
          if (getAllCharacterForms) {
            // Return records for all known character forms
            const result = {
              [Cedict.characterForms.SIMPLIFIED]: this._getWordsFromVolatileStorage(words, Cedict.characterForms.SIMPLIFIED),
              [Cedict.characterForms.TRADITIONAL]: this._getWordsFromVolatileStorage(words, Cedict.characterForms.TRADITIONAL)
            }
            console.info(`Request took ${Date.now() - startTime} ms`)
            resolve(result)
          } else {
            // Return records for a specified character set
            const result = {
              [characterForm]: this._getWordsFromVolatileStorage(words, characterForm),
            }
            console.info(`Request took ${Date.now() - startTime} ms`)
            resolve(result)
          }
        } catch (error) {
          reject(error)
        }
      })
    } else {
      // Use permanent storage
      if (getAllCharacterForms) {
        // Return records for all known character forms
        const requests = [
          this._getWordsFromPermanentStorage(words, Cedict.characterForms.SIMPLIFIED),
          this._getWordsFromPermanentStorage(words, Cedict.characterForms.TRADITIONAL)
        ]
        return Promise.all(requests).then((results) => ({
          [Cedict.characterForms.SIMPLIFIED]: results[0],
          [Cedict.characterForms.TRADITIONAL]: results[1]
        }))
      } else {
        // Return records for a specified character set
        return this._getWordsFromPermanentStorage(words, characterForm).then((result) => ({ [characterForm]: result }))
      }
    }
  }

  /**
   * Returns one or several records for given words from an in-memory storage.
   *
   * @param {[string]} words - An array of Chinese words.
   * @param {string} characterForm - A string constant that specifies
   *        a character form in words (simplified or traditional).
   * @returns {object} - Returns an object whose keys are the words requested and values are arrays of CEDICT records
   *          that has those words.
   */
  _getWordsFromVolatileStorage (words, characterForm) {
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
        const hw = (characterForm === Cedict.characterForms.SIMPLIFIED) ? entry.simplifiedHeadword : entry.traditionalHeadword
        words.forEach(word => {
          if (hw === word) {
            result[word].push(entry)
          }
        })
      })
    }
    return result
  }

  /**
   * Returns one or several records for given words from a permanent storage.
   *
   * @param {[string]} words - An array of Chinese words.
   * @param {string} characterForm - A string constant that specifies
   *        a character form in words (simplified or traditional).
   * @returns {object} - Returns an object whose keys are the words requested and values are arrays of CEDICT records
   *          that has those words.
   */
  _getWordsFromPermanentStorage (words, characterForm) {
    const index = (characterForm === Cedict.characterForms.SIMPLIFIED) ? 'simplifiedHwIdx' : 'traditionalHwIdx'
    return this._storage.stores.dictionary.getEntries(words, { index })
  }

  /**
   * Loads fresh CEDICT data from a remote server.
   *
   * @returns {Promise<{meta: object, dictionary: object[]}> | Promise<Error>} - Returns a promise that will be resolved with undefined
   *          if data was loaded successfully or that will be rejected with an error with data loading will fail.
   */
  downloadData () {
    const requests = this._configuration.data.chunks.map(chunk => this.loadJson(`${this._configuration.data.URI}/${chunk}`))
    return Promise.all(requests).then(chunks => {
      console.info('All chunks are loaded')
      let meta = chunks[0].metadata // eslint-disable-line prefer-const
      delete this.cedict.meta.chunkNumber
      return { meta, dictionary: chunks.map(piece => piece.entries).flat() }
    })
  }

  /**
   * Stores CEDICT dictionary data into an in-memory storage.
   *
   * @param {object} meta - A metadata object.
   * @param {object[]} dictionary - An array of dictionary records.
   */
  populateVolatileStorage (meta, dictionary) {
    this.cedict.meta = meta
    if (this._configuration.storage.stores.dictionary.volatileStorage.indexed) {
      // Dictionary entries will be placed into a map using a primary key.
      this.cedict.dictionary = new Map()
      dictionary.forEach(entry => this.cedict.dictionary.set(entry[this._configuration.storage.stores.dictionary.primaryIndex.keyPath], entry))
      // Additional maps will be created for each index.
      this.indexVolatileStorage()
    } else {
      // No indexes will be created and dictionary entries will be placed into an array
      this.cedict.dictionary = dictionary
    }
  }

  /**
   * Creates indexes for an in-memory storage.
   */
  indexVolatileStorage () {
    this.cedict.traditionalHeadwordsIdx = new Map()
    this.cedict.simplifiedHeadwordsIdx = new Map()
    this.cedict.dictionary.forEach(entry => {
      this.cedict.traditionalHeadwordsIdx.has(entry.traditionalHeadword)
        ? this.cedict.traditionalHeadwordsIdx.get(entry.traditionalHeadword).push(entry.index)
        : this.cedict.traditionalHeadwordsIdx.set(entry.traditionalHeadword, [entry.index])
      this.cedict.simplifiedHeadwordsIdx.has(entry.simplifiedHeadword)
        ? this.cedict.simplifiedHeadwordsIdx.get(entry.simplifiedHeadword).push(entry.index)
        : this.cedict.simplifiedHeadwordsIdx.set(entry.simplifiedHeadword, [entry.index])
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
  populatePermanentStorage (meta, dictionary) {
    /*
    `update` is used instead of `insert` here because `meta` store has only one record
    and it's index must be as defined in `this.cedict.metaKey`.
    Only the use of `update` allow to specify an index for the record.
     */
    const metaUpdate = this._storage.stores.meta.update([this.cedict.metaKey, meta])
    console.info(`Write to storage, number of records is ${dictionary.length}`)
    const dictionaryUpdate = this._storage.stores.dictionary.insert(dictionary)
    return Promise.all([metaUpdate, dictionaryUpdate])
  }

  /**
   * Loads a single JSON file from a specified URL and decodes it.
   *
   * @param {string} url - A strings that specifies a URL of a JSON file
   * @returns {Promise<object>|Promise<Error>} - A promise that is resolved with a JSON object or
   *          rejected with the error.
   */
  loadJson (url) {
    return fetch(url).then(response => response.json())
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


/** A an IndexedDB store object */
class IndexedDbStore extends _lexisCs_cedict_service_store_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor (configuration) {
    super(configuration)
    this._configuration = configuration
    // DB object is not available when store object is created. It must be added later.
    this._db = null
  }

  /**
   * Checks if the configuration supplied has all the necessary information in it.
   * If configuration is not valid it will throw an error indicating which check failed.
   *
   * @param {object} configuration - A JSON like configuration object.
   */
  static checkConfiguration (configuration) {
    if (!configuration.name) throw new Error('A store name is missing from a configuration')
    if (!configuration.primaryIndex) throw new Error('A primaryIndex tree is missing from a configuration')
  }

  /**
   * Associates a store with an IndexedDB interface of a database where it is located.
   *
   * @param {IDBDatabase} db - An interface for connecting to IndexedDB.
   * @returns {Store} A self-reference for chaining.
   */
  associateWith (db) {
    this._db = db
    return this
  }

  /**
   * Creates a store. Can be run from `onupgradeneeded` callback only.
   *
   * @returns {Promise<undefined>|Promise<Error>} A promise that is resolved if store was created successfully
   *          and is rejected if creation failed.
   */
  create () {
    return new Promise((resolve, reject) => {
      const options = this._configuration.primaryIndex.keyPath ? { keyPath: this._configuration.primaryIndex.keyPath } : undefined
      console.info(`${this._configuration.name} store create`, options)
      const store = this._db.createObjectStore(this._configuration.name, options)
      if (this._configuration.indexes) {
        Object.values(this._configuration.indexes).forEach(idx => {
          console.info('Creating an index for', idx)
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
      let transaction = this._db.transaction(this._configuration.name, IndexedDbStore.accessModes.READ_WRITE) // eslint-disable-line prefer-const
      let objectStore = transaction.objectStore(this._configuration.name) // eslint-disable-line prefer-const
      let clearRequest = objectStore.clear() // eslint-disable-line prefer-const
      clearRequest.onsuccess = () => resolve()
      transaction.onerror = (event) => reject(event)
    })
  }

  /**
   * Deletes a store from an IndexedDB database. Can be run from `onupgradeneeded` callback only.
   *
   * @returns {Promise<undefined>|Promise<Error>} A promise that is resolved if store was removed successfully
   *          and is rejected if operation failed.
   */
  destroy () {
    return new Promise((resolve) => {
      this._db.deleteObjectStore(this._configuration.name)
      resolve()
    })
  }

  /**
   * Retrieves all records from the store for a single key.
   *
   * @param {any} key - A key that specifies which records to retrieve.
   * @param {object} options - Additional configuration parameters:
   * @param {string} options.index - If the key provided as a first argument is for a secondary index
   *        then this field must contain a name of a secondary index to use. If this field is not specified,
   *        then records will be retrieved using a primary index.
   * @returns {Promise<object[]>|Promise<Error>} A promise that is resolved with an array of records if records
   *          exist in a store or with an empty array if not. A promise rejection is returned if operation failed.
   */
  get (key, options) {
    return this.getEntries([key], options).then((result) => result[key])
  }

  /**
   * Retrieves all records from the store for one or several keys. Options object is implementation specific.
   *
   * @param {any|any[]} keys - A key or an array of keys that specifies which records to retrieve.
   * @param {object} options - Additional configuration parameters:
   * @param {string} options.index - If the key provided as a first argument is for a secondary index
   *        then this field must contain a name of a secondary index to use. If this field is not specified,
   *        then records will be retrieved using a primary index.
   * @returns {Promise<{key: object[] }>|Promise<Error>} A promise that is resolved with an object. If contains keys
   *          as its properties and values are arrays of records.
   *          A promise rejection is returned if operation failed.
   */
  getEntries (keys, { index = '' } = {}) {
    return new Promise((resolve, reject) => {
      if (!this._db) reject(new Error('Database object is missing'))
      if (!keys) keys = reject(new Error('No keys provided'))
      if (!Array.isArray(keys)) keys = [keys]
      const transaction = this._db.transaction(this._configuration.name, IndexedDbStore.accessModes.READ)
      const store = transaction.objectStore(this._configuration.name)
      // Create an object with keys as its props
      let result = keys.reduce((accumulator, key) => { accumulator[key] = []; return accumulator }, {}) // eslint-disable-line prefer-const
      console.info('getEntries result is:', result)
      /*
      The order of request execution is guaranteed in IndexedDB.
      This means that when the last request is completed all previous requests are done too.
       */
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i]
        let getRequest
        if (index) {
          // Use index to retrieve a record
          console.info(`Retrieving using a ${index} index`)
          const dbIndex = store.index(index)
          getRequest = dbIndex.getAll(IDBKeyRange.only(key))
        } else {
          console.info('Retrieving without index')
          getRequest = store.getAll(IDBKeyRange.only(key))
        }
        getRequest.onsuccess = () => {
          const records = getRequest.result
          console.info(`(${i}) Records returned for ${key} key are:`, records)
          result[key] = getRequest.result
          if (i === keys.length - 1) {
            // A last request has been completed
            resolve(result)
          }
        }
      }
      // Transaction is completed later than `getRequest.onsuccess` is triggered
      transaction.oncomplete = () => console.info('getAll transaction is complete')
      transaction.onerror = (error) => { console.info('getAll transaction error'); reject(error) }
    })
  }

  /**
   * Retrieves all records that exist in the store.
   *
   * @returns {Promise<object[]>|Promise<Error>} A promise that is resolved with an array of records if records
   *          exist in a store or with an empty array if store is empty.
   *          A promise rejection is returned if operation failed.
   */
  getAllEntries () {
    return new Promise((resolve, reject) => {
      if (!this._db) reject(new Error('Database object is missing'))
      const transaction = this._db.transaction(this._configuration.name, IndexedDbStore.accessModes.READ)
      const store = transaction.objectStore(this._configuration.name)
      const getRequest = store.getAll()
      getRequest.onsuccess = () => {
        const records = getRequest.result
        console.info('Records returned are:', records)
        resolve(records)
      }
      // Transaction is completer later than `getRequest.onsuccess` is triggered
      transaction.oncomplete = () => console.info('getAll transaction is complete')
      transaction.onerror = (error) => { console.info('getAll transaction error'); reject(error) }
    })
  }

  /**
   * Inserts new records into a store.
   *
   * @param {object[]} records - An array of records to insert.
   * @returns {Promise<undefined>|Promise<Error>} A promise that is resolved if records were inserted
   *          successfully and is rejected if insertion failed.
   */
  insert (records) {
    return new Promise((resolve, reject) => {
      if (!records) { resolve() } // Do nothing
      if (!this._db) reject(new Error('Database object is missing'))
      if (!Array.isArray(records)) { records = [records] }
      let transaction = this._db.transaction(this._configuration.name, IndexedDbStore.accessModes.READ_WRITE) // eslint-disable-line prefer-const
      const store = transaction.objectStore(this._configuration.name)
      records.forEach(record => store.put(record))
      transaction.oncomplete = () => resolve()
      transaction.onerror = (error) => reject(error)
    })
  }

  /**
   * Updates records that already exist in a store.
   *
   * @param {[any, object]|[[any, object]]} keyValRecordsArr - A single item or an array of items
   *        to insert. Each item is an array with key as a first member and a record to insert as a second one.
   * @returns {Promise<undefined>|Promise<Error>} A promise that is resolved if records were updated
   *          successfully and is rejected if operation failed.
   */
  update (keyValRecordsArr) {
    return new Promise((resolve, reject) => {
      if (!keyValRecordsArr) resolve() // Do nothing
      if (!Array.isArray(keyValRecordsArr)) reject(new Error('Records format must be [key,val] or [[key,val]]'))
      if (!Array.isArray(keyValRecordsArr[0])) { keyValRecordsArr = [keyValRecordsArr] }
      if (!this._db) reject(new Error('Database object is missing'))
      const transaction = this._db.transaction(this._configuration.name, IndexedDbStore.accessModes.READ_WRITE)
      const store = transaction.objectStore(this._configuration.name)
      keyValRecordsArr.forEach(record => store.put(record[1], record[0]))
      transaction.oncomplete = () => resolve()
      transaction.onerror = (error) => reject(error)
    })
  }

  /**
   * Returns a total number of records in a store.
   *
   * @returns {Promise<number>|Promise<Error>} A promise that is resolved with number of records
   *          in a store and is rejected if operation failed.
   */
  count () {
    return new Promise((resolve) => {
      if (!this._db) throw new Error('Database object is missing')
      const transaction = this._db.transaction(this._configuration.name, IndexedDbStore.accessModes.READ)
      const store = transaction.objectStore(this._configuration.name)
      const countRequest = store.count()
      countRequest.onsuccess = () => { resolve(countRequest.result) }
    })
  }
}


/***/ }),

/***/ "./src/cedict-service/service.js":
/*!***************************************!*\
  !*** ./src/cedict-service/service.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lexisCs_messaging_messaging_service_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lexisCs/messaging/messaging-service.js */ "./src/messaging/messaging-service.js");
/* harmony import */ var _lexisCs_messaging_messages_response_message_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lexisCs/messaging/messages/response-message.js */ "./src/messaging/messages/response-message.js");
/* harmony import */ var _lexisCs_messaging_destinations_window_iframe_destination_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lexisCs/messaging/destinations/window-iframe-destination.js */ "./src/messaging/destinations/window-iframe-destination.js");
/* harmony import */ var _lexisCs_cedict_service_cedict_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lexisCs/cedict-service/cedict.js */ "./src/cedict-service/cedict.js");
/* harmony import */ var _lexisCs_configurations_cedict_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lexisCs/configurations/cedict.js */ "./src/configurations/cedict.js");






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
    responseFn(_lexisCs_messaging_messages_response_message_js__WEBPACK_IMPORTED_MODULE_1__["default"].Error(request, new Error('Uninitialized')))
    return
  }

  if (request.body.getWords) {
    // This is a get words request
    const startTime = Date.now()
    cedictData.getWords(request.body.getWords.words, request.body.getWords.characterForm)
      .then((result) => {
        console.info(`Request processing completed in ${Date.now() - startTime} ms`)
        responseFn(_lexisCs_messaging_messages_response_message_js__WEBPACK_IMPORTED_MODULE_1__["default"].Success(request, result))
      }).catch((error) => responseFn(_lexisCs_messaging_messages_response_message_js__WEBPACK_IMPORTED_MODULE_1__["default"].Error(request, error)))
  } else {
    responseFn(_lexisCs_messaging_messages_response_message_js__WEBPACK_IMPORTED_MODULE_1__["default"].Error(request, new Error('Unsupported request')))
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const service = new _lexisCs_messaging_messaging_service_js__WEBPACK_IMPORTED_MODULE_0__["default"](new _lexisCs_messaging_destinations_window_iframe_destination_js__WEBPACK_IMPORTED_MODULE_2__["default"](CedictDestinationConfig))
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
  }).catch((error) => console.error(error))
})

/* harmony default export */ __webpack_exports__["default"] = (CedictDestinationConfig);


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
    this.constructor.checkConfiguration(configuration)
    this._configuration = configuration
  }

  /**
   * Checks if the configuration supplied has all the necessary information in it.
   * If configuration is not valid it will throw an error indicating which check failed.
   *
   * @param {object} configuration - A JSON like configuration object.
   */
  static checkConfiguration (configuration) {
    if (!configuration.name) throw new Error('Storage name is missing from a configuration')
    if (!configuration.version) throw new Error('Storage version is missing from a configuration')
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

/** A base class for data stores */
class Store {
  constructor (configuration) {
    this.constructor.checkConfiguration(configuration)
    this._configuration = configuration
  }

  /**
   * Checks if the configuration supplied has all the necessary information in it.
   * If configuration is not valid it will throw an error indicating which check failed.
   *
   * @param {object} configuration - A JSON like configuration object.
   */
  static checkConfiguration (configuration) {
    if (!configuration.name) throw new Error('A store name is missing from a configuration')
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
   * @param {any} key - A key that specifies which records to retrieve.
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
   * @param {any|any[]} keys - A key or an array of keys that specifies which records to retrieve.
   * @param {object} options - Additional configuration parameters.
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


/***/ }),

/***/ "./src/configurations/cedict.js":
/*!**************************************!*\
  !*** ./src/configurations/cedict.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const cedict = {
  storage: {
    name: 'cedict',
    version: 1,
    stores: {
      meta: {
        name: 'meta',
        primaryIndex: {
          auto: true
        }
      },
      dictionary: {
        name: 'dictionary',
        primaryIndex: {
          keyPath: 'index'
        },
        indexes: {
          traditional: {
            name: 'traditionalHwIdx',
            keyPath: 'traditionalHeadword',
            unique: false
          },
          simplified: {
            name: 'simplifiedHwIdx',
            keyPath: 'simplifiedHeadword',
            unique: false
          }
        },
        volatileStorage: {
          enabled: true,
          indexed: true
        },
        permanentStorage: {
          enabled: true,
          // Searching within permanent storage with no indexes is currently not implemented
          indexed: true
        }
      }
    }
  },
  data: {
    version: 20191029,
    revision: 1,
    recordsCount: 117735,
    URI: 'http://data-dev.alpheios.net/cedict',
    chunks: [
      'cedict-v20191029-c001.json',
      'cedict-v20191029-c002.json',
      'cedict-v20191029-c003.json',
      'cedict-v20191029-c004.json'
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
   * @param {string} name - A name of a particular destination.
   */
  constructor ({ name }) {
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
   * @param {object} body - A plain JS object (with no methods) representing a body of the message.
   */
  constructor (body) {
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
 * @module ResponseMessage
 */


/** A response message that is sent as an answer to the request message. */
class ResponseMessage extends _message_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * @param {RequestMessage} request - A request that initiated this response. Used to copy routing information mostly.
   * @param {object} body - A body of the response, a plain JS object with no methods.
   * @param {string} responseCode - A code to indicate results of the request handling: Success, Failure, etc.
   */
  constructor (request, body = {}, responseCode = ResponseMessage.responseCodes.UNDEFINED) {
    super(body)
    this.role = _message_js__WEBPACK_IMPORTED_MODULE_0__["default"].roles.RESPONSE
    this.requestHeader = request.header || {}
    this.requestHeader.ID = request.ID // ID of the request to match request and response
    this.responseCode = responseCode
  }

  /**
   * A builder for a response message with a SUCCESS response code.
   *
   * @param {RequestMessage} request - An original request.
   * @param {object} body - A body of response message.
   * @returns {ResponseMessage} - A newly created response message with the SUCCESS return code.
   * @constructor
   */
  static Success (request, body) {
    return new this(request, body, ResponseMessage.responseCodes.SUCCESS)
  }

  /**
   * A builder for a message with an ERROR response code. Error information will be sent within the message body.
   *
   * @param {RequestMessage} request - An original request.
   * @param {Error} error - An error object containing error information.
   * @returns {ResponseMessage} - A newly created response message with the SUCCESS return code.
   * @constructor
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
      message.role === _message_js__WEBPACK_IMPORTED_MODULE_0__["default"].roles.RESPONSE &&
      message.requestHeader &&
      message.requestHeader.ID
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



/** A messaging for sending and receiving messages to and from various destinations */
class MessagingService {
  constructor (destinations = []) {
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

    if (!this._messages.has(message.requestHeader.ID)) {
      console.error(`Ignoring a message with request ID ${message.requestHeader.ID} not registered in a request list`, message)
      return
    }
    const requestInfo = this._messages.get(message.requestHeader.ID)
    window.clearTimeout(requestInfo.timeoutID) // Clear a timeout
    const responseCode = message.responseCode

    if (responseCode === _messages_response_message__WEBPACK_IMPORTED_MODULE_0__["default"].responseCodes.ERROR) {
      // There was an error returned. An error info is in the message body.
      requestInfo.reject(message.body)
    } else {
      // Request was processed without errors
      requestInfo.resolve(message)
    }
    this._messages.delete(message.requestHeader.ID) // Remove request info from the map
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
//# sourceMappingURL=service.js.map