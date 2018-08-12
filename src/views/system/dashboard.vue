<template>
    <div class="dashboard">

        <navigation/>

        <div class="container">
            <div class="columns">
                <app-menu/>
                <app-content/>
            </div>
        </div>

    </div>
</template>


<script>

import navigation from "@/components/dashboard/nav.vue"
import appMenu from "@/components/dashboard/menu.vue"
import appContent from "@/components/dashboard/content.vue"


export default {

    name: "dashboard",
    components: {navigation, appContent, appMenu}
}
</script>

