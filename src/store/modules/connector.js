import * as types from '../mutation-types'
import Connector from '../../core/connector'

const state = {
  all: []
}

const getters = {
  allConnectors: state => state.all,
  fromConnector: (state) => (node) => {
    return state.all.find(n => n.from === node)
  },
  toConnector: (state) => (node) => {
    return state.all.find(n => n.to === node)
  },
  filter: (state) => (fn) => {
    return state.all.find(fn)
  }
}

const actions = {
  connect ({ commit }, connectObject) {
    commit(types.CONNECT_NODE, connectObject)
  }
}

const mutations = {
  [types.CONNECT_NODE] (state, connectObject) {
    const record = state.all.find(c => c.from === connectObject.from && c.to === connectObject.from)
    if (!record) {
      const con = new Connector(connectObject.from, connectObject.to)
      con.connect()
      state.all.push(con)
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
