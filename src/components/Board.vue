<template>
  <div class="board">
    <panel-oscillator
      name="Icon"
      image="icon_rss.svg"
      ></panel-oscillator>
    <panel-gain
      name="Icon"
      image="icon_rss.svg"
      ></panel-gain>
    <panel-destination
      name="Icon"
      image="icon_rss.svg"
      ></panel-destination>
      <button @click="selectClick">選択{{ isSelectMode ? '解除' : '' }}</button>
    <button @click="doneClick">接続</button>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Panel from './Panel'
import PanelOscillator from './PanelOscillator'
import PanelGain from './PanelGain'
import PanelDestination from './PanelDestination'

export default {
  computed: {
    ...mapGetters({ isSelectMode: 'isSelectMode' })
  },
  methods: {
    selectClick: function (event) {
      if (this.$store.getters.isSelectMode) {
        this.$store.dispatch('cancelSelect')
      } else {
        this.$store.dispatch('startSelect')
      }
    },
    doneClick: function (event) {
      this.$store.dispatch('doneSelect')
    }
  },
  components: {
    'panel': Panel,
    'panel-oscillator': PanelOscillator,
    'panel-gain': PanelGain,
    'panel-destination': PanelDestination
  }
}
</script>
<style>
.board {
  border: solid 1px black;
}
</style>
