<template>
    <div class="columns">
        <div class="column is-2">
            <a @click="open()" class="button is-dark is-fullwidth">Agregar</a>
        </div>
    
        <div class="column is-9">
            <div class="field">
                <div class="field">
                    <p class="control">
                        <input id="test" class="input" placeholder="Find a repository" type="text">
                    </p>
                </div>
            </div>
        </div>

        <Add :open="add_active" @close="close"/>

    </div>
</template>


<script>
import Add from "@/components/S4_Puesto/modals/create.vue";

export default {
  data() {
    return {
      add_active: ""
    };
  },

  components: {
    Add
  },

  methods: {
    open() {
      this.add_active = "is-active";
    },
    close() {
      this.add_active = "";
    }
  }
};
</script>

<style scoped>
</style>
