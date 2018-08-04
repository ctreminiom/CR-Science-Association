<template>
    <div class="columns">
        <div class="column is-3">
                        <div class="field">
                                <div class="control">
                                    <label>Fecha Inicial</label>
                                        <input id="datepicker1" class="input" type="date">
                                </div>
                        </div>
                </div>
    
        <div class="column is-3">
                        <div class="field">
                                <div class="control">
                                        <label>Fecha Final</label>
                                        <input id="datepicker2" class="input" type="date">
                                </div>
                        </div>   
                </div>  

        <Add :open="add_active" @close="close"/>

    </div>
</template>


<style scoped>
</style>
