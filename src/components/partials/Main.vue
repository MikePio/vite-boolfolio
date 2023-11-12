<script>

export default {
  name: 'Main',

  data(){

  },

  methods:{
    
  },

  mounted(){

  }
}
</script>

<template>

  <main style="min-height: calc(100vh - 70px - 90px - 150px);" class="p-5">

  <router-view></router-view> 
  
  </main>

</template>

<style lang="scss" scoped>
@use '../../scss/main.scss' as *;

</style>