export default class {
  constructor (x, y) {
    this.x = x
    this.y = y
    this.width = 50
    this.height = 50
    this.audioNode = null
    this.properties = {}
  }

  setAudioNode (audioNode) {
    this.audioNode = audioNode
  }

  getAudioNode () {
    return this.audioNode
  }

  setProperty (props) {
    this.properties = Object.assign(this.properties, props)
  }

  getProperty () {
    return this.properties
  }

  connect (targetAudioNode) {
    this.audioNode.connect(targetAudioNode)
  }

  clone () {
    return Object.assign(Object.create(Object.getPropertyOf(this), this))
  }
}
