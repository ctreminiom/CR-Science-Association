<template>


<div class="column is-12">

    <div class="columns">
    
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
                <th>ID</th>
                <th>Nombre de usuario</th>
                <th>Roles</th>
                <th>Acciones</th>
            </tr>
        </thead>

        <tbody v-for="item in data" :key="item.ID">

            <tr>
                <td>{{item.ID}}</td>
                <td>{{item.User}}</td>
                <td>{{item.Role}}</td>
                <td>
                    <a @click="open_view_modal(item)" class="button is-link">Ver/ Editar</a>
                </td>
            </tr>

        </tbody>

    </table>
            <View :open="add_active_view" :user="id" @close_view_modal="close_view_modal"/>
 </div>
<!---->
</template>



<script>

import View from "@/components/S2_Permiso/Modals/edit.vue";

export default {
  data() {
    return {
      id: "",
      data: null,
      add_active_view: ""
   
    };
  },
  components: {
      View
  },
  created() {

      this.$store.dispatch('fetchGrants').then(response => {
          this.data = this.$store.getters.grants
      }, error => {
          alert("ERROR PIDIENDO LOS PERMISOS")
      })
  },
  methods: {
    add_active_view() {
      this.add_active_view = "is-active";
    },
    close_delete_modal() {
      this.close_delete_modal = "";
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