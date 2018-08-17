import Vue from 'vue'


const actions = {

    educationLevels(context) {

        return new Promise((resolve, reject) => {

            let options = {
                url: "http://18.222.31.81:8080/api/v1.2/module/education/levels",
                method: "GET",


                headers: {
                    Authorization:
                    "Bearer " + localStorage.getItem("token")
                }
            }

            Vue.http(options).then(response => {
                context.commit("EDUCATION", response.body)
                resolve(response)
            }, error => {
                reject(error)
            })

        })



    }, 

    createEducation(context, data) {

        return new Promise((resolve, reject) => {

            let options = {
                url: "http://18.222.31.81:8080/api/v1.2/module/education/levels",
                method: "POST",
                body: {"grade": data.grade ,"name":data.ID, "description": data.description},
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

    deleteEducation(context, data) {

        return new Promise((resolve, reject) => {

            console.log(data)

            let options = {
                url: `http://18.222.31.81:8080/api/v1.2/module/education/levels/${data}`,
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