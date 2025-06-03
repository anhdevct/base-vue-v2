# Base Vue V2 Project

Một dự án Vue 2 được tổ chức với cấu trúc thư mục rõ ràng và các best practices.

## 🚀 Tính năng

- **Vue 2.6.14** - Framework JavaScript tiên tiến
- **Vue Router** - Quản lý routing
- **Vuex** - Quản lý state toàn cục
- **Element UI** - Thư viện component UI
- **Axios** - HTTP client với interceptors
- **ESLint + Prettier** - Code formatting và linting
- **Webpack** - Module bundler
- **Babel** - JavaScript transpiler

## 📁 Cấu trúc thư mục

```
src/
├── views/              # Các trang chính của ứng dụng
│   ├── Home.vue
│   ├── About.vue
│   └── Users.vue
├── services/           # API services và HTTP configuration
│   ├── api.js         # Axios instance và interceptors
│   ├── authService.js # Authentication services
│   └── userService.js # User management services
├── router/            # Vue Router configuration
│   └── index.js       # Route definitions
├── store/             # Vuex store
│   ├── index.js       # Main store
│   └── modules/       # Store modules
│       ├── auth.js
│       └── users.js
├── types/             # Type definitions và constants
│   └── index.js       # Common types và enums
├── config/            # Application configuration
│   └── constants.js   # App constants và settings
├── components/        # Reusable Vue components
├── assets/           # Static assets
│   └── styles/       # Global styles
│       └── global.css
├── utils/            # Utility functions
├── App.vue           # Root component
└── main.js           # Application entry point
```

## 🛠️ Cài đặt

### Yêu cầu hệ thống

- Node.js >= 14.x
- npm >= 6.x hoặc yarn >= 1.x

### Cài đặt dependencies

```bash
npm install
```

hoặc

```bash
yarn install
```

## 🚀 Chạy dự án

### Development mode

```bash
npm run dev
```

hoặc

```bash
npm run serve
```

Ứng dụng sẽ chạy tại `http://localhost:8080`

### Production build

```bash
npm run build
```

### Linting

```bash
npm run lint
```

## 📚 Hướng dẫn sử dụng

### 1. Views (Trang)

Các trang chính của ứng dụng được đặt trong thư mục `src/views/`. Mỗi view là một Vue component đại diện cho một trang hoàn chỉnh.

```vue
<template>
  <div class="page-name">
    <!-- Template content -->
  </div>
</template>

<script>
export default {
  name: 'PageName',
  // Component logic
}
</script>

<style scoped>
/* Component styles */
</style>
```

### 2. Services (Dịch vụ)

Services được sử dụng để giao tiếp với API và xử lý business logic.

```javascript
// Example service
import api from './api'

const userService = {
  getUsers(params) {
    return api.get('/users', { params })
  },
  
  createUser(userData) {
    return api.post('/users', userData)
  }
}

export default userService
```

### 3. Router

Cấu hình routing trong `src/router/index.js`:

```javascript
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
```

### 4. Store (Vuex)

State management với Vuex modules:

```javascript
// Store module example
const state = {
  items: []
}

const mutations = {
  SET_ITEMS(state, items) {
    state.items = items
  }
}

const actions = {
  async fetchItems({ commit }) {
    try {
      const response = await api.get('/items')
      commit('SET_ITEMS', response.data)
    } catch (error) {
      throw error
    }
  }
}

const getters = {
  allItems: state => state.items
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
```

### 5. Types và Constants

Định nghĩa các types và constants trong `src/types/`:

```javascript
export const UserTypes = {
  ADMIN: 'admin',
  USER: 'user',
  MODERATOR: 'moderator'
}

export const ApiStatus = {
  SUCCESS: 'success',
  ERROR: 'error',
  LOADING: 'loading'
}
```

### 6. Configuration

Cấu hình ứng dụng trong `src/config/`:

```javascript
export const API_BASE_URL = process.env.VUE_APP_API_BASE_URL || 'http://localhost:3000/api'
export const APP_NAME = 'Base Vue V2'
export const DEFAULT_PAGE_SIZE = 10
```

## 🔧 Environment Variables

Tạo file `.env` trong thư mục gốc:

```bash
# API Configuration
VUE_APP_API_BASE_URL=http://localhost:3000/api

# App Configuration
VUE_APP_NAME=Base Vue V2
VUE_APP_VERSION=1.0.0

# Other configurations
NODE_ENV=development
```

## 📝 Best Practices

### 1. Component Naming

- Sử dụng PascalCase cho tên component
- Sử dụng kebab-case trong template

```vue
<!-- Good -->
<user-card :user="user" />

<!-- Bad -->
<UserCard :user="user" />
```

### 2. File Organization

- Mỗi feature có thể có folder riêng
- Group related files together
- Sử dụng consistent naming convention

### 3. State Management

- Sử dụng Vuex cho global state
- Component state cho local state
- Actions cho async operations
- Mutations cho sync state changes

### 4. API Calls

- Tất cả API calls qua services
- Sử dụng async/await
- Handle errors properly
- Use loading states

### 5. Styling

- Sử dụng scoped styles
- Global styles trong `src/assets/styles/`
- Utility classes cho common styles
- Consistent naming convention

## 🧪 Testing

Dự án được setup sẵn để integrate testing framework:

```bash
# Unit tests
npm run test:unit

# E2E tests
npm run test:e2e
```

## 📦 Build và Deploy

### Build cho production

```bash
npm run build
```

Files sẽ được tạo trong thư mục `dist/`

### Deploy

Có thể deploy lên các platform như:

- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Firebase Hosting

## 🤝 Contributing

1. Fork repository
2. Tạo feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Tạo Pull Request

## 📄 License

Dự án này được phân phối dưới giấy phép MIT. Xem file `LICENSE` để biết thêm chi tiết.

## 🆘 Support

Nếu bạn gặp vấn đề hoặc có câu hỏi:

1. Kiểm tra Issues trên GitHub
2. Tạo Issue mới với description chi tiết
3. Liên hệ qua email: support@example.com

## 🎯 Roadmap

- [ ] Add TypeScript support
- [ ] Add unit testing setup
- [ ] Add E2E testing
- [ ] Add PWA features
- [ ] Add internationalization (i18n)
- [ ] Add dark mode
- [ ] Add mobile responsive improvements
- [ ] Add performance optimizations 