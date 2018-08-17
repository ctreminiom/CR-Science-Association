import Vue from 'vue'


const actions = {

    errors(context) {

        return new Promise((resolve, reject) => {

            let options = {
                url: "http://localhost:8080/api/v1.2/module/query/errors",
                method: "GET",


                headers: {
                    Authorization:
                    "Bearer " + localStorage.getItem("token")
                }
            }

            Vue.http(options).then(response => {
                context.commit("ERROR", response.body)
                resolve(response)
            }, error => {
                reject(error)
            })

        })

    }


}


export default actions