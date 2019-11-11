export default class Destination {
  constructor (name) {
    if (!name) {
      throw new Error('Destination name is missing')
    }
    this.name = name
  }
}
