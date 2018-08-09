<template>

    <section background="Capture.PNG" class="hero white-ter">
    
        <div background="Capture.PNG" class="hero-body">
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
    
                var user = {
                    username: this.username,
                    password: this.password
                }

                this.$store.dispatch('login', user).then(response => {



                    //Get alls users
                    this.$store.dispatch('fetchUsers')

    
                    this.$router.push("/dashboard");
    
                }, error => {
                    alert("Usuario o contrasena incorrectos")
                })
    
    
            }
        }
    };
</script>



<style scoped>
    
</style>