<template>
    <div class="user">

        <breadcrumbs/>

        <information/>

    </div>

</template>


<script>

import breadcrumbs from "@/components/modules/security/users/breadcrumbs.vue"
import information from "@/components/modules/security/users/information.vue"


export default {
    name: 'user',
    components: {breadcrumbs, information}
    
}
</script>
