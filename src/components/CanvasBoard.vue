<template>
  <canvas
    :id="id"
    class="board"
    @mousedown="handleMouseDown"
    @mouseup="handleMouseUp"
    @mousemove="handleMouseMove"
    :width="width"
    :height="height"
  ></canvas>
</template>

<script>
export default {
  data () {
    return {
      id: Math.random().toString(36).slice(-8),
      mouse: {
        current: {
          x: 0,
          y: 0
        },
        previous: {
          x: 0,
          y: 0
        },
        down: false
      },
      width: this.getWindowWidth(),
      height: this.getWindowHeight()
    }
  },
  computed: {
    currentMouse: function () {
      const c = document.getElementById(this.id)
      const rect = c.getBoundingClientRect()
      return {
        x: this.mouse.current.x - rect.left,
        y: this.mouse.current.y - rect.top
      }
    }
  },
  methods: {
    getWindowWidth: function () {
      return window.innerWidth ||
              document.documentElement.clientWidth ||
              document.body.clientWidth
    },
    getWindowHeight: function () {
      return window.innerHeight ||
            document.documentElement.clientHeight ||
            document.body.clientHeight
    },
    handleWindowResize: function (event) {
      this.width = this.getWindowWidth()
      this.height = this.getWindowHeight()
    },
    draw: function (event) {
      // requestAnimationFrame(this.draw);
      if (this.mouse.down) {
        var c = document.getElementById(this.id)
        var ctx = c.getContext('2d')
        ctx.clearRect(0, 0, 800, 800)

        ctx.lineTo(this.currentMouse.x, this.currentMouse.y)
        ctx.strokeStyle = '#F63E02'
        ctx.lineWidth = 2
        ctx.stroke()
      }
    },
    handleMouseDown: function (event) {
      this.mouse.down = true
      this.mouse.current = {
        x: event.pageX,
        y: event.pageY
      }
      var c = document.getElementById(this.id)
      var ctx = c.getContext('2d')
      ctx.moveTo(this.currentMouse.x, this.currentMouse.y)
    },
    handleMouseUp: function () {
      this.mouse.down = false
    },
    handleMouseMove: function (event) {
      this.mouse.current = {
        x: event.pageX,
        y: event.pageY
      }
      this.draw(event)
    }
  },
  created: function () {
    window.addEventListener('resize', this.handleWindowResize)
  },
  ready: function () {
    var c = document.getElementById(this.id)
    var ctx = c.getContext('2d')
    ctx.translate(0.5, 0.5)
    ctx.imageSmoothingEnabled = false
    // this.draw();
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleWindowResize)
  }
}
</script>

<style scoped>
.board {
  background-color: #fff;
}
</style>
