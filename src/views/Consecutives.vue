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
import breadcrumbs from "@/components/S5_Consecutivos/breadcrumbs.vue";
import search from "@/components/S5_Consecutivos/search.vue";
import users from "@/components/S5_Consecutivos/table.vue";

export default {
  name: "Consecutives", //Revisar esta linea
  components: {
    breadcrumbs,
    search,
    users
  }
};
</script>



<style scoped>
</style>
