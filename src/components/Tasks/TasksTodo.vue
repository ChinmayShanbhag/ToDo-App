<template>
<transition
appear
enter-active-class="animated zoomIn"
leave-active-class="animated zoomOut absolute top">
  <div>
  <list-header
  v-if="!settings.showTasksInOneList"
  bgColor="bg-orange-4">Todo</list-header>
  <q-list bordered separator>
     
      <task 
      v-for="(task,key) in tasksTodo"
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
props:['tasksTodo'],
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