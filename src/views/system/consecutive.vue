<template>
    <div class="consecutive">

        <breadcrumbs/>

        <information/>

    </div>

</template>


<script>

import breadcrumbs from "@/components/modules/security/consecutives/breadcrumbs.vue"
import information from "@/components/modules/security/consecutives/information.vue"


export default {
    name: 'consecutive',
    components: {breadcrumbs, information}
    
}
</script>
