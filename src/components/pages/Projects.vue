<script>
import axios from "axios"
import { store } from "../../data/store/store"
import ProjectCard from "../partials/ProjectCard.vue"

export default {
  name: 'Projects',
  components:{
    ProjectCard,
  },
  data(){
    return{
      store
      // per centralizzare i dati, nello store sono contenuti: 
      // projects:[],
      // links:[],
      // first_page_url: null,
      // last_page_url: null,
      // current_page:null,
      // last_page:null,
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
          // store.projects = results.data;
          //! con la paginazione
          store.projects = results.data.data;
          // console.log(store.projects);

          // utilizzati per creare i pulsanti per la navigazione
          store.links = results.data.links;
          // console.log(store.links);
          store.first_page_url = results.data.first_page_url;
          store.last_page_url = results.data.last_page_url;
          store.current_page = results.data.current_page;
          store.last_page = results.data.last_page;

      });
      
    },


  },

  mounted(){
    // richiamo getApi() quando viene costruita/montata la pagina
    this.getApi(store.apiUrl + 'projects');

  }
}
</script>

<template>

  <!-- <div class="container-inner d-flex flex-column align-items-center justify-content-center"> -->
  <!-- oppure con mx-auto -->
  <div class="container-inner mx-auto">

    <h2 class="text-center mb-4">Progetti</h2>

<!-- //* stampa una lista semplice -->
    <!-- <ul> -->
      <!-- <li class="mb-3" v-for="project in projects" :key="project.id"> -->
      <!-- <strong>Name:</strong> {{ project.name }}  -->
      <!-- //* one to many -->
      <!-- - <strong>Type: </strong>{{ project.type?.name ?? 'No type' }}   -->
      <!-- //* many to many -->
      <!-- - <strong>Technologies: </strong>  -->
      <!-- //* lunga ma + semplice - soluzione 1 - stampare le tecnologie suddivise da uno spazio vuoto  -->
      <!-- <span v-if="project.technologies && project.technologies.length > 0">
        <span v-for="technology in project.technologies" :key="technology.id">&nbsp;{{ technology.name }}</span>
      </span>
      <span v-else>No technology</span> -->
      <!-- //* breve ma più difficile - soluzione 2 - con MAP stampare le tecnologie suddivise da uno spazio vuoto  -->
      <!-- <span> -->
        <!-- {{ project.technologies.length > 0 ? project.technologies.map(technology => technology.name).join(' ') : 'No technology' }} -->
      <!-- </span> -->
      <!-- //* stampare le tecnologie con la virgola  -->
      <!-- <span>
        {{ project.technologies.length > 0 ? project.technologies.map(tech => tech.name).join(', ') : 'No technology' }}
      </span> -->
      <!-- - <strong>Start date:</strong> {{ formatData(project.start_date) }}  -->
      <!-- - <strong>End date:</strong> {{ formatData(project.end_date) }} -->
      <!-- </li> -->
    <!-- </ul> -->

<!-- //* stampa le card -->
    <div class="container d-flex flex-wrap align-items-center justify-content-center my-4">
      <ProjectCard 
        v-for="project in store.projects" 
        :key="project.id" 
        :project="project"
      />
    </div>

    <div class="d-flex flex-column align-items-center justify-content-center">
      <div>
        <button @click="getApi(store.first_page_url)" :disabled="store.current_page == 1" class="btn btn-dark me-2 mt-4 pb-2">|&lt;</button>
        <button v-for="(link, index) in store.links" :key="index" v-html="link.label" @click="getApi(link.url)" :disabled="link.active || !link.url" class="btn btn-dark me-2 mt-4 pb-2" ></button>
        <button @click="getApi(store.last_page_url)" :disabled="store.current_page == store.last_page" class="btn btn-dark me-2 mt-4 pb-2">&gt;|</button>
      </div>
    </div>
  
  </div>

</template>

<style lang="scss" scoped>
@use '../../scss/main.scss' as *;


</style>