import Vue from 'vue'


const actions = {

    grades(context) {

        return new Promise((resolve, reject) => {

            let options = {
                url: "http://18.222.31.81:8080/api/v1.2/module/grades",
                method: "GET",


                headers: {
                    Authorization:
                    "Bearer " + localStorage.getItem("token")
                }
            }

            Vue.http(options).then(response => {
                context.commit("GRADES", response.body)
                resolve(response)
            }, error => {
                reject(error)
            })

        })

    },

    createGrade(context, json) {

        return new Promise((resolve, reject) => {

            let options = {
                url: "http://18.222.31.81:8080/api/v1.2/module/grades",
                method: "POST",
                body: {"name":json},
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


    deleteGrade(context, data) {

        return new Promise((resolve, reject) => {

            console.log(data)

            let options = {
                url: `http://18.222.31.81:8080/api/v1.2/module/grades/${data}`,
                method: "DELETE",
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