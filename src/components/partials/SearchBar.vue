<script>
import axios from 'axios';
import { store } from '../../data/store/store';

export default {
  name: 'SearchBar',
  data(){
    return{
      // toSearch: '',
      store
      
    }
  },
  methods:{
    getApiSearch(){
      //! aggiungere obbligatoriamente un loader perché, ad esempio, se richiamo this.project.name prima che venga effettuata la chiamata api si genera un errore 
      store.loaded = true;
      axios.get(store.apiUrl + 'projects/search/' + store.toSearch)
        .then(result => {
          store.projects = result.data.data;
          store.links = result.data.links;
          store.first_page_url = result.data.first_page_url;
          store.last_page_url = result.data.last_page_url;
          store.current_page = result.data.current_page;
          store.last_page = result.data.last_page;
          store.loaded = true;
          store.toSearch = '';
          store.showPaginateForSearch = true
        });
    },
    redirectToProjects() {
      this.$router.push('/progetti'); //* this.$router è un'istanza fornita da Vue Router (Vue Router gestisce la navigazione all'interno di un'applicazione Vue) 
    },



  },

  }
</script>

<template>
  <div class="container-inner d-flex" style="height: 33px">

    <!-- form utilizzato per reindirizzare alla pagina projects -->
    <!--//* @submit.prevent="redirectToProjects" nel form impedisce il ricaricamento della pagina quando viene inviato e, allo stesso tempo, chiama la funzione redirectToProjects -->
    <form class="d-flex" @submit.prevent="redirectToProjects"> 
      <!-- input per la ricerca dei progetti per nome -->
      <input
        class="form-control me-2"
        v-model.trim="store.toSearch"
        placeholder="Cerca un progetto"
        type="text"
        @keyup.enter="getApiSearch"
      >
      <button type="submit" @click="getApiSearch" class="btn btn-primary me-3 d-flex justify-content-center align-items-center"><i class="fa-solid fa-magnifying-glass"></i></button>
    </form>

  </div>
  
</template>

<style lang="scss" scoped>
@use '../../scss/main.scss' as *;

</style>