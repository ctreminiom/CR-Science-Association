<template>

<div class="column is-12">

    <table class="table is-hoverable is-fullwidth">

        <thead>
            <tr>
                <th>ID</th>
                <th>Objectivo</th>
                <th>Descripcion</th>
                <th>Accion</th>
            </tr>
        </thead>

        <tbody v-for="item in data" :key="item.ID">

            <tr>
                <td>{{item.ID}}</td>
                <td>{{item.Objetive}}</td>
                <td>{{item.Description}}</td>
                <td>
                    <router-link to="/dashboard/Errores">
                        Errores
                    </router-link>
                </td>
            </tr>

        </tbody>

    </table>
 </div>
<!---->
</template>



<script>


export default {
  data() {
    return {
      data: null,
      addActive: "",
      viewActive: ""
    };
  },

  created() {

      this.$store.dispatch('grants').then(response => {//Revisar porque ocupo crear otro
          this.data = this.$store.getters.grants
      }, error => {
          alert("ERROR")
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