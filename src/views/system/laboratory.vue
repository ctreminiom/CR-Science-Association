<template>
    <div class="laboratoryRole">

        <breadcrumbs/>

        <information/>

    </div>

</template>


<script>

import breadcrumbs from "@/components/modules/security/laboratoryRole/breadcrumbs.vue"
import information from "@/components/modules/security/laboratoryRole/information.vue"


export default {
    name: 'laboratoryRole',
    components: {breadcrumbs, information}
    
}
</script>
