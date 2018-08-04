<template>
     <div class="column is-12">
                    <table class="table is-hoverable is-fullwidth">

                        <thead>
                            <tr>
                                <th>Usuario</th>
                                <th>Fecha</th>
                                <th>Consecutivo</th>
                                <th>Descripcion</th>
                                <th>Accion hecha</th>
                            </tr>
                        </thead>

                        <tbody v-for="item in data" :key="item.ID">

                            <tr>

                                <td>{{item.ID}}</td>
                                <td>{{item.Fecha}}</td>\\Revisar este
                                <td>{{item.Consecutive}}</td>
                                <td>{{item.Descripcion}}</td>
                                <td>{{item.Accion}}</td>


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
  components: {
      test,Add
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