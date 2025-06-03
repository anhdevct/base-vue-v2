import authService from '@/services/authService'

const state = {
  user: null,
  token: localStorage.getItem('token') || null,
  isAuthenticated: false
}

const mutations = {
  SET_USER(state, user) {
    state.user = user
    state.isAuthenticated = !!user
  },
  SET_TOKEN(state, token) {
    state.token = token
    if (token) {
      localStorage.setItem('token', token)
    } else {
      localStorage.removeItem('token')
    }
  },
  LOGOUT(state) {
    state.user = null
    state.token = null
    state.isAuthenticated = false
    localStorage.removeItem('token')
  }
}

const actions = {
  async login({ commit }, credentials) {
    try {
      const response = await authService.login(credentials)
      const { user, token } = response.data
      commit('SET_USER', user)
      commit('SET_TOKEN', token)
      return response
    } catch (error) {
      throw error
    }
  },
  
  async logout({ commit }) {
    try {
      await authService.logout()
      commit('LOGOUT')
    } catch (error) {
      commit('LOGOUT') // Logout locally even if API call fails
      throw error
    }
  },
  
  async fetchUser({ commit, state }) {
    if (!state.token) return
    
    try {
      const response = await authService.getCurrentUser()
      commit('SET_USER', response.data)
    } catch (error) {
      commit('LOGOUT')
      throw error
    }
  }
}

const getters = {
  isAuthenticated: state => state.isAuthenticated,
  currentUser: state => state.user,
  token: state => state.token
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
} 