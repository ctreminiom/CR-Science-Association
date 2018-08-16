import Vue from "vue";
import Router from "vue-router";
import Resource from 'vue-resource' // Setup HTTP requested funcionality
import Store from './vuex/index'



import Login from "./views/login.vue";
import Dashboard from "./views/system/dashboard.vue"

import User from './views/system/user.vue'
import Consecutives from './views/system/consecutive.vue'
import Grants from './views/system/grant.vue'

import Grades from './views/system/grades.vue'

import Education from './views/system/educationLevel.vue'

import Laboratory from './views/system/laboratory.vue'

import Job from './views/system/job.vue'
//Consultas

import Activities from "./views/system/Consultas/activities.vue"
import Downloads from "./views/system/Consultas/downloads.vue"
import Errores from "./views/system/Consultas/errors.vue"




Vue.use(Router);
Vue.use(Resource);


const children = [
  { path: 'users', component: User }
]



const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [

    { path: "/", name: "Login", component: Login, meta: { requiredsAuth: false } },

    {
      path: '/dashboard', component: Dashboard, meta: { requiredsAuth: true },
      children: [
        { path: 'module/security/users', component: User },
        { path: 'module/security/consecutives', component: Consecutives },
        { path: 'module/security/grants', component: Grants },
        { path: 'module/security/grades', component: Grades },
        { path: 'module/security/education/level', component: Education },
        { path: 'module/security/laboratory/role', component: Laboratory },
        { path: 'module/security/jobs', component: Job },

        { path: 'module/consultas/downloads', component: Downloads},
        { path: 'module/consultas/activities', component: Activities},
        { path: 'module/consultas/errors', component: Errores},
        
      ]
    }

  ]
});



router.beforeEach((to, from, next) => {
  console.log(to)

  if (to.meta.requiredsAuth) {

    if (Store.getters.isAuthenticated) {
      next()
    } else {
      next({ name: "Login" })
    }

  }

  next()
})


export default router