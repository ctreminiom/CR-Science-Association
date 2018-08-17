<template>
    <div class="activities">

        <breadcrumbs/>

        <information/>

    </div>

</template>


<script>

import breadcrumbs from "@/components/modules/queries/activities/breadcrumbs.vue"
import information from "@/components/modules/queries/activities/information.vue"


export default {
    name: 'activities',
    components: {breadcrumbs, information}
    
}
</script>
