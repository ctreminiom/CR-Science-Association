import Vue from "vue";
import Router from "vue-router";
import Resource from 'vue-resource' // Setup HTTP requested funcionality
import Store from './vuex/index'



import Login from "./views/login.vue";
import Dashboard from "./views/system/dashboard.vue"

import User from './views/system/user.vue'
import Consecutives from './views/system/consecutive.vue'


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
        {path: 'module/security/users', component: User},
        {path: 'module/security/consecutives', component: Consecutives },
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