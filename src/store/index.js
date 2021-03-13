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
    sortByAge (state) {
      function compareNumeric (a, b) {
        if (a.age > b.age) return 1
        if (a.age === b.age) return 0
        if (a.age < b.age) return -1
      }
      state.searchUsers = state.searchUsers.sort(compareNumeric)
    },
    sortById (state) {
      function compareNumeric (a, b) {
        if (a.id > b.id) return 1
        if (a.id === b.id) return 0
        if (a.id < b.id) return -1
      }
      state.searchUsers = state.searchUsers.sort(compareNumeric)
    },
    sortByName (state) {
      function compareNumeric (a, b) {
        if (a.name > b.name) return 1
        if (a.name === b.name) return 0
        if (a.name < b.name) return -1
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
    getUsersByAge (context) {
      context.commit('sortByAge', 'age')
    },
    getUsersById (context) {
      context.commit('sortById', 'id')
    },
    getUsersByName (context) {
      context.commit('sortByName', 'name')
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
    // filteredUsers: state => string => {
    //   // console.log('string', string)
    //   state.searchUsers = string
    //   return state.users.filter(item => {
    //     return state.searchUsers.toLowerCase().split(' ').every(v => {
    //       item.name.toLowerCase().includes(v)
    //     })
    //     // console.log(item.name.toLowerCase().includes(string))
    //     // if (item.name.toLowerCase().includes(string)) {
    //     //   console.log('success', item)
    //     // } else {
    //     //   // console.log('error')
    //     // }
    //   })
    // }
    // sorteredByAge (state) {
    //   return state.users

    // }
  },
  modules: {
  }
})
