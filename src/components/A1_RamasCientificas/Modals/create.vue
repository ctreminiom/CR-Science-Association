<template>
                     <div>
                        <div class="modal" :class="open">
                          <div class="modal-background"></div>
                          <div class="modal-card">
                              <header class="modal-card-head">
                                  <p class="modal-card-title">Rama Cientifica</p>
                                  <button @click="close()" class="delete" aria-label="close"></button>
                              </header>
                              <section class="modal-card-body">
                  
                  
                                  <div class="field">
                                      <label class="label">Nombre de Rama Cientifica</label>
                                          <div class="control">
                                              <input required v-model="name" class="input" id="myInput" type="text" placeholder="Text input">
                                          </div>
                                  </div>

                                  <div class="field">
                                      <label class="label">Prefijo</label>
                                          <div class="control">
                                              <input required v-model="name" class="input" id="myInput2" type="text" placeholder="Text input">
                                          </div>
                                  </div>
                  
                                  <div class="field">
                                      <label class="label">Notas</label>
                                          <div class="control">
                                              <textarea required v-model="name" class="textarea" id="myInput4" placeholder="Descripcion" rows="10"></textarea>
                                              <!--<input v-model="desc" class="input " type="text" placeholder="Text input" rows="10">-->
                                          </div>
                                  </div>                          
                  
                              </section>
                              <footer class="modal-card-foot">
                                  <button @click="save(name)" class="button is-success">Guardar Cambios</button>
                                  <input type="button" name="reset_form" class="button is-warning" value="Clear fields" onclick="this.form.reset();">
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
      this.$emit("close_create_modal");
    }
  },


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