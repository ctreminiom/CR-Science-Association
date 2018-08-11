<template>


     <div class="column is-12">

    <div class="columns">
    <div class="column is-4">
            <div class="field">
                <div class="field">
                    <p class="control">
                        <input id="test" class="input" placeholder="Fecha" type="date">
                    </p>
                </div>
            </div>
        </div>
        
    <div class="column is-4">
            <div class="field">
                <div class="field">
                    <p class="control">
                        <input id="test2" class="input" placeholder="Fecha" type="date">
                    </p>
                </div>
            </div>
        </div>
    
        <div class="column is-2"> <!--revisar xq esta vara se sigue saliendo del margen-->
            <div class="field">
                <div class="field">
                    <p class="control">
                        <input id="test" class="input" placeholder="Find a repository" type="text">
                    </p>
                </div>
            </div>
        </div>

    </div>

                    <table class="table is-hoverable is-fullwidth">

                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Consecutivo</th>
                                <th>Usuario</th>
                                <th>Fecha</th>
                                <th>Descripcion</th>
                                <th>Accion hecha</th>
                            </tr>
                        </thead>

                        <tbody v-for="item in data" :key="item.ID">

                            <tr>

                                <td>{{item.ID}}</td>
                                <td>{{item.Consecutive}}</td>
                                <td>{{item.user}}</td>\\Revisar este
                                <td>{{item.fecha}}</td>
                                <td>{{item.Descripcion}}</td>
                                <td>{{item.Accion}}</td>

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
            return this.$store.getters.bitacora//REVISAR
        }

    },

    created() {

        this.$store.dispatch('bitacora').then(response => {
            this.data = this.$store.getters.bitacora //REVISAR
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