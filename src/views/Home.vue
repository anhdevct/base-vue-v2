
<template>
  <div class="home">
    <el-container class='is-vertical'>
      <HeaderNav/>
      <el-main class="main">
        <el-row :gutter="20">
          <el-col :span="24">
            <el-card class="welcome-card">
              <div slot="header" class="card-header">
                <span>Welcome to {{ appName }}</span>
              </div>
              <p>This is a base Vue 2 project with structured folders including:</p>
              <ul>
                <li><strong>Views:</strong> Page components</li>
                <li><strong>Services:</strong> API calls and business logic</li>
                <li><strong>Router:</strong> Navigation configuration</li>
                <li><strong>Store:</strong> Vuex state management</li>
                <li><strong>Types:</strong> Data types and constants</li>
                <li><strong>Config:</strong> Application configuration</li>
              </ul>
            </el-card>
          </el-col>
        </el-row>
        
        <el-row :gutter="20" class="feature-cards">
          <el-col :span="8">
            <el-card class="feature-card">
              <div slot="header">
                <i class="el-icon-view"></i>
                <span>Views</span>
              </div>
              <p>Organized page components with clear separation of concerns</p>
            </el-card>
          </el-col>
          
          <el-col :span="8">
            <el-card class="feature-card">
              <div slot="header">
                <i class="el-icon-connection"></i>
                <span>Services</span>
              </div>
              <p>API services with axios configuration and interceptors</p>
            </el-card>
          </el-col>
          
          <el-col :span="8">
            <el-card class="feature-card">
              <div slot="header">
                <i class="el-icon-setting"></i>
                <span>Configuration</span>
              </div>
              <p>Centralized configuration and constants management</p>
            </el-card>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import HeaderNav from '@/components/layout/HeaderNav.vue'
  export default {
    name: 'Home',
    components: {
      HeaderNav
    }
  }
</script>

<style scoped>
  .home {
    min-height: 100vh;
  }

  .main {
    padding: 20px;
    background-color: #f5f7fa;
  }

  .welcome-card {
    margin-bottom: 20px;
  }

  .card-header {
    font-size: 18px;
    font-weight: bold;
  }

  .feature-cards {
    margin-top: 20px;
  }

  .feature-card .el-card__header {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .feature-card .el-card__header i {
    font-size: 20px;
    color: #409eff;
  }

  .feature-card p {
    color: #606266;
    line-height: 1.6;
  }
</style> 