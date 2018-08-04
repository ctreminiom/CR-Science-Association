import Vue from 'vue'

const actions = {

    fetchErrors(context) {

        return new Promise((resolve, reject) => {

            let options = {
                url : "http://ec2-18-217-36-47.us-east-2.compute.amazonaws.com/api/v1/module/errors",
                method: "GET",

                headers: {
                    Authorization:
                    "Bearer " + localStorage.getItem("token")
                }
            }

            Vue.http(options).then(response => {
                context.commit("ERRORS", response.body)
                resolve(true)

            }, error => {
                reject(false)

            })



        })

    }

}

export default actions