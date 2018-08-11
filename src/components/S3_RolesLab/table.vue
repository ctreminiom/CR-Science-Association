<template>

<div class="column is-12">

    <table class="table is-hoverable is-fullwidth">
        <thead>
            <tr>
                <th>ID</th>
                <th>Consecutivo</th>
                <th>Nombre</th>
                <th>Acciones</th>
            </tr>
        </thead>

        <tbody v-for="item in data" :key="item.ID">
            <tr>
                <td>{{item.ID}}</td>
                <td>{{item.Consecutive}}</td>
                <td>{{item.Name}}</td>
                <td>
                    <a @click="open(item)" class="button is-danger">Eliminar</a>
                </td>

            </tr>

        </tbody>

    </table>
    <delete :open="deleteActive" :user="id" @close_delete_lab_modal="close_delete_lab_modal"/>
</div>
</template>



<script>

import Delete from "@/components/S3_RolesLab/Modals/delete.vue";
export default {
  data() {
    return {
      data: null,
      deleteActive: "",
      id: "",
    };
  },
  components: {
      Delete
  },

  created() {
      this.$store.dispatch('fetchRolesLab').then(response => {
            this.data = this.$store.getters.RolesLab
        }, error => {
            alert("ERROR PIDIENDO LOS ROLES")
        })
  },

  methods: {
    open(id) {
      this.deleteActive = "is-active";
      this.id = id;
    },
    close_delete_lab_modal() {
      this.deleteActive = "";
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