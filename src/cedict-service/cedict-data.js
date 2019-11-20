/**
 * @module CedictData
 */

/** A class to serve data from CEDICT */
export default class CedictData {
  /**
   * @param {object} schema - An object that describes a configuration of a CEDICT data object.
   */
  constructor (schema) {
    this._schema = schema

    /**
     * Whether the object is ready to serve data or not.
     *
     * @type {boolean}
     */
    this.isReady = false

    /**
     * If CEDICT be stored in memory this object will hold all its data.
     *
     * @type {{entries: [], meta: {}}}
     */
    this.cedict = {
      // A dictionary's metadata
      meta: {},
      // An array of dictionary records
      entries: []
    }
  }

  /**
   * Initializes a data object.
   *
   * @returns {Promise<undefined> | Promise<Error>} - A promise
   */
  init () {
    return this.updateFromServer()
  }

  /**
   * Returns one or several records from CEDICT dictionary for one or several Chinese words.
   *
   * @param {[string]} words - An array of Chinese words.
   * @param {string} characterForm - A string constant that specifies
   *        a character form in words (simplified or traditional).
   * @returns {object} - Returns an object whose keys are the words requested and values are arrays of CEDICT records
   *          that has those words.
   */
  getWords (words, characterForm) {
    if (!words || !this._hasData) {
      // No records can be found.
      return []
    }

    // If a single word value is provided, convert it into an array.
    if (!Array.isArray(words)) { words = [words] }

    // Create an object with props for the words
    let result = words.reduce((accumulator, key) => { accumulator[key] = []; return accumulator }, {}) // eslint-disable-line prefer-const

    this.cedict.entries.forEach(entry => {
      const hw = (characterForm === CedictData.characterForms.SIMPLIFIED) ? entry.simplifiedHeadword : entry.traditionalHeadword
      words.forEach(word => {
        if (hw === word) {
          result[word].push(entry)
        }
      })
    })
    return result
  }

  /**
   * Checks wither CEDICT dictionary has any data in it.
   *
   * @returns {boolean} - True if there is any dictionary records in the data object or false if otherwise.
   * @private
   */
  get _hasData () {
    return this.cedict.entries.length > 0
  }

  /**
   * Loads fresh CEDICT data from a remote server.
   *
   * @returns {Promise<undefined> | Promise<Error>} - Returns a promise that will be resolved with undefined
   *          if data was loaded successfully or that will be rejected with an error with data loading will fail.
   */
  updateFromServer () {
    const requests = this._schema.data.chunks.map(chunk => this.loadJson(`${this._schema.data.URI}/${chunk}`))
    return Promise.all(requests).then(chunks => {
      this.cedict.meta = chunks[0].meta
      this.cedict.entries = chunks.map(piece => piece.entries).flat()
      this.isReady = true
    })
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

// TODO: Shall probably move this to data models
CedictData.characterForms = {
  SIMPLIFIED: 'simplified',
  TRADITIONAL: 'traditional'
}
