import Vue from 'vue'
import Vuex from 'vuex'


import userModule from './modules/user'
import authModule from './modules/authorization'



Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    user : userModule,
    auth: authModule,
  }

})
