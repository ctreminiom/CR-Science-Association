import Vue from 'vue'


const actions = {

    getUsers(context) {

        return new Promise((resolve, reject) => {

            let options = {
                url: "http://18.222.31.81:8080/api/v1.2/module/users",
                method: "GET",


                headers: {
                    Authorization:
                        "Bearer " + localStorage.getItem("token")
                }
            }

            Vue.http(options).then(response => {
                context.commit("USERS", response.body)
                resolve(response)
            }, error => {
                reject(error)
            })

        })
    },

    createUser(context, data) {

        return new Promise((resolve, reject) => {


            let options = {
                url: "http://18.222.31.81:8080/api/v1.2/module/users",
                method: "POST",
                body: data,
                headers: {
                    Authorization:
                        "Bearer " + localStorage.getItem("token")
                }
            }


            Vue.http(options).then(response => {
                resolve(response)
            }, error => {
                reject(error)
            })

        })
    },

    updateUser(context, data) {

        return new Promise((resolve, reject) => {

            let options = {
                url: `http://18.222.31.81:8080/api/v1.2/module/users/update/${data.ID}/password/${data.password}`,
                method: "PUT",

                headers: {
                    Authorization:
                        "Bearer " + localStorage.getItem("token")
                }
            }

            Vue.http(options).then(response => {
                resolve(response)
            }, error => {
                reject(error)
            })

        })
    }



}


export default actions