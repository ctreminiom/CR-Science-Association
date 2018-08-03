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
import breadcrumbs from "@/components/C1_Bitacora/breadcrumbs.vue";
import search from "@/components/C1_Bitacora/search.vue";
import users from "@/components/C1_Bitacora/table.vue";

export default {
  name: "Bitacora", //Revisar esta linea
  components: {
    breadcrumbs,
    search,
    users
  }
};
</script>



<style scoped>
</style>
