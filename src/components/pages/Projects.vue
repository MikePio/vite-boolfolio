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
    //* Api per i progetti
    getApi(endpoint){
      //* collegamento all'url dell'api salvata nello store
      // console.log(store.apiUrl); // restituisce l'url salvato nello store nella console
      
      //* chiamata Api per restituire tutti i progetti salvati nel db della repo laravel-api
      axios.get(endpoint)
        .then(results => {
          // console.log(results.data); // restituisce i dati dell'api in console
          
          //* SOLUZIONE 1 chiamate api con più rotte // migliora la velocità del sito
          // // i dati ottenuti(results.data) vengono pushati nell'array projects //! SENZA la paginazione
          // // store.projects = results.data;
          // //! con la paginazione
          // store.projects = results.data.data;
          // // console.log(store.projects);
          // // utilizzati per creare i pulsanti per la navigazione
          // store.links = results.data.links;
          // // console.log(store.links);
          // store.first_page_url = results.data.first_page_url;
          // store.last_page_url = results.data.last_page_url;
          // store.current_page = results.data.current_page;
          // store.last_page = results.data.last_page;

          //* SOLUZIONE 2 Creata una sola rotta per le chiamate api per i progetti, types, technologies - nel controller passa in compact i dati (types e technologies) in modo da avere un unica rotta api // http://127.0.0.1:8000/api/projects // peggiora la velocità del sito
          // i dati ottenuti(results.data) vengono pushati nell'array projects //! SENZA la paginazione
          // store.projects = results.data; // o forse // store.projects = results.data.projects;
          //! con la paginazione
          store.projects = results.data.projects.data;
          // console.log(store.projects);
          // utilizzati per creare i pulsanti per la navigazione
          store.links = results.data.projects.links;
          // console.log(store.links);
          store.first_page_url = results.data.projects.first_page_url;
          store.last_page_url = results.data.projects.last_page_url;
          store.current_page = results.data.projects.current_page;
          store.last_page = results.data.projects.last_page;
          //* types
          store.types = results.data.types;
          //* technologies
          store.technologies = results.data.technologies;

      });
      
    },
    //* chiamata Api per la rotta tipologie
    getTypesApi(){
      axios.get(store.apiUrl + 'projects/types')
        .then(results => {
          store.types = results.data;
          // console.log(results.data);
        });
    },
    //* chiamata Api per la rotta tecnologie
    getTechnologiesApi(){
      axios.get(store.apiUrl + 'projects/technologies')
        .then(results => {
          store.technologies = results.data;
          // console.log(results.data);
        });
    },
    //* Api per la ricerca dei progetti al click di una tipologia
    getProjectsByType(id){
      this.getApi(store.apiUrl + 'projects/project-type/' + id);
      // console.log(store.apiUrl + 'projects/project-type/' + id);
    },
    //* Api per la ricerca dei progetti al click di una tecnologia
    getProjectsByTechnology(id) {
      this.getApi(store.apiUrl + 'projects/project-technology/' + id);
      // console.log(store.apiUrl + 'projects/project-technology/' + id);
    },


  },

  mounted(){
    // richiamo getApi() quando viene costruita/montata la pagina
    this.getApi(store.apiUrl + 'projects');
    this.getTypesApi();
    this.getTechnologiesApi();
  }
}
</script>

<template>

  <!-- <div class="container-inner d-flex flex-column align-items-center justify-content-center"> -->
  <!-- oppure con mx-auto -->
  <div class="container-inner mx-auto">

    <h2 class="text-center mb-4">Progetti</h2>

    <div class="d-flex flex-column align-items-center justify-content-center">
      <div class="mp-type-tech-container rounded-2 overflow-hidden d-flex flex-wrap justify-content-center align-items-center shadow" style="max-width: 1010px;">
        <div class="bg-white border border-grey text-black p-2" style="width: 505px; max-width: 505px; height: 232px; max-height: 232px">
          <h3 class="text-center mb-3">Tipologie</h3>
          <div class="d-flex flex-wrap justify-content-center mx-3">
            <button @click="getApi(store.apiUrl + 'projects')" class="btn badge d-inline-block badge-type text-center mb-1 me-1">
              Tutte le tipologie
            </button>
            <!-- //* usando la funzione personalizzata -->
            <!-- <button v-for="type in store.types" :key="type.id" @click="getProjectsByType(type.id)" class="btn badge d-inline-block badge-type text-center mb-1 me-1"> -->
            <!-- //* usando la funzione getApi con un parametro (si adegua alla soluzione 2 cioè una sola rotta per le chiamate api per i progetti, types, technologies) -->
            <button v-for="type in store.types" :key="type.id" @click="getApi(store.apiUrl + 'projects/project-type/' + type.id)" class="btn badge d-inline-block badge-type text-center mb-1 me-1">
              {{ type.name }}
            </button>
          </div>
        </div>
        <div class="bg-white border border-grey text-black p-2" style="width: 505px; max-width: 505px; height: 232px; max-height: 232px">
          <h3 class="text-center">Tecnologie</h3>
            <div class="d-flex flex-wrap justify-content-center mx-3">
              <button @click="getApi(store.apiUrl + 'projects')" class="btn badge d-inline-block badge-technology text-center mb-1 me-1">
                Tutte le tecnologie
              </button>
                <!-- //* usando la funzione personalizzata -->
                <!-- <button v-for="technology in store.technologies" :key="technology.id" @click="getProjectsByTechnology(technology.id)" class="btn badge d-inline-block badge-technology text-center mb-1 me-1"> -->
                <!-- //* usando la funzione getApi con un parametro (si adegua alla soluzione 2 cioè una sola rotta per le chiamate api per i progetti, types, technologies) -->
                <button v-for="technology in store.technologies" :key="technology.id" @click="getApi(store.apiUrl + 'projects/project-technology/' + technology.id)" class="btn badge d-inline-block badge-technology text-center mb-1 me-1">
                  {{ technology.name }}
                </button>          
          </div>
        </div>
      </div>
    </div>

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
.badge-type{
  // background-color: #1A1E21;
  // background-color: #212529;
  background-color: #272c31;
  // background-color: #4338CA;
  transition: all .3s;
  &:hover{
    border: #272c31 1px solid;
  }
}

.badge-technology{
  background-color:#bcbcbc;
  // background-color: lightgray;
      transition: all .3s;
  &:hover{
    border: #272c31 1px solid;
  }
}

@media (max-width: 1229px) {
  .mp-type-tech-container {
    width: 505px;
  }
}


</style>