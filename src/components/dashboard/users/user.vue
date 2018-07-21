<template>

<div>
                <div class="columns">

                <div class="column is-2">
                    <a class="button is-dark is-fullwidth">Agregar</a>
                </div>
                <div class="column is-9">
                    <div class="field">
                        <div class="field">
                            <p class="control">
                                <input id="test" class="input" placeholder="Find a repository" type="text">
                            </p>
                        </div>
                    </div>
                </div>


            </div>

            <div class="columns">
                <div class="column is-12">
                    <table class="table is-hoverable is-fullwidth">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Consecutivo</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Usuario</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>10000</td>
                                <td>Usuario</td>
                                <td>Carlos</td>
                                <td>Treminio</td>
                                <td>ctreminio</td>
                                <td>
                                    <a onclick="executeModal()" class="button is-link">Ver</a>
                                    <a class="button is-dark">Contrasena</a>
                                    <a class="button is-danger">Eliminar</a>
                                </td>

                            </tr>
                            <tr>
                                <td>10000</td>
                                <td>Usuario</td>
                                <td>Carlos</td>
                                <td>Treminio</td>
                                <td>ctreminio</td>
                                <td>
                                    <a class="button is-link">Ver</a>
                                    <a class="button is-dark">Contrasena</a>
                                    <a class="button is-danger">Eliminar</a>
                                </td>

                            </tr>
                            <tr>
                                <td>10000</td>
                                <td>Usuario</td>
                                <td>Carlos</td>
                                <td>Treminio</td>
                                <td>ctreminio</td>
                                <td>
                                    <a class="button is-link">Ver</a>
                                    <a class="button is-dark">Contrasena</a>
                                    <a class="button is-danger">Eliminar</a>
                                </td>

                            </tr>

                        </tbody>
                    </table>
                </div>


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