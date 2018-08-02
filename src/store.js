import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: !!localStorage.getItem("token"),
    users: null,
    consecutives: null,
    grants: null,
    lab: null
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
    },
    SAVE_GRANT_JSON: (state, json) => {
      state.grants = json
    },
     SAVE_LAB_JSON: (state, json) => {
       state.lab = json
     },
     SAVE_JOB_JSON: (state, json) => {
      state.job = json
    },
    SAVE_CONSECUTIVE_JSON: (state, json) => {
      state.consecutives = json
    },
    SAVE_ACADEMIC_JSON: (state, json) => {
      state.academic = json
    },

    SAVE_PROYECTO_JSON: (state, json) => {
      state.proyecto = json
    },

  },
  actions: {
    login(context, user) {
      return new Promise((resolve, reject) => {

        let options = {
          url: "http://ec2-18-217-36-47.us-east-2.compute.amazonaws.com/api/v1/module/login",
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
          url: "http://ec2-18-217-36-47.us-east-2.compute.amazonaws.com/api/v1/module/users",
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
    },
   // 

    grants(context, user) {
      return new Promise((resolve, reject) => {

        let options = {
          url: "http://ec2-18-217-36-47.us-east-2.compute.amazonaws.com/api/v1/module/grants",
          method: "GET",
          headers: {
            Authorization:
              "Bearer " + localStorage.getItem("token")
          }
        };

        Vue.http(options).then(response => {
          console.log("PASA")
          context.commit('SAVE_GRANT_JSON', response.body)
          resolve(true);  
        }, error => {
          console.log("NO PASA")
          reject(false);
        })
      })
    },

    lab(context) {
      return new Promise((resolve, reject) => {

        let options = {
          url: "http://ec2-18-217-36-47.us-east-2.compute.amazonaws.com/api/v1/module/laboratory/roles",
          method: "GET",
          headers: {
            Authorization:
              "Bearer " + localStorage.getItem("token")
          }
        };

        Vue.http(options).then(response => {
          console.log("PASA")
          context.commit('SAVE_LAB_JSON', response.body)
          resolve(true);  
        }, error => {
          console.log("NO PASA")
          reject(false);
        })
      })
    },

    job(context) {
      return new Promise((resolve, reject) => {

        let options = {
          url: "http://ec2-18-217-36-47.us-east-2.compute.amazonaws.com/api/v1/module/laboratory/roles",
          method: "GET",
          headers: {
            Authorization:
              "Bearer " + localStorage.getItem("token")
          }
        };

        Vue.http(options).then(response => {
          console.log("PASA")
          context.commit('SAVE_LAB_JSON', response.body)
          resolve(true);  
        }, error => {
          console.log("NO PASA")
          reject(false);
        })
      })
    },
  
    consecutives(context) {
      return new Promise((resolve, reject) => {

        let options = {
          url: "http://ec2-18-217-36-47.us-east-2.compute.amazonaws.com/api/v1/module/grants",//Cambiar la ruta
          method: "GET",
          headers: {
            Authorization:
              "Bearer " + localStorage.getItem("token")
          }
        };

        Vue.http(options).then(response => {
          console.log("PASA")
          context.commit('SAVE_GRANT_JSON', response.body)
          resolve(true);  
        }, error => {
          console.log("NO PASA")
          reject(false);
        })
      })
    },

    academic(context) {
      return new Promise((resolve, reject) => {

        let options = {
          url: "http://ec2-18-217-36-47.us-east-2.compute.amazonaws.com/api/v1/module/grants",//Cambiar la ruta
          method: "GET",
          headers: {
            Authorization:
              "Bearer " + localStorage.getItem("token")
          }
        };

        Vue.http(options).then(response => {
          console.log("PASA")
          context.commit('SAVE_GRANT_JSON', response.body)
          resolve(true);  
        }, error => {
          console.log("NO PASA")
          reject(false);
        })
      })
    },

  
    proyecto(context) {
      return new Promise((resolve, reject) => {

        let options = {
          url: "http://ec2-18-217-36-47.us-east-2.compute.amazonaws.com/api/v1/module/grants",//Cambiar la ruta
          method: "GET",
          headers: {
            Authorization:
              "Bearer " + localStorage.getItem("token")
          }
        };

        Vue.http(options).then(response => {
          console.log("PASA")
          context.commit('SAVE_GRANT_JSON', response.body)
          resolve(true);  
        }, error => {
          console.log("NO PASA")
          reject(false);
        })
      })
    },



  },


  getters: {
    isAuthenticated: state => {return state.isLoggedIn},

    users: state => {return state.users},
    grants: state => {return state.grants},
    lab: state => {return state.lab},
    job: state => {return state.job},
    consecutives: state => {return state.consecutives},
    academic: state => {return state.academic},

    proyecto: state => {return state.proyecto},
  }

})


