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
  methods: {
    handleConnect: function (fromNode) {
      fromNode.connect(this.audioContext.destination)
    }
  },
  created: function () {
    this.bus.$on('connected', this.handleConnect)
  }
}
</script>
