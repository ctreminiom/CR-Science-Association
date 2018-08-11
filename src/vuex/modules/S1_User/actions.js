import Vue from 'vue'

const actions = {

    fetchUsers(context) {

        return new Promise((resolve, reject) => {

            let options = {
                url : "http://localhost:8080/api/v1.2/module/users",
                method: "GET",
                headers: {
                    Authorization:
                    "Bearer " + localStorage.getItem("token")
                }
            }

            Vue.http(options).then(response => {
                context.commit("USERS", response.body)
                resolve(true)

            }, error => {
                reject(false)
                console.log(error)

            })



        })

    },

    fetchRoles(context) {

        return new Promise((resolve, reject) => {

            let options = {
                url : "http://localhost:8080/api/v1.2/module/roles",
                method: "GET",
                headers: {
                    Authorization:
                    "Bearer " + localStorage.getItem("token"),
                }
            }

            Vue.http(options).then(response => {
                context.commit("ROLES", response.body)
                resolve(true)

            }, error => {
                reject(false)
                console.log(error)

            })



        })

    },


    createUser(context, form) {

        console.log(form)

        return new Promise((resolve, reject) => {

            let options = {
                url: "http://localhost:8080/api/v1.2/module/users",
                body: form,
                method: "POST",
                headers: {
                    Authorization:
                    "Bearer " + localStorage.getItem("token"),
                    "Content-Type": "application/x-www-form-urlencoded",

                }
            }




            Vue.http(options).then(response => {
                resolve(true)
            }, error => {
                console.log(error)
                reject(false)
            })


        })


    }

}

export default actions