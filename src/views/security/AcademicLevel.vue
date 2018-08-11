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
import breadcrumbs from "@/components/S6_NivelAcademico/breadcrumbs.vue";
import search from "@/components/S6_NivelAcademico/search.vue";
import users from "@/components/S6_NivelAcademico/table.vue";

export default {
  name: "AcademicLevel", //Revisar esta linea
  components: {
    breadcrumbs,
    search,
    users
  }
};
</script>



<style scoped>
</style>
