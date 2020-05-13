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

export default cedict
