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
                    <th>Consecutive</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody v-for="user in users" :key="user.ID">

                <tr class="">

                    <td>{{user.ID}}</td>
                    <td>{{user.Consecutive}}</td>
                    <td>{{user.Name}}</td>
                    <td>{{user.Username}}</td>
                    <td>
                        <div class="btn-group btn-group-block">
                        <button @click="openViewModal(user)" class="btn btn-success">View</button>
                        <button class="btn btn-primary">Password</button>
                        <button class="btn btn-error">Delete</button>
                        </div> 
                    </td>

                </tr>
            </tbody>
        </table>



        

    </div>
    </div>
    <view-data :open="active_view" :user="user" @close="closeViewModal()"/>
    <create-data :open="active_create" @close="closeCreateModal()"/>

    </ul>
    
</template>


<script>
import viewData from '@/components/modules/security/users/modals/view.vue';
import createData from "@/components/modules/security/users/modals/create.vue";

export default {
  data() {
    return {
      active_view: "",
      active_password: "",
      active_delete: "",
      active_create: "",
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
          text: "User loaded!"
        });
        this.users = this.$store.getters.users;

      },
      error => {
        console.log(error);
        this.$notify({
          group: "foo",
          type: "error",
          text: "Error feching de users!"
        });
      }
    );
  },

  methods: {
    openViewModal(user) {
      this.active_view = "active";
      this.user = user;
    },

    openPassowordModal(user) {
      this.active_password = "active";
      this.user = user;
    },

    openDeleteModal(user) {
      this.active_delete = "active";
      this.user = user;
    },

    openCreateModal(user) {
      this.active_create = "active";
    },

    closeViewModal() {
      this.active_view = "";
    },

    closePasswordModal() {
      this.active_password = "";
    },

    closeDeleteModal() {
      this.active_delete = "";
    },
    closeCreateModal() {
      this.active_create = "";
    }
  },

  components: {viewData, createData}
};
</script>
