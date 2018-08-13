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
                    <th>Name</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody v-for="job in jobs" :key="job.ID">

                <tr class="">

                    <td>{{job.ID}}</td>
                    <td>{{job.Consecutive}}</td>
                    <td>{{job.Name}}</td>
                    <td>
                        <div class="btn-group btn-group-block">
                        <button class="btn btn-primary">View</button>   
                        </div> 
                    </td>

                </tr>
            </tbody>
        </table>

    </div>
    </div>
    <view-data :open="active_view" :user="job" @close="closeViewModal()"/>

    </ul>
    
</template>


<script>
import viewData from '@/components/modules/security/consecutives/modals/view.vue';

export default {
  data() {
    return {
      active_view: "",
      job: "",
      jobs: null
    };
  },

  created() {
    this.$store.dispatch("jobs").then(
      response => {
          this.$notify({
          group: "foo",
          type: "success",
          text: "Jobs loaded!"
        });
        this.jobs = this.$store.getters.jobs;

      },
      error => {
        console.log(error);
        this.$notify({
          group: "foo",
          type: "error",
          text: "Error feching de grants!"
        });
      }
    );
  },

  methods: {
    openViewModal(user) {
      this.active_view = "active";
      this.user = user;
    },

    closeViewModal() {
      this.active_view = "";
    }
  },

  components: {viewData}
};
</script>
