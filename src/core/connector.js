export default class {
  constructor (from, to) {
    this.from = from
    this.to = to
  }

  connect () {
    this.from.connect(this.to)
  }
}
