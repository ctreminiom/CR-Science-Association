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

            <tbody v-for="lab in labs" :key="lab.ID">

                <tr class="">

                    <td>{{lab.ID}}</td>
                    <td>{{lab.Consecutive}}</td>
                    <td>{{lab.Name}}</td>
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
    <view-data :open="active_view" :user="education" @close="closeViewModal()"/>

    </ul>
    
</template>


<script>
import viewData from '@/components/modules/security/laboratoryRole/modals/view.vue';

export default {
  data() {
    return {
      active_view: "",
      lab: "",
      labs: null
    };
  },

  created() {
    this.$store.dispatch("laboratoryRoles").then(
      response => {
          this.$notify({
          group: "foo",
          type: "success",
          text: "Laboratory roles loaded!"
        });
        this.labs = this.$store.getters.lab;

      },
      error => {
        console.log(error);
        this.$notify({
          group: "foo",
          type: "error",
          text: "Error feching de laboratory role!"
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
