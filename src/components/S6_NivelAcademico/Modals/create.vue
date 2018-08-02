<template>

            <div>
                <div id="NewAcademico" class="modal" :class="open">
                          <div class="modal-background"></div>
                          <div class="modal-card">
                              <header class="modal-card-head">
                                  <p class="modal-card-title">Nuevo Nivel Academico</p>
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
                                              <input v-model="career" id="myInput" class="input " type="text" placeholder="Text input">
                                          </div>
                                  </div>

                              </section>
                              <footer class="modal-card-foot">
                                  <button id="BTN_Guardar" class="button is-success">Save changes</button>
                                    <button onclick="document.getElementById('myInput').value = ''" id="BTN_Limpiar" class="button is-warning"> Limpiar</button>
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
      prefix: "",
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

<!--Falta

Validaciones:
•	El campo de Prefijo debe de estar inhabilitado. Cuando se presione sobre la opción de Si, se habilita el campo y se puede ingresar el prefijo que el usuario desee. Limite dicho prefijo a 5 caracteres.
•	El campo rango final debe de estar inhabilitado y solamente se habilita cuando el usuario marque la opción Posee Rango.
•	Al crearse un consecutivo por primera vez se ingresa el valor del consecutivo. Cuando se modifique un consecutivo el campo valor consecutivo no debe de modificarse.
•	Si se está creando un nuevo consecutivo y posee rango, el primer rango (el inicial) no debe de ser mayor al rango final.
•	Cuando se tenga que modificar el rango final, se debe de validar que no se ingrese un rango menor al que ya se tenía anteriormente.
•	Aunque se utilice rangos en los consecutivos, se debe de usar siempre el campo valor consecutivo para llevar el control del siguiente código.

-->