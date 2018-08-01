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
import breadcrumbs from "@/components/S2_Permiso/breadcrumbs.vue";
import search from "@/components/S2_Permiso/search.vue";
import users from "@/components/S2_Permiso/table.vue";

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
