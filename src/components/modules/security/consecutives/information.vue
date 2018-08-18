<!--Revisar el modal de edit y xq no hace el render correcto-->
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
                        <button @click="openViewModal(user)" class="btn btn-success">View</button>
                        <button @click="openEditModal(user)" class="btn btn-primary">Edit</button>
                        </div> 
                    </td>

                </tr>
            </tbody>
        </table>

    </div>
    </div>
    <view-data :open="active_view" :user="consecutive" @close="closeViewModal()"/>
    <edit-data :open="active_edit" :user="consecutive" @close="closeEditModal()"/>
    </ul>
    
</template>


<script>
import viewData from '@/components/modules/security/consecutives/modals/view.vue';
import editData from '@/components/modules/security/consecutives/modals/edit.vue';


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
    openViewModal(user) {
      this.active_view = "active";
      this.user = user;
    },

    closeViewModal() {
      this.active_view = "";
    },
    openEditModal(user) {
      this.active_edit = "active";
      this.user = user;
    },

    closeEditModal() {
      this.active_edit = "";
    },

  },

  components: {viewData, editData}
};
</script>
