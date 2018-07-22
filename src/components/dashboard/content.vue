<template>
  <div class="column is-10">
    <router-view/>
  <router-view name="helper"/>
  </div>

</template>



<script>
export default {};
</script>



<style scoped>
html,
body {
  font-family: "Open Sans", serif;
  font-size: 14px;
  line-height: 1.5;
  height: 100%;
  background-color: #fff;
}


.is-active {
  background-color: rebeccapurple;
}

.aside {
  display: block;
  background-color: #f9f9f9;
  border-right: 1px solid #dedede;
}

.aside .compose {
  height: 40px;
  margin: 0 -10px;
  padding: 10px 30px;
}
.aside .compose .button {
  color: #f6f7f7;
}
.aside .compose .button .compose {
  font-size: 14px;
  font-weight: 700;
}
.aside .main {
  padding: 20px;
  color: #6f7b7e;
}

.module {
  margin-left: 2px;
}

div[class="card"] {
  margin-top: 20px;
  margin-right: 10px;
  padding-left: 20px;
  padding-bottom: 15px;
}

#test {
  margin-left: 10px;
}
</style>