<script>
import Vue from 'vue'
import Panel from './Panel'

export default {
  mixins: [Vue.extend(Panel)],
  props: {
    name: String,
    image: String
  },
  created: function () {
    const gainNode = this.audioContext.createGain()
    gainNode.gain.value = 0.5
    this.node.setAudioNode(gainNode)
    this.$store.dispatch('registerNode', { panel: this, node: this.node })
  }
}
</script>
