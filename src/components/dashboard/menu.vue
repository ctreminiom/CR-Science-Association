<template>
            <div class="column col-2">

                <ul class="menu">
                    <!-- menu header text -->
                    <li class="divider" data-content="SECURITY">
                    </li>
                    <!-- menu item standard -->
                    <li class="menu-item">
                        <router-link to="/dashboard/module/security/users">
                            <i class="far fa-user"></i>
                            Users
                        </router-link>
                    </li>

                    <li class="menu-item">
                        <router-link to="/dashboard/module/security/consecutives">
                             <i class="fas fa-brain"></i>
                            Consecutives
                        </router-link>
                    </li>

                    <li class="menu-item">
                        <router-link to="/dashboard/module/security/grants">
                            <i class="fas fa-braille"></i>
                            Grants
                        </router-link>
                    </li>

                    <li class="menu-item">
                         <router-link to="/dashboard/module/security/grades">
                            <i class="fas fa-graduation-cap"></i>
                            Grades
                        </router-link>
                    </li>


                    <li class="menu-item">
                        <router-link to="/dashboard/module/security/education/level">
                            <i class="fas fa-award"></i>
                            Education Level
                        </router-link>
                    </li>

                    <li class="menu-item">
                        <router-link to="/dashboard/module/security/laboratory/role">
                             <i class="fas fa-microscope"></i>
                            Laboratory Role
                        </router-link>
                    </li>

                    <li class="menu-item">
                        <router-link to="/dashboard/module/security/jobs">
                            <i class="fas fa-briefcase"></i>
                            Jobs
                        </router-link>
                    </li>


                    <div class="administration">
                        <li class="divider" data-content="ADMINISTRATION">
                            <li class="menu-item">
                                <a href="#">
                                    <i class="fas fa-code-branch"></i>
                                    Scientific Branches
                                </a>
                            </li>

                            <li class="menu-item">
                                <a href="#">
                                    <i class="fas fa-project-diagram"></i>
                                    Projects
                                </a>
                            </li>

                            <li class="menu-item">
                                <a href="#">
                                    <i class="fas fa-boxes"></i>
                                    Equiments
                                </a>
                            </li>


                            <li class="menu-item">
                                <a href="#">
                                    <i class="fas fa-bong"></i>
                                    Experiments
                                </a>
                            </li>


                            <li class="menu-item">
                                <a href="#">
                                    <i class="fas fa-diagnoses"></i>
                                    Scientific Logs
                                </a>
                            </li>
                    </div>

                    <div class="queries">
                        <li class="divider" data-content="QUERIES">
                            <li class="menu-item">
                                <a href="#">
                                    <i class="fas fa-exclamation-triangle"></i>
                                    Activities
                                </a>
                            </li>

                            <li class="menu-item">
                                <a href="#">
                                    <i class="fas fa-bug"></i>
                                    Errors
                                </a>
                            </li>

                            <li class="menu-item">
                                <a href="#">
                                    <i class="fas fa-cloud-download-alt"></i>
                                    Downloads
                                </a>
                            </li>
                    </div>



                </ul>



            </div>
</template>
