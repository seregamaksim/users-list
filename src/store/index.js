import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    addUsers (state, users) {
      state.users = users
    }
  },
  actions: {
    getUsers (context) {
      fetch('/data.json')
        .then(response => {
          return response.json()
        })
        .then(data => {
          context.commit('addUsers', data)
        })
    }
  },
  getters: {
    allUsers (state) {
      return state.users
    }
  },
  modules: {
  }
})
