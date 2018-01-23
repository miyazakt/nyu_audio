<template>
  <div class="board">
    <oscilloscope></oscilloscope>
    <table class="viewTable">
      <tbody>
        <tr v-for="(row, y) in this.table">
          <td v-for="(node, x) in row" v-if="node !== null">
            <panel :type="node.type"
                   :name="node.name"
                   :image="node.image"
                   :parameters="node.parameters"
            ></panel>
          </td>
          <td v-else @click="cellClick(x, y)">
            ◯
          </td>
        </tr>
      </tbody>
    </table>
      <button @click="selectClick">選択{{ isSelectMode ? '解除' : '' }}</button>
    <button @click="connectClick">connect</button>
    <button @click="disconnectClick">disconnect</button>
    <div v-for="connector in allConnectors">
      <connection :from-object="connector.from"
                  :to-object="connector.to"
                  ></connection>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import panel from './Panel'
import connection from './Connection'
import oscilloscope from './Oscilloscope'

export default {
  computed: {
    ...mapGetters({ isSelectMode: 'isSelectMode', allConnectors: 'allConnectors' }),
    table: function () {
      const ret = []
      for (let i = 0; i < this.y; i++) {
        ret.push([])
        for (let j = 0; j < this.x; j++) {
          ret[i].push(this.viewTable[i * this.x + j])
        }
      }
      return ret
    }
  },
  data: function () {
    return {
      x: 7,
      y: 5,
      viewTable: []
    }
  },
  created: function () {
    for (let i = 0; i < this.x * this.y; i++) {
      this.viewTable.push(null)
    }
    this.viewTable.splice(2 * this.x + 0, 1, { type: 'oscillator', name: 'Oscillator', image: 'oscillator.png', parameters: {}})
    this.viewTable.splice(2 * this.x + 3, 1, { type: 'gain', name: 'gain', image: 'icon_rss.svg', parameters: {}})
    this.viewTable.splice(2 * this.x + 6, 1, { type: 'destination', name: 'destination', image: 'speaker.png', parameters: {}})
  },
  methods: {
    selectClick: function (event) {
      if (this.$store.getters.isSelectMode) {
        this.$store.dispatch('cancelSelect')
      } else {
        this.$store.dispatch('startSelect')
      }
    },
    connectClick: function (event) {
      this.$store.dispatch('doneSelect', { type: 'connect' })
    },
    disconnectClick: function (event) {
      this.$store.dispatch('doneSelect', { type: 'disconnect' })
    },
    cellClick: function (x, y) {
      this.viewTable.splice(y * this.x + x, 1, { type: 'gain', name: 'gain', image: 'icon_rss.svg', parameters: {}})
    }
  },
  components: {
    'panel': panel,
    'connection': connection,
    'oscilloscope': oscilloscope
  }
}
</script>
<style>
.board {
  border: solid 1px black;
}
  .viewTable {
    border-collapse: collapse;
    table-layout: fixed;
    margin: 5px auto;
  }
  .viewTable tr td {
    border: 1px solid #cccccc;
    width: 100px;
    height: 100px;
  }
</style>
