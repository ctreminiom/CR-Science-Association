<template>
<form>
    <div>
        <div class="modal" :class="open">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Eliminar el usuario -></p>
                    <button @click="close()" class="delete" aria-label="close"></button>
                </header>
                <section class="modal-card-body">

                    <p>
                    </p>

                    <div class="field is-horizontal">

                        <div class="field-label is-normal">
                            <label class="label">Usuario</label>
                        </div>

                        <div class="field-body">
                            <div class="field">
                                <p class="control is-expanded has-icons-left">
                                    <input class="input" type="text"  readonly>
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-user"></i>
                                     </span>
                                </p>
                            </div>

                            <div class="field">
                                <p class="control is-expanded has-icons-left">
                                   <input class="input" type="text"  readonly>
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-user"></i>
                                     </span>
                                </p>
                            </div>

                        </div>
                    </div>




                    
                </section>
                <footer class="modal-card-foot">
                <button class="button is-success">Save changes</button>
                <button @click="close()" class="button is-danger">Cancel</button>
                </footer>
            </div>
        </div>
    </div>
</form>
</template>



<script>
    export default {
        props: ["open", "user"],


        methods: {
            close() {
                this.$emit("close")
            }
        }
    
    }
</script>


<style scoped>
    
</style>
