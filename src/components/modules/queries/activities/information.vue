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
                    <th>User</th>
                    <th>Type</th>
                    <th>Description</th>
                </tr>
            </thead>

            <tbody v-for="activity in activities" :key="activity.ID">

                <tr class="">
                    <td>{{activity.ID}}</td>
                    <td>{{activity.Consecutive}}</td>
                    <td>{{activity.User}}</td>
                    <td>{{activity.Type}}</td>
                    <td>{{activity.Description}}</td>
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
      activities: null
    };
  },

  created() {
    this.$store.dispatch("activities").then(
      response => {
          this.$notify({
          group: "foo",
          type: "success",
          text: "activities loaded!"
        });
        this.activities = this.$store.getters.activities;

      },
      error => {
        console.log(error);
        this.$notify({
          group: "foo",
          type: "error",
          text: "Error feching de activities!"
        });
      }
    );
  }
};
</script>
