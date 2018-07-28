<template>

                     <div>
                        <div id="NewProject" class="modal" :class="open">
                          <div class="modal-background"></div>
                          <div class="modal-card">
                              <header class="modal-card-head">
                                  <p class="modal-card-title">Nuevo Proyecto</p>
                                  <button @click="close()"  class="delete" aria-label="close"></button>
                              </header>
                              <section class="modal-card-body">
                  
                  
                                  <div class="field">
                                      <label class="label">Nombre de Proyecto</label>
                                          <div class="control">
                                              <input  v-model="name" class="input " type="text" placeholder="Text input">
                                          </div>
                                  </div>
                  
                                  <div class="field">
                                      <label class="label">Descripcion</label>
                                          <div class="control">
                                              <textarea class="textarea" placeholder="Descripcion" rows="10"></textarea>
                                              <!--<input v-model="desc" class="input " type="text" placeholder="Text input" rows="10">-->
                                          </div>
                                  </div>
                  
                                  <div class="field">
                                      <label class="label">Rama Cientifica</label>
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
                                  <button id="BTN_Guardar" class="button is-success">Save changes</button>
                                   <button id="BTN_Limpiar" class="button is-warning" type="reset">Limpiar</button> <!--No hace nada-->
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
      url: "http://localhost:8080/api/v1/module/academic/level", //*******Cambiarlo al correcto path de RAMA CIENTIFICA********
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