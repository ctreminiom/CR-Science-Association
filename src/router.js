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

import Errors from './views/system/error.vue'
import Actities from './views/system/activity.vue'





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
        { path: 'module/queries/errors', component: Errors },
        { path: 'module/queries/activities', component: Actities },



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