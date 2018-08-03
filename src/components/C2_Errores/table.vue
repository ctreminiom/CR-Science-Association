<template>

    <div>
            <div class="row">
                <div class="card">
                    <div>
                        <nav class="breadcrumb" aria-label="breadcrumbs">
                            <ul>
                                <li>
                                    <a>Seguridad</a>
                                </li>
                                <li>
                                    <a href="#">Usuario</a>
                                </li>
                                <li>
                                    <a href="#">Roles de Laboratorio</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
                        <br>


            <div class="columns">

                <div class="column is-2">
                    <a @click="openCreate()" class="button is-dark is-fullwidth">Agregar</a>
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

            <div class="columns">

                <div class="column is-12">

                    <table class="table is-hoverable is-fullwidth">

                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Fecha</th>
                                <th>Mensaje</th>
                            
                            </tr>
                        </thead>

                        <tbody v-for="item in data" :key="item.ID">

                            <tr>

                                <td>{{item.ID}}</td>
                                <td>{{item.Consecutive}}</td>
                                <td>{{item.Name}}</td>

                            </tr>

                        </tbody>

                    </table>
                </div>

            </div>


    </div>

</template>



<script>
import Add from "./create.vue";
import test from "./edit.vue";

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