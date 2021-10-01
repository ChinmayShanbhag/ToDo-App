<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        

        <q-toolbar-title
        class="absolute-center">
          Awesome-Todo
        </q-toolbar-title>

        
      </q-toolbar>
    </q-header>
    <q-footer>
      <q-tabs>
        
        <q-route-tab 
        v-for="tab in essentialLinks"
        :key="tab.title"
        :to="tab.link"
        :label="tab.title"
        ></q-route-tab>
     
      </q-tabs> 
    </q-footer>
    <q-drawer
    :width="160"
      :breakpoint="1200"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-primary"
    >
      <q-list dark>
        <q-item-label
          header
           class="text-grey-3"
        >
          Navigation
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
          class="text-grey-6"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Todo',
    icon: 'list',
    link: '/'
  },
  {
    title: 'Settings',
    icon: 'settings',
    link: '/settings'
  },
  
];

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>
<style lang="scss">
@media screen and (min-width:1185px) {
  .q-footer{
    display: none;
  }
  .q-drawer{
  .q-router-link--exact-active{
    color:white !important
  }
  }
}
</style>
