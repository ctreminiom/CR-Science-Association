<template>

<div>
      <div id="da" class="modal" :class="open">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Nuevo Puesto</p>
                <button @click="close()"  class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body">

              <div class="field">
                    <label class="label">Nombre de puesto</label>
                    <div class="control">
                    <input v-model="career" class="input " type="text" placeholder="Text input">
                    </div>
            </div>

            <div class="field">
                    <label class="label">Descripcion del puesto</label>
                    <div class="control">
                    <input v-model="career" class="input " type="text" placeholder="Text input">
                    </div>
            </div>

                <div class="field">
                                      <label class="label">Rol de Laboratorio</label>
                                          <div class="control">
                                                  <div class="select is-rounded">
                                                      <select>
                                                        <option v-for="item in data00" :key="item.ID">
                                                            {{item.Grade}}
                                                        </option>
                                                      </select>
                                                  </div>
                                          </div>
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