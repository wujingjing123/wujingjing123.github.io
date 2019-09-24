import Vue from 'vue'
import store from './store'
import router from './router.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import './icfont/iconfont.css'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
