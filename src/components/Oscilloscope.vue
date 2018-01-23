<template>
  <canvas :id="'cvs_'+_uid" @click="handleClick"></canvas>
</template>

<script>
  import Node from '../core/node'
  import Panel from './Panel'

  const fftSize = 2048

  var requestAnimationFrame = window.requestAnimationFrame ||
                              window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame ||
                              window.msRequestAnimationFrame
  window.requestAnimationFrame = requestAnimationFrame
  export default {
    mixins: [Panel],
    mounted: function () {
      this.draw()
    },
    computed: {
      node: function () {
        const node = new Node()
        node.setName('oscilloscope')
        return node
      }
    },
    methods: {
      draw: function () {
        const c = document.getElementById('cvs_' + this._uid)
        c.width = this.width
        c.height = this.height
        const ctx = c.getContext('2d')
        ctx.fillStyle = 'rgba(0, 0, 0, 1)'
        ctx.fillRect(0, 0, this.width, this.height)

        this.analyser.getByteTimeDomainData(this.freqs)

        const barWidth = this.width / this.analyser.frequencyBinCount

        for (let i = 0; i < this.analyser.frequencyBinCount; i++) {
          const value = this.freqs[i]
          const percent = value / 255
          const height = this.height * percent
          const offset = this.height - height

          ctx.fillStyle = '#fff'
          ctx.fillRect(i * barWidth, offset, barWidth, 2)
        }

        window.requestAnimationFrame(this.draw.bind(this))
      }
    },
    data: function () {
      return {
        width: 500,
        height: 400,
        freqs: new Uint8Array(fftSize / 2)
      }
    },
    created: function () {
      this.analyser = this.audioContext.createAnalyser()
      this.analyser.smoothingTimeConstant = 0.3
      this.analyser.fftSize = fftSize
      this.node.setType('oscilloscope')
      this.node.setAudioNode(this.analyser)
      this.$store.dispatch('registerNode', this.node)
    }
  }
</script>

<style scoped>

</style>
