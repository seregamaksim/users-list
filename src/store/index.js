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
    },
    sortByAge (state) {
      function compareNumeric (a, b) {
        if (a.age > b.age) return 1
        if (a.age === b.age) return 0
        if (a.age < b.age) return -1
      }
      state.users = state.users.sort(compareNumeric)
      console.log('sortByAge', state.users)
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
    },
    getUsersByAge (context) {
      context.commit('sortByAge')
    }
  },
  getters: {
    allUsers (state) {
      return state.users
    }
    // sorteredByAge (state) {
    //   return state.users

    // }
  },
  modules: {
  }
})
