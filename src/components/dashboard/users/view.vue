<template>

<div>

<div class="modal" :class="open">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Modal title</p>
      <button @click="close()" class="delete" aria-label="close"></button>
    </header>
    <section class="modal-card-body">
      <!-- Content ... -->
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
  data() {
    return {
      closae: ""
    };
  },
  methods: {
    close() {
      this.$emit("closeModalView");
    }
  }
};
</script>



<style scoped>
html,
body {
  font-family: "Open Sans", serif;
  font-size: 14px;
  line-height: 1.5;
  height: 100%;
  background-color: #fff;
}
</style>