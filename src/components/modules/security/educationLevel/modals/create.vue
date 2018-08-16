<template>
<form>
    <div class="modal" :class="open">
    <a href="#close" class="modal-overlay" aria-label="Close"></a>
        <div class="modal-container">
            <div class="modal-header">
                <a @click="close()" class="btn btn-clear float-right" aria-label="Close"></a>
                <div class="modal-title h5">New Level</div>
            </div>
            <div class="modal-body">
                <div class="content">
                <form class="form-horizontal">

                <div class="form-group">
                    <div class="col-3 col-sm-12">
                    <label class="form-label" for="input-example-1">Grado de escolaridad</label>
                    </div>

                    <div class="col-9 col-sm-12">
                        <select required class="form-select" v-model="selected.role">
                            <option v-for="item in json.role" :value="item.ID" :key="item.ID">
                                {{item.Grade}}
                            </option>
                        </select>
                    </div>

                </div>

                <div class="form-group">
                    <div class="col-3 col-sm-12">
                    <label class="form-label" for="Career">Nombre de carrera</label>
                    </div>
                    <div required class="col-9 col-sm-12">
                    <input required class="form-input" type="text" id="Career" placeholder="Name" v-model="user.description">
                    </div>
                </div>
                  

                </form>
                </div>
            </div>
            <div class="modal-footer">
                <button @click="save()" class="btn btn-primary">Create</button>
                <input type="button" name="reset_form" class="button is-warning" value="Clear fields" onclick="this.form.reset();">

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
      prefix: "",
      desc: "",

    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    save() {
//
    },
    
  created() {
//
  }
  
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

<!--Falta

Validaciones:
•	El campo de Prefijo debe de estar inhabilitado. Cuando se presione sobre la opción de Si, se habilita el campo y se puede ingresar el prefijo que el usuario desee. Limite dicho prefijo a 5 caracteres.
•	El campo rango final debe de estar inhabilitado y solamente se habilita cuando el usuario marque la opción Posee Rango.
•	Al crearse un consecutivo por primera vez se ingresa el valor del consecutivo. Cuando se modifique un consecutivo el campo valor consecutivo no debe de modificarse.
•	Si se está creando un nuevo consecutivo y posee rango, el primer rango (el inicial) no debe de ser mayor al rango final.
•	Cuando se tenga que modificar el rango final, se debe de validar que no se ingrese un rango menor al que ya se tenía anteriormente.
•	Aunque se utilice rangos en los consecutivos, se debe de usar siempre el campo valor consecutivo para llevar el control del siguiente código.

-->