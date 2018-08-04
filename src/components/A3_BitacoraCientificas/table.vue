<template>

                <div class="column is-12">
                    <table class="table is-hoverable is-fullwidth">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Creador</th>
                                <th>Experimento</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                      <td>{{item.ID}}</td>
                      <td>{{item.Name}}</td>
                      <td>{{item.Experimiento}}</td>
                  
                                <td>
                                    <a @click="openView()" class="button is-link">Ver</a>
                  
                                </td>

                            </tr>

                        </tbody>
                    </table>
                </div>

<!--Hacer el modals-->

</template>



<script>
import Remove from "@/components/A3_BitacorasCientificas/Modals/delete.vue";
import Open from "@/components/A3_BitacorasCientificas/Modals/edit.vue";

export default {
  data() {
    return {
      data: null,
      addActive: "",
      viewActive: ""
    };
  },
  components: {
      Remove,Open
  },
  created() {

      this.$store.dispatch('Proyecto').then(response => {
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