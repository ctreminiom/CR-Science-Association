<template>

<div class="column is-12">

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
                    <a @click="openView()" class="button is-link">Ver/ Editar</a>
                </td>
            </tr>

        </tbody>

    </table>
 </div>

</template>



<script>

import open from "@/components/S2_Permiso/Modals/edit.vue";

export default {
  data() {
    return {
      data: null,
      addActive: "",
      viewActive: ""
    };
  },
  components: {
      test
  },
  created() {

      this.$store.dispatch('grants').then(response => {
          this.data = this.$store.getters.grants
      }, error => {
          alert("ERROR PIDINDO LOS PERMISOS")
      })
  },
  methods: {
    openAdd() {
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