export default class {
  constructor (x, y) {
    this.x = x
    this.y = y
    this.width = 50
    this.height = 50
    this.properties = {}
  }

  setProperty (props) {
    this.properties = Object.assign(this.properties, props)
  }

  getProperty () {
    return this.properties
  }

  clone () {
    return Object.assign(Object.create(Object.getPropertyOf(this), this))
  }
}
