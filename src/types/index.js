// User types
export const UserTypes = {
  ADMIN: 'admin',
  USER: 'user',
  MODERATOR: 'moderator'
}

// User status
export const UserStatus = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  PENDING: 'pending',
  SUSPENDED: 'suspended'
}

// API Response status
export const ApiStatus = {
  SUCCESS: 'success',
  ERROR: 'error',
  LOADING: 'loading'
}

// Modal types
export const ModalTypes = {
  CONFIRM: 'confirm',
  INFO: 'info',
  WARNING: 'warning',
  ERROR: 'error'
}

// Form validation rules
export const ValidationRules = {
  required: (message = 'This field is required') => ({
    required: true,
    message,
    trigger: 'blur'
  }),
  
  email: (message = 'Please enter a valid email') => ({
    type: 'email',
    message,
    trigger: 'blur'
  }),
  
  minLength: (min, message) => ({
    min,
    message: message || `Minimum length is ${min} characters`,
    trigger: 'blur'
  }),
  
  maxLength: (max, message) => ({
    max,
    message: message || `Maximum length is ${max} characters`,
    trigger: 'blur'
  }),
  
  pattern: (pattern, message) => ({
    pattern,
    message,
    trigger: 'blur'
  })
}

// Default pagination
export const DefaultPagination = {
  page: 1,
  limit: 10,
  total: 0
}

// HTTP Status codes
export const HttpStatus = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
} 