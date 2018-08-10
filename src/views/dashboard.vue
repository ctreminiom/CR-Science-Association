<template>
  <div class="dashboard">

    <div class="columns">

        <Aside/>

        <Content/>
    </div>  

    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Aside from "@/components/dashboard/aside.vue";
import Content from "@/components/dashboard/content.vue";


export default {
  name: "dashboard",
  components: {
      Aside,
      Content
  }
};
</script>


<style>

</style>

