import Vue from 'vue'
import Router from 'vue-router'

import Store from './vuex/index'

import Resource from 'vue-resource' // Setup HTTP requested funcionality


import login from './views/Login.vue'
import dashboard from './views/dashboard.vue'
//import users from './components/dashboard/users/user.vue'

import users from "./views/security/user.vue"
import Permiso from './views/security/Permiso.vue'
import LabRoles from './views/security/LabRoles.vue'
import Jobs from './views/security/Jobs.vue'
import Consecutives from './views/security/Consecutives.vue'
import AcademicLevel from './views/security/AcademicLevel.vue'

import Ramas from './views/administracion/Ramas.vue'
import BitacoraCi from './views/administracion/BitacoraCi.vue'
import Projects from './views/administracion/Proyecto.vue'
import BitacoraProyecto from './views/administracion/BitacoraProyecto.vue'

import Bitacora from './views/consultas/Bitacora.vue'
import Descargas from './views/consultas/Descargas.vue'
import Errores from './views/consultas/Errores.vue'


Vue.use(Resource)
Vue.use(Router)


const ifNotAuthenticated = (to, from, next) => {

  if (!Store.getters.isAuthenticated) {
    next()
    return
  }

  next("/")
}


const ifAuthenticated = (to, from, next) => {

  if (Store.getters.isAuthenticated) {
    next("/dashboard")
    return
  }

  next("/")
}




export default new Router({

  mode: 'history',

  routes: [{

    path: '/',
    name: 'Login',
    component: login,

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
        path: 'Consecutives',
        component: Consecutives
      },
      {
        path: 'AcademicLevel',
        component: AcademicLevel
      },
      {
        path: 'Permiso',
        component: Permiso
      },
      {
        path: 'LabRoles',
        component: LabRoles
      },
      {
        path: 'Jobs',
        component: Jobs
      },
//
      {
        path: 'Projects',
        component: Projects
      },
      {
        path: 'BitacoraCi',
        component: BitacoraCi
      },
      {
        path: 'Ramas',
        component: Ramas
      },
//
      {
        path: 'Bitacora',
        component: Bitacora
      },
      {
        path: 'Descargas',
        component: Descargas
      },
      {
        path: 'Errores',
        component: Errores
      },
      {
        path: 'BitacoraProyecto',
        component: BitacoraProyecto
      }


    ]
  },
  {
    path: '/dashboard/users',
    name: 'users',
    component: users,
  },
  {
    path: '/dashboard/permiso',
     name: 'Permiso',
    component: Permiso
   },
   {
    path: '/dashboard/LabRoles',
    name: 'LabRoles',
    component: LabRoles
  },
  {
    path: '/dashboard/Jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    path: '/dashboard/Consecutives',
    name: 'Consecutives',
    component: Consecutives
  },
  {
    path: '/dashboard/AcademicLevel',
    name: 'AcademicLevel',
    component: AcademicLevel
  },
//
  {
    path: '/dashboard/Projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/dashboard/BitacoraCi',
    name: 'BitacoraCi',
    component: BitacoraCi
  },
  {
    path: '/dashboard/ramas',
    name: 'Ramas',
    component: Ramas
  },
//
  {
    path: '/dashboard/Bitacora',
    name: 'Bitacora',
    component: Bitacora
  },
  {
    path: '/dashboard/Descargas',
    name: 'Descargas',
    component: Descargas
  },
  {
    path: '/dashboard/Errores',
    name: 'Errores',
    component: Errores
  },

  //
  {
    path: '/dashboard/BitacoraProyecto',
    name: 'BitacoraProyecto',
    component: BitacoraProyecto
  }

  ]
})