<template>
<div class="container">
    <header class=" navbar">
        <section class="navbar-section">
            <a href="..." class="text-dark navbar-brand mr-2">
            <figure class="avatar avatar-sm" data-initial="CT" style="background-color: #5755d9;"></figure>
            ctreminio</a>
        </section>

        <section class="navbar-section">
            <button @click="logout()" class="btn btn-error" style="margin: 5px;">Sign Out</button>
        </section>
    </header>
</div>
</template>


<script>
export default {
    
    methods: {

        logout() {
            localStorage.removeItem("token")
            this.$router.push("/");
        }
    }
}
</script>

