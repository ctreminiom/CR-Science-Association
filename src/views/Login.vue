<template>
  <div class="login">

    <Nav/>

    <Login/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/login/form.vue";
import Nav from "@/components/login/nav.vue";

export default {
  name: "login",
  components: { Login,Nav }
};
</script>
