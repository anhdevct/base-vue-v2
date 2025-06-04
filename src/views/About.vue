<template>
  <div class="about">
    <el-container class='is-vertical'>
      <HeaderNav/>
      <el-main class="main">
        <el-row :gutter="20">
          <el-col :span="16" :offset="4">
            <el-card>
              <div slot="header" class="card-header">
                <span>About {{ appName }}</span>
              </div>
              
              <div class="about-content">
                <p><strong>Version:</strong> {{ appVersion }}</p>
                <p><strong>Description:</strong> {{ appDescription }}</p>
                
                <h3>Project Structure</h3>
                <el-divider></el-divider>
                
                <div class="structure-section">
                  <h4><i class="el-icon-folder"></i> src/</h4>
                  <ul class="structure-list">
                    <li><strong>views/</strong> - Page components and layouts</li>
                    <li><strong>services/</strong> - API services and HTTP client configuration</li>
                    <li><strong>router/</strong> - Vue Router configuration and route definitions</li>
                    <li><strong>store/</strong> - Vuex store modules and state management</li>
                    <li><strong>types/</strong> - Type definitions and data structures</li>
                    <li><strong>config/</strong> - Application configuration and constants</li>
                    <li><strong>components/</strong> - Reusable Vue components</li>
                    <li><strong>assets/</strong> - Static assets (images, styles, etc.)</li>
                    <li><strong>utils/</strong> - Utility functions and helpers</li>
                  </ul>
                </div>
                
                <h3>Features</h3>
                <el-divider></el-divider>
                
                <el-row :gutter="20">
                  <el-col :span="12">
                    <ul class="feature-list">
                      <li>Vue 2.6.14</li>
                      <li>Vue Router for routing</li>
                      <li>Vuex for state management</li>
                      <li>Element UI components</li>
                      <li>Axios for HTTP requests</li>
                    </ul>
                  </el-col>
                  <el-col :span="12">
                    <ul class="feature-list">
                      <li>ESLint + Prettier</li>
                      <li>Webpack configuration</li>
                      <li>Authentication setup</li>
                      <li>Responsive design</li>
                      <li>Modern ES6+ syntax</li>
                    </ul>
                  </el-col>
                </el-row>
                
                <h3>Getting Started</h3>
                <el-divider></el-divider>
                
                <div class="getting-started">
                  <p>To start development:</p>
                  <pre class="code-block">npm install
                  npm run serve</pre>
                  
                  <p>To build for production:</p>
                  <pre class="code-block">npm run build</pre>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { APP_NAME, APP_VERSION, APP_DESCRIPTION } from '@/config/constants'
import HeaderNav from '@/components/layout/HeaderNav.vue'

export default {
  components: {
    HeaderNav
  },
  name: 'About',
  data() {
    return {
      appName: APP_NAME,
      appVersion: APP_VERSION,
      appDescription: APP_DESCRIPTION
    }
  }
}
</script>

<style scoped>
.about {
  min-height: 100vh;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #409eff;
  color: white;
  padding: 0 20px;
}

.header h1 {
  margin: 0;
  font-size: 24px;
}

.nav {
  display: flex;
  gap: 20px;
}

.nav a {
  color: white;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav a:hover,
.nav a.router-link-active {
  background-color: rgba(255, 255, 255, 0.2);
}

.main {
  padding: 20px;
  background-color: #f5f7fa;
}

.card-header {
  font-size: 18px;
  font-weight: bold;
}

.about-content {
  line-height: 1.8;
}

.about-content h3 {
  color: #303133;
  margin-top: 30px;
  margin-bottom: 10px;
}

.about-content h4 {
  color: #606266;
  margin: 20px 0 10px 0;
  display: flex;
  align-items: center;
  gap: 8px;
}

.structure-list {
  margin: 10px 0;
  padding-left: 20px;
}

.structure-list li {
  margin: 8px 0;
  color: #606266;
}

.feature-list {
  margin: 0;
  padding-left: 20px;
}

.feature-list li {
  margin: 8px 0;
  color: #606266;
}

.getting-started {
  margin-top: 20px;
}

.code-block {
  background-color: #f4f4f5;
  border: 1px solid #e4e7ed;
  border-radius: 4px;
  padding: 15px;
  margin: 10px 0;
  font-family: 'Courier New', monospace;
  color: #2c3e50;
  overflow-x: auto;
}

.structure-section {
  margin: 20px 0;
}
</style> 