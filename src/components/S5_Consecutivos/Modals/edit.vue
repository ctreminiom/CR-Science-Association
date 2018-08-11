<template>
                     <div>
                        <div class="modal" :class="open">
                          <div class="modal-background"></div>
                          <div class="modal-card">
                              <header class="modal-card-head">
                                  <p class="modal-card-title">Detalles del consecutivo {{user.ID}}</p>
                                  <button @click="close()" class="delete" aria-label="close"></button>
                              </header>
                              <section class="modal-card-body">
                  
                  
                                  <div class="field">
                                      <label class="label">Prefijo</label>
                                        <p>{{user.Prefix}}</p>
                                  </div>

                                  <div class="field">
                                      <label class="label">Rango Incial y Final</label>
                                        <p>{{user.Initial}} </p>
                                        <p>{{user.Final}} </p>
                                  </div>

                                <div class="field">
                                      <label class="label">Desc.</label>
                                        <p>{{user.Description}}</p>
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