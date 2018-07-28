<template>

    <div>
            <div class="row">
                <div class="card">
                    <div>
                        <nav class="breadcrumb" aria-label="breadcrumbs">
                            <ul>
                                <li>
                                    <a >Seguridad</a>
                                </li>
                                <li>
                                    <a >Crear Nivel Academico</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
                        <br>


            <div class="columns">

                <div class="column is-5">
                    <a @click="openAdd()" class="button is-dark is-fullwidth">Agregar</a>
                </div>

                <div class="column is-7">
                    <div class="field">
                        <div class="field">
                            <p class="control">
                                <input id="test" class="input" placeholder="Busque el permiso" type="text">
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
                                   <th>Codigo</th>
                                    <th>Consecutivo</th>
                                    <th>Nivel Academico</th>
                                    <th>Detalle</th>
                                    <th>Acciones</th>
                                </tr>
                        </thead>

                        <tbody v-for="item in data" :key="item.ID">

                            <tr>

                                <td>{{item.ID}}</td>
                                <td>{{item.Consecutive}}</td>
                                <td>{{item.Grade}}</td>
                                <td>{{item.Description}}</td>

                                <td>
                                    <a @click="openView()" class="button is-link">Ver/ Editar</a>
                                    <a class="button is-danger">Eliminar</a>
                                </td>

                            </tr>

                        </tbody>

                    </table>
                </div>

            </div>

    <Add :open="addActive" @closeModal="close"/>

    <test :open="viewActive" @closeModalView="closeView"/>




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
  mounted() {
    var options = {
      url: "http://192.168.43.192:8080/api/v1/module/academic/level",
      method: "GET"
    };

    this.$http(options).then(
      response => {
        this.data = response.body;
      },
      response => {
        alert("NO");
      }
    );
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