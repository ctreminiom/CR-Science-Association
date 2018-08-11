<template>

<div class="Proyecto">

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
import breadcrumbs from "@/components/A2_Proyectos/breadcrumbs.vue";
import search from "@/components/A2_Proyectos/search.vue";
import users from "@/components//A2_Proyectos/table.vue";

export default {
  name: "Proyecto",
  components: {
    breadcrumbs,
    search,
    users
  }
};
</script>



<style scoped>
</style>
