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
                                    <router-link to="/dashboard/Permiso"> Permisos</router-link>
                                </li>

                                <li> 
                                    <router-link to="/dashboard/LabRoles">Roles de Laboratorio</router-link>
                                </li>

                                <li> 
                                    <router-link to="/dashboard/Jobs">Puestos </router-link>
                                </li>

                                <li> 
                                    <router-link to="/dashboard/consecutives">Consecutivos</router-link>
                                </li>

                                <li> 
                                    <router-link to="/dashboard/AcademicLevel">Niveles Academicos</router-link>
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
                                    <router-link to="/dashboard/Ramas">Ramas Cientificas</router-link>
                                  </li>

                                <li>
                                    <router-link to="/dashboard/Projects"> Proyectos</router-link>
                                </li>

                                <li>
                                    <router-link to="/dashboard/BitacoraCi"> Biacora Cientifica</router-link>
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
                                    <router-link to="/dashboard/Bitacora">Bitacorasu</router-link>
                                </li>

                                <li>
                                    <router-link to="/dashboard/Errores">Errores</router-link>
                                </li>

                                <li>
                                    <router-link to="/dashboard/Descargas">Descargas</router-link>
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
