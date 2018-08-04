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
import breadcrumbs from "@/components/A3_BitacoraCientificas/breadcrumbs.vue";
import search from "@/components/A3_BitacoraCientificas/search.vue";
import users from "@/components/A3_BitacoraCientificas/table.vue";

export default {
  name: "BitacoraCi", //Revisar esta linea
  components: {
    breadcrumbs,
    search,
    users
  }
};
</script>



<style scoped>
</style>
