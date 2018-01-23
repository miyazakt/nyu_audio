function destination () {
  this.node.setAudioNode(this.audioContext.destination)
  this.node.setType('destination')
  this.$store.dispatch('registerNode', this.node)
}

function gain () {
  const gainNode = this.audioContext.createGain()
  gainNode.gain.value = 0.5
  this.node.setType('gain')
  this.node.setAudioNode(gainNode)
  this.$store.dispatch('registerNode', this.node)
}

function oscillator () {
  const osci = this.audioContext.createOscillator()
  osci.start(0)
  this.node.setType('oscillator')
  this.node.setAudioNode(osci)
  this.$store.dispatch('registerNode', this.node)
}

export default {
  destination: destination,
  gain: gain,
  oscillator: oscillator
}

