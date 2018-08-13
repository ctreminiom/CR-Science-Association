<template>
    <div class="grant">

        <breadcrumbs/>

        <information/>

    </div>

</template>


<script>

import breadcrumbs from "@/components/modules/security/grants/breadcrumbs.vue"
import information from "@/components/modules/security/grants/information.vue"


export default {
    name: 'grant',
    components: {breadcrumbs, information}
    
}
</script>
