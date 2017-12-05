<template>
  <div id="app">
    <panel
      name="Icon"
      image="icon_rss.svg"
      @click="this.onClick" ></panel>
  </div>
</template>

<script>
import Board from './components/Board'
import Panel from './components/Panel'

export default {
  name: 'app',
  methods: {
    onClick: function (event) {
    }
  },
  components: {
    'board': Board,
    'panel': Panel
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
