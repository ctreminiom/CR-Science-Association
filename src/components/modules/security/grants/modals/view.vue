<template>
<div class="modal modal-lg" :class="open">
    <a href="#close" class="modal-overlay" aria-label="Close"></a>
        <div class="modal-container">
            <div class="modal-header">
                <a @click="close()" class="btn btn-clear float-right" aria-label="Close"></a>
                <div class="modal-title h5">Puede ir vacio <strong>{{user.Username}}</strong></div>
            </div>
            <div class="modal-body">
                <div class="content">
                    <form class="form-horizontal">

                    <div class="form-group">
                        <div class="col-3 col-sm-12">
                        <label class="form-label">Consecutive</label>
                        </div>
                        <div class="col-9 col-sm-12">
                        <input class="form-input" type="text" v-bind:placeholder="user.Consecutive" readonly> 
                        </div>
                    </div>

                </form>
                </div>
            </div>
            <div class="modal-footer">
            </div>
        </div>
</div>

</template>




<script>
export default {
    props: ["open", "user"],


    methods: {
        close(){
            this.$emit("close")
        }
    },

    computed: {
        signs(sign){
            return "http://localhost:8080" + sign 
        }
    }
}
</script>
