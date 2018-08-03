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
import breadcrumbs from "@/components/S3_RolesLab/breadcrumbs.vue";
import search from "@/components/S3_RolesLab/search.vue";
import users from "@/components/S3_RolesLab/table.vue";

export default {
  name: "LabRoles", //Revisar esta linea
  components: {
    breadcrumbs,
    search,
    users
  }
};
</script>



<style scoped>
</style>
