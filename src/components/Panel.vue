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
  import methods from '../core/Panel'

  export default {
    props: {
      name: String,
      image: String,
      type: String
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
        if (this.$store.getters.isSelectMode) {
          this.$store.dispatch('select', this.node)
        }
      }
    },
    created: function () {
      methods[this.type].apply(this)
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
