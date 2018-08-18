<template>
<form role="form" data-toggle="validator" >

    <div class="modal" :class="open">
    <a href="#close" class="modal-overlay" aria-label="Close"></a>
        <div class="modal-container">
            <div class="modal-header">
                <a @click="close()" class="btn btn-clear float-right" aria-label="Close"></a>
                <div class="modal-title h5">New User</div>
            </div>
            <div class="modal-body">
                <div class="content">
                <form class="form-horizontal" role="form" data-toggle="validator" id="app" @submit="save" >

                  <button v-on:click="checkForm" class="btn btn-primary" type="submit">Submit form</button> 




                <div class="form-group">
                    <div class="col-3 col-sm-12">
                    <label class="form-label" for="user.name">Name</label>
                    </div>
                    <div class="col-9 col-sm-12">
                    <input class="form-input" type="text" placeholder="Name" v-model="user.name" id="user.name"  name="user.name">
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-3 col-sm-12">
                    <label class="form-label" for="validationDefault02">Surname</label>
                    </div>
                    <div class="col-9 col-sm-12">
                    <input class="form-input" type="text" placeholder="Surname" v-model="user.surname" id="validationDefault02" required>
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-3 col-sm-12">
                    <label class="form-label" for="validationDefault03">Second Surname</label>
                    </div>
                    <div class="col-9 col-sm-12">
                    <input class="form-input" type="text" placeholder="Second Surname" v-model="user.secondSurname" id="validationDefault03" required>
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-3 col-sm-12">
                    <label class="form-label" for="validationDefault04">Username</label>
                    </div>
                    <div class="col-9 col-sm-12">
                    <input class="form-input" type="text" placeholder="Username" v-model="user.username" id="validationDefault04" required>
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-3 col-sm-12">
                    <label class="form-label" for="validationDefault05">Password</label>
                    </div>
                    <div class="col-9 col-sm-12">
                    <input class="form-input" data-minlength="6" type="password" placeholder="Password" v-model="user.password" id="validationDefault05" required>
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-3 col-sm-12">
                    <label class="form-label" for="validationDefault06">Phone</label>
                    </div>
                    <div class="col-9 col-sm-12">
                    <input class="form-input" type="number" placeholder="Phone" v-model="user.phone" id="validationDefault06" required>
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-3 col-sm-12">
                    <label class="form-label" for="validationDefault07">Role</label>
                    </div>

                    <div class="col-9 col-sm-12">
                        <select class="form-select" v-model="selected.role" id="validationDefault07" required>
                            <option v-for="item in json.role" :value="item.ID" :key="item.ID">
                                {{item.Name}}
                            </option>
                        </select>
                    </div>

                </div>

                <div class="form-group">
                    <div class="col-3 col-sm-12">
                    <label class="form-label" for="validationDefault08">Education Level</label>
                    </div>

                     <div class="col-9 col-sm-12">
                        <select class="form-select" v-model="selected.education" id="validationDefault08" required>
                            <option v-for="item in json.education" :value="item.ID" :key="item.ID">
                                {{item.Name}}
                            </option>
                        </select>
                    </div>

                </div>

                <div class="form-group">
                    <div class="col-3 col-sm-12">
                    <label class="form-label" for="validationDefault09">Job</label>
                    </div>

                    <div class="col-9 col-sm-12">
                        <select class="form-select" v-model="selected.job" id="validationDefault09" required>
                            <option v-for="item in json.job" :value="item.ID" :key="item.ID">
                                {{item.Name}}
                            </option>
                        </select>
                    </div>
                    
                </div>

                <div class="form-group">
                    <div class="col-3 col-sm-12">
                        <label class="form-label" for="validationDefault10">Sign</label>
                        <a @click="close()" class="btn btn-clear float-right" aria-label="Close"></a>

                    </div>

                    <div class="col-9 col-sm-12">
                      
                         <input class="form-file" type="file" name="resume" @change="processFile($event)" id="validationDefault10" required>
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
        role: "",
        education: "",
        job: ""
      },

      json: {
        role: null,
        education: null,
        job: null
      },

      user: {
        name: "",
        surname: "",
        secondSurname: "",
        phone: "",
        username: "",
        password: "",
        sign: null
      },
    };
  },

  methods: {
    close() {
      this.$emit("close");
    },
    processFile(event) {
      this.user.sign = event.target.files[0];
    },

    save (){
      var formData = new FormData();

      formData.append("Name", this.user.name);
      formData.append("Surname", this.user.lastname);
      formData.append("SecondSurname", this.user.secondSurname);
      formData.append("phone", this.user.phone);
      formData.append("Username", this.user.username);
      formData.append("Passoword", this.user.password);

      formData.append("Role", this.selected.role);
      formData.append("Educationalevel", this.selected.education);
      formData.append("Job", this.selected.job);

      formData.append("sign", this.user.sign, this.user.sign.name);

      let options = {
        url: "http://18.222.31.81:8080/api/v1.2/module/users",
        method: "POST",
        body: formData,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      };

      this.$http(options).then(
        response => {

          this.$notify({
            group: "foo",
            type: "success",
            text: "User created!"
          });
        },
        error => {
          this.$notify({
            group: "foo",
            type: "error",
            text: error.body
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

    this.$store.dispatch("educationLevels").then(
      response => {
        this.$notify({
          group: "foo",
          type: "success",
          text: "Education Levels loaded!"
        });
        this.json.education = this.$store.getters.education;
      },
      error => {
        console.log(error);
        this.$notify({
          group: "foo",
          type: "error",
          text: "Error feching de eduation!"
        });
      }
    );

    this.$store.dispatch("jobs").then(
      response => {
        this.$notify({
          group: "foo",
          type: "success",
          text: "Jobs loaded!"
        });
        this.json.job = this.$store.getters.jobs;
      },
      error => {
        console.log(error);
        this.$notify({
          group: "foo",
          type: "error",
          text: "Error feching de jobs!"
        });
      }
    );
  }
};

//lIMPIAR CAMPOS


</script>


<style>
</style>
