<template>
<form>
    <div>
        <div class="modal" :class="open">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Eliminar el usuario -> {{user.User}}</p>
                    <button @click="close()" class="delete" aria-label="close"></button>
                </header>
                <section class="modal-card-body">

                    <p>
                        {{user}}
                    </p>
                    
                </section>
                <footer class="modal-card-foot">
                <a class="button is-success">Save changes</a>
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
                this.$emit("close_delete_modal")
            }
        }
    
    }
</script>


<style scoped>
    
</style>
