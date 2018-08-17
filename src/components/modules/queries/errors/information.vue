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
                    <th>Consecutive</th>
                    <th>CreatedAt</th>
                    <th>Error</th>
                </tr>
            </thead>

            <tbody v-for="error in errors" :key="error.ID">

                <tr class="">

                    <td>{{error.ID}}</td>
                    <td>{{error.Consecutive}}</td>
                    <td>{{error.CreatedAt}}</td>
                    <td>{{error.Error}}</td>
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
      errors: null
    };
  },

  created() {
    this.$store.dispatch("errors").then(
      response => {
          this.$notify({
          group: "foo",
          type: "success",
          text: "error loaded!"
        });
        this.errors = this.$store.getters.errors;

      },
      error => {
        console.log(error);
        this.$notify({
          group: "foo",
          type: "error",
          text: "Error feching de error!"
        });
      }
    );
  }
};
</script>
