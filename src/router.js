import Vue from 'vue'
import Router from 'vue-router'

import Resource from 'vue-resource' // Setup HTTP requested funcionality

import auth from './packages/token/app.js'


import login from './views/Login.vue'
import dashboard from './views/Dashboard.vue'
import users from './components/dashboard/users/user.vue'





Vue.use(Resource)
Vue.use(Router)
Vue.use(auth)

export default new Router({

  mode: 'history',

  routes: [{
      path: '/',
      name: 'Login',
      component: login

    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard,

      children: [{
        path: 'users',
        component: users

      }],
      beforeEnter: (to, from, next) => {
        if (Vue.auth.isAuthenticated()) {
          next()
        } else {
          next("/")
        }
      }
    },
    {
      path: '/dashboard/users',
      name: 'users',
      component: users,
      beforeEnter: (to, from, next) => {
        if (Vue.auth.isAuthenticated()) {
          next()
        } else {
          next("/")
        }
      }
    }
  ]
})