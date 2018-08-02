<template>
        <div class="column is-12">
            <table class="table is-hoverable is-fullwidth">
    
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Consecutivo</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Usuario</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
    
                <tbody v-for="item in data" :key="item.ID">
    
                    <tr>
    
                        <td>{{item.ID}}</td>
                        <td>{{item.Consecutive}}</td>
                        <td>{{item.Name}}</td>
                        <td>{{item.Surname + " " + item.SecondSurname}}</td>
                        <td>{{item.Username}}</td>
    
                        <td>
                            <a @click="openView()" class="button is-link">Ver</a>
                            <a class="button is-dark">Contrasena</a>
                            <a @click="removeUser(item.ID)" class="button is-danger">Eliminar</a>
                        </td>
    
                    </tr>
    
                </tbody>

                <Delete :open="add_active" @close="close"/>
    
            </table>
        </div>
</template>


<script>

import Delete from "@/components/users/modals/delete.vue";

export default {
    data() {
        return {
            add_active: ""
        }
    },

    computed: {

        data() {
            return this.$store.getters.users
        }

    },



    created() {

        this.$store.dispatch('users').then(response => {
            this.data = this.$store.getters.users
        }, error => {
            alert("ERROR PIDIENDO LOS USUARIOS")
        })

    },
    components: {
        Delete
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



