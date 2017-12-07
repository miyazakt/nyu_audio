import * as types from '../mutation-types'

const state = {
  audiocontext: null
}

const getters = {
  audiocontext: state => state.audiocontext
}

const actions = {
  saveAudioContext ({ commit }, audiocontext) {
    commit(types.SAVE_AUDIOCONTEXT, audiocontext)
  }
}

const mutations = {
  [types.SAVE_AUDIOCONTEXT] (state, audiocontext) {
    state.audiocontext = audiocontext
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
