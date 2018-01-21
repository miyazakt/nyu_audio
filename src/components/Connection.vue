<template>
    <div>
      <span>
        {{ fromName }}
      </span> ->
      <span>
        {{ toName }}
      </span>
    </div>
</template>

<script>
    export default {
      props: {
        fromObject: Object,
        toObject: Object
      },
      computed: {
        fromName: function () {
          return this.fromObject.name
        },
        toName: function () {
          return this.toObject.name
        }
      }
    }
</script>

<style scoped>

</style>
