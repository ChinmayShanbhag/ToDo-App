<template>
        <div class="row q-mb-sm">
<q-input
        v-select-all
        outlined
        autofocus
        clearable
        @input="$emit('update:name',$event)"
        ref="name"
        class="col"
        :rules="[val => !!val || 'Field is Required']"
        :value="name"
        label="Task Name"></q-input>  
        </div>
</template>

<script>
import {selectAll} from 'src/Directives/directive-select-all'
export default {
props:['name'],
directives:{
        selectAll
}
}
</script>

<style>

</style>