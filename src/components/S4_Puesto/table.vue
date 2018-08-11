<template>

 <div class="column is-12">

    <div class="columns">
        <div class="column is-2">
            <a @click="open_create_modal()" class="button is-success is-fullwidth">Agregar</a>
        </div>    
        <div class="column is-9">
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
                <th>Nombre</th>
                <th>Description</th>
                <th>Rol de laboratorio</th>
                <th>Acciones</th>
            </tr>
        </thead>

        <tbody v-for="item in data" :key="item.ID">
            <tr>
                <td>{{item.ID}}</td>
                <td>{{item.Consecutive}}</td>
                <td>{{item.Name}}</td>
                <td>{{item.Description}}</td>
                <td>{{item.Lab}}</td>
                <td>
                    <a @click="open_view_modal(item)" class="button is-link">Ver/ Editar</a>
                    <a @click="open_delete_modal(item)" class="button is-danger">Eliminar</a>
                </td>
            </tr>

        </tbody>

    </table>
              <Delete :open="add_active_delete" :user="id" @close_delete_modal="close_delete_modal"/>
              <View :open="add_active_view" :user="id" @close_password_modal="close_view_modal"/>
              <Create :open="add_active_create" @close="close_create_modal"/>
</div>

</template>



<script>

import Delete from "@/components/S4_Puesto/Modals/delete.vue";
import View from "@/components/S4_Puesto/Modals/edit.vue";
import Create from "@/components/S4_Puesto/Modals/create.vue";


export default {
  data() {
    return {

        add_active_delete: "",
        add_active_view: "",
        add_active_create:"",
        id: "",
        data: null
    };
  },
  components: {
      Delete,View,Create
  },
    created() {

      this.$store.dispatch('fetchJobs').then(response => {
          this.data = this.$store.getters.grants
      }, error => {
          alert("ERROR PIDIENDO LOS TRABAJOS")
      })
  },

  methods: {
    open_create_modal(id) {
      this.add_active_create = "is-active";
      this.id = id;
    },
    open_view_modal(id) {
      this.add_active_view = "is-active";
      this.id = id;
    },
    open_delete_modal(id) {
      this.add_active_delete = "is-active";
      this.id = id;
    },

    close_view_modal() {
      this.add_active_view = "";
    },
    close_delete_modal() {
      this.add_active_delete = "";
    },
    close_create_modal()
    {
      this.add_active_create = "";
    }
  }

};
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