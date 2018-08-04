<template>
    <div class="columns">
        <div class="column is-3">
            
            <input id="datepicker1" class="input" type="date">
            
        </div>
    
        <div class="column is-3">
            
            <input id="datepicker2" class="input" type="date">
            
        </div>

        <Add :open="add_active" @close="close"/>

    </div>
</template>


<style scoped>
</style>
