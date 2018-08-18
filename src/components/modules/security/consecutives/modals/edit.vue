<template>
<div class="modal" :class="open">
    <a @click="close()" class="modal-overlay" aria-label="Close"></a>
        <div class="modal-container">
            <div class="modal-header">
                <a @click="close()" class="btn btn-clear float-right" aria-label="Close"></a>
                <div class="modal-title h5">Consecutivo - <strong>{{user.Username}}</strong></div>
            </div>
            <div class="modal-body">
                <div class="content">
                    <form class="form-horizontal">

                    <div class="form-group">
                        <div class="col-3 col-sm-12">
                        <label class="form-label">New Name</label>
                        </div>
                        <div class="col-9 col-sm-12">
                        <input class="form-input" type="text" v-model="name"> 
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-3 col-sm-12">
                        <label class="form-label">Descripcion</label>
                        </div>
                        <div class="col-9 col-sm-12">
                        <input class="form-input" type="text" v-model="desc"> 
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-3 col-sm-12">
                        <label class="form-label">Prefijo</label>
                        </div>
                        <div class="col-9 col-sm-12">
                        <input class="form-input" type="text" v-model="prefix"> 
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-3 col-sm-12">
                        <label class="form-label">Rango Incial</label>
                        </div>
                        <div class="col-9 col-sm-12">
                        <input class="form-input" type="number" v-model="rangoI" > 
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-3 col-sm-12">
                        <label class="form-label">Rango Final</label>
                        </div>
                        <div class="col-9 col-sm-12">
                        <input class="form-input" type="number" v-model="rangoF" > 
                        </div>
                    </div>


                </form>
                </div>
            </div>
            <div class="modal-footer">
                <button @click="update(user.ID)" class="btn btn-primary">Update</button>
                <button @click="close()" class="btn btn-error">Cancel</button>
            </div>
        </div>
</div>
</template>



<script>
export default {
  props: ["open", "user"],

  data() {
    return {
        name: "",
        desc: "",
        rangoI: "",
        rangoF:"",
        prefix: ""

    };
  },

  methods: {
    close() {
      this.$emit("close");
    },

    update(ID) {
        var data = {
            ID: ID,
            Nombre: this.name,
            Descripcion: this.desc,
            RangoIncial: this.rangoI,
            RangoFinal: this.rangoF,
            Prefijo: this.prefix

        }

      this.$store.dispatch("updateUser", data).then(
        response => {
          this.$notify({
            group: "foo",
            type: "success",
            text: "Detalles han cambiado changed!"
          });
        },
        error => {
          console.log(error);
          this.$notify({
            group: "foo",
            type: "error",
            text: "Error updating the details!"
          });
        }
      );
    }
  }
};
</script>