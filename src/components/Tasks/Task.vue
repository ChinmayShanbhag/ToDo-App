<template>
  <q-item
     v-touch-hold:1000.mouse="showEditTaskModal"
     :class="!task.completed ? 'bg-orange-1' : 'bg-cyan-1'"
     clickable
     @click="updateTask({id:id,updates:{completed:!task.completed} })">
      <q-item-section side top>
        <q-checkbox :value="task.completed" class="no-pointer-events"></q-checkbox>
      </q-item-section>
     
      <q-item-section>
      <q-item-label
        v-html="$options.filters.searchHighlight(task.name,search)"
        :class="{'text-strikethrough':task.completed}">
        
        </q-item-label>      
        </q-item-section>

      <q-item-section v-if="task.DueDate" side >
       <div class="row">
         <div class="column justify-center">
          <q-icon
            name="event"
            color="blue"
            size="24px"
            class="q-mr-xs" />
          </div>
        <div class="column">
        <q-item-label
        class="row justify-end" >
          {{task.DueDate | niceDate}}
        </q-item-label>

        <q-item-label
         class="row justify-end">
          {{taskDueTime}}
        </q-item-label>
        </div>
       </div>
      </q-item-section>
    <q-item-section side>
        <div class="row">
        <q-btn
         @click.stop="showEditTaskModal"
          flat
          dense
          color="primary"
          icon="edit"/>
          <q-btn
         @click.stop="promptToDelete(id)"
          flat
          dense
          color="red"
          icon="delete"/>
          </div>
          </q-item-section>
         
          <q-dialog v-model="showEditTask">
             <edit-task 
             :task="task"
             :id="id"
              @close="showEditTask=false"></edit-task>
          </q-dialog>

  </q-item>
</template>

<script>
import {date} from 'quasar'
import editTask from 'components/Tasks/Modals/EditTask.vue'
import{mapActions,mapState,mapGetters} from 'vuex'
export default {
    props:['task','id'],
    data(){
        return{
            showEditTask: false
        }
    },
    computed:{
      ...mapState('tasks',['search']),
      ...mapGetters('settings',['settings']),
       taskDueTime(){
         if(this.settings.show12HourTimeFormat){
           return date.formatDate(this.task.DueDate+ ' '+this.task.DueTime,'h:mmA')
         }
         return this.task.DueTime
       }
    },
    methods:{
        ...mapActions('tasks',['updateTask','deleteTask']),
        showEditTaskModal(){
        this.showEditTask=true
      },
      promptToDelete(id){
            this.$q.dialog({
                title:'Confirm',
                message: 'Really Delete?',
                ok:{
                    push:true
                },
                cancel:{
                    color:'negative'
                },
                persistent:true
            }).onOk(()=>{
                this.deleteTask(id)
            })
        }
    },
    filters:{
      niceDate(value){
        return date.formatDate(value,'MMM D')
      },
      searchHighlight(value,search){
        if(search){
          let searchRegExp=new RegExp(search,'ig')
          return value.replace(searchRegExp,(match)=>{
            return '<span class="bg-yellow-6">'+match+'</span>'
          })
        }
        return value
      }
    },
    components:{
        editTask
    },
}
</script>

<style>

</style>