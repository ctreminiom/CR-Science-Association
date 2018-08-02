import actions from './actions'
import getters from './getters'
import mutations from './mutations'


const state = {
    isLoggedIn: !!localStorage.getItem("token")
}


export default {
    namespace: false,
    state,
    actions,
    getters,
    mutations
}