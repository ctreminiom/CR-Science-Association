<template>

<div class="column is-12">

                    <table class="table is-hoverable is-fullwidth">

                        <thead>
                            <tr>
                                <th>Codigo ID</th>
                                <th>Consecutivo</th>
                                <th>Nombre</th>
                                <th>Prefijo</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>

                        <tbody v-for="item in data" :key="item.ID">

                            <tr>

                                <td>{{item.ID}}</td>
                                <td>{{item.Consecutive}}</td>
                                <td>{{item.Type}}</td>
                                <td>{{item.Prefix}}</td>

                                <td>
                                    <a class="button is-link">Ver/ Editar</a>
                                    <a class="button is-danger">Eliminar</a>
                                </td>

                            </tr>

                        </tbody>

                    </table>
                </div>

</template>



<script>
import Open from "@/components/S5_Consecutivos/Modals/delete.vue";
import Delete from "@/components/S5_Consecutivos/Modals/delete.vue";

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
      url: "http://192.168.43.192:8080/api/v1/module/consecutives",
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