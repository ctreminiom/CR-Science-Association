<template>
    

            <aside class="column is-2">
                <nav class="menu">
                    <p class="menu-label">
                        CR-Science-Association
                    </p>

                     <p class="menu-label">
                        ${username}
                    </p>
                    <ul class="menu-list">
                        <li>
                            <a class="is-active has-background-grey-dark">Seguridad</a>
                        </li>
                        <li>
                            <ul>
                                <li>
                                    <router-link to="/dashboard/users">Usuarios</router-link>
                                </li>
                                <li>
                                    <a>Consecutivos</a>
                                </li>
                                <li>
                                    <a>Grados</a>
                                </li>
                                <li>
                                    <a>Roles de Laboratorio</a>
                                </li>
                                <li>
                                    <a>Puestos</a>
                                </li>
                                <li>
                                    <a>Roles</a>
                                </li>
                                <li>
                                    <a>Permisos</a>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <ul class="menu-list">
                        <li>
                            <a class="is-active has-background-grey-dark">Administracion</a>
                        </li>
                        <li>
                            <ul>
                                <li>
                                    <a>Ramas Cientificas</a>
                                </li>
                                <li>
                                    <a>Proyectos</a>
                                </li>
                                <li>
                                    <a>Bitacoras Cientificas</a>
                                </li>
                            </ul>
                        </li>
                    </ul>


                    <ul class="menu-list">
                        <li>
                            <a class="is-active has-background-grey-dark">Consultas</a>
                        </li>
                        <li>
                            <ul>
                                <li>
                                    <a>Bitacoras</a>
                                </li>
                                <li>
                                    <a>Descargas</a>
                                </li>
                                <li>
                                    <a>Errores</a>
                                </li>
                            </ul>
                        </li>
                    </ul>


                    <p class="menu-label">
                        System
                    </p>
                       <a class="button is-danger is-outlined is-fullwidth">
                                <span class="icon">
                                    <i class="fas fa-sign-out-alt"></i>
                                </span>

                                <span>Sign out</span>
                        </a>


                </nav>
            </aside>

</template>



<script>
export default {};
</script>
