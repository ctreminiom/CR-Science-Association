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
                        <button @click="openDeleteModal(education.ID)" class="btn btn-error">Delete</button>
                        </div> 
                    </td>

                </tr>
            </tbody>
        </table>

    </div>
    </div>

    <create-data :open="active_create" @close="closeCreateModal()"/>

    <delete-data :open="active_delete" :education="education" @close="closeDeleteModal()"/>

    </ul>
    
</template>


<script>

import createData from '@/components/modules/security/educationLevel/modals/create.vue';
import deleteData from '@/components/modules/security/educationLevel/modals/delete.vue';

export default {
  data() {
    return {
      active_delete: "",
      active_create: "",
      education:{id: null},
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
    openDeleteModal(id) {
      this.active_delete = "active";
      this.grade.id = id;
    },

    openCreateModal() {
        this.active_create = "active"
    },

    closeDeleteModal() {
      this.active_delete = "";
    },

    closeCreateModal(){
        this.active_create = "";
    }
  },

  components: {createData, deleteData}

};
</script>
