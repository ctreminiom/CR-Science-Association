<template>
<div id="ver" class="modal">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Informacion de la bitacora</p>
                <button onclick="executeModalView()" class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body">

                <div class="field">
                    <label class="label">Experimento</label>
                    <label class="text">-R5</label>
                </div>

                <div class="field">
                    <label class="label">Usuario</label>
                    <label class="text">-svonschroter</label>
                </div>

                <div class="field">
                    <label class="label">Notas</label>
                    <div class="control">
                        <textarea class="textarea" placeholder="Texto"></textarea>
                    </div>
                </div>

                <div class="file has-name is-boxed">
                    <label class="file-label">
                        <input class="file-input" type="file" name="resume">
                        <span class="file-cta">
                            <span class="file-icon">
                                <i class="fas fa-upload"></i>
                            </span>
                            <span class="file-label">
                                Elejir un archivo
                            </span>
                        </span>
                        <span class="file-name">
                            Firma.png
                        </span>
                    </label>
                </div>

            </section>
            <footer class="modal-card-foot">
                <button class="button is-black">Save changes</button>
                <button onclick="executeModalView()" class="button">Cancel</button>
            </footer>
        </div>
    </div>
<template>


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