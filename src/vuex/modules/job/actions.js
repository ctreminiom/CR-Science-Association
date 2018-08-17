import Vue from 'vue'


const actions = {

    jobs(context) {

        return new Promise((resolve, reject) => {

            let options = {
                url: "http://18.222.31.81:8080/api/v1.2/module/jobs",
                method: "GET",


                headers: {
                    Authorization:
                    "Bearer " + localStorage.getItem("token")
                }
            }

            Vue.http(options).then(response => {
                context.commit("JOBS", response.body)
                resolve(response)
            }, error => {
                reject(error)
            })

        })



    }


}


export default actions