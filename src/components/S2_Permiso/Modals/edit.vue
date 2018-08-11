<!--Precio, codigo, nombre, rama-->

<template>
                     <div>
                        <div class="modal" :class="open">
                          <div class="modal-background"></div>
                          <div class="modal-card">
                              <header class="modal-card-head">
                                  <p class="modal-card-title">Detalles de {{user.ID}}</p>
                                  <button @click="close()" class="delete" aria-label="close"></button>
                              </header>
                              <section class="modal-card-body">
                  
                  
                                  <div class="field">
                                      <label class="label">Nombre</label>
                                        <p>{{user.User}}</p>
                                  </div>

                                  <div class="field">
                                      <label class="label">Nombre</label>
                                        <p>{{user.Role}}</p>
                                  </div>
                  
                              </section>
                              <footer class="modal-card-foot">
                                  <button @click="close()" class="button is-warning">Cerrar</button>
                              </footer>
                          </div>
                      </div>
                  </div>

</template>



<script>
export default {
  props: ["open", "user"],
  methods: {
    close() {
      this.$emit("close_delete_modal");
    }
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