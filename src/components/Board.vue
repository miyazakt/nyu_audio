<template>
  <div class="board">
    <panel type="oscillator"
           name="Oscillator"
           image="oscillator.png"
           ></panel>
    <panel type="gain"
           name="gain"
           image="icon_rss.svg"
           ></panel>
    <panel type="destination"
           name="Destination"
           image="icon_rss.svg"
           ></panel>
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
        { type: 'oscillator', name: 'Oscillator', image: 'oscillator.png' },
        { type: 'gain', name: 'gain', image: 'icon_rss.svg' },
        { type: 'destination', name: 'destination', image: 'icon_rss.svg' }
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
