<template>
  <div class="board">
    <panel-oscillator
      name="Icon"
      image="icon_rss.svg"
      :isSelectMode="isSelectMode"
      ></panel-oscillator>
    <panel-destination
      name="Icon"
      image="icon_rss.svg"
      :isSelectMode="isSelectMode"
      ></panel-destination>
    <button @click="selectClick">選択</button>
    <button @click="doneClick">接続</button>
  </div>
</template>
<script>
import Panel from './Panel'
import PanelOscillator from './PanelOscillator'
import PanelDestination from './PanelDestination'

export default {
  data: function () {
    return {
      isSelectMode: false
    }
  },
  methods: {
    selectClick: function (event) {
      this.$store.dispatch('startSelect')
    },
    doneClick: function (event) {
      this.$store.dispatch('doneSelect')
    }
  },
  components: {
    'panel': Panel,
    'panel-oscillator': PanelOscillator,
    'panel-destination': PanelDestination
  }
}
</script>
<style>
.board {
  border: solid 1px black;
}
</style>
