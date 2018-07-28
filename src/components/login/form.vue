<template>
    
<section class="hero white-ter">

<div class="hero-body">
    <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">

            <h3 class="title has-text-grey">{{ title }}</h3>

            <div class="box">

                <form>

                    <div class="field">
                        <div class="control">
                            <p class="control has-icons-left has-icons-right">
                                <input class="input" type="text" placeholder="Username" v-model="username">
                                <span class="icon is-small is-left">
                                    <i class="fas fa-user"></i>
                                </span>
                            </p>
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <p class="control has-icons-left has-icons-right">
                                <input class="input" type="password" placeholder="Username" v-model="password">
                                <span class="icon is-small is-left">
                                    <i class="fas fa-unlock-alt"></i>
                                </span>
                            </p>
                        </div>
                    </div>

                    <div class="control">
                        <a @click="login" class="button is-dark">Outlined</a>
                    </div>
                </form>
            </div>

        </div>
    </div>
</div>
</section>

</template>



<script>
export default {
  data() {
    return {
      title: "Welcome to the system",
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      var options = {
        url: "http://ec2-18-217-36-47.us-east-2.compute.amazonaws.com/api/v1/module/login",
        method: "GET",
        headers: {
          Authorization:
            "Basic " +
            new Buffer(this.username + ":" + this.password).toString("base64")
        }
      };

      this.$http(options).then(
        response => {
          this.$auth.setToken(response.body);
          this.$router.push("/dashboard");
        },
        response => {
          alert(this.$auth.isAuthenticated());
        }
      );
    }
  }
};
</script>



<style scoped>
</style>