<template>
    
        <aside class="column is-2 aside hero is-fullheight">
            <div>
                <div class="compose has-text-centered">
                    <a class="button is-danger is-block is-bold">
                        <span class="compose">Welcome ${USER}</span>
                    </a>
                </div>

                <div class="main">

                    <p class="menu-label">CR Science Association</p>

                    <ul class="menu-list">
                        <li>
                            <a class="is-active">Seguridad</a>
                        </li>

                        <li> 
                            <router-link to="users">
                                Usuarios
                            </router-link>
                        </li>


                        <li> 
                            <router-link to="permissions">
                                Permisos
                            </router-link>
                        </li>

                        <li> 
                            <router-link to="user">
                                Roles de laboratorio
                            </router-link>
                        </li>

                        <li> 
                            <router-link to="user">
                                Puestos
                            </router-link>
                        </li>


                        <li> 
                            <router-link to="user">
                                Consecutivos
                            </router-link>
                        </li>

                        <li> 
                            <router-link to="user">
                                Tipo de Consecutivos
                            </router-link>
                        </li>

                        <li> 
                            <router-link to="user">
                                Nivel Academico
                            </router-link>
                        </li>

                    </ul>

                    <br>

                    <ul class="menu-list">
                        <li>
                            <a class="is-active">Administracion</a>
                        </li>

                        <li>
                            <a class="">Ramas Cientificas</a>
                        </li>


                        <li>
                            <a class="">Projectos</a>
                        </li>


                        <li>
                            <a class="">Bitacoras Cientificas</a>
                        </li>

                    </ul>


                    <ul class="menu-list">
                        <li>
                            <a class="is-active">Consultas</a>
                        </li>

                        <li>
                            <a class="">Bitacora</a>
                        </li>


                        <li>
                            <a class="">Errores</a>
                        </li>


                        <li>
                            <a class="">Descargas</a>
                        </li>

                    </ul>

                </div>
            </div>
        </aside>

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
}

ul,
li {
  margin-top: 1px;
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
</style>