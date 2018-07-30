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
import breadcrumbs from "@/components/users/breadcrumbs.vue";
import search from "@/components/users/search.vue";
import users from "@/components/users/table.vue";

export default {
  name: "user",
  components: {
    breadcrumbs,
    search,
    users
  }
};
</script>



<style scoped>
</style>
