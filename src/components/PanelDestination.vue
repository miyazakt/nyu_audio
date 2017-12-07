<script>
import Vue from 'vue'
import Panel from './Panel'

export default {
  mixins: [Vue.extend(Panel)],
  props: {
    name: String,
    image: String
  },
  methods: {
    handleConnect: function (fromNode) {
      this.$store.dispatch('connect', { from: fromNode, to: this.node })
    }
  },
  created: function () {
    this.node.setAudioNode(this.audioContext.destination)
    this.$store.dispatch('registerNode', { panel: this, node: this.node })
  }
}
</script>
