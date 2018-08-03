<template>
    <div class="columns">
    <div class="column is-4">
            <div class="field">
                <div class="field">
                    <p class="control">
                        <input id="test" class="input" placeholder="Fecha" type="date">
                    </p>
                </div>
            </div>
        </div>
    
        <div class="column is-12">
            <div class="field">
                <div class="field">
                    <p class="control">
                        <input id="test" class="input" placeholder="Find a repository" type="text">
                    </p>
                </div>
            </div>
        </div>

        <Add :open="add_active" @close="close"/>

    </div>
</template>


<style scoped>
</style>
