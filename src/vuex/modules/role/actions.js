import Vue from 'vue'


const actions = {

    roles(context) {

        return new Promise((resolve, reject) => {

            let options = {
                url: "http://18.222.31.81:8080/api/v1.2/module/roles",
                method: "GET",


                headers: {
                    Authorization:
                    "Bearer " + localStorage.getItem("token")
                }
            }

            Vue.http(options).then(response => {
                context.commit("ROLES", response.body)
                resolve(response)
            }, error => {
                reject(error)
            })

        })



    }


}


export default actions