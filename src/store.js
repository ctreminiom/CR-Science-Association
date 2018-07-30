import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: !!localStorage.getItem("token"),
    users: null,
    consecutives: null
  },
  mutations: {
    SAVE_TOKEN: (state, token) => {
      localStorage.setItem("token", token)
    },
    LOGOUT: (state) => {
      localStorage.removeItem("token")
    },
    SAVE_USER_JSON: (state, json) => {
      state.users = json
    }
  },
  actions: {
    login(context, user) {
      return new Promise((resolve, reject) => {

        let options = {
          url: "http://localhost:8080/api/v1/module/login",
          method: "GET",
          headers: {
            Authorization:
              "Basic " +
              new Buffer(user.username + ":" + user.password).toString("base64")
          }
        };

        Vue.http(options).then(response => {
          console.log("PASA")
          context.commit('SAVE_TOKEN', response.body.token)
          resolve(true);  
        }, error => {
          console.log("NO PASA")
          reject(false);
        })
      })
    },

    users(context, user) {
      return new Promise((resolve, reject) => {

        let options = {
          url: "http://localhost:8080/api/v1/module/users",
          method: "GET",
          headers: {
            Authorization:
              "Bearer " + localStorage.getItem("token")
          }
        };

        Vue.http(options).then(response => {
          console.log("PASA")
          context.commit('SAVE_USER_JSON', response.body)
          resolve(true);  
        }, error => {
          console.log("NO PASA")
          reject(false);
        })
      })
    }
  },


  getters: {
    isAuthenticated: state => {return state.isLoggedIn},
    users: state => {return state.users}
  }

})


