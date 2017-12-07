import * as types from '../mutation-types'

const state = {
  isSelectMode: false,
  selectors: []
}

const getters = {
  selectors: state => state.selectors,
  isSelectMode: state => state.isSelectMode
}

const actions = {
  select ({ commit }, node) {
    commit(types.SELECT, node)
  },
  clearSelector ({ commit }) {
    commit(types.CLEAR_SELECTOR)
  },
  startSelect ({ commit }) {
    commit(types.SELECT_START)
  },
  stopSelect ({ commit }) {
    commit(types.SELECT_STOP)
  },
  doneSelect ({ commit, state }) {
    commit(types.SELECT_STOP)
    const selectors = state.selectors
    for (let i = 1; i < selectors.length; i++) {
      commit(types.CONNECT_NODE, { from: selectors[i - 1], to: selectors[i] })
    }
    commit(types.CLEAR_SELECTOR)
  },
  cancelSelect ({ commit }) {
    commit(types.SELECT_STOP)
    commit(types.CLEAR_SELECTOR)
  }
}

const mutations = {
  [types.SELECT] (state, node) {
    if (state.isSelectMode) {
      state.selectors.push(node)
    }
  },
  [types.CLEAR_SELECTOR] (state) {
    state.selectors = []
  },
  [types.SELECT_START] (state) {
    state.isSelectMode = true
  },
  [types.SELECT_STOP] (state) {
    state.isSelectMode = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
