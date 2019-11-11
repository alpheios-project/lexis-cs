import uuidv4 from 'uuid/v4'

export default class Message {
  constructor (body) {
    this.role = undefined
    this.type = Message.types.GENERIC
    this.ID = uuidv4()
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
