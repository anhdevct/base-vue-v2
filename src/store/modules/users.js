import userService from '@/services/userService'

const state = {
  users: [],
  currentUser: null,
  pagination: {
    page: 1,
    limit: 10,
    total: 0
  }
}

const mutations = {
  SET_USERS(state, users) {
    state.users = users
  },
  SET_CURRENT_USER(state, user) {
    state.currentUser = user
  },
  SET_PAGINATION(state, pagination) {
    state.pagination = { ...state.pagination, ...pagination }
  },
  ADD_USER(state, user) {
    state.users.push(user)
  },
  UPDATE_USER(state, updatedUser) {
    const index = state.users.findIndex(user => user.id === updatedUser.id)
    if (index !== -1) {
      state.users.splice(index, 1, updatedUser)
    }
  },
  REMOVE_USER(state, userId) {
    state.users = state.users.filter(user => user.id !== userId)
  }
}

const actions = {
  async fetchUsers({ commit }, params = {}) {
    try {
      const response = await userService.getUsers(params)
      commit('SET_USERS', response.data.users)
      commit('SET_PAGINATION', {
        page: response.data.page,
        limit: response.data.limit,
        total: response.data.total
      })
      return response
    } catch (error) {
      throw error
    }
  },
  
  async fetchUser({ commit }, userId) {
    try {
      const response = await userService.getUser(userId)
      commit('SET_CURRENT_USER', response.data)
      return response
    } catch (error) {
      throw error
    }
  },
  
  async createUser({ commit }, userData) {
    try {
      const response = await userService.createUser(userData)
      commit('ADD_USER', response.data)
      return response
    } catch (error) {
      throw error
    }
  },
  
  async updateUser({ commit }, { userId, userData }) {
    try {
      const response = await userService.updateUser(userId, userData)
      commit('UPDATE_USER', response.data)
      return response
    } catch (error) {
      throw error
    }
  },
  
  async deleteUser({ commit }, userId) {
    try {
      await userService.deleteUser(userId)
      commit('REMOVE_USER', userId)
    } catch (error) {
      throw error
    }
  }
}

const getters = {
  allUsers: state => state.users,
  currentUser: state => state.currentUser,
  pagination: state => state.pagination,
  getUserById: state => id => state.users.find(user => user.id === id)
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
} 