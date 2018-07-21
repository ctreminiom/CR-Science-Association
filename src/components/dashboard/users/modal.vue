<template>

            <div id="da" class="modal">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Modal title</p>
                <button onclick="executeModal()" class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
                <!-- Content ... -->
            </section>
            <footer class="modal-card-foot">
                <button class="button is-success">Save changes</button>
                <button onclick="executeModal()" class="button">Cancel</button>
            </footer>
        </div>
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