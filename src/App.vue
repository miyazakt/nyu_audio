<template>
  <div id="app">
    <panel
      name="Icon"
      image="icon_rss.svg"
      :isSelectMode="isSelectMode"
      :bus="bus"
      @click="this.onClick" ></panel>
    <panel-oscillator
      name="Icon"
      image="icon_rss.svg"
      :isSelectMode="isSelectMode"
      :bus="bus"
      ></panel-oscillator>
    <panel-destination
      name="Icon"
      image="icon_rss.svg"
      :isSelectMode="isSelectMode"
      :bus="bus"
      ></panel-destination>
  </div>
</template>

<script>
import Vue from 'vue'
import CanvasBoard from './components/CanvasBoard'
import Panel from './components/Panel'
import PanelOscillator from './components/PanelOscillator'
import PanelDestination from './components/PanelDestination'

window.AudioContext = window.AudioContext || window.webkitAudioContext

export default {
  name: 'app',
  data: function () {
    return {
      isSelectMode: false,
      bus: new Vue()
    }
  },
  methods: {
    onClick: function (event) {
    }
  },
  components: {
    'canvas-board': CanvasBoard,
    'panel': Panel,
    'panel-oscillator': PanelOscillator,
    'panel-destination': PanelDestination
  },
  created: function () {
    this.$store.dispatch('saveAudioContext', new AudioContext())
  }
}
</script>

<style>
body {
  background-color: #eee;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
