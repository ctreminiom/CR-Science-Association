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

                    <div class="field">
                    <label class="label">PASS</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Text input">
                    </div>
                    </div>

                    <div class="field">
                    <label class="label">REPA PASS</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Text input">
                    </div>
                    </div>
                    
                </section>
                <footer class="modal-card-foot">
                <button class="button is-success">Update</button>
                <a @click="close()" class="button is-danger">Cancel</a>
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
                this.$emit("close_password_modal")
            }
        }
    
    }
</script>


<style scoped>
    
</style>
