import Vue from 'vue'
import Vuex from 'vuex'
import { newUrl } from '@/assets/js/newUrl'
import { checkUrl } from '@/assets/js/checkUrl'

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
      newUrl('sortBy', key)
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
      newUrl('upDown', upDownFilter)
    },
    changeView (state, view) {
      if (view === 'preview') {
        state.viewPreview = true
      } else if (view === 'table') {
        state.viewPreview = false
      }
      newUrl('view', view)
    },
    setSearchQueryValue (state, string) {
      if (string.length !== 0) {
        newUrl('searchName', string)
      } else {
        newUrl('searchName', string, true)
      }
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
          const searchParams = checkUrl()
          if (searchParams) {
            if (searchParams.sortBy) {
              context.commit('sortBy', searchParams.sortBy)
            }
            if (searchParams.upDown) {
              context.commit('reverseUsers', searchParams.upDown)
            }
            if (searchParams.view) {
              context.commit('changeView', searchParams.view)
            }
            if (searchParams.searchName) {
              context.commit('setSearchQueryValue', searchParams.searchName)
            }
          }
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
