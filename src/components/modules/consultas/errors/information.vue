<template>
    <ul class="menu">
    <li class="divider" data-content="USERS"></li>

    <div class="columns">

    <div class="column col-12">

        <div class="container columns">
            <div class="colunm col-3">
                <input class="form-input" type="text" placeholder="search">
            </div>

            <div class="colunm col-3">
                <button @click="openCreateModal()" class="btn btn-primary">Agregar</button>
            </div>
        </div>

    </div>

    <div class="column col-12">
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Mensaje de error</th>
                </tr>
            </thead>

            <tbody v-for="user in users" :key="user.ID">

                <tr class="">

                    <td>{{user.ID}}</td>
                    <td>{{user.Consecutive}}</td>
                </tr>
            </tbody>
        </table>

    </div>
    </div>

    </ul>
    
</template>


<script>

export default {
  data() {
    return {

      user: "",
      users: null
    };
  },

  created() {
    this.$store.dispatch("users").then(
      response => {
          this.$notify({
          group: "foo",
          type: "success",
          text: "Errores cargados!"
        });
        this.users = this.$store.getters.users;

      },
      error => {
        console.log(error);
        this.$notify({
          group: "foo",
          type: "error",
          text: "Error feching de errors (ironic we know)!"
        });
      }
    );
  },


  components: {viewData, createData}
};
</script>
