<template>

                     <div>
                        <div id="EditAcademico" class="modal" :class="open">
                          <div class="modal-background"></div>
                          <div class="modal-card">
                              <header class="modal-card-head">
                                  <p class="modal-card-title">Consecutivo</p>
                                  <button @click="close()"  class="delete" aria-label="close"></button>
                              </header>
                              <section class="modal-card-body">
                  
                           <div class="field">
                                      <label class="label">Grado de escolaridad</label>
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
                  
                                  <div class="field">
                                      <label class="label">Nombre de carrera</label>
                                          <div class="control">
                                              <textarea class="textarea" placeholder="Descripcion" rows="10"></textarea>
                                              <input v-model="career" class="input " type="text" placeholder="Text input">
                                          </div>
                                  </div>
                              </section>
                              <footer class="modal-card-foot">
                                  <button id="BTN_Guardar" class="button is-success">Save changes</button>
                                  <button @click="close()" id="BTN_Cerrar" class="button is-danger">Cancel</button>
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
      data00: null,
      name: "",
      desc: "",

    };
  },
  methods: {
    close() {
      this.$emit("closeModal");
    }
  },
  mounted() {
    var options = { 
      url: "http://localhost:8080/api/v1/module/academic/level", //*******Cambiarlo al correcto RAMA CIENTIFICA********
      method: "GET"
    };

    this.$http(options).then(
      response => {
        this.data00 = response.body;
      },
      response => {
        alert("NO");
      }
    );
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