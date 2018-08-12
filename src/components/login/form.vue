<template>
    <div class="container">
        <div class="columns">

             <div class="column col-4 col-mx-auto">

                <div class="card">
                    <div class="card-body">

                        <div class="form-group">
                            <label class="form-label">Username</label>
                            <input class="form-input" type="text" v-model="user.username">
                        </div>

                        <div class="form-group">
                            <label class="form-label">Password</label>
                            <input class="form-input" type="password" v-model="user.password">
                        </div>
                        
                    </div>
                    <div class="card-footer">
                        <a @click="login()" class="btn btn-success">Login</a>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>


<script>
export default {
  data() {
    return {
      user: {
        username: "",
        passoword: ""
      }
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", this.user).then(
        response => {
          console.log(response);

          this.$notify({
            group: "foo",
            type: "success",
            text: "Login successuffly!"
          });

          this.$router.push("/dashboard");
        },
        error => {
          this.$notify({
            group: "foo",
            type: "error",
            text: "Invalid username or passoword!"
          });
        }
      );
    }
  }
};
</script>
