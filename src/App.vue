<script>
import axios from "axios"
import { store } from "./data/store/store"
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',

  components:{
    Header,
    Main,
    Footer
  },

  data(){
    return{
      projects:[]
    }
  },

  methods:{
    getApi(){
      //* collegamento all'url dell'api salvata nello store
      // console.log(store.apiUrl); // restituisce l'url salvato nello store nella console
      
      //* chiamata Api per restituire tutti i progetti salvati nel db della repo laravel-api
      axios.get(store.apiUrl + 'projects')
        .then(results => {
          // console.log(results.data); // restituisce i dati dell'api in console
          
          // i dati ottenuti(results.data) vengono pushati nell'array projects
          this.projects = results.data;
          console.log(this.projects);
      });
      
    }
  },

  mounted(){
    // richiamo getApi() quando viene costruita/montata la pagina
    this.getApi();
  }

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
