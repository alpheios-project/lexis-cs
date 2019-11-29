/* eslint-env jest */
import ResponseMessage from '@lexisCs/messaging/messages/response-message.js'

describe.skip('ResponseMessage class', () => {
  it('Message constructor: body (no arguments)', () => {
    const msg = new ResponseMessage()
    expect(msg.body).toMatchObject({})
  })

  it('ResponseMessage constructor: body is set', () => {
    const body = { prop1: 'one', prop2: 'two' }
    const msg = new ResponseMessage(body)
    expect(msg.body).toMatchObject(body)
  })

  it('Message constructor: header is an empty object', () => {
    const msg = new ResponseMessage()
    expect(msg.header).toMatchObject({})
  })

  it('ResponseMessage constructor: role is RESPONSE', () => {
    const msg = new ResponseMessage()
    expect(msg.role).toBe(ResponseMessage.roles.RESPONSE)
  })

  it('ResponseMessage constructor: type is GENERIC', () => {
    const msg = new ResponseMessage()
    expect(msg.type).toBe(ResponseMessage.types.GENERIC)
  })

  it('ResponseMessage constructor: ID matches UUID v4 pattern', () => {
    const msg = new ResponseMessage()
    expect(msg.ID).toMatch(/(?:[a-z|\d]){8}-(?:[a-z|\d]){4}-(?:[a-z|\d]){4}-(?:[a-z|\d]){4}-(?:[a-z|\d]){12}/)
  })

  it('ResponseMessage constructor: ID is random', () => {
    const msgOne = new ResponseMessage()
    const msgTwo = new ResponseMessage()
    expect(msgOne.ID).not.toBe(msgTwo.ID)
  })

  it('ResponseMessage: must have role definitions', () => {
    expect(Object.keys(ResponseMessage.roles)).toMatchObject(['REQUEST', 'RESPONSE'])
  })

  it('ResponseMessage: must have type definitions', () => {
    expect(Object.keys(ResponseMessage.types)).toMatchObject(['GENERIC'])
  })
})
