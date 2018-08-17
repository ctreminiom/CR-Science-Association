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
                        <button @click="openDeleteModal(grade.ID)" class="btn btn-error">Delete</button>
                        </div> 
                    </td>

                </tr>
            </tbody>
        </table>

    </div>
    </div>
    <create-data :open="active_create" @close="closeCreateModal()"/>

    <delete-data :open="active_delete" :grade="grade" @close="closeDeleteModal()"/>


    </ul>
    
</template>


<script>
import createData from '@/components/modules/security/grades/modals/create.vue';
import deleteData from '@/components/modules/security/grades/modals/delete.vue';


export default {
  data() {
    return {
      active_delete: "",
      active_create: "",
      grade: {id: null},
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
