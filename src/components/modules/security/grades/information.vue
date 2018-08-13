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

            <tbody v-for="grade in grades" :key="grade.ID">

                <tr class="">

                    <td>{{grade.ID}}</td>
                    <td>{{grade.Consecutive}}</td>
                    <td>{{grade.Name}}</td>
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
    <view-data :open="active_view" :user="grade" @close="closeViewModal()"/>

    </ul>
    
</template>


<script>
import viewData from '@/components/modules/security/consecutives/modals/view.vue';

export default {
  data() {
    return {
      active_view: "",
      grade: "",
      grades: null
    };
  },

  created() {
    this.$store.dispatch("grades").then(
      response => {
          this.$notify({
          group: "foo",
          type: "success",
          text: "Grades loaded!"
        });
        this.grades = this.$store.getters.grades;

      },
      error => {
        console.log(error);
        this.$notify({
          group: "foo",
          type: "error",
          text: "Error feching de grades!"
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
