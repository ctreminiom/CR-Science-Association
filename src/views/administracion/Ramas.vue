<template>

<div class="user">

    <div class="row">
        <breadcrumbs></breadcrumbs>
        <br>
    </div>

    <div class="row">
        <search></search>
    </div>

    <div class="columns">
        <users></users>
    </div>


</div>

</template>


<script>
import breadcrumbs from "@/components/A1_RamasCientificas/breadcrumbs.vue";
import search from "@/components/A1_RamasCientificas/search.vue";
import users from "@/components/A1_RamasCientificas/table.vue";

export default {
  name: "Ramas", //Revisar esta linea
  components: {
    breadcrumbs,
    search,
    users
  }
};
</script>



<style scoped>
</style>
