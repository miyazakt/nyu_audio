<template>
  <div 
    class="panel"
    draggable="true"
    @click="handleClick"
    @dragstart="handleDragStart"
    @dragend="handleDragEnd"
    @dragenter="handleDragEnter" >
    <span class="title">{{ this.name }}</span>
    <img :src="imagePath" />
  </div>
</template>

<script>
import Vue from 'vue'
import Node from '../canvas/node'

export default {
  props: {
    name: String,
    image: String,
    audioContext: AudioContext,
    bus: Vue
  },
  computed: {
    node: function () {
      return new Node(20, 20)
    },
    imagePath: function () {
      return '/static/img/' + this.image
    }
  },
  methods: {
    handleClick: function (event) {
      this.$emit('click', event)
    },
    handleDragStart: function (event) {
      this.$emit('dragstart', event)
    },
    handleDragEnd: function (event) {
      this.$emit('dragend', event)
    },
    handleDragEnter: function (event) {
      this.$emit('dragenter', event)
    }
  }
}
</script>
<style scoped>
.panel {
  display: inline-block;
}
.title {
  display: block;
}
</style>
