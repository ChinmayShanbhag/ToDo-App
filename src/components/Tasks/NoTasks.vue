<template>
<transition
appear
enter-active-class="animated zoomIn"
leave-active-class="animated zoomOut">
  <q-banner class="bg-grey-3">
      <template v-slot:avatar>
      <q-icon name="check" color="primary"/>
      </template>
          No Tasks to do!
        <template v-slot:action>
            <q-btn
            @click="$root.$emit('showAddTask')"
            color="primary"
            icon="add"
            label="Add Task" />          
        </template>
  </q-banner>
</transition>
</template>

<script>
export default {

}
</script>

<style>

</style>