<template>
<form>
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
                                              <input  v-model="name" class="input" id="myInput2" type="text" placeholder="Text input">
                                          </div>
                                  </div>
                  
                                  <div class="field">
                                      <label class="label">Notas</label>
                                          <div class="control">
                                              <textarea class="textarea" id="myInput" placeholder="Descripcion" rows="10"></textarea>

                                          </div>
                                  </div>                          
                  
                              </section>
                              <footer class="modal-card-foot">
                                  <button class="button is-success">Guardar Cambios</button>
                                   <input type="button" name="reset_form" class="button is-warning" value="Clear fields" onclick="this.form.reset();">
                                  <button @click="close()" class="button is-danger">Cancelar</button>
                              </footer>
                          </div>
                      </div>
                  </div>
</form>
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


//Clear input
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