<template>
    <div class="modal modal-lg" :class="open">
    <a href="#close" class="modal-overlay" aria-label="Close"></a>
        <div class="modal-container">
            <div class="modal-header">
                <a @click="close()" class="btn btn-clear float-right" aria-label="Close"></a>
                <div class="modal-title h5">New User</div>
            </div>
            <div class="modal-body">
                <div class="content">

                <form class="form-horizontal">
                <div class="form-group">
                    <div class="col-3 col-sm-12">
                    <label class="form-label" for="input-example-1">Name</label>
                    </div>
                    <div class="col-9 col-sm-12">
                    <input class="form-input" type="text" id="input-example-1" placeholder="Name" v-model="user.name">
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-3 col-sm-12">
                    <label class="form-label" for="input-example-1">Surname</label>
                    </div>
                    <div class="col-9 col-sm-12">
                    <input class="form-input" type="text" id="input-example-1" placeholder="Surname" v-model="user.surname">
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-3 col-sm-12">
                    <label class="form-label" for="input-example-1">Second Surname</label>
                    </div>
                    <div class="col-9 col-sm-12">
                    <input class="form-input" type="text" id="input-example-1" placeholder="Second Surname" v-model="user.secondSurname">
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-3 col-sm-12">
                    <label class="form-label" for="input-example-1">Username</label>
                    </div>
                    <div class="col-9 col-sm-12">
                    <input class="form-input" type="text" id="input-example-1" placeholder="Username" v-model="user.username">
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-3 col-sm-12">
                    <label class="form-label" for="input-example-1">Password</label>
                    </div>
                    <div class="col-9 col-sm-12">
                    <input class="form-input" type="text" id="input-example-1" placeholder="Password" v-model="user.password">
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-3 col-sm-12">
                    <label class="form-label" for="input-example-1">Phone</label>
                    </div>
                    <div class="col-9 col-sm-12">
                    <input class="form-input" type="text" id="input-example-1" placeholder="Password" v-model="user.phone">
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-3 col-sm-12">
                    <label class="form-label" for="input-example-1">Role</label>
                    </div>

                    <div class="col-9 col-sm-12">
                        <select class="form-select" v-model="selected.role">
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
                        <select class="form-select" v-model="selected.education">
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
                        <select class="form-select" v-model="selected.job">
                            <option v-for="item in json.job" :value="item.ID" :key="item.ID">
                                {{item.Name}}
                            </option>
                        </select>
                    </div>
                    
                </div>

                <div class="form-group">
                    <div class="col-3 col-sm-12">
                        <label class="form-label">Sign</label>
                    </div>

                    <div class="col-9 col-sm-12">
                         <input class="form-file" type="file" name="resume" @change="processFile($event)">
                    </div>
                    
                </div>


                </form>
                </div>
            </div>
            <div class="modal-footer">
                <button @click="save()" class="btn btn-primary">Create</button>
            </div>
        </div>
</div>
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

      this.$http
        .post("http://localhost:8080/api/v1.2/module/users", formData)
        .then(
          response => {
            this.close();

            this.$notify({
              group: "foo",
              type: "success",
              text: "User created!"
            });

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
          },

          response => {
            console.log(response);

            this.$notify({
              group: "foo",
              type: "error",
              text: response.body
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
</script>




<style>
</style>
