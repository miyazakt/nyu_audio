import * as types from '../mutation-types'

const state = {
  all: []
}

const getters = {
  nodes: state => state.all,
  node: (state) => (panel) => {
    return state.all.find(n => n.panel === panel)
  }
}

const actions = {
  registerNode ({ commit }, payload) {
    commit(types.REGISTER_NODE, payload)
  }
}

const mutations = {
  [types.CONNECT_NODE] (state) {
  },
  [types.REGISTER_NODE] (state, node) {
    const record = state.all.find(n => n === node)
    if (!record) {
      state.all.push(node)
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
