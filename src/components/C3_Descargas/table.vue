<template>

 <div class="column is-12">

    <div class="columns">
        <div class="column is-2">
            
            <input id="datepicker" class="input" type="date">
            
        </div>
    
        <div class="column is-12">
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
                                <th>Descargas</th>
                                <th>Fecha</th>
                            </tr>
                        </thead>

                        <tbody v-for="item in data" :key="item.Downloads">

                            <tr>

                                <td>{{item.Downloads}}</td>
                                <td>{{item.Date}}</td>

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
            return this.$store.getters.download//REVISAR
        }

    },

    created() {

        this.$store.dispatch('download').then(response => {
            this.data = this.$store.getters.download //REVISAR
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