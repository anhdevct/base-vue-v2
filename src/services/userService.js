import api from './api'

const userService = {
  // Get all users with pagination
  getUsers(params = {}) {
    return api.get('/users', { params })
  },

  // Get user by ID
  getUser(userId) {
    return api.get(`/users/${userId}`)
  },

  // Create new user
  createUser(userData) {
    return api.post('/users', userData)
  },

  // Update user
  updateUser(userId, userData) {
    return api.put(`/users/${userId}`, userData)
  },

  // Delete user
  deleteUser(userId) {
    return api.delete(`/users/${userId}`)
  },

  // Upload user avatar
  uploadAvatar(userId, formData) {
    return api.post(`/users/${userId}/avatar`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },

  // Search users
  searchUsers(query, params = {}) {
    return api.get('/users/search', {
      params: { q: query, ...params }
    })
  },

  // Get user profile
  getUserProfile(userId) {
    return api.get(`/users/${userId}/profile`)
  },

  // Update user profile
  updateUserProfile(userId, profileData) {
    return api.put(`/users/${userId}/profile`, profileData)
  }
}

export default userService 