<template>
    <div class="login">

        <navigation/>

        <formulary/>

    </div>
</template>


<script>

import navigation from "@/components/login/nav.vue"
import formulary from "@/components/login/form.vue"

export default {

    name: 'login',
    components: {navigation, formulary}
    
};
</script>;