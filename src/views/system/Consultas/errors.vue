<template>
    <div class="errors">

        <breadcrumbs/>

        <information/>

    </div>

</template>


<script>

import breadcrumbs from "@/components/modules/consultas/errors/breadcrumbs.vue"
import information from "@/components/modules/consultas/errors/information.vue"


export default {
    name: 'errors',
    components: {breadcrumbs, information}
    
}
</script>
