import Vue from 'vue'
import Router from 'vue-router'

import Resource from 'vue-resource' // Setup HTTP requested funcionality

import auth from './packages/token/app.js'


import login from './views/Login.vue'
import dashboard from './views/Dashboard.vue'
import users from './components/dashboard/users/user.vue'



//
import consecutives from './components/dashboard/Consecutivos/table.vue'
import AcademicLevel from './components/dashboard/NivelAcademico/table.vue'
import Projects from './components/dashboard/Proyectos/table.vue'
import Permisos from './components/dashboard/Permiso/table.vue'
import LabRoles from './components/dashboard/RolesLab/table.vue'


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

    children: [
      {
        path: 'users',
        component: users
      },
      {
        path: 'consecutives',
        component: consecutives
      },
      {
        path: 'AcademicLevel',
        component: AcademicLevel

      },
      {
        path: 'Permisos',
        component: Permisos

      },
      {
        path: 'LabRoles',
        component: LabRoles

      },
      {
        path: 'Projects',
        component: Projects
      }

    ],
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
  },

  {
    path: '/dashboard/consecutives',
    name: 'consecutives',
    component: consecutives
  },

  {
    path: '/dashboard/AcademicLevel',
    name: 'AcademicLevel',
    component: AcademicLevel
  },

  {
    path: 'dashboard/Projects',
    name: 'Projects',
    component: Projects

  },

  {
    path: 'dashboard/Permisos',
    name: 'Permisos',
    component: Permisos
  },

  {
    path: 'dashboard/LabRoles',
    name: 'LabRoles',
    component: LabRoles
  }
  

  ]
})