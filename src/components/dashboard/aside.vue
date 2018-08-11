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
                            <a class="is-active has-background-grey-dark">
                                <p v-text="$ml.with('VueJS').get('aside.module.security')"></p>
                            </a>
                        </li>
                        <li>
                            <ul>

                                <li>
                                    <router-link to="/dashboard/users">
                                    <p v-text="$ml.with('VueJS').get('aside.security.users')"></p>
                                    </router-link>
                                </li>

                                <li> 
                                    <router-link to="/dashboard/Permiso">
                                    <p v-text="$ml.with('VueJS').get('aside.security.grants')"></p>
                                    </router-link>
                                </li>

                                <li> 
                                    <router-link to="/dashboard/LabRoles">
                                    <p v-text="$ml.with('VueJS').get('aside.security.laboratory')"></p>
                                    </router-link>
                                </li>

                                <li> 
                                    <router-link to="/dashboard/Jobs">
                                    <p v-text="$ml.with('VueJS').get('aside.security.job')"></p>
                                    </router-link>
                                </li>

                                <li> 
                                    <router-link to="/dashboard/consecutives">
                                    <p v-text="$ml.with('VueJS').get('aside.security.consecutives')"></p>
                                    </router-link>
                                </li>

                                <li> 
                                    <router-link to="/dashboard/AcademicLevel">
                                    <p v-text="$ml.with('VueJS').get('aside.security.education')"></p>
                                    </router-link>
                                </li>

                            </ul>
                        </li>
                    </ul>

                    <ul class="menu-list">
                        <li>
                            <a class="is-active has-background-grey-dark">
                                <p v-text="$ml.with('VueJS').get('aside.module.administrator')"></p>
                            </a>
                        </li>
                        <li>
                            <ul>
                                <li>
                                    <router-link to="/dashboard/Ramas">
                                     <p v-text="$ml.with('VueJS').get('aside.administration.scientific')"></p>
                                    </router-link>
                                  </li>

                                <li>
                                    <router-link to="/dashboard/Projects">
                                     <p v-text="$ml.with('VueJS').get('aside.administration.project')"></p>
                                    
                                    </router-link>
                                </li>

                                <li>
                                    <router-link to="/dashboard/BitacoraCi">
                                     <p v-text="$ml.with('VueJS').get('aside.administration.experimental')"></p>
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                    </ul>


                    <ul class="menu-list">
                        <li>
                            <a class="is-active has-background-grey-dark">
                                 <p v-text="$ml.with('VueJS').get('aside.module.queries')"></p>
                            </a>
                        </li>
                        <li>
                            <ul>
                                <li>
                                    <router-link to="/dashboard/Bitacora">
                                     <p v-text="$ml.with('VueJS').get('aside.queries.activity')"></p>
                                    </router-link>
                                </li>

                                <li>
                                    <router-link to="/dashboard/Errores">
                                     <p v-text="$ml.with('VueJS').get('aside.queries.error')"></p>
                                    </router-link>
                                </li>

                                <li>
                                    <router-link to="/dashboard/Descargas">
                                     <p v-text="$ml.with('VueJS').get('aside.queries.download')"></p>
                                    </router-link>
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

                                <span>
                                    <p v-text="$ml.with('VueJS').get('buttons.logout')"></p>
                                </span>
                        </a>


                </nav>
            </aside>

</template>



<script>
import { MLBuilder } from 'vue-multilanguage'


export default {

computed: {

    security() {
        return new MLBuilder("aside.module.security")
    }
}



};
</script>
