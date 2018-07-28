import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogged: false,
    token: "",
    users: null
  },
  mutations: {

    signIn: (state, options) => {

      this.$http(options).then(
        response => {
          this.$store.isLogged = true
          this.$store.token = response.body
        },
        response => {
          this.$store.isLogged = false
        }
      )
    },
    fetchUsers: (state) => {

      this.$http(options).then(
        response => {
          this.$store.users = response.body
        },
        response => {
          console.log("ERROR PIDIENDO USUARIOS")
        }
      )



      var options = {
        url: "http://localhost:8080/api/v1/module/users",
        method: "GET"
      };
  
      this.$http(options).then(
        response => {
          this.data = response.body;
        },
        response => {
          alert("NO");
        }
      );

    }

  },
  actions: {
    login: (context, user) => {

      let options = {
        url: "http://localhost:8080/api/v1/module/login",
        method: "GET",
        headers: {
          Authorization:
            "Basic " +
            new Buffer(user.username + ":" + user.password).toString("base64")
        }
      };

      context.commit("signIn", options)
    },

    users: (context, token) => {
      let options = {
        url: "http://localhost:8080/api/v1/module/users",
        method: "GET"
      }
    }



  }
})
