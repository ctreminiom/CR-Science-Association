<template>

<div>
      <div id="da" class="modal" :class="open">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Modal title</p>
                <button @click="close()"  class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body">


                <div class="field">
                    <label class="label">Name</label>
                        <div class="control">
                            <input  v-model="name" class="input" type="text" placeholder="Text input">
                        </div>
                </div>

                <div class="field">
                    <label class="label">SurName</label>
                        <div class="control">
                            <input v-model="last_name" class="input" type="text" placeholder="Text input">
                        </div>
                </div>

                <div class="field">
                    <label class="label">Second SurName</label>
                        <div class="control">
                            <input v-model="last_name" class="input" type="text" placeholder="Text input">
                        </div>
                </div>

                <div class="field">
                    <label class="label">Phone</label>
                        <div class="control">
                            <input v-model="phone" class="input" type="text" placeholder="Text input">
                        </div>
                </div>

                <div class="field">
                    <label class="label">Username</label>
                        <div class="control">
                            <input v-model="username" class="input" type="text" placeholder="Text input">
                        </div>
                </div>

                <div class="field">
                    <label class="label">Password</label>
                        <div class="control">
                            <input v-model="password" class="input" type="password" placeholder="Text input">
                        </div>
                </div>

                <div class="field">
                    <label class="label">Role</label>
                        <div class="control">
                                <div class="select is-fullwidth">
                                   <select v-model="role_selected">
                                        <option v-for="item in roles" :key="item.ID">
                                            {{item.Name}}
                                        </option>
                                    </select>
                                </div>
                        </div>
                </div>

                <div class="field">
                    <label class="label">Laboratorie Scope</label>
                        <div class="control">
                                <div class="select is-fullwidth">
                                   <select>
                                        <option v-for="item in laboratory" :key="item.ID">
                                            {{item.Name}}
                                        </option>
                                    </select>
                                </div>
                        </div>
                </div>

                <div class="field">
                    <label class="label">Academic Level</label>
                        <div class="control">
                                <div class="select is-fullwidth">
                                    <select>
                                        <option v-for="item in academic" :key="item.ID">
                                            {{item.Grade}}
                                        </option>
                                    </select>
                                </div>
                        </div>
                </div>

                <div class="file has-name is-centered is-boxed">
                    <label class="file-label">
                        <input class="file-input" type="file" name="resume">
                            <span class="file-cta">
                            <span class="file-icon">
                                <i class="fas fa-upload"></i>
                            </span>
                            <span class="file-label">
                                Choose a file…
                            </span>
                            </span>
                        <span class="file-name">
                        Screen Shot 2017-07-29 at 15.54.25.png
                        </span>
                    </label>
                </div>



            </section>
            <footer class="modal-card-foot">
                <button class="button is-success">Save changes</button>
                <button @click="close()" class="button">Cancel</button>
            </footer>
        </div>
    </div>
</div>
</template>



<script>
export default {
  props: ["open"],
  data() {
    return {
      academic: null,
      laboratory: null,
      roles: null,
      role_selected: '',
      name: "",
      last_name: "",
      phone: "",
      username: "",
      password: ""
    };
  },
  methods: {
    close() {
      this.$emit("closeModal");
    },
    fetchAcademics() {
      var options = {
        url: "http://localhost:8080/api/v1/module/academic/level",
        method: "GET"
      };

      this.$http(options).then(
        response => {
          this.academic = response.body;
        },
        response => {
          alert("NO");
        }
      );
    },
    fetchLaboratories() {
      var options = {
        url: "http://localhost:8080/api/v1/module/jobs",
        method: "GET"
      };

      this.$http(options).then(
        response => {
          this.laboratory = response.body;
        },
        response => {
          alert("NO");
        }
      );
    },
    fetchRoles() {
      var options = {
        url: "http://localhost:8080/api/v1/module/user/roles",
        method: "GET"
      };

      this.$http(options).then(
        response => {
          this.roles = response.body;
        },
        response => {
          alert("NO");
        }
      );
    }
  },
  created() {
    this.fetchAcademics();
    this.fetchLaboratories();
    this.fetchRoles();
  }
};
</script>



<style scoped>
html,
body {
  font-family: "Open Sans", serif;
  font-size: 14px;
  line-height: 1.5;
  height: 100%;
  background-color: #fff;
}
</style>