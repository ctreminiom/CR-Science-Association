<template>
    <div class="grades">

        <breadcrumbs/>

        <information/>

    </div>

</template>


<script>

import breadcrumbs from "@/components/modules/security/grades/breadcrumbs.vue"
import information from "@/components/modules/security/grades/information.vue"


export default {
    name: 'grades',
    components: {breadcrumbs, information}
    
}
</script>
