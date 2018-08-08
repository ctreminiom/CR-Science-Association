<template>

 <div class="column is-12">

                    <table class="table is-hoverable is-fullwidth">

                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Fecha</th>
                                <th>Mensaje</th>
                            
                            </tr>
                        </thead>

                        <tbody v-for="item in data" :key="item.ID">

                            <tr>

                                <td>{{item.ID}}</td>
                                <td>{{item.Consecutive}}</td>
                                <td>{{item.Name}}</td><!--Cambiar-->

                            </tr>

                        </tbody>

                    </table>
                </div>

</template>



<script>


export default {
    data() {
        return {

        }
    },

    computed: {

        data() {
            return this.$store.getters.errores//REVISAR
        }

    },

    created() {

        this.$store.dispatch('errores').then(response => {
            this.data = this.$store.getters.errores //REVISAR
        }, error => {
            alert("ERROR PIDIENDO LOS USUARIOS")
        })

    },
  
}
</script>



<style scoped>
ul,
li {
  margin-top: 8px;
}

td,
a {
  margin: 2px;
}

div[class="card"] {
  margin-top: 20px;
  margin-right: 10px;
  padding-left: 20px;
  padding-bottom: 15px;
}
</style>