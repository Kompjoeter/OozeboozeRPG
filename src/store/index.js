import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logActive: [],
    logArchive: [],
  },
  getters:{
    getLogActive: state => {
      return state.logActive
    }
  },
  mutations: {
    pushMessageLogActive (state, message) {
      state.logActive.push(message);
    }
  },
  actions: {
  },
  modules: {
  }
})
