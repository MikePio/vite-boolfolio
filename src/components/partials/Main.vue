<script>

export default {
  name: 'Main',

  // data(){

  // },

  methods:{
    
  },

  mounted(){

  }
}
</script>

<template>

  <!-- <main style="min-height: calc(100vh - 60px - 90px - 150px);" class="p-5 mx-auto"> -->
  <!-- oppure con mx-auto (e max-width:90%) -->
  <main style="min-height: calc(100vh - 60px - 90px - 150px); max-width: 90%;" class="p-5 mx-auto" >

  <router-view></router-view> 
  
  </main>

</template>

<style lang="scss" scoped>
@use '../../scss/main.scss' as *;
main{
  // todo da eliminare provvisorio
  // background-color: #4338CA;
}

</style>