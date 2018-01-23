<template>
  <div id="app">
    <board
       ></board>
  </div>
</template>

<script>
import Board from './components/Board'

window.AudioContext = window.AudioContext || window.webkitAudioContext

export default {
  name: 'app',
  components: {
    'board': Board
  },
  created: function () {
    this.$store.dispatch('saveAudioContext', new AudioContext())
  }
}
</script>

<style>
body {
  background-color: #fefefe;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
