<template>

<form>
    <div class="modal" :class="open">
    <a href="#close" class="modal-overlay" aria-label="Close"></a>
        <div class="modal-container">
            <div class="modal-header">
                <a @click="close()" class="btn btn-clear float-right" aria-label="Close"></a>
                <div class="modal-title h5">New User</div>
            </div>
            <div class="modal-body">
                <div class="content">
                <form class="form-horizontal">

                <div class="form-group">
                    <div class="col-3 col-sm-12">
                    <label class="form-label" for="input-example-1">Tipo De Consecutivo</label>
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
                    <label class="form-label" for="TipoDeConsecutivo">Prefijo</label>
                    </div>
                    <div required class="col-9 col-sm-12">
                    <input required class="form-input" type="text" id="Prefix" placeholder="Prefijo" v-model="user.prefix">
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-3 col-sm-12">
                    <label class="form-label" for="Descripcion">Prefijo</label>
                    </div>
                    <div required class="col-9 col-sm-12">
                    <input required class="form-input" type="text" id="Descripcion" placeholder="Descripcion" v-model="user.description">
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-3 col-sm-12">
                    <label class="form-label" for="Rango Incial">Rango Incial</label>
                    </div>
                    <div required class="col-9 col-sm-12">
                    <input required class="form-input" type="number" id="RangoIncial" placeholder="Rango Incial" v-model="user.Intial">
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-3 col-sm-12">
                    <label class="form-label" for="Rango Incial">Rango Final</label>
                    </div>
                    <div required class="col-9 col-sm-12">
                    <input required class="form-input" type="number" id="RangoFinal" placeholder="Rango Final" v-model="user.Final">
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
      this.$emit("close");
    },
    save() {
      //
    },
    created() {
      //
    }, 
  },

};

//Limipar inputos
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
