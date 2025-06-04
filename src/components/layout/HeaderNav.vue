<template>
    <el-header class="header">
      <p v-if="title !== null">{{ title }}</p>
      <h1>{{ appName }}</h1>
      <nav class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/users">Users</router-link>      
        <router-link to="/todo-list">Todo List</router-link>      
      </nav>  
    </el-header>  
</template> 

<script>
  import { APP_NAME } from '@/config/constants'
  export default {
    name: 'HeaderNav',
    props: {
      title: {
        type: String,
        default: null
      }
    },
    data() {
      return {
        appName: APP_NAME
      }
    }
  }
</script>

<style scoped>
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
</style>
