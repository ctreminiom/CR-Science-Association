<template>
    <div class="educationLevel">

        <breadcrumbs/>

        <information/>

    </div>

</template>


<script>

import breadcrumbs from "@/components/modules/security/educationLevel/breadcrumbs.vue"
import information from "@/components/modules/security/educationLevel/information.vue"


export default {
    name: 'educationLevel',
    components: {breadcrumbs, information}
    
}
</script>
