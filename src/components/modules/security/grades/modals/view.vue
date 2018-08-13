<template>
<div class="modal modal-lg" :class="open">
    <a href="#close" class="modal-overlay" aria-label="Close"></a>
        <div class="modal-container">
            <div class="modal-header">
                <a @click="close()" class="btn btn-clear float-right" aria-label="Close"></a>
                <div class="modal-title h5">User information - <strong>{{user.Username}}</strong></div>
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

                    <div class="form-group">
                        <div class="col-3 col-sm-12">
                        <label class="form-label">Name</label>
                        </div>
                        <div class="col-9 col-sm-12">
                        <input class="form-input" type="text" v-bind:placeholder="user.Name" readonly> 
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-3 col-sm-12">
                        <label class="form-label">Surname</label>
                        </div>
                        <div class="col-9 col-sm-12">
                        <input class="form-input" type="text" v-bind:placeholder="user.Surname" readonly> 
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-3 col-sm-12">
                        <label class="form-label">SecondSurname</label>
                        </div>
                        <div class="col-9 col-sm-12">
                        <input class="form-input" type="text" v-bind:placeholder="user.SecondSurname" readonly> 
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-3 col-sm-12">
                        <label class="form-label">Phone</label>
                        </div>
                        <div class="col-9 col-sm-12">
                        <input class="form-input" type="text" v-bind:placeholder="user.Phone" readonly> 
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-3 col-sm-12">
                        <label class="form-label">Username</label>
                        </div>
                        <div class="col-9 col-sm-12">
                        <input class="form-input" type="text" v-bind:placeholder="user.Username" readonly> 
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-3 col-sm-12">
                        <label class="form-label">EducationLevel</label>
                        </div>
                        <div class="col-9 col-sm-12">
                        <input class="form-input" type="text" v-bind:placeholder="user.EducationalLevel" readonly> 
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-3 col-sm-12">
                        <label class="form-label">Job</label>
                        </div>
                        <div class="col-9 col-sm-12">
                        <input class="form-input" type="text" v-bind:placeholder="user.Job" readonly> 
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-3 col-sm-12">
                        <label class="form-label">Sign</label>
                        </div>
                        <div class="col-9 col-sm-12">
                            <img v-bind:src="'http://localhost:8080' + user.Sign" width="120px" height="120px">
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
