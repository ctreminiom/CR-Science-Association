<template>

    <div class="column is-12">
        <table class="table is-hoverable is-fullwidth">
            <thead>
                    <tr>
                        <th>ID</th>
                        <th>Consecutivo</th>
                        <th>Proyecto</th>
                        <th>Rama Cientifica</th>
                        <th>Acciones</th>
                    </tr>
            </thead>

            <tbody v-for="item in data" :key="item.ID">
                <tr>
                    <td>{{item.ID}}</td>
                    <td>{{item.Consecutive}}</td>
                    <td>{{item.Name}}</td>
                    <td>{{item.Branch}}</td> <!--Cambiarlo por la ruta de la rama cientifica-->
                    <td>
                        <a @click="openView()" class="button is-link">Ver</a>  <!--lo manda a /dashboard/proyecto/ID //C:\Users\Stefano\Desktop\github\CR-Science-Association\UI-template\ID-Proyectos..html--> 
                        <a @click="removeUser(item.ID)" class="button is-danger">Eliminar</a>
                      
                    </td>
                </tr>

            </tbody>

        </table>
    </div>

<!--Hacer el modal-->

</template>



<script>
import Remove from "@/components/A2_Proyectos/Modals/delete.vue";

export default {
  data() {
    return {
      data: null,
      addActive: "",
      viewActive: ""
    };
  },
  components: {
      Remove
  },
  created() {

      this.$store.dispatch('fetchProyecto').then(response => {
          this.data = this.$store.getters.proyecto
      }, error => {
          alert("ERROR PROYECTO")
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