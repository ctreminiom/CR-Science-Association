<template>
                     <div>
        <div class="modal" :class="open">
                          <div class="modal-background"></div>
                          <div class="modal-card">
                              <header class="modal-card-head">
                                  <p class="modal-card-title">Crear Bitacora</p>
                                  <button @click="close()"  class="delete" aria-label="close"></button>
                              </header>
                              <section class="modal-card-body">
                  
                                  <div class="field is-horizontal">

                        <div class="field-label is-normal">
                            <label class="label">Experimento</label>
                        </div>

                        <div class="field-body">
                            <div class="field">
                                <p class="control is-expanded has-icons-left">
                                    <input class="input" type="text" placeholder="Nombre del Experimento">
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-user"></i>
                                     </span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="field is-horizontal">

                        <div class="field-label is-normal">
                            <label class="label">Usuario</label>
                        </div>

                        <div class="field-body">
                            <div class="field">
                                <p class="control is-expanded has-icons-left">
                                    <input class="input" type="text" placeholder="Nombre de Usuario">
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-user"></i>
                                     </span>
                                </p>
                            </div>

                        </div>
                    </div>

                    <div class="field is-horizontal">

                        <div class="text">
                            <label class="label">Notas</label>
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
                    <button @click="close()" class="button">Cancel</button>
                </footer>
            </div>
        </div>
    </div>
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
</script>



<style scoped>
</style>