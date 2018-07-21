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
import Footer from "@/components/dashboard/footer.vue";


export default {
  name: "dashboard",
  components: {
      Aside,
      Content,
      Footer
  }
};
</script>


<style>

</style>

