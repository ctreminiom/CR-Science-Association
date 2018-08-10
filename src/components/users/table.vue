<template>
                <div class="columns">

                        <div class="panel column is-12">

                            <div class="panel-heading">

                                <div class="columns">

                                    <div class="column is-4">
                                        <a @click="open_create_modal()" class="button is-success is-fullwidth">Agregar</a>
                                    </div>

                                    <div class="column is-8">
                                        <div class="field">
                                            <p class="control">
                                                <input id="test" class="input" placeholder="Find a repository" type="text">
                                            </p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            
                            <div class="panel-block">
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
                                                    <a @click="open_view_modal(item)" class="button is-black">Ver</a>
                                                    <a @click="open_password_modal(item)" class="button is-warning">Contrasena</a>
                                                    <a @click="open_delete_modal(item)" class="button is-danger">Eliminar</a>
                                                </td>
                            
                                            </tr>
                            
                                        </tbody>
                    
                                </table>

                            </div>
                        </div>      

                         <create :open="add_active_create"  @close_create_modal="close_create_modal"/>
                         <delete :open="add_active_delete" :user="id" @close_delete_modal="close_delete_modal"/>
                         <password :open="add_active_password" :user="id" @close_password_modal="close_password_modal"/>







                </div>
</template>


<script>
import Create from "@/components/users/modals/create.vue";
import Delete from "@/components/users/modals/delete.vue";
import Show from "@/components/users/modals/view.vue";
import Password from "@/components/users/modals/password.vue";

export default {
  data() {
    return {
      add_active_view: "",
      add_active_create: "",
      add_active_password: "",
      add_active_delete: "",
      id: "",
      data: null
    };
  },

  created() {
    this.$store.dispatch("fetchUsers").then(
      response => {
        this.data = this.$store.getters.users;
      },
      error => {
        alert("ERROR PIDIENDO LOS USUARIOS");
      }
    );
  },
  components: {
    Create,
    Delete,
    Show,
    Password
  },

  methods: {
    open_create_modal(id) {
      this.add_active_create = "is-active";
      this.id = id;
    },
    open_delete_modal(id) {
      this.add_active_delete = "is-active";
      this.id = id;
    },
    open_view_modal(id) {
      this.add_active_view = "is-active";
      this.id = id;
    },
    open_password_modal(id) {
      this.add_active_password = "is-active";
      this.id = id;
    },

    close_create_modal() {
      this.add_active_create = "";
    },

    close_delete_modal() {
      this.add_active_delete = "";
    },

    close_view_modal() {
      this.add_active_view = "";
    },

    close_password_modal() {
      this.add_active_password = "";
    }

  }
};
</script>



<style scoped>
.button {
  margin-right: 5px;
}
</style>



