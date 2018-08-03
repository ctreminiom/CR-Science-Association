import Vue from 'vue'
import Router from 'vue-router'

import Store from './vuex/index'

import Resource from 'vue-resource' // Setup HTTP requested funcionality


import login from './views/Login.vue'
import dashboard from './views/Dashboard.vue'
//import users from './components/dashboard/users/user.vue'

import users from "./views/user.vue"



//


import Permiso from './views/Permiso.vue'
import LabRoles from './views/LabRoles.vue'
import Jobs from './views/Jobs.vue'
import Consecutives from './views/Consecutives.vue'
import AcademicLevel from './views/AcademicLevel.vue'

import Projects from './views/Proyecto.vue'

import Bitacora from './views/Bitacora.vue'
import Descargas from './views/Descargas.vue'
import Errores from './views/Errores.vue'


//                          ------OLD ROUNTING------
//import consecutives from './components/dashboard/Consecutivos/table.vue'
//import AcademicLevel from './components/dashboard/NivelAcademico/table.vue'
//import Projects from './components/dashboard/Proyectos/table.vue'
//import Permisos from './components/dashboard/Permiso/table.vue'
//import LabRoles from './components/dashboard/RolesLab/table.vue'
//import Jobs from './components/dashboard/Puesto/table.vue'



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
      {
        path: 'Projects',
        component: Projects
      },
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


    ]
  },
  {
    path: '/dashboard/users',
    name: 'users',
    component: users,
  },
  {
    path: 'dashboard/Permisos',
     name: 'Permisos',
    component: Permiso
   },
   {
    path: 'dashboard/LabRoles',
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
  
  {
    path: 'dashboard/Projects',
    name: 'Projects',
    component: Projects

  },

  {
    path: 'dashboard/Bitacora',
    name: 'Bitacora',
    component: Bitacora
  },
  {
    path: 'dashboard/Descargas',
    name: 'Descargas',
    component: Descargas
  },
  {
    path: 'dashboard/Errores',
    name: 'Errores',
    component: Errores
  },

  ]
})