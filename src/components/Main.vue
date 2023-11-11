<script>
import axios from "axios"
import { store } from "../data/store/store"

export default {
  name: 'Main',
  data(){
    return{
      projects:[],
      links:[],
      first_page_url: null,
      last_page_url: null,
      current_page:null,
      last_page:null,
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
          
          // i dati ottenuti(results.data) vengono pushati nell'array projects //! SENZA la paginazione
          // this.projects = results.data;
          //! con la paginazione
          this.projects = results.data.data;
          // console.log(this.projects);

          // utilizzati per creare i pulsanti per la navigazione
          this.links = results.data.links;
          // console.log(this.links);
          this.first_page_url = results.data.first_page_url;
          this.last_page_url = results.data.last_page_url;
          this.current_page = results.data.current_page;
          this.last_page = results.data.last_page;

      });
      
    },

    // funzione per cambiare la formattazione dell'orario in base alla posizione
    formatData(dateString){
      const d = new Date(dateString);
      // console.log(d);
      return d.toLocaleDateString();
    }
  },

  mounted(){
    // richiamo getApi() quando viene costruita/montata la pagina
    this.getApi(store.apiUrl + 'projects');

  }
}
</script>

<template>

  <main style="min-height: calc(100vh - 90px - 150px);" class="p-5">

    <h2 class="mb-4">Project list</h2>

    <ul>
      <li class="mb-3" v-for="project in projects" :key="project.id"><strong>Name:</strong> {{ project.name }} 
      <!-- //* one to many -->
      - <strong>Type: </strong>{{ project.type?.name ?? 'No type' }}  
      <!-- //* many to many -->
      - <strong>Technologies: </strong> 
      <!-- //* lunga ma + semplice - soluzione 1 - stampare le tecnologie suddivise da uno spazio vuoto  -->
      <span v-if="project.technologies && project.technologies.length > 0">
        <span v-for="technology in project.technologies" :key="technology.id">&nbsp;{{ technology.name }}</span>
      </span>
      <span v-else>No technology</span>
      <!-- //* breve ma più difficile - soluzione 2 - con MAP stampare le tecnologie suddivise da uno spazio vuoto  -->
      <!-- <span> -->
        <!-- {{ project.technologies.length > 0 ? project.technologies.map(technology => technology.name).join(' ') : 'No technology' }} -->
      <!-- </span> -->
      <!-- //* stampare le tecnologie con la virgola  -->
      <!-- <span>
        {{ project.technologies.length > 0 ? project.technologies.map(tech => tech.name).join(', ') : 'No technology' }}
      </span> -->
      - <strong>Start date:</strong> {{ formatData(project.start_date) }} 
      - <strong>End date:</strong> {{ formatData(project.end_date) }}</li>
    </ul>

    <div>
      <button @click="getApi(first_page_url)" :disabled="current_page == 1" class="btn btn-dark me-2 mt-4 pb-2">|&lt;</button>
      <button v-for="(link, index) in links" :key="index" v-html="link.label" @click="getApi(link.url)" :disabled="link.active || !link.url" class="btn btn-dark me-2 mt-4 pb-2" ></button>
      <button @click="getApi(last_page_url)" :disabled="current_page == last_page" class="btn btn-dark me-2 mt-4 pb-2">&gt;|</button>
    </div>

  
  </main>
</template>

<style lang="scss" scoped>
@use '../scss/main.scss' as *;

</style>