import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

// Enable devTools
if (window.location.hostname.indexOf('local') > -1) {
  Vue.config.devtools = true
}

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
