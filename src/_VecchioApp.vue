<script>
import axios from "axios"
import { store } from "./data/store/store"
import Header from './components/_primaProvaApi/Header.vue'
import Main from './components/_primaProvaApi/Main.vue'
import Footer from './components/_primaProvaApi/Footer.vue'

export default {
  name: 'App',

  components:{
    Header,
    Main,
    Footer
  },

  data(){
    return{
      projects:[],
      links:[]

    }
  },

  methods:{
    getApi(endpoint){
      //* collegamento all'url dell'api salvata nello store
      // console.log(store.apiUrl); // restituisce l'url salvato nello store nella console
      
      //* chiamata Api per restituire tutti i progetti salvati nel db della repo laravel-api
      axios.get(endpoint)
        .then(results => {
          // console.log(results.data); // restituisce i dati dell'api in console
          
          // i dati ottenuti(results.data) vengono pushati nell'array projects
          this.projects = results.data;
          // console.log(this.projects);

          // utilizzati per creare i pulsanti per la navigazione
          this.links = results.data.links;
          console.log(this.links);
          
      });
      
    }
  },

  mounted(){
    // richiamo getApi() quando viene costruita/montata la pagina
    this.getApi(store.apiUrl + 'projects');
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
