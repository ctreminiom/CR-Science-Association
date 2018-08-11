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
import breadcrumbs from "@/components/S4_Puesto/breadcrumbs.vue";
import search from "@/components/S4_Puesto/search.vue";
import users from "@/components/S4_Puesto/table.vue";

export default {
  name: "Jobs", //Revisar esta linea
  components: {
    breadcrumbs,
    search,
    users
  }
};
</script>



<style scoped>
</style>
