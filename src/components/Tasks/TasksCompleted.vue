<template>
<transition
appear
enter-active-class="animated zoomIn"
leave-active-class="animated zoomOut">
    <div
    :class="{'q-mt-lg' : !settings.showTasksInOneList}">  <list-header
  v-if="!settings.showTasksInOneList"
   bgColor="bg-green-4">Completed</list-header>
  <q-list bordered separator >
      <task
      v-for="(task,key) in tasksCompleted"
      :key="key"
      :task="task"
      :id="key"></task>

    </q-list>
</div>
</transition>
</template>

<script>
import {mapGetters} from 'vuex'
import task from 'components/Tasks/Task.vue'
import ListHeader from '../Shared/ListHeader.vue'
export default {
props:['tasksCompleted'],
computed:{
  ...mapGetters('settings',['settings'])
},
components:{
    task,
ListHeader
}
}
</script>

<style>

</style>