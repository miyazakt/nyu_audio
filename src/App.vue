<template>
  <div id="app">
    <panel
      name="Icon"
      image="icon_rss.svg"
      :audioContext="audioContext"
      :bus="bus"
      @click="this.onClick" ></panel>
    <panel-oscillator
      name="Icon"
      image="icon_rss.svg"
      :audioContext="audioContext"
      :bus="bus"
      ></panel-oscillator>
    <panel-destination
      name="Icon"
      image="icon_rss.svg"
      :audioContext="audioContext"
      :bus="bus"
      ></panel-destination>
  </div>
</template>

<script>
import Vue from 'vue'
import Board from './components/Board'
import Panel from './components/Panel'
import PanelOscillator from './components/PanelOscillator'
import PanelDestination from './components/PanelDestination'

window.AudioContext = window.AudioContext || window.webkitAudioContext

export default {
  name: 'app',
  data: function () {
    return {
      audioContext: new AudioContext(),
      bus: new Vue()
    }
  },
  methods: {
    onClick: function (event) {
    }
  },
  components: {
    'board': Board,
    'panel': Panel,
    'panel-oscillator': PanelOscillator,
    'panel-destination': PanelDestination
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
