// API Configuration
export const API_BASE_URL = (typeof process !== 'undefined' && process.env && process.env.VUE_APP_API_BASE_URL) || 'http://localhost:3000/api'
export const API_TIMEOUT = 10000

// App Configuration
export const APP_NAME = 'Base Vue V2'
export const APP_VERSION = '1.0.0'
export const APP_DESCRIPTION = 'Base Vue 2 project with structured folders'

// Authentication
export const TOKEN_KEY = 'auth_token'
export const REFRESH_TOKEN_KEY = 'refresh_token'
export const USER_KEY = 'user_data'

// Pagination
export const DEFAULT_PAGE_SIZE = 10
export const PAGE_SIZE_OPTIONS = [10, 20, 50, 100]

// Date & Time formats
export const DATE_FORMAT = 'YYYY-MM-DD'
export const DATETIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'
export const TIME_FORMAT = 'HH:mm:ss'

// File upload
export const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
export const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/gif']
export const ALLOWED_FILE_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
]

// Validation
export const PASSWORD_MIN_LENGTH = 8
export const USERNAME_MIN_LENGTH = 3
export const USERNAME_MAX_LENGTH = 20

// Local Storage Keys
export const STORAGE_KEYS = {
  TOKEN: 'token',
  USER: 'user',
  SETTINGS: 'settings',
  LANGUAGE: 'language',
  THEME: 'theme'
}

// Routes
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  PROFILE: '/profile',
  USERS: '/users',
  ABOUT: '/about'
}

// Roles & Permissions
export const ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  MODERATOR: 'moderator'
}

export const PERMISSIONS = {
  READ_USERS: 'read:users',
  WRITE_USERS: 'write:users',
  DELETE_USERS: 'delete:users',
  MANAGE_SETTINGS: 'manage:settings'
} 