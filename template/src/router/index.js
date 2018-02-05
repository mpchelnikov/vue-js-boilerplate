import Vue from 'vue'
import Router from 'vue-router'

const Main = () => import(/* webpackChunkName: "guest" */ '../pages/guest/p-main/Main.vue');

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Main
    }
  ],
})
