import api from './api'

const authService = {
  // Login user
  login(credentials) {
    return api.post('/auth/login', credentials)
  },

  // Register user
  register(userData) {
    return api.post('/auth/register', userData)
  },

  // Logout user
  logout() {
    return api.post('/auth/logout')
  },

  // Get current user
  getCurrentUser() {
    return api.get('/auth/me')
  },

  // Refresh token
  refreshToken(refreshToken) {
    return api.post('/auth/refresh', { refreshToken })
  },

  // Forgot password
  forgotPassword(email) {
    return api.post('/auth/forgot-password', { email })
  },

  // Reset password
  resetPassword(token, password) {
    return api.post('/auth/reset-password', { token, password })
  },

  // Change password
  changePassword(currentPassword, newPassword) {
    return api.put('/auth/change-password', {
      currentPassword,
      newPassword
    })
  }
}

export default authService 