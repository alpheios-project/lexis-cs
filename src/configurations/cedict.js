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

export default cedict
