<template>
            <div class="column col-2">

                <ul class="menu">

                    <div class="security" v-if="rendering.modules.security">

                    <li class="divider" data-content="SECURITY">
                    </li>
                    <!-- menu item standard -->
                    <li class="menu-item" v-if="rendering.user">
                        <router-link to="/dashboard/module/security/users">
                            <i class="far fa-user"></i>
                            Users
                        </router-link>
                    </li>

                    <li class="menu-item" v-if="rendering.consecutive">
                        <router-link to="/dashboard/module/security/consecutives">
                             <i class="fas fa-brain"></i>
                            Consecutives
                        </router-link>
                    </li>

                    <li class="menu-item" v-if="rendering.grants">
                        <router-link to="/dashboard/module/security/grants">
                            <i class="fas fa-braille"></i>
                            Grants
                        </router-link>
                    </li>

                    <li class="menu-item" v-if="rendering.grades">
                         <router-link to="/dashboard/module/security/grades">
                            <i class="fas fa-graduation-cap"></i>
                            Grades
                        </router-link>
                    </li>


                    <li class="menu-item" v-if="rendering.education">
                        <router-link to="/dashboard/module/security/education/level">
                            <i class="fas fa-award"></i>
                            Education Level
                        </router-link>
                    </li>

                    <li class="menu-item" v-if="rendering.lab">
                        <router-link to="/dashboard/module/security/laboratory/role">
                             <i class="fas fa-microscope"></i>
                            Laboratory Role
                        </router-link>
                    </li>

                    <li class="menu-item" v-if="rendering.role">
                        <router-link to="/dashboard/module/security/jobs">
                            <i class="fas fa-briefcase"></i>
                            Jobs
                        </router-link>
                    </li>

                    </div>



                    <div class="administration" v-if="rendering.modules.administration">
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

                    <div class="queries" v-if="rendering.modules.query">
                        <li class="divider" data-content="QUERIES">
                            <li class="menu-item">
                                <router-link to="/dashboard/module/queries/activities">
                                    <i class="fas fa-exclamation-triangle"></i>
                                    Activities
                                </router-link>
                            </li>

                            <li class="menu-item">
                                <router-link to="/dashboard/module/queries/errors">
                                    <i class="fas fa-bug"></i>
                                    Errors
                                </router-link>
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



<script>
export default {
  data() {
    return {
      permissions: null,

      rendering: {
        user: null,
        consecutive: null,
        grants: null,
        grades: null,
        education: null,
        lab: null,
        role: null,

        modules: {
          administration: null,
          query: null,
          security: null
        }
      }
    };
  },
  created() {
    this.$store.dispatch("permissions").then(
      response => {
        this.$notify({
          group: "foo",
          type: "success",
          text: "Permissions loaded!"
        });
        this.permissions = this.$store.getters.permissions;
        this.render(this.$store.getters.permissions)
      },
      error => {
        console.log(error);
        this.$notify({
          group: "foo",
          type: "error",
          text: "Error feching de users!"
        });
      }
    );
  },
  methods: {
    render(data) {
      if (data.Admin) {
        this.rendering.user = true;
        this.rendering.consecutive = true;
        this.rendering.grants = true;
        this.rendering.grades = true;
        this.rendering.education = true;
        this.rendering.lab = true;
        this.rendering.role = true;

        this.rendering.modules.administration = true;
        this.rendering.modules.query = true;
        this.rendering.modules.security = true;
      } else if (data.Security) {
        this.rendering.user = true;
        this.rendering.consecutive = false;
        this.rendering.grants = false;
        this.rendering.grades = false;
        this.rendering.education = false;
        this.rendering.lab = false;
        this.rendering.role = false;

        this.rendering.modules.administration = false;
        this.rendering.modules.query = false;
        this.rendering.modules.security = true;
      } else if (data.Consecutive) {
        this.rendering.user = false;
        this.rendering.consecutive = true;
        this.rendering.grants = false;
        this.rendering.grades = false;
        this.rendering.education = false;
        this.rendering.lab = false;
        this.rendering.role = false;

        this.rendering.modules.administration = false;
        this.rendering.modules.query = false;
        this.rendering.modules.security = true;
      } else if (data.Maintenance) {
        this.rendering.modules.administration = true;
        this.rendering.modules.query = false;
        this.rendering.modules.security = false;
      } else if (data.Query) {
        this.rendering.modules.administration = false;
        this.rendering.modules.query = true;
        this.rendering.modules.security = false;
      }
    }
  }
};
</script>

