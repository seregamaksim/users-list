import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    ascendingFilter: false,
    viewPreview: false
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
      console.log('string', string)
    }
  },
  getters: {
    allUsers (state) {
      return state.users
    },
    currentPreview (state) {
      return state.viewPreview
    }
    // sorteredByAge (state) {
    //   return state.users

    // }
  },
  modules: {
  }
})
