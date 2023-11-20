<script>

import Header from './components/partials/Header.vue'
import Footer from './components/partials/Footer.vue'
import Sidebar from './components/partials/Sidebar.vue'

import { store } from './data/store/store'

export default {
  name: 'App',

  data(){
    return{
      store
    }
  },

  components:{
    Header,
    Footer,
    Sidebar
  },

}

</script>

<template>
  <div :class="store.showSidebar ? 'overflow-y-hidden' : ''">
    <transition name="sidebar-transition" mode="out-in">
      <Sidebar/>
    </transition>
    <Header/>
    <main style="min-height: calc(100vh - 60px - 90px - 150px); max-width: 90%;" class="p-md-5 py-5 mx-auto">
      <!-- //* router con le transizioni di quando si passa da una pagina all'altra -->
      <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
          <div :key="route.name"> 
            <component :is="Component"/>
          </div>
        </transition>
      </router-view>
    </main>
    <Footer/>
  </div>
</template>

<style lang='scss'>
@use './scss/main.scss' as *;
body{
  // todo da eliminare provvisorio
  // background-color: #4338CA;  
  // overflow-x: hidden;
}

.overflow-y-hidden{
  overflow-y: hidden;
  // height: 100vh;
  // oppure
  max-height: 100vh;
}

//* transizioni quando si passa da una pagina all'altra
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

//* transizioni quando si passa da una pagina all'altra
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

//* transition per la sidebar
.sidebar-transition-enter-active,
.sidebar-transition-leave-active {
  transition: transform 0.4s ease-in-out;
}

.sidebar-transition-enter-from,
.sidebar-transition-leave-to {
  transform: translateX(-100%);
}
</style>
