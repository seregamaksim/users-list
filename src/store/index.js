import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    ascendingFilter: false,
    viewPreview: false,
    searchUsers: []
  },
  mutations: {
    addUsers (state, users) {
      state.users = users
      state.searchUsers = users
    },
    sortBy (state, key) {
      function compareNumeric (a, b) {
        if (a[key] > b[key]) return 1
        if (a[key] === b[key]) return 0
        if (a[key] < b[key]) return -1
      }
      state.searchUsers = state.searchUsers.sort(compareNumeric)
    },
    reverseUsers (state, upDownFilter) {
      if (upDownFilter === 'up' && !state.ascendingFilter) {
        state.searchUsers = state.searchUsers.reverse()
        state.ascendingFilter = true
      } else if (upDownFilter === 'down' && state.ascendingFilter) {
        state.searchUsers = state.searchUsers.reverse()
        state.ascendingFilter = false
      }
    },
    changeView (state, view) {
      if (view === 'preview') {
        state.viewPreview = true
      } else if (view === 'table') {
        state.viewPreview = false
      }
    },
    setSearchQueryValue (state, string) {
      state.searchUsers = state.users.filter(item => {
        return string.toLowerCase().split(' ').every(func => {
          return item.name.toLowerCase().includes(func)
        })
      })
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
    getUsersBy (context, sortKey) {
      context.commit('sortBy', sortKey)
    },
    getReverseUsers (context, upDownFilter) {
      context.commit('reverseUsers', upDownFilter)
    },
    getChangeView (context, view) {
      context.commit('changeView', view)
    },
    getFilteredUsers (context, string) {
      context.commit('setSearchQueryValue', string)
    }
  },
  getters: {
    allUsers (state) {
      return state.users
    },
    currentPreview (state) {
      return state.viewPreview
    },
    searcheredUsers (state) {
      return state.searchUsers
    }
  },
  modules: {
  }
})
