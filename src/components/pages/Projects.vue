<script>
import axios from "axios"
import { store } from "../../data/store/store"

export default {
  name: 'Projects',
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
    },
    formattedData(dateString){
        const d = new Date(dateString);
        const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        };
        function getUserLocale(){
            const userLocale = navigator.languages && navigator.languages.length
                            ? navigator.languages[0]
                            : navigator.language;
            return userLocale;
        }
        return d.toLocaleString(getUserLocale(), options);
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
      <div v-for="project in projects" :key="project.id" class="bg-white border border-dark overflow-hidden rounded-2 text-black my-3 ms-4 me-4" style="width: 460px; max-width: 460px; height: 232px; max-height: 232px">
          <div class="d-flex">
            <div class="d-flex flex-column d-flex justify-content-center align-items-center">
                <img 
                :src="project.image_path ? `http://127.0.0.1:8000/storage/${project.image_path}` : `src/assets/img/placeholder-img.png`"
                :alt="project.name"
                class="rounded-start" style="object-fit: cover; height: 232px; width: 230px;">
                <!-- //* funziona il placeholder statico  -->
                <!-- src='../../assets/img/placeholder-img.png' -->
            </div>
            <div class="d-flex flex-column justify-content-start mx-2" style="height: 232px; width: 230px;">
                <div class="my-2 text-start">
                  <h5 class="mb-1">
                    {{ project.name }}
                  </h5>
                  <p class="mb-1">
                    {{ formattedData(project.start_date) }} 
                  </p>
                  <p class="badge badge-type mb-1 me-1">
                    {{ project.type?.name ?? 'Nessuna tipologia' }} 
                  </p>
                  <div v-if="project.technologies && project.technologies.length > 0">
                    <span class="badge badge-technology mb-1 me-1" v-for="technology in project.technologies" :key="technology.id">&nbsp;{{ technology.name }}</span>
                  </div>
                  <div v-else>
                    <span class="badge badge-technology mb-1 me-1">Nessuna tecnologia</span>
                  </div>
                  <!-- <div> -->
                    <!-- {{ project.category ?? 'Nessuna categoria' }} -->
                  <!-- </div> -->
                  <!-- <div class="text-muted custom-card-text" style="width: 205px; height: 75px;"> -->
                    <!-- {{ project.description }} -->
                  <!-- </div> -->
              </div>
            </div>
          </div>
        </div>
    </div>

    <div class="d-flex flex-column align-items-center justify-content-center">
      <div>
        <button @click="getApi(first_page_url)" :disabled="current_page == 1" class="btn btn-dark me-2 mt-4 pb-2">|&lt;</button>
        <button v-for="(link, index) in links" :key="index" v-html="link.label" @click="getApi(link.url)" :disabled="link.active || !link.url" class="btn btn-dark me-2 mt-4 pb-2" ></button>
        <button @click="getApi(last_page_url)" :disabled="current_page == last_page" class="btn btn-dark me-2 mt-4 pb-2">&gt;|</button>
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
}

.badge-technology{
  background-color:#bcbcbc;
  // background-color: lightgray;
}

</style>