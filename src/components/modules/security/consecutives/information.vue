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
                <button @click="openCreateModal_Consecutives()" class="btn btn-primary">Agregar</button>
            </div>
        </div>

    </div>

    <div class="column col-12">
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Consecutive</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody v-for="consecutive in consecutives" :key="consecutive.ID">

                <tr class="">

                    <td>{{consecutive.ID}}</td>
                    <td>{{consecutive.Type}}</td>
                    <td>{{consecutive.Description}}</td>
                    <td>{{consecutive.Consecutive}}</td>
                    <td>
                        <div class="btn-group btn-group-block">
                        <button @click="openViewModal_Consecutives(user)" class="btn btn-success">View</button>
                        <button class="btn btn-primary">Edit</button>
                        </div> 
                    </td>

                </tr>
            </tbody>
        </table>

    </div>
    </div>
    <view-data :open="active_view" :user="consecutive" @close="closeViewModal_Consecutives()"/>

    </ul>
    
</template>


<script>
import viewData_Consecutives from '@/components/modules/security/consecutives/modals/view.vue';
import createData_Jobs from '@/components/modules/security/consecutives/modals/create.vue';

export default {
  data() {
    return {
      active_view: "",
      consecutive: "",
      consecutives: null
    };
  },

  created() {
    this.$store.dispatch("consecutives").then(
      response => {
          this.$notify({
          group: "foo",
          type: "success",
          text: "Consecutives loaded!"
        });
        this.consecutives = this.$store.getters.consecutives;

      },
      error => {
        console.log(error);
        this.$notify({
          group: "foo",
          type: "error",
          text: "Error feching de consecutives!"
        });
      }
    );
  },

  methods: {
    openViewModal_Consecutives(user) {
      this.active_view = "active";
      this.user = user;
    },
    closeViewModal_Consecutives() {
      this.active_view = "";
    },

    openCreateModal_Consecutives(user) {
      this.active_create = "active";
      this.user = user;
    },
    closeCreateModal_Consecutives(){
      this.active_create = "";
    }
  },

  components: {viewData_Consecutives, createData_Consecutives}
};
</script>
