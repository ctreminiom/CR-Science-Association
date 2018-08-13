import Vue from 'vue'
import Vuex from 'vuex'


import authModule from './modules/authorization'
import userModule from './modules/user'
import roleModule from './modules/role'
import educationModule from './modules/educationLevel'
import jobModule from './modules/job'

import consecutiveModule from './modules/consecutive'
import grantModule from './modules/grants'

import gradeModule from './modules/grade'
import labModule from './modules/laboratoryRole'







Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    auth: authModule,
    user: userModule,
    role: roleModule,
    education: educationModule,
    job: jobModule,
    consecutive: consecutiveModule,
    grant: grantModule,
    grade: gradeModule,
    lab: labModule,
  }


})
