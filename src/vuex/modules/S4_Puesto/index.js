import actions from './actions'
import getters from './getters'
import mutations from './mutations'


const state = {
    jobs: null
}


export default {
    namespace: false,
    state,
    actions,
    getters,
    mutations
}