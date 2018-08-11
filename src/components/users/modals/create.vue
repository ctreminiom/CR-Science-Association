<template>
<form>
    <div>
        <div class="modal" :class="open">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Crear usuario</p>
                    <button @click="close()" class="delete" aria-label="close"></button>
                </header>
                <section class="modal-card-body">
    
                    <div class="field is-horizontal">

                        <div class="field-label is-normal">
                            <label class="label">Usuario</label>
                        </div>

                        <div class="field-body">
                            <div class="field">
                                <p class="control is-expanded has-icons-left">
                                    <input :v-model="user" required class="input" type="text" placeholder="Nombre">
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-user"></i>
                                     </span>
                                </p>
                            </div>

                            <div class="field">
                                <p class="control is-expanded has-icons-left">
                                    <input :v-model="lastname" class="input" type="text" placeholder="Apellidos">
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-user"></i>
                                     </span>
                                </p>
                            </div>

                        </div>
                    </div>

                    <div class="field is-horizontal">

                        <div class="field-label is-normal">
                            <label class="label">Apodo</label>
                        </div>

                        <div class="field-body">
                            <div class="field">
                                <p class="control is-expanded has-icons-left">
                                    <input v-model="username" required class="input" type="text" placeholder="Apodo">
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-user"></i>
                                     </span>
                                </p>
                            </div>

                        </div>
                    </div>

                    <div class="field is-horizontal">

                        <div class="field-label is-normal">
                            <label class="label">Contrasena</label>
                        </div>

                        <div class="field-body">
                            <div class="field">
                                <p class="control is-expanded has-icons-left">
                                    <input v-model="password" required class="input" type="text" placeholder="Contrasena">
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-user"></i>
                                     </span>
                                </p>
                            </div>

                        </div>
                    </div>

                     <div class="field is-horizontal">

                        <div class="field-label is-normal">
                            <label class="label">Telefono</label>
                        </div>

                        <div class="field-body">
                            <div class="field">
                                <p class="control is-expanded has-icons-left">
                                    <input v-model="phone" required class="input" type="text" placeholder="Telefono">
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-user"></i>
                                     </span>
                                </p>
                            </div>

                        </div>
                    </div>


                    <div class="field is-horizontal">

                        <div class="field-label is-normal">
                            <label class="label">Rol</label>
                        </div>

                        <div class="field-body">
                            <div class="control">
                                <div class="select is-rounded">

                                <select v-model="role_selected">
                                    <option selected disabled>Choose</option>
                                    <option v-for="role in roles" :value="role.ID" :key="role.ID">
                                        {{role.Name}}
                                    </option>

                                </select>


                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="field is-horizontal">

                        <div class="field-label is-normal">
                            <label class="label">Nivel Academico</label>
                        </div>

                        <div class="field-body">
                            <div class="control">
                                <div class="select is-rounded">

                                <select v-model="euducation_selected">
                                    <option selected disabled>Choose</option>
                                    <option v-for="item in level" :value="item.ID" :key="item.ID">
                                        {{item.Name}}
                                    </option>

                                </select>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div class="field is-horizontal">

                        <div class="field-label is-normal">
                            <label class="label">Puesto</label>
                        </div>

                        <div class="field-body">
                            <div class="control">
                                 <div class="select is-rounded">

                                <select v-model="job_selected">
                                    <option selected disabled>Choose</option>
                                    <option v-for="item in job" :value="item.ID" :key="item.ID">
                                        {{item.Name}}
                                    </option>

                                </select>


                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="field is-horizontal">

                        <div class="field-label is-normal">
                            <label class="label">Firma</label>
                        </div>

                        <div class="field-body">
                            <div class="control">
                                <label class="file-label">
                                    <input class="file-input" id="firma" type="file" name="resume" @change="processFile($event)">
                                    <span class="file-cta">

                                        <span class="file-icon">
                                            <i class="fas fa-upload"></i>
                                        </span>
                                        
                                        <span class="file-label">
                                            Choose a file…
                                        </span>

                                    </span>
                                </label>
                            </div>
                        </div>

                    </div>
                    
                </section>
                <footer class="modal-card-foot">
                <a @click="save()" class="button is-success">Save changes</a>
                <input type="button" name="reset_form" class="button is-warning" value="Reset Form" onclick="this.form.reset();">
                <a @click="close()" class="button is-danger">Cancel</a>
                </footer>
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
      selected: "Choose",
      role_selected: "Choose",
      job_selected: "Choose2",
      euducation_selected: "Choose3",

      user: "",
      lastname: "",
      username: "",
      password: "",
      phone: "",
      file: "",

      options: [{ text: "a", value: "b" }],
      roles: null,
      level: null,
      job: null
    };
  },

  methods: {
    close() {
      this.$emit("close_create_modal");
    },

    rol() {
      this.$store.dispatch("fetchRoles").then(
        response => {
          this.roles = this.$store.getters.roles;
        },
        error => {
          alert("ERROR");
        }
      );
    },

    education() {
      this.$store.dispatch("fetchEducationLevel").then(
        response => {
          this.level = this.$store.getters.education;
        },
        error => {
          alert("ERROR");
        }
      );
    },

    jobs() {
      this.$store.dispatch("fetchJobs").then(
        response => {
          this.job = this.$store.getters.jobs;
        },
        error => {
          alert("ERROR");
        }
      );
    },

    processFile(event) {
      this.file = event.target.files[0];
    },

    save() {
      var formData = new FormData();

      formData.append("Name", this.name);
      formData.append("Surname", this.lastname);
      formData.append("SecondSurname", this.lastname);
      formData.append("Phone", this.phone);
      formData.append("Username", this.username);
      formData.append("Passowrd", this.password);

      formData.append("Role", this.role_selected);
      formData.append("Educationalevel", this.euducation_selected);
      formData.append("Job", this.job_selected);

      formData.append("Sign", this.file, "mypic.jpg");

      console.log(formData.get(""))

      this.$http.post("http://localhost:8080/api/v1.2/module/users", formData).then(
        response => {
          console.log("SI")
        },
        response => {
            console.log(response)
            console.log("NO")
        }
      );
    }
  },
  created() {
    this.rol();
    this.education();
    this.jobs();
  }
};

//Clear input
function clearForm(oForm) {
  var elements = oForm.elements;

  oForm.reset();

  for (i = 0; i < elements.length; i++) {
    field_type = elements[i].type.toLowerCase();

    switch (field_type) {
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
</script>



<style scoped>
</style>
