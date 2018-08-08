<template>
<form>
    <div>
        <div class="modal" :class="open">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Crear usuario</p>
                    <button @click="close()" class="delete" aria-label="close"></button>
                </header>
                <section class="modal-card-body">
    
                    <div class="field is-horizontal">

                        <div class="field-label is-normal">
                            <label class="label">Usuario</label>
                        </div>

                        <div class="field-body">
                            <div class="field">
                                <p class="control is-expanded has-icons-left">
                                    <input required class="input" type="text" placeholder="Nombre">
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-user"></i>
                                     </span>
                                </p>
                            </div>

                            <div class="field">
                                <p class="control is-expanded has-icons-left">
                                    <input required class="input" type="text" placeholder="Apellidos">
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-user"></i>
                                     </span>
                                </p>
                            </div>

                        </div>
                    </div>

                    <div class="field is-horizontal">

                        <div class="field-label is-normal">
                            <label class="label">Apodo</label>
                        </div>

                        <div class="field-body">
                            <div class="field">
                                <p class="control is-expanded has-icons-left">
                                    <input required class="input" type="text" placeholder="Apodo">
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-user"></i>
                                     </span>
                                </p>
                            </div>

                        </div>
                    </div>

                    <div class="field is-horizontal">

                        <div class="field-label is-normal">
                            <label class="label">Contrasena</label>
                        </div>

                        <div class="field-body">
                            <div class="field">
                                <p class="control is-expanded has-icons-left">
                                    <input required class="input" type="text" placeholder="Contrasena">
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-user"></i>
                                     </span>
                                </p>
                            </div>

                        </div>
                    </div>

                     <div class="field is-horizontal">

                        <div class="field-label is-normal">
                            <label class="label">Telefono</label>
                        </div>

                        <div class="field-body">
                            <div class="field">
                                <p class="control is-expanded has-icons-left">
                                    <input required class="input" type="text" placeholder="Telefono">
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-user"></i>
                                     </span>
                                </p>
                            </div>

                        </div>
                    </div>


                    <div class="field is-horizontal">

                        <div class="field-label is-normal">
                            <label class="label">Rol</label>
                        </div>

                        <div class="field-body">
                            <div class="control">
                                <div class="select is-rounded">
                                <select required>
                                    <option>Select dropdown</option>
                                    <option>With options</option>
                                </select>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="field is-horizontal">

                        <div class="field-label is-normal">
                            <label class="label">Nivel Academico</label>
                        </div>

                        <div class="field-body">
                            <div class="control">
                                <div class="select is-rounded">
                                <select>
                                    <option>Select dropdown</option>
                                    <option>With options</option>
                                </select>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div class="field is-horizontal">

                        <div class="field-label is-normal">
                            <label class="label">Puesto</label>
                        </div>

                        <div class="field-body">
                            <div class="control">
                                <div class="select is-rounded">
                                <select>
                                    <option>Select dropdown</option>
                                    <option>With options</option>
                                </select>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="field is-horizontal">

                        <div class="field-label is-normal">
                            <label class="label">Firma</label>
                        </div>

                        <div class="field-body">
                            <div class="control">
                                <label class="file-label">
                                    <input class="file-input" type="file" name="resume">
                                    <span class="file-cta">

                                        <span class="file-icon">
                                            <i class="fas fa-upload"></i>
                                        </span>
                                        
                                        <span class="file-label">
                                            Choose a file…
                                        </span>

                                        <span class="file-name">
                                        Screen Shot 2017-07-29 at 15.54.25.png
                                        </span>

                                    </span>
                                </label>
                            </div>
                        </div>

                    </div>
                    
                </section>
                <footer class="modal-card-foot">
                <button class="button is-success">Save changes</button>
                <input type="button" name="reset_form" class="button is-warning" value="Reset Form" onclick="this.form.reset();">
                <button @click="close()" class="button is-danger">Cancel</button>
                </footer>
            </div>
        </div>
    </div>
</form>
</template>



<script>
export default {
  props: ["open"],

  methods: {
    close() {
      this.$emit("close");
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
</style>
