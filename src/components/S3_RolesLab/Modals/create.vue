<template>

<form>

  <div>
      <div id="da" class="modal" :class="open">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Informacion de usuario</p>
                <button @click="close()"  class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body">

              <div class="field">
                    <label class="label">Nombre de rol</label>
                    <div class="control">
                    <input class="input " id="myInput" type="text" placeholder="Text input" v-model="name">
                    </div>
            </div>

            </section>
            <footer class="modal-card-foot">
                <a @click="save(name)" class="button is-success">Save changes</a>
                <input type="button" name="reset_form" class="button is-warning" value="Clear fields" onclick="this.form.reset();">
                <button @click="close()" class="button is-danger">Cancel</button>

            </footer>
        </div>
    </div>
</div>
</form>
</template>


<!--EL BOTON DE "SAVE CHANGES" no lo guarda en la DB-->


<script>

export default {
  props: ["open"],
  data() {
    return {
      academic: null,
      laboratory: null,
      roles: null,
      role_selected: '',
      name: "",
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    save() {

      var name = this.name
      this.$http.post('http://18.222.31.81:8080/api/v1.2/module/laboratory/roles', {"name": name}).then(response => {
        console.log("CREATE")
        this.close()
      }, error => {
        console.log("NO")
      });

    }

  },
  created() {
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