<template>
    
        <div class="column is-10">

            <div class="row">
                <div class="card">
                    <div>
                        <nav class="breadcrumb" aria-label="breadcrumbs">
                            <ul>
                                <li>
                                    <a href="#">Bulma</a>
                                </li>
                                <li>
                                    <a href="#">Documentation</a>
                                </li>
                                <li>
                                    <a href="#">Components</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            <br>


            <router-view></router-view>


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

ul,
li {
  margin-top: 8px;
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