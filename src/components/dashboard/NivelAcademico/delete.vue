<template>

<div>

<div id="Modal_Delete" class="modal" :class="open">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Confirmacion eliminar registro</p>
      <button @click="close()" class="delete" aria-label="close"></button>
    </header>
    <section class="modal-card-body">
      <h1>Confirme si desea eliminar el registro?</h1>

    </section>
    <footer class="modal-card-foot">
      <button @click="close()" id="BTN_Guardar" class="button is-success">Guardar</button>
      <button id="BTN_delete" class="button is-danger">Eliminar</button>
   

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
      closae: ""
    };
  },
  methods: {
    close() {
      this.$emit("closeModalView");
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