const mutations = {
    TOKEN: (state, token) => {
        localStorage.setItem("token", token)
    },
}



export default mutations