<template>
  <div class="board">
    <div v-for="node in audioNodes">
      <panel :type="node.type"
             :name="node.name"
             :image="node.image"
             :parameters="node.parameters"
             ></panel>
    </div>
      <button @click="selectClick">選択{{ isSelectMode ? '解除' : '' }}</button>
    <button @click="connectClick">connect</button>
    <button @click="disconnectClick">disconnect</button>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import panel from './Panel'

export default {
  computed: {
    ...mapGetters({ isSelectMode: 'isSelectMode' })
  },
  data: function () {
    return {
      audioNodes: [
        { type: 'oscillator', name: 'Oscillator', image: 'oscillator.png', parameters: {}},
        { type: 'gain', name: 'gain', image: 'icon_rss.svg', parameters: {}},
        { type: 'destination', name: 'destination', image: 'icon_rss.svg', parameters: {}}
      ]
    }
  },
  methods: {
    selectClick: function (event) {
      if (this.$store.getters.isSelectMode) {
        this.$store.dispatch('cancelSelect')
      } else {
        this.$store.dispatch('startSelect')
      }
    },
    connectClick: function (event) {
      this.$store.dispatch('doneSelect', { type: 'connect' })
    },
    disconnectClick: function (event) {
      this.$store.dispatch('doneSelect', { type: 'disconnect' })
    }
  },
  components: {
    'panel': panel
  }
}
</script>
<style>
.board {
  border: solid 1px black;
}
</style>
