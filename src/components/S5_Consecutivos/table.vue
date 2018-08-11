<template>

<div class="column is-12">

    <div class="columns">
        <div class="column is-2">
            <a @click="open_create_modal_CONSECUTIVO()" class="button is-success is-fullwidth">Agregar</a>
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
                                <th>Prefijo</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>

                        <tbody v-for="item in data" :key="item.ID">

                            <tr>

                                <td>{{item.ID}}</td>
                                <td>{{item.Consecutive}}</td>
                                <td>{{item.Type}}</td>
                                <td>{{item.Prefix}}</td>

                                <td>
                                  <a @click="open_view_modal_CONSECUTIVO(item)" class="button is-link">Ver/ Editar</a>
                                  <a @click="open_delete_modal_CONSECUTIVO(item)" class="button is-danger">Eliminar</a>
                                </td>

                            </tr>

                        </tbody>

                    </table>

              <Delete :open="add_active_delete_CONSECUTIVO" :user="id" @close_delete_modal="close_delete_modal_CONSECUTIVO"/>
              <View :open="add_active_view_CONSECUTIVO" :user="id" @close_password_modal="close_view_modal_CONSECUTIVO"/>
              <Create :open="add_active_create_CONSECUTIVO" @close="close_create_modal_CONSECUTIVO"/>

                </div>

</template>



<script>

import Delete from "@/components/S5_Consecutivos/Modals/delete.vue";
import View from "@/components/S5_Consecutivos/Modals/edit.vue";
import Create from "@/components/S5_Consecutivos/Modals/create.vue";

export default {
  data() {
    return {
      
        add_active_delete_CONSECUTIVO: "",
        add_active_view_CONSECUTIVO: "",
        add_active_create_CONSECUTIVO:"",
        id: "",
        data: null

    };
  },

  methods: {
    open_create_modal_CONSECUTIVO(id) {
      this.add_active_create_CONSECUTIVO = "is-active";
      this.id = id;
    },
    open_view_modal_CONSECUTIVO(id) {
      this.add_active_view_CONSECUTIVO = "is-active";
      this.id = id;
    },
    open_delete_modal_CONSECUTIVO(id) {
      this.add_active_delete_CONSECUTIVO = "is-active";
      this.id = id;
    },

    close_view_modal_CONSECUTIVO() {
      this.add_active_view_CONSECUTIVO = "";
    },
    close_delete_modal_CONSECUTIVO() {
      this.add_active_delete_CONSECUTIVO = "";
    },
    close_create_modal_CONSECUTIVO()
    {
      this.add_active_create_CONSECUTIVO = "";
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