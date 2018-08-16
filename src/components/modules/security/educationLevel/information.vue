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
                <button @click="openCreateModal_EducationLevel" class="btn btn-primary">Agregar</button>
            </div>
        </div>

    </div>

    <div class="column col-12">
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Consecutive</th>
                    <th>Grade</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Actions</th>

                </tr>
            </thead>

            <tbody v-for="education in level" :key="education.ID">

                <tr class="">

                    <td>{{education.ID}}</td>
                    <td>{{education.Consecutive}}</td>
                    <td>{{education.Grade}}</td>
                    <td>{{education.Name}}</td>
                    <td>{{education.Description}}</td>
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
    <view-data :open="active_view" :user="education" @close="closeViewModal_EducationLevel()"/>
    <create-data :open="active_create" @close="closeCreateModal_EducationLevel()"/>
    </ul>
    
</template>


<script>
import viewData_EducationLevel from '@/components/modules/security/educationLevel/modals/view.vue';
import createData_EducationLevel from '@/components/modules/security/educationLevel/modals/create.vue';

export default {
  data() {
    return {
      active_view: "",
      active_create: "",
      education: "",
      level: null
    };
  },

  created() {
    this.$store.dispatch("educationLevels").then(
      response => {
          this.$notify({
          group: "foo",
          type: "success",
          text: "Education Level loaded!"
        });
        this.level = this.$store.getters.education;

      },
      error => {
        console.log(error);
        this.$notify({
          group: "foo",
          type: "error",
          text: "Error feching de education level!"
        });
      }
    );
  },

  methods: {
    openViewModal_EducationLevel(user) {
      this.active_view = "active";
      this.user = user;
    },

    closeViewModal_EducationLevel() {
      this.active_view = "";
    },

    openCreateModal_EducationLevel(user) {
      this.active_create = "active";
      this.user = user;
    },
    closeCreateModal_EducationLevel(){
      this.active_create = "";
    }
  },

  components: {viewData_EducationLevel, createData_EducationLevel}
};
</script>
