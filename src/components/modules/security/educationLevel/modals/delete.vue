<template>
<div class="modal" :class="open">
    <a href="#close" class="modal-overlay" aria-label="Close"></a>
        <div class="modal-container">
            <div class="modal-header">
                <a @click="close()" class="btn btn-clear float-right" aria-label="Close"></a>
                <div class="modal-title h5"><strong>Delete education {{education}}</strong></div>
            </div>
            <div class="modal-body">
                  <button @click="erase(education.id)" class="btn btn-lg">Delete</button>
            </div>
        </div>
</div>

</template>




<script>
export default {
  props: ["open", "education"],



  methods: {
    erase(id) {

      console.log(id)
      this.$store.dispatch("deleteGrade", id).then(
        response => {
          this.$notify({
            group: "foo",
            type: "success",
            text: "grade deleted!"
          });
        },
        error => {
          console.log(error);
          this.$notify({
            group: "foo",
            type: "error",
            text: "Error deleteting de graes!"
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
