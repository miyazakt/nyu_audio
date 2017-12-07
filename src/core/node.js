export default class {
  constructor (audioNode) {
    this.audioNode = null
    if (audioNode !== undefined) {
      this.audioNode = audioNode
    }
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

  connect (targetNode) {
    this.audioNode.connect(targetNode.getAudioNode())
  }

  disconnect (targetNode) {
    this.audioNode.disconnect(targetNode.getAudioNode())
  }

  clone () {
    return Object.assign(Object.create(Object.getPropertyOf(this), this))
  }
}
