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
                    <th>Role name</th>
                    <!--<th>Actions</th>-->
                </tr>
            </thead>

            <tbody v-for="grant in grants" :key="grant.ID">

                <tr class="">

                    <td>{{grant.ID}}</td>
                    <td>{{grant.Consecutive}}</td>
                    <td>{{grant.User}}</td>
                    <td>{{grant.Role}}</td>

                   <!-- <td>
                        <div class="btn-group btn-group-block">
                        <button class="btn btn-primary">View</button>
                        </div> 
                    </td>
                    No hay nada que ver extra, no hay mas roles que agregar ni tampoco se pueden eliminar los existentes-->

                </tr>
            </tbody>
        </table>

    </div>
    </div>
    <view-data :open="active_view" :user="grant" @close="closeViewModal()"/>

    </ul>
    
</template>


<script>
import viewData from '@/components/modules/security/consecutives/modals/view.vue';

export default {
  data() {
    return {
      active_view: "",
      grant: "",
      grants: null
    };
  },

  created() {
    this.$store.dispatch("grants").then(
      response => {
          this.$notify({
          group: "foo",
          type: "success",
          text: "Grants loaded!"
        });
        this.grants = this.$store.getters.grants;

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
