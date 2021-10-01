<template>
  <q-page >
    <div class="q-pa-md absolute full-width full-height column">
    
    <div class="row q-mb-lg">
    <search></search>
    <sort></sort>
    </div>

  <p v-if="search && !Object.keys(tasksTodo).length && !Object.keys(tasksCompleted).length">
      No Search Results!
    </p>

    <q-scroll-area 
    class="q-scroll-area-tasks">

    <no-tasks
    
    v-if="!settings.showTasksInOneList && !Object.keys(tasksTodo).length && !search"></no-tasks>

    <tasks-todo
    v-if="Object.keys(tasksTodo).length"
      :tasksTodo="tasksTodo"></tasks-todo>  

    <tasks-completed 
    class="q-mb-xl"
     v-if="Object.keys(tasksCompleted).length"
    :tasksCompleted="tasksCompleted"></tasks-completed>

    </q-scroll-area>

    <div
    class="q-mb-lg absolute-bottom text-center no-pointer-events">
    <q-btn
    round 
    @click="showAddTask=true"
    color="primary"
    size="24px"
    class="all-pointer-events"
    icon="add"></q-btn>
    </div>

</div>
    <q-dialog v-model="showAddTask">
      <add-task @close="showAddTask=false"></add-task>
    </q-dialog>
    
  </q-page>
</template>

<script>
import tasksTodo from 'components/Tasks/TasksTodo.vue'
import tasksCompleted from 'components/Tasks/TasksCompleted.vue'
import addTask from 'components/Tasks/Modals/AddTask.vue'
import {mapGetters,mapState} from 'vuex'
import NoTasks from 'src/components/Tasks/NoTasks.vue'
import Search from 'src/components/Tasks/Tools/Search.vue'
import Sort from 'src/components/Tasks/Tools/Sort.vue'
export default {
 data(){
     return{
       showAddTask : false
     }
   },
   computed:{
    
     ...mapGetters('tasks',['tasksTodo','tasksCompleted'])
      ,...mapGetters('settings',['settings']) 
      ,...mapState('tasks',['search'])
 },
 mounted(){
   this.$root.$on('showAddTask',()=>{
     this.showAddTask=true
   })
 },
 components:{
  
  addTask,
  tasksTodo,
  tasksCompleted,
  NoTasks,
  Search,
  Sort
 }
}
</script>

<style>
.q-scroll-area-tasks{
  display: flex;
  flex-grow: 1;
}
</style>