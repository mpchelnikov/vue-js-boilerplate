import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
