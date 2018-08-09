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
                        <tbody>
                            <tr>
                              <td>{{item.ID}}</td>
                              <td>{{item.Objetive}}</td>
                              <td>{{item.Description}}</td>
                              <td>
                                <a @click="removeUser(item.ID)" class="button is-danger">Ver/Editar</a>

                              </td>
                            </tr>

                        </tbody>
                    </table>
                </div>


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

      this.$store.dispatch('Proyecto').then(response => {
          this.data = this.$store.getters.grants
      }, error => {
          alert("No hay proyectos")
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