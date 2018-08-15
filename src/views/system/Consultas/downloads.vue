<template>
    <div class="jobs">

        <breadcrumbs/>

        <information/>

    </div>

</template>


<script>

import breadcrumbs from "@/components/modules/consultas/downloads/breadcrumbs.vue"
import information from "@/components/modules/consultas/downloads/information.vue"


export default {
    name: 'jobs',
    components: {breadcrumbs, information}
    
}
</script>
