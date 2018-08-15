<template>
    <div class="jobs">

        <breadcrumbs/>

        <information/>

    </div>

</template>


<script>

import breadcrumbs from "@/components/modules/consultas/activities/breadcrumbs.vue"
import information from "@/components/modules/consultas/activities/information.vue"


export default {
    name: 'jobs',
    components: {breadcrumbs, information}
    
}
</script>
