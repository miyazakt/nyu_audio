<template>
  <div class="board">
    <table class="viewTable">
      <tbody>
        <tr v-for="(row, y) in this.viewTable">
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

export default {
  computed: {
    ...mapGetters({ isSelectMode: 'isSelectMode', allConnectors: 'allConnectors' })
  },
  data: function () {
    return {
      x: 7,
      y: 5,
      viewTable: []
    }
  },
  created: function () {
    for (let i = 0; i < this.y; i++) {
      this.viewTable[i] = []
      for (let j = 0; j < this.x; j++) {
        this.viewTable[i][j] = null
      }
    }
    this.viewTable[2][0] = { type: 'oscillator', name: 'Oscillator', image: 'oscillator.png', parameters: {}}
    this.viewTable[2][3] = { type: 'gain', name: 'gain', image: 'icon_rss.svg', parameters: {}}
    this.viewTable[2][6] = { type: 'destination', name: 'destination', image: 'speaker.png', parameters: {}}
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
      this.viewTable[y][x] = { type: 'gain', name: 'gain', image: 'icon_rss.svg', parameters: {}}
    }
  },
  components: {
    'panel': panel,
    'connection': connection
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
