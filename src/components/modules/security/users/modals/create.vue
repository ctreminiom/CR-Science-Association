<template>
<<<<<<< HEAD
    <div class="modal" :class="open">
=======
<form
 id="app"
  @submit="checkForm"
  action="https://vuejs.org/"
  method="post">

    <div class="modal modal-lg" :class="open">
>>>>>>> 65bb551ccc2765af79b18de160a932c0ba170565
    <a href="#close" class="modal-overlay" aria-label="Close"></a>
        <div class="modal-container">
            <div class="modal-header">
                <a @click="close()" class="btn btn-clear float-right" aria-label="Close"></a>
                <div class="modal-title h5">New User</div>
            </div>
            <div class="modal-body">
                <div class="content">
                <form class="form-horizontal">
          <!--Codigo que ensena los errores cuando existe-->
                    <p v-if="errors.length">
                    <b>Please correct the following error(s):</b>
                    <ul>
                      <li v-for="error in errors">{{ error }}</li>
                    </ul>
                    </p>
          <!--Codigo que ensena los errores cuando existe-->
                <div class="form-group">
                    <div class="col-3 col-sm-12">
                    <label class="form-label" for="Name">Name</label>
                    </div>
                    <div required class="col-9 col-sm-12">
                    <input required class="form-input" type="text" id="Name" placeholder="Name" v-model="user.name">
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-3 col-sm-12">
                    <label class="form-label" for="Surname">Surname</label>
                    </div>
                    <div required class="col-9 col-sm-12">
                    <input required class="form-input" type="text" id="Surname" placeholder="Surname" v-model="user.surname">
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-3 col-sm-12">
                    <label class="form-label" for="SecondS">Second Surname</label>
                    </div>
                    <div required class="col-9 col-sm-12">
                    <input required class="form-input" type="text" id="SecondS" placeholder="Second Surname" v-model="user.secondSurname">
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-3 col-sm-12">
                    <label class="form-label" for="Username">Username</label>
                    </div>
                    <div required class="col-9 col-sm-12">
                    <input required class="form-input" type="text" id="Username" placeholder="Username" v-model="user.username">
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-3 col-sm-12">
                    <label class="form-label" for="Password">Password</label>
                    </div>
                    <div required class="col-9 col-sm-12">
                    <input required class="form-input" type="password" id="Password" placeholder="Password" v-model="user.password">
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-3 col-sm-12">
                    <label class="form-label" for="Phone">Phone</label>
                    </div>
                    <div required class="col-9 col-sm-12">
                    <input required class="form-input" type="number" id="Phone" placeholder="Password" v-model="user.phone">
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-3 col-sm-12">
                    <label class="form-label" for="input-example-1">Role</label>
                    </div>

                    <div class="col-9 col-sm-12">
                        <select required class="form-select" v-model="selected.role">
                            <option v-for="item in json.role" :value="item.ID" :key="item.ID">
                                {{item.Name}}
                            </option>
                        </select>
                    </div>

                </div>

                <div class="form-group">
                    <div class="col-3 col-sm-12">
                    <label class="form-label" for="input-example-1">Education Level</label>
                    </div>

                     <div class="col-9 col-sm-12">
                        <select required class="form-select" v-model="selected.education">
                            <option v-for="item in json.education" :value="item.ID" :key="item.ID">
                                {{item.Name}}
                            </option>
                        </select>
                    </div>

                </div>

                <div class="form-group">
                    <div class="col-3 col-sm-12">
                    <label class="form-label" for="input-example-1">Job</label>
                    </div>

                    <div class="col-9 col-sm-12">
                        <select required class="form-select" v-model="selected.job">
                            <option v-for="item in json.job" :value="item.ID" :key="item.ID">
                                {{item.Name}}
                            </option>
                        </select>
                    </div>
                    
                </div>

                <div class="form-group">
                    <div class="col-3 col-sm-12">
                        <label class="form-label">Sign</label>
                        <a @click="close()" class="btn btn-clear float-right" aria-label="Close"></a>

                    </div>

                    <div class="col-9 col-sm-12">
                         <input required class="form-file" type="file" name="resume" @change="processFile($event)">
                    </div>
                    
                </div>


                </form>
                </div>
            </div>
            <div class="modal-footer">
                <button @click="save()" class="btn btn-primary">Create</button>
                <input type="button" name="reset_form" class="button is-warning" value="Clear fields" onclick="this.form.reset();">

  <p>
    <input
      type="submit"
      value="Validar cambios"
      class="button is-link is-outlined"
    >
  </p>

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
      }
    };
  },

  methods: {
    close() {
      this.$emit("close");
    },
    processFile(event) {
      this.user.sign = event.target.files[0];
    },

    save() {
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
        url: "http://localhost:8080/api/v1.2/module/users",
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

//funcion limpiar campos
function clearForm(oForm) {
    
  var elements = oForm.elements; 
    
  oForm.reset();
  for(i=0; i<elements.length; i++) {
      
  field_type = elements[i].type.toLowerCase();
  
  switch(field_type) {
  
    case "text": 
    case "password": 
    case "textarea":
          case "hidden":   
      
      elements[i].value = ""; 
      break;
        
    case "radio":
    case "checkbox":
        if (elements[i].checked) {
          elements[i].checked = false; 
      }
      break;
    case "select-one":
    case "select-multi":
                elements[i].selectedIndex = -1;
      break;
    default: 
      break;
  }
    }
}

//funcion validar todos los campos
const app = new Vue({
  el: '#app',
  data: {
    errors: [],
        Name: null,
        Surname: null,
        SecondS: null,
        Phone: null,
        Username: null,
        Password: null,
  },
  methods:{
    checkForm: function (e) {
      if (this.Name && this.Surname && this.Phone && this.SecondS && this.Username && this.Password ) { //revisar si si lo que esta ingrsando es el id u otro parametro
        return true;
      }

      this.errors = [];

      if (!this.Name) {
        this.errors.push('Name required.');
      }
      if (!this.Surname) {
        this.errors.push('Lastname required.');
      }
      if (!this.SecondS) {
        this.errors.push('Second Lastname required.');
      }
      if (!this.Phone) {
        this.errors.push('Lastname required.');
      }
      if (!this.Username) {
        this.errors.push('Username required.');
      }
      if (!this.Password) {
        this.errors.push('Password required.');
      }

      e.preventDefault();
    }
  }
})
</script>




<style>
</style>
