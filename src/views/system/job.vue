<template>
    <div class="jobs">

        <breadcrumbs/>

        <information/>

    </div>

</template>


<script>

import breadcrumbs from "@/components/modules/security/jobs/breadcrumbs.vue"
import information from "@/components/modules/security/jobs/information.vue"


export default {
    name: 'jobs',
    components: {breadcrumbs, information}
    
}
</script>
