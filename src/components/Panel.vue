<template>
  <div 
    class="panel"
    draggable="true"
    @click="handleClick">
    <span class="title">{{ this.name }}</span>
    <img :src="imagePath" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Node from '../core/node'

export default {
  props: {
    name: String,
    image: String
  },
  computed: {
    node: function () {
      return new Node()
    },
    imagePath: function () {
      return '/static/img/' + this.image
    },
    ...mapGetters({ audioContext: 'audiocontext' })
  },
  methods: {
    handleClick: function (event) {
      this.$store.dispatch('select', this.node)
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
