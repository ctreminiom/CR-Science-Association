import Vue from 'vue'

const actions = {

    fetchUsers(context) {

        return new Promise((resolve, reject) => {

            let options = {
                url : "http://ec2-18-222-31-81.us-east-2.compute.amazonaws.com:8080/api/v1.2/module/users",
                method: "GET",
            }

            Vue.http(options).then(response => {
                context.commit("USERS", response.body)
                resolve(true)

            }, error => {
                reject(false)
                console.log(error)

            })



        })

    }

}

export default actions