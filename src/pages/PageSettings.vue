<template>
  <q-page padding>
    <q-list bordered padding class="q-mb-md">
      
      <q-item-label header>
        Settings
      </q-item-label>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>
            Show 12-hour Time format
          </q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-toggle v-model="show12HourTimeFormat" color="blue" >
          </q-toggle>
        </q-item-section>

      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>
            Show Tasks in One list
          </q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-toggle v-model="showTasksInOneList" color="blue" >
          </q-toggle>
        </q-item-section>

      </q-item>
    
    </q-list>

<q-list bordered padding>
      
      <q-item-label header>
        More
      </q-item-label>

      <q-item tag="label" v-ripple to="/settings/help">
        <q-item-section>
          <q-item-label>
           Help
          </q-item-label>
        </q-item-section>

        <q-item-section side>
         <q-icon name="chevron_right"></q-icon>
        </q-item-section>

      </q-item>

      <q-item tag="label" v-ripple @click="visitOurWebsite">
        <q-item-section>
          <q-item-label>
           Visit Our Website
          </q-item-label>
        </q-item-section>

        <q-item-section side>
         <q-icon name="chevron_right"></q-icon>
        </q-item-section>

      </q-item>

      <q-item tag="label" v-ripple @click="emailUs">
        <q-item-section>
          <q-item-label>
           Email Us
          </q-item-label>
        </q-item-section>

        <q-item-section side>
         <q-icon name="chevron_right"></q-icon>
        </q-item-section>

      </q-item>
    
    </q-list>

  </q-page>
</template>

<script>
import {openURL} from 'quasar'
import {mapGetters,mapActions} from 'vuex'
export default {
  
  computed:{
    ...mapGetters('settings',['settings']),
      show12HourTimeFormat:{
       get(){
          return this.settings.show12HourTimeFormat
       },
       set(value){
         this.setShow12HourTimeFormat(value)
       }
      },
      showTasksInOneList:{
       get(){
          return this.settings.showTasksInOneList
       },
       set(value){
         this.setShowTasksInOneList(value)
       }
      }
  },
  methods:{
    ...mapActions('settings',['setShow12HourTimeFormat','setShowTasksInOneList']),
        visitOurWebsite(){
          openURL('https://theradius.in/')
      },
      emailUs(){
         window.location.href='mailto:chinmay.shanbhag@gmail.com?subject=AwesomeTodo Feedback'
      }
  }
}
</script>

<style>

</style>