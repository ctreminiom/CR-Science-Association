<template>
<div class="modal" :class="open">
    <a href="#close" class="modal-overlay" aria-label="Close"></a>
        <div class="modal-container">
            <div class="modal-header">
                <a @click="close()" class="btn btn-clear float-right" aria-label="Close"></a>
                <div class="modal-title h5"><strong>Create new grade</strong></div>
            </div>
            <div class="modal-body">

                <div class="content">
                    <form class="form-horizontal">
                        <div class="form-group">
                            <div class="col-3 col-sm-12">
                                <label class="form-label" for="input-example-1">Name</label>
                            </div>
                            <div class="col-9 col-sm-12">
                                <input class="form-input" type="text" id="input-example-1" placeholder="Name" v-model="name">
                            </div>
                        </div>
                    </form>
                </div>

            </div>
            <div class="modal-footer">
                <button @click="save()" class="btn btn-primary">Create</button>
            </div>
        </div>
</div>

</template>




<script>
export default {
  props: ["open"],

  data() {
    return {
      name: ""
    };
  },
  methods: {
    save() {
      this.$store.dispatch("createGrade", this.name).then(
        response => {
          this.$notify({
            group: "foo",
            type: "success",
            text: "grade created!"
          });
        },
        error => {
          console.log(error);
          this.$notify({
            group: "foo",
            type: "error",
            text: "Error creating de graes!"
          });
        }
      );
    },

    close() {
      this.$emit("close");
    }
  }
};
</script>
