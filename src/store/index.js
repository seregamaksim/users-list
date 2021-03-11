import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    ascendingFilter: false,
    viewPreview: false,
    searchUsers: ''
  },
  mutations: {
    addUsers (state, users) {
      state.users = users
    },
    // sortUsers (state, by) {
    //   const nameKey = by
    //   function compareNumeric (a, b) {
    //     console.log(a)
    //     if (a.nameKey > b.nameKey) return 1
    //     if (a.nameKey === b.nameKey) return 0
    //     if (a.nameKey < b.nameKey) return -1
    //   }
    //   state.users = state.users.sort(compareNumeric)
    //   console.log('sortBy', nameKey)
    // },
    sortByAge (state) {
      function compareNumeric (a, b) {
        if (a.age > b.age) return 1
        if (a.age === b.age) return 0
        if (a.age < b.age) return -1
      }
      state.users = state.users.sort(compareNumeric)
    },
    sortById (state) {
      function compareNumeric (a, b) {
        if (a.id > b.id) return 1
        if (a.id === b.id) return 0
        if (a.id < b.id) return -1
      }
      state.users = state.users.sort(compareNumeric)
    },
    sortByName (state) {
      function compareNumeric (a, b) {
        if (a.name > b.name) return 1
        if (a.name === b.name) return 0
        if (a.name < b.name) return -1
      }
      state.users = state.users.sort(compareNumeric)
    },
    reverseUsers (state, upDownFilter) {
      if (upDownFilter === 'up' && !state.ascendingFilter) {
        state.users = state.users.reverse()
        state.ascendingFilter = true
      } else if (upDownFilter === 'down' && state.ascendingFilter) {
        state.users = state.users.reverse()
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
      state.searchUsers = string
      console.log('state.searchUsers', state.searchUsers)
      return state.users.filter((item) => {
        return state.searchUsers.toLowerCase().split(' ').every(v => {
          item.name.toLowerCase().includes(v)
        })
        // return state.users.toLowerCase().split(' ').every(v => item.name.toLowerCase().includes(v))
        // console.log()
      })
    },
    sortBySearchQuery (state) {
      // return
      return state.users.filter((item) => {
        return state.searchUsers.toLowerCase().split(' ').every(v => {
          item.name.toLowerCase().includes(v)
        })
        // return state.users.toLowerCase().split(' ').every(v => item.name.toLowerCase().includes(v))
        // console.log()
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
      // console.log('string', string)
      context.commit('setSearchQueryValue', string)
      // context.commit('sortBySearchQuery')
    }
  },
  getters: {
    allUsers (state) {
      return state.users
    },
    currentPreview (state) {
      return state.viewPreview
    },
    filteredUsers: state => string => {
      // console.log('string', string)
      state.searchUsers = string
      console.log('state.searchUsers', state.searchUsers)
      return state.users.filter(item => {
        return state.searchUsers.toLowerCase().split(' ').every(v => {
          item.name.toLowerCase().includes(v)
        })
        // console.log(item.name.toLowerCase().includes(string))
        // if (item.name.toLowerCase().includes(string)) {
        //   console.log('success', item)
        // } else {
        //   // console.log('error')
        // }
      })
    }
    // sorteredByAge (state) {
    //   return state.users

    // }
  },
  modules: {
  }
})
