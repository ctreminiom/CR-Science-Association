<template>
    <div class="modal" :class="open">
        <div class="modal-background"></div>
        <div class="modal-content">
            <!-- Any other Bulma elements you want -->

            <article class="message is-dark">
                <div class="message-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                </div>
            </article>

        </div>
        <button @click="close()" class="modal-close is-large" aria-label="close"></button>
    </div>
</template>



<script>
    export default {
        props: ["open"],


        methods: {
            close() {
                this.$emit("close")
            }
        }
    
    }
</script>


<style scoped>
    
</style>
