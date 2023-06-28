<script>
import axios from "axios"
import { store } from "../data/store/store"

export default {
  name: 'Main',
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
      
    },

    // funzione per cambiare la formattazione dell'orario in base alla posizione
    formatData(dateString){
      const d = new Date(dateString);
      console.log(d);
      return d.toLocaleDateString();
    }
  },

  mounted(){
    // richiamo getApi() quando viene costruita/montata la pagina
    this.getApi();

  }
}
</script>

<template>

  <main style="min-height: calc(100vh - 90px - 150px);" class="p-5">

    <h2 class="mb-4">Project list</h2>

    <ul>
      <li class="mb-3" v-for="project in projects" :key="project.id"><strong>Name:</strong> {{ project.name }} - <strong>Start date:</strong> {{ formatData(project.start_date) }} - <strong>End date:</strong> {{ formatData(project.end_date) }}</li>
    </ul>

  
  </main>
</template>

<style lang="scss" scoped>
@use '../scss/main.scss' as *;

</style>