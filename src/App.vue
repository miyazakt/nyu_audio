<template>
  <div id="app">
    <board
       ></board>
  </div>
</template>

<script>
import CanvasBoard from './components/CanvasBoard'
import Board from './components/Board'

window.AudioContext = window.AudioContext || window.webkitAudioContext

export default {
  name: 'app',
  components: {
    'board': Board,
    'canvas-board': CanvasBoard
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
