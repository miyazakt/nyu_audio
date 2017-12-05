<script>
import Vue from 'vue'
import Panel from './Panel'

export default {
  mixins: [Vue.extend(Panel)],
  props: {
    name: String,
    image: String,
    audioContext: AudioContext,
    bus: Vue
  },
  created: function () {
    const osci = this.audioContext.createOscillator()
    osci.start(0)
    this.node.setProperty({ osci: osci })
  },
  methods: {
    handleClick: function (event) {
      this.bus.$emit('connected', this.node)
    }
  }
}
</script>
