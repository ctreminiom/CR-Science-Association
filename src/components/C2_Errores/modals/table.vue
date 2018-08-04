<template>
        <div class="column is-12">
            <table class="table is-hoverable is-fullwidth">
    
                <thead>
                    <tr>
                        <th>Error ID</th>
                        <th>Fecha</th>
                        <th>Mensaje</th>
                    </tr>
                </thead>
    
                <tbody v-for="item in data" :key="item.ID">
    
                    <tr>
    
                        <td>{{item.ID}}</td>
                        <td>{{item.DateTime}}</td>
                        <td>{{item.Message}}</td>
    
                    </tr>
    
                </tbody>

            </table>
        </div>
</template>


<script>



export default {
    data() {
        return {
            add_active: ""
        }
    },

    computed: {

        data() {
            return this.$store.getters.errors
        }

    },



    created() {

        this.$store.dispatch('errors').then(response => {
            this.data = this.$store.getters.errors
        }, error => {
            alert("ERROR CONSULTANDO LOS ERRORES")
        })

    },
    

    methods: {
        open() {
            this.add_active = "is-active"
        },
        close() {this.add_active = ""},

        removeUser(id) {
            alert(id)
        }

    }
    
    
}
</script>



<style scoped>
.button{
    margin-right: 5px;
}
</style>



