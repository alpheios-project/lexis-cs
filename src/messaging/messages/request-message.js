import Message from './message.js'

export default class RequestMessage extends Message {
  constructor (body) {
    super(body)
    this.role = Message.roles.REQUEST
  }
}
