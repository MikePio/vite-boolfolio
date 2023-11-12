<script>

import Header from './components/partials/Header.vue'
import Main from './components/partials/Main.vue'
import Footer from './components/partials/Footer.vue'

export default {
  name: 'App',

  components:{
    Header,
    Main,
    Footer
  },

}
</script>

<template>
  <div>
    <Header/>
    <Main/>
    <Footer/>
  </div>
</template>

<style lang='scss'>
@use './scss/main.scss' as *;

</style>
