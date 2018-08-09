import Vue from 'vue'

const actions = {

    fetchBitacoraC(context) {

        return new Promise((resolve, reject) => {

            let options = {
                url : "http://ec2-18-217-36-47.us-east-2.compute.amazonaws.com/api/v1.2/module/administration/logbooks",//Cambiar al path correcto
                method: "GET",

                headers: {
                    Authorization:
                    "Bearer " + localStorage.getItem("token")
                }
            }

            Vue.http(options).then(response => {
                context.commit("BITACORACIENTIFICA", response.body) //Poner el nombre de la mutacion
                resolve(true)

            }, error => {
                reject(false)

            })



        })

    }

}

export default actions