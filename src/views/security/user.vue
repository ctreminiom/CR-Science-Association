<template>

<div class="user">

    <main class="column">

        <breadcrumbs/>

        <users/>


        
    </main>


</div>

</template>


<script>
import breadcrumbs from "@/components/users/breadcrumbs.vue";
import users from "@/components/users/table.vue";

export default {
  name: "user",
  components: {
    breadcrumbs,
    users
  }
};
</script>



<style scoped>
</style>
