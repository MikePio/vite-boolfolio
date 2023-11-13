<script>
export default {
  name: 'Header',
  data(){
    return{

    }
  }

}
</script>

<template>
<header class="bg-dark" style="max-height: 165px;">

  <nav class="px-5" style="background-color: rgba(0, 0, 0, 0.2); height: 60px; max-height: 60px;">
    <ul>
      <li>
        <router-link :to="{name: 'home'}">Home</router-link>
      </li>
      <li>
        <router-link :to="{name: 'projects'}">Progetti</router-link>
      </li>
      <!-- 
      <li>
        <router-link :to="{name: 'types'}">Tipi</router-link>
      </li>
      <li>
        <router-link :to="{name: 'technologies'}">Tecnologie</router-link>
      </li>
      -->
      <li>
        <router-link :to="{name: 'contacts'}">Contatti</router-link>
      </li>
    </ul>
  </nav>

  <div class="d-flex align-items-center justify-content-center text-white" style="height: 90px; max-height: 90px;">
    <div class="text-center p-4">
      <h1>Boolfolio</h1>
    </div>
  </div>

</header>
</template>

<style lang="scss" scoped>
@use '../../scss/main.scss' as *;
  header{
    nav{
      ul{
        list-style: none;
        height: 100%;
        padding: 0;
        display: flex;
        align-items: center;
        li{
          margin: 0 15px 0 0;
          a{
            text-decoration: none;
            color: white;
            transition: all .3s;
            &:hover{
              color: white;
              text-shadow: 0 0 10px white;
            }
            &.active{
              text-shadow: 0 0 10px white;
              // color: darken($color: white, $amount: 30%);
            }
          }
        }
      }
    }
  }

</style>