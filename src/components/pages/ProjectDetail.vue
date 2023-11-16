<script>
import axios from 'axios';
import { store } from "../../data/store/store"
import Loader from "../partials/Loader.vue"

export default {
    name: 'ProjectDetail',

    components:{
      Loader
    },

    data(){
      return{
        // per avere i dati centralizzati nello store
        // store,
        // senza avere i dati centralizzati nello store
        project: null,
        //* per il caricamento/l'apparizione del loader
        loaded: false,

      }
    },

    methods:{
      getApi(){
        //! aggiungere obbligatoriamente un loader perché, ad esempio, se richiamo this.project.name prima che venga effettuata la chiamata api si genera un errore 
        this.loaded = false;
        axios.get(store.apiUrl + 'projects/' + this.$route.params.slug)
          .then(result => {
            this.project = result.data;
            // console.log(this.project);
            // console.log(this.project.name);
            this.loaded = true;
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
      // console.log(this.$route.params.slug);
      this.getApi();
    }
  }
</script>

<template>
  <!-- <div class="container-inner d-flex flex-column align-items-center justify-content-center" style=" max-width: 90%;"> -->
  <!-- oppure con mx-auto -->
  <div class="container-inner mx-auto">

      <h2 v-if="loaded" class="mb-4 text-center">{{ project.name }}</h2>
      <!-- slug -->
      <!-- <h2 v-if="loaded" class="mb-4 text-center">{{ this.$route.params.slug }}</h2> -->

      <div v-if="loaded" class="d-flex flex-column align-items-center justify-content-center">
        <div class="d-flex flex-column d-flex justify-content-center align-items-center">
          <!-- le immagini sono ottenute facendo un //* controllo lato server (backend) cioè nel controller -->
          <img :src="project.image_path" :alt="project.image_original_name">
          <!-- le immagini sono ottenute facendo un //* controllo in vue (lato frontend) -->
          <!-- <img 
          :src="project.image_path ? `http://127.0.0.1:8000/storage/${project.image_path}` : `src/assets/img/placeholder-img.png`"
          :alt="project.name"
          class="rounded-start" style="object-fit: cover; height: 230px; width: 280px;"> -->
          <!-- //* funziona il placeholder statico  -->
          <!-- src='../../assets/img/placeholder-img.png' -->

          <i class="ms-auto" >{{ project.image_original_name }}</i>
        </div>

        <div class="d-flex flex-column justify-content-start mt-3">
            <div class="d-flex text-start">
              <h5 class="fw-bold me-1">Creator: </h5>
              <span style="margin-top: 2px;" class="text-sm">
                {{ project.user.name }}
              </span>
            </div>
            <div class="d-flex">
              <h5 class="fw-bold me-1">Tipologia: </h5>
              <p class="badge badge-type mb-1 me-1 hl-base" style="padding: 5px;">
                {{ project.type?.name ?? 'Nessuna tipologia' }} 
              </p>
            </div>
            <div class="d-flex">
              <h5 class="fw-bold me-1">Tecnologie: </h5>
              <div v-if="project.technologies && project.technologies.length > 0">
                <div class="badge badge-technology mb-1 me-1 text-center" v-for="technology in project.technologies" :key="technology.id">{{ technology.name }}</div>
              </div>
              <div v-else>
                <span class="badge badge-technology mb-1 me-1">Nessuna tecnologia</span>
              </div>
            </div>
            <div class="d-flex">
              <h5 class="fw-bold me-1">Data d'inizio: </h5>
              <span style="margin-top: 2px;" class="text-sm mb-1">
                {{ formattedData(project.start_date) ?? 'Nessuna data d\'inizio' }} 
              </span>
            </div>
            <div class="d-flex">
              <h5 class="fw-bold me-1">Data di fine: </h5>
              <span style="margin-top: 2px;" class="text-sm mb-1">
                {{ formattedData(project.end_date) ?? 'Nessuna data di fine' }} 
              </span>
            </div>
            <div class="d-flex">
              <h5 class="fw-bold me-1">Categoria: </h5>
              <div  style="margin-top: 2px;">
                {{ project.category ?? 'Nessuna categoria' }}
              </div>
            </div>
            <div class="d-flex">
              <h5 class="fw-bold me-1">Url: </h5>
              <a :href="project.url"  style="margin-top: 2px;">
                {{ project.url ?? 'Nessun url' }}
              </a>
            </div>
            <div class="d-flex">
              <h5 class="fw-bold me-1">Collaboratori: </h5>
              <div style="margin-top: 2px;">
                {{ project.collaborators ?? 'Nessun collaboratore' }}
              </div>
            </div>
            <div class="d-flex">
              <h5 class="fw-bold me-1">Sviluppato per: </h5>
              <div style="margin-top: 2px;">
                {{ project.produced_for ?? 'Nessuno' }}
              </div>
            </div>
            <h5 class="fw-bold ">Descrizione: </h5>
            <p v-if="project.description" v-html="project.description" class=""></p>
            <div v-else >Nessuna descrizione</div>
          </div>
      </div>

      <Loader v-if="!loaded"/>
      
  </div>

</template>

<style lang="scss" scoped>
@use '../../scss/main.scss' as *;

img{
  max-width: 100%;
}

.badge-type{
  line-height: normal;
  // padding: 5px !important;
  // background-color: #1A1E21;
  // background-color: #212529;
  background-color: #272c31;
  // background-color: #4338CA;
}

.badge-technology{
  line-height: normal;
  // padding: 5px !important;
  background-color:#bcbcbc;
  // background-color: lightgray;
}

a{
  // text-decoration: none !important;
  color: inherit; // colore ereditato
  // stesso colore di
  // color: #212529;
  &:hover{
    // text-decoration: none !important;
    // color: inherit; // colore ereditato
    // stesso colore di
    // color: #212529;
  }
}
</style>