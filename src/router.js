import Vue from 'vue'
import Router from 'vue-router'

import login from './views/Login.vue'


Vue.use(Router)


export default new Router({

  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'Login',
      component: login
    }
  ]
})