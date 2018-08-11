<template>
<form>
                     <div>
                        <div id="NewProject" class="modal" :class="open">
                          <div class="modal-background"></div>
                          <div class="modal-card">
                              <header class="modal-card-head">
                                  <p class="modal-card-title">Nuevo Consecutivo</p>
                                  <button @click="close()"  class="delete" aria-label="close"></button>
                              </header>
                              <section class="modal-card-body">
                  
                             <div required  class="field">
                                      <label required  class="label">Tipo de Consecutivo</label>
                                          <div required class="control">
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
                                      <label class="label">Prefijo</label>
                                          <div required  class="control">
                                              <input  v-model="prefix" class="input " id="myInput" type="text" placeholder="Text input">
                                          </div>
                                  </div>
                  
                                  <div class="field">
                                      <label class="label">Descripcion</label>
                                          <div class="control">
                                              <textarea class="textarea" id="myInput2" placeholder="Descripcion" rows="10"></textarea>
                                          </div>
                                  </div>
                  
                                  <div required class="field">
                                      <label class="label">Rango Incial</label>
                                          <div required  class="control">
                                              <input  v-model="prefix" class="input " id="myInput2" type="number" placeholder="Number">
                                          </div>
                                  </div>

                                    <div required class="field">
                                      <label class="label">Rango Final</label>
                                          <div required  class="control">
                                              <input  v-model="prefix" class="input " id="myInput6" type="number" placeholder="Number">
                                          </div>
                                  </div>

                  
                              </section>
                              <footer class="modal-card-foot">
                                  <button @click="save()" class="button is-success">Save changes</button>
                                  <input type="button" name="reset_form" class="button is-warning" value="Clear fields" onclick="this.form.reset();">
                                  <button @click="close()" id="BTN_Cerrar" class="button is-danger">Cancel</button>
                              </footer>
                          </div>
                      </div>
                  </div>
</form>
</template>



<script>
export default {
  props: ["open", "user"],
  data() {
    return {
      data00: null,
      prefix: "",
      desc: "",

    };
  },
  methods: {
    close() {
      this.$emit("close_create_modal_CONSECUTIVO");
    },
    save() {
    
      var name = this.name
      this.$http.post('http://18.222.31.81:8080/api/v1.2/module/consecutives', {"name": name}).then(response => {
        console.log("CONSECUTIVO CREADO")
        this.close()
      }, error => {
        console.log("ERROR NO SE CREO")
      });

    }
  },

};


function clearForm(oForm) {
    
  var elements = oForm.elements; 
    
  oForm.reset();

  for(i=0; i<elements.length; i++) {
      
  field_type = elements[i].type.toLowerCase();
  
  switch(field_type) {
  
    case "text": 
    case "password": 
    case "textarea":
          case "hidden":   
      
      elements[i].value = ""; 
      break;
        
    case "radio":
    case "checkbox":
        if (elements[i].checked) {
          elements[i].checked = false; 
      }
      break;

    case "select-one":
    case "select-multi":
                elements[i].selectedIndex = -1;
      break;

    default: 
      break;
  }
    }
}
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