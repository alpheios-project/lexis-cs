const cedict = {
  db: {
    name: 'cedict',
    version: 1,
    stores: {
      meta: {
        name: 'meta'
      },
      dict: {
        name: 'dictionary',
        inMemoryData: true,
        inMemoryIndexes: false,
        permanentStorage: true,
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
        }
      }
    }
  },
  data: {
    version: 20191029,
    revision: 1,
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
