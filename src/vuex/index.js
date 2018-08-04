import Vue from 'vue'
import Vuex from 'vuex'


import userModule from './modules/S1_User'
import authModule from './modules/authorization'

import grantModule from './modules/S2_Permiso'
import rolesModule from './modules/S3_RolesLab'
import jobModule from './modules/S4_Puesto'
import consecutiveModule from './modules/S5_Consecutivos'
import levelModule from './modules/S6_NivelAcademico'

import ramasModule from './modules/A1_RamasCientificas'
import proyectoModule from './modules/A2_Proyectos'
import bitacoraCientificaModule from './modules/A3_BitacoraCientifica'

import bitacoraModule from './modules/C1_Bitacora'
import errorModule from './modules/C2_Errores'
import descargasModule from './modules/C3_Descargas'



Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    user: userModule,
    auth: authModule,
    grant: grantModule,
    roles: rolesModule,
    job: jobModule,
    consecutive: consecutiveModule,
    academiclevel: levelModule,
    ramas: ramasModule,
    proyecto: proyectoModule,
    bitacoraCientifica: bitacoraCientificaModule,
    bitacora: bitacoraModule,
    erro: errorModule,
    descarga: descargasModule

  }


})
