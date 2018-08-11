<template>

<div class="errors">

    <div class="row">
        <breadcrumbs></breadcrumbs>
        <br>
    </div>

    <div class="row">
        <search></search>
    </div>

    <div class="columns">
        <errors></errors>
    </div>


</div>

</template>


<script>
import breadcrumbs from "@/components/C3_Descargas/breadcrumbs.vue";
import search from "@/components/C3_Descargas/search.vue";
import users from "@/components/C3_Descargas/table.vue";

export default {
  name: "errors",
  components: {
    breadcrumbs,
    search,
    users
  }
};
</script>



<style scoped>
</style>
s