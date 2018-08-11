<template>

<div class="column is-12">

    <table class="table is-hoverable is-fullwidth">
        <thead>
            <tr>
                <th>ID</th>
                <th>Consecutivo</th>
                <th>Grado</th>
                <th>Name</th>
                <th>Description</th>
                <th>Acciones</th>
            </tr>
        </thead>

    <tbody v-for="item in data" :key="item.ID">

            <tr>
                <td>{{item.ID}}</td>
                <td>{{item.Consecutive}}</td>
                <td>{{item.Grade}}</td>
                <td>{{item.Name}}</td>
                <td>{{item.Description}}</td>
                <td>
                    <a @click="open(item)" class="button is-link">Ver/ Editar</a>
                    <a @click="open(item)" class="button is-danger">Eliminar</a>
                </td>

            </tr>

    </tbody>

   <delete :open="active" :user="id" @close_test="close_test"/>
    </table>
</div>

</template>



<script>
import Delete from "@/components/S6_NivelAcademico/Modals/delete.vue";

export default {
  data() {
    return {
      data: null,
      active: "",
      id: ""
    };
  },
  components: {
    Delete
  },
  methods: {
    open(id) {
      this.active = "is-active";
      this.id = id;
    },
    close_test() {
      this.active = "";
    }
  },

  created() {
    this.$store.dispatch("fetchEducationLevel").then(
      response => {
        this.data = this.$store.getters.education;
      },
      error => {
        alert("ERROR PIDIENDO LOS ROLES");
      }
    );
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