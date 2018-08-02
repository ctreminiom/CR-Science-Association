import Vue from 'vue'


const actions = {

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
            }

            Vue.http(options).then(response => {
                context.commit("TOKEN", response.body.token)
                resolve(true)
            }, error => {
                reject(false)
            })

        })



    }


}


export default actions