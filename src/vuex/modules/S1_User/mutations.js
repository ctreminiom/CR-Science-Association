const mutations = {
    USERS: (state, json) => {
        state.users = json
    },
    ROLES: (state, json) => {
        state.roles = json
    }
}



export default mutations

