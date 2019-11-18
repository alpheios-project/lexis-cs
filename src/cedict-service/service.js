import MessagingService from '@lexisCs/messaging/messaging-service.js'
import ResponseMessage from '@lexisCs/messaging/messages/response-message.js'
import Destination from '@lexisCs/messaging/destinations/window-iframe-destination.js'
import Data from '@lexisCs/cedict-service/data.js'

const DB_VERSION = 1
const DB_NAME = 'AlpheiosCedict'
const STORE_NAME = 'CedictStore'
const TRAD_IDX_NAME = 'traditionalHwIdx'
const SIMPL_IDX_NAME = 'simplifiedHwIdx'

const messageHandler = (request, responseFn) => {
  const body = { text: 'Response message from CEDICT service' }
  responseFn(ResponseMessage.Success(request, body))
}

const loadJson = (url) => {
  return new Promise((resolve, reject) => {
    const startTime = Date.now()
    console.info(`Data loading is about to start for ${url}`)
    fetch(url)
      .then(response => {
        console.info(`Headers has been received, duration is ${Date.now() - startTime}ms`)
        console.info(response)
        return response.json()
      })
      .then(JsonData => {
        console.info(`Body has been received, duration is ${Date.now() - startTime}ms`)
        resolve(JsonData)
      })
      .catch(error => {
        reject(error)
      })
  })
}

const storeCedictData = (data) => {
  return new Promise((resolve, reject) => {
    let open = indexedDB.open(DB_NAME, DB_VERSION) // eslint-disable-line prefer-const

    const startTime = Date.now()
    console.info('Starting to write data to database')
    open.onupgradeneeded = () => {
      console.info('onUpgradeNeeded has been called')
      let db = open.result // eslint-disable-line prefer-const
      let store = db.createObjectStore(STORE_NAME, { autoIncrement: true }) // eslint-disable-line prefer-const
      store.createIndex(TRAD_IDX_NAME, 'traditionalHeadword', { unique: false })
      store.createIndex(SIMPL_IDX_NAME, 'simplifiedHeadword', { unique: false })
    }

    open.onsuccess = () => {
      console.info('onSuccess has been called')
      let db = open.result // eslint-disable-line prefer-const
      let tx = db.transaction(STORE_NAME, 'readwrite') // eslint-disable-line prefer-const
      let store = tx.objectStore(STORE_NAME) // eslint-disable-line prefer-const

      for (let i = 0; i < data.length; i++) {
        store.put(data[i])
      }

      tx.oncomplete = () => {
        console.info('onComplete has been called')
        db.close()
        console.info(`All data has been recorded, duration is ${Date.now() - startTime}`)
        resolve()
      }
    }
  })
}

const getRecords = (key) => {
  return new Promise((resolve, reject) => {
    let open = indexedDB.open(DB_NAME, 1) // eslint-disable-line prefer-const
    open.onsuccess = () => {
      let db = open.result // eslint-disable-line prefer-const
      const transaction = db.transaction(STORE_NAME) // readonly
      const cedictData = transaction.objectStore(STORE_NAME)
      const tradIdx = cedictData.index(TRAD_IDX_NAME)

      const request = tradIdx.getAll(key)

      request.onsuccess = () => {
        if (request.result !== undefined) {
          resolve(request.result)
        } else {
          console.log('No record found')
        }
      }
    }
  })
}

document.addEventListener('DOMContentLoaded', () => {
  const service = new MessagingService(new Destination(Destination.config.CEDICT))
  service.registerReceiverCallback(Destination.config.CEDICT.name, messageHandler)

  const data = new Data()

  /* const resourceUrls = [
    'http://data-dev.alpheios.net/cedict/cedict-v20191029-c001.json',
    'http://data-dev.alpheios.net/cedict/cedict-v20191029-c002.json',
    'http://data-dev.alpheios.net/cedict/cedict-v20191029-c003.json',
    'http://data-dev.alpheios.net/cedict/cedict-v20191029-c004.json'
  ]
  const data = resourceUrls.map(url => loadJson(url))
  const startTime = Date.now()
  Promise.all(data).then(pieces => {
    console.info(`Total duration is ${Date.now() - startTime}`)
    pieces.forEach((piece) => {
      console.info('Data obtained: ', piece)
    })
    const entries = pieces.map(piece => piece.entries).flat()
    console.info(`Number of records received: ${entries.length || 'none'}`)
    storeCedictData(entries)
      .then(() => {
        const startTime = Date.now()
        console.info('Starting to query database')
        getRecords('安').then(results => {
          // Returns an array of CEDICT records
          console.info(`Search duration is ${Date.now() - startTime}`)
          console.info('Search results are:', results)
        }).catch((error) => {
          console.error(error)
        })
      })
      .catch(error => {
        console.error(error)
      })
  }).catch(error => console.error(error)) */
})
