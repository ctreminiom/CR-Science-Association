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
                    <a @click="openView()" class="button is-link">Ver/ Editar</a>
                    <a @click="removeUser(item.ID)" class="button is-danger">Eliminar</a>
                    
                </td>

            </tr>

        </tbody>

    </table>
</div>
</template>



<script>

import Delete from "@/components/S3_RolesLab/Modals/delete.vue";
import Open from "@/components/S3_RolesLab/Modals/edit.vue";


export default {
  data() {
    return {
      data: null,
      addActive: "",
      viewActive: ""
    };
  },
  components: {
      Delete,Open
  },

  created() {

      this.$store.dispatch('lab').then(response => {
            this.data = this.$store.getters.lab
        }, error => {
            alert("ERROR PIDIENDO LOS USUARIOS")
        })
  },

  methods: {
    openCreate() {
      this.addActive = "is-active";
    },
    openView() {
      this.viewActive = "is-active";
    },
    close() {
      this.addActive = "";
    },
    closeView() {
      this.viewActive = "";
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