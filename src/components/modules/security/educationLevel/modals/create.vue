<template>
<form role="form" data-toggle="validator">
<div class="modal" :class="open">
    <a href="#close" class="modal-overlay" aria-label="Close"></a>
        <div class="modal-container">
            <div class="modal-header">
                <a @click="close()" class="btn btn-clear float-right" aria-label="Close"></a>
                <div class="modal-title h5"><strong>Create new grade</strong></div>
            </div>
            <div class="modal-body">

                <div class="content">
                    <form class="form-horizontal" role="form" data-toggle="validator">
                                          <button v-on:click="checkForm" class="btn btn-primary" type="submit">Submit form</button> 


                <div class="form-group">
                    <div class="col-3 col-sm-12">
                    <label class="form-label" for="grade">Grado academico</label>
                    </div>

                    <div class="col-9 col-sm-12">
                        <select class="form-select" v-model="selected.role" id="grade" required>
                            <option v-for="item in json.role" :value="item.ID" :key="item.ID">
                                {{item.Name}}
                            </option>
                        </select>
                    </div>

                </div>

                        <div class="form-group">
                            <div class="col-3 col-sm-12">
                                <label class="form-label" for="name">Name</label>
                            </div>
                            <div class="col-9 col-sm-12">
                                <input class="form-input" type="text" id="name" placeholder="Name" v-model="user.Name" required>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-3 col-sm-12">
                                <label class="form-label" for="desc">Descripcion</label>
                            </div>
                            <div class="col-9 col-sm-12">
                                <input class="form-input" type="text" id="desc" placeholder="Descripcion" v-model="user.Description" required>
                            </div>
                        </div>

                    </form>
                </div>

            </div>

        </div>
</div>
</form>
</template>




<script>
export default {
  props: ["open"],

  data() {
    return {
        selected: {
        role: ""
      },

      json: {
        role: null
      },      
      
      user: {
        Name: "",
        Description:""
      },

    };
  },

  
  methods: {
    save() {
      this.$store.dispatch("createEducation", this.name).then(
        response => {
          this.$notify({
            group: "foo",
            type: "success",
            text: "grade created!"
          });
        },
        error => {
          console.log(error);
          this.$notify({
            group: "foo",
            type: "error",
            text: "Error creating de graes!"
          });
        }
      );
    },


    greet: function (event) {

      if (event) {     

       alert('HOLA TEST ' + this.user.name + ' Succesfully saved!' )
       //save()
        this.save()


      }

    },

    handleProceed() {
    	this.proceed(this.items)
    },
    checkForm: function (e) {
      if (this.user.name && this.user.surname && this.user.secondSurname && this.user.phone && this.user.username && this.user.password ) {
        this.save()
        alert('User ' + this.user.name + ' Succesfully saved!' )
        return save
        return this.save()
        return this.save
      }

    },


    close() {
      this.$emit("close");
    }
  },

created() {
    this.$store.dispatch("roles").then(
      response => {
        this.$notify({
          group: "foo",
          type: "success",
          text: "Role loaded!"
        });
        this.json.role = this.$store.getters.roles;
      },
      error => {
        console.log(error);
        this.$notify({
          group: "foo",
          type: "error",
          text: "Error feching de roles!"
        });
      }
    );
}

};
</script>
