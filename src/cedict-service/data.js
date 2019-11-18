import CEDICT from '@lexisCs/resources/cedict.js'

export default class Data {
  constructor () {
    this.db = null
    this.isOpened = false
    this.openRequest = null
    // Open a database connection
    this.open()
  }

  getData (word) {

  }

  open () {
    this.openRequest = window.indexedDB.open(CEDICT.db.name, CEDICT.db.version)
    this.openRequest.onupgradeneeded = this.onUpgradeNeeded.bind(this)
    this.openRequest.onsuccess = this.onSuccess.bind(this)
    this.openRequest.onerror = this.onError.bind(this)
  }

  /**
   * Called when a version of a DB newer than the one available is requested.
   *
   * @param {IDBVersionChangeEvent} event - An event object with the following props:
   *                    {number} oldVersion - An old version of a database
   *                    {number} newVersion - A new version of a database
   *                    {IDBOpenDBRequest} target - A DB request object
   */
  onUpgradeNeeded (event) {
    console.info('OnUpgradeNeeded was called', event)
    // Data schema is outdated, need to update.
    // Pull data from the server
    // Delete all existing stores
    // Create new stores
  }

  onSuccess (event) {
    // If a newer DB version is requested, an onUpgradeNeeded() will be called first,
    // then control will go to onSuccess()
    console.info('Database is OK', event)
    this.db = event.target.result
    this.isOpened = true
    this.db.onversionchange = this.onVersionChange.bind(this)
  }

  onError (event) {
    console.info('OnError was called', event)
    // One type of errors can occur when IndexedDB version is higher than the one requested.
    // This probably means that the script is outdated.
    if (event.target.error.name === 'VersionError') {
      // One type of errors can occur when IndexedDB version is higher than the one requested.
      // This probably means that the script is outdated.
      // The error.code is 0.
      console.error(`${event.target.error.message} Please refresh your page to load an updated version of the client service.`)
    }
  }

  onVersionChange (event) {
    console.info('OnVersionChange was called', event)
  }

  updateFromServer () {

  }
}
