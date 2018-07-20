import Vue from 'vue'
import Router from 'vue-router'

import Resource from 'vue-resource' // Setup HTTP requested funcionality

import auth from './packages/token/app.js'


import login from './views/Login.vue'
import dashboard from './views/Dashboard.vue'

Vue.use(Resource)
Vue.use(Router)
Vue.use(auth)

export default new Router({

  mode: 'history',

  routes: [{
      path: '/',
      name: 'Login',
      component: login,
      meta: {
        forVisitors: true
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard
    }
  ]
})