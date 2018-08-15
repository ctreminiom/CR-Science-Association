<template>
    <ul class="menu">
    <li class="divider" data-content="USERS"></li>

    <div class="columns">

    <div class="column col-12">

        <div class="container columns">
            <div class="colunm col-3">
                <input class="form-input" type="text" placeholder="search">
            </div>

        </div>

    </div>

    <div class="column col-12">
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Fecha</th>
                    <th>Descarga</th>
                </tr>
            </thead>

            <tbody v-for="user in users" :key="user.ID">

                <tr class="">

                    <td>{{user.ID}}</td>
                    <td>{{user.Consecutive}}</td>
                    <td>{{user.Name}}</td>

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
          text: "Downloads loaded!"
        });
        this.users = this.$store.getters.users;

      },
      error => {
        console.log(error);
        this.$notify({
          group: "foo",
          type: "error",
          text: "Error feching de downloads!"
        });
      }
    );
  },

};
</script>
