<template>
                     <div>
                        <div class="modal" :class="open">
                          <div class="modal-background"></div>
                          <div class="modal-card">
                              <header class="modal-card-head">
                                  <p class="modal-card-title">Nueva Rama</p>
                                  <button @click="close()" class="delete" aria-label="close"></button>
                              </header>
                              <section class="modal-card-body">
                  
                  
                                  <div class="field">
                                      <label class="label">Rama Cientifica</label>
                                          <div class="control">
                                              <input  v-model="name" class="input" id="myInput" type="text" placeholder="Text input">
                                          </div>
                                  </div>

                                  <div class="field">
                                      <label class="label">Prefijo</label>
                                          <div class="control">
                                              <input  v-model="name" class="input" id="myInput" type="text" placeholder="Text input">
                                          </div>
                                  </div>
                  
                                  <div class="field">
                                      <label class="label">Notas</label>
                                          <div class="control">
                                              <textarea class="textarea" id="myInput" placeholder="Descripcion" rows="10"></textarea>
                                              <!--<input v-model="desc" class="input " type="text" placeholder="Text input" rows="10">-->
                                          </div>
                                  </div>                          
                  
                              </section>
                              <footer class="modal-card-foot">
                                  <button class="button is-success">Guardar Cambios</button>
                                   <button onclick="document.getElementById('myInput').value = ''" id="BTN_Limpiar" class="button is-warning"> Limpiar</button> <!--Validar todos los fields-->
                                  <button @click="close()" class="button is-danger">Cancelar</button>
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
      url: "http://localhost:8080/dashboard/Ramas", //*******Cambiarlo al correcto path de RAMA CIENTIFICA********
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