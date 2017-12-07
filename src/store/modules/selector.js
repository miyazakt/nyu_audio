import * as types from '../mutation-types'

const state = {
  isSelected: false,
  selectors: []
}

const getters = {
  selectors: state => state.selectors,
  isSelected: state => state.isSelected
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
  }
}

const mutations = {
  [types.SELECT] (state, node) {
    if (state.isSelected) {
      state.selectors.push(node)
    }
  },
  [types.CLEAR_SELECTOR] (state) {
    state.selectors = []
  },
  [types.SELECT_START] (state) {
    state.isSelected = true
  },
  [types.SELECT_STOP] (state) {
    state.isSelected = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
