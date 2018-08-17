<template>
    <div class="error">

        <breadcrumbs/>

        <information/>

    </div>

</template>


<script>

import breadcrumbs from "@/components/modules/queries/errors/breadcrumbs.vue"
import information from "@/components/modules/queries/errors/information.vue"


export default {
    name: 'error',
    components: {breadcrumbs, information}
    
}
</script>
