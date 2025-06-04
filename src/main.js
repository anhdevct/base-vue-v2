import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/styles/global.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

console.log('Vue app is starting...')

new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
  }
}).$mount('#app') 