<script>
import axios from 'axios';
import { store } from '../../data/store/store';

export default {
  name: 'SearchBar',
  data(){
    return{
      toSearch: '',
    }
  },
  methods:{
    getApi(){
      //! aggiungere obbligatoriamente un loader perché, ad esempio, se richiamo this.project.name prima che venga effettuata la chiamata api si genera un errore 
      store.loaded = false;
      axios.get(store.apiUrl + 'projects/search/' + this.toSearch)
        .then(result => {
          store.projects = result.data.data;
          store.links = result.data.links;
          store.first_page_url = result.data.first_page_url;
          store.last_page_url = result.data.last_page_url;
          store.current_page = result.data.current_page;
          store.last_page = result.data.last_page;
          store.loaded = true;
          this.toSearch = '';
        });

    },
  },

  }
</script>

<template>
  <div class="container-inner d-flex" style="height: 33px">
    <!-- input per la ricerca dei progetti per nome -->
    <input
      class="form-control me-2"
      v-model.trim="toSearch"
      placeholder="Cerca un progetto"
      type="text"
      @keyup.enter="getApi"
    >
    <button @click="getApi" class="btn btn-primary me-3 d-flex justify-content-center align-items-center"><i class="fa-solid fa-magnifying-glass"></i></button>

  </div>
  
</template>

<style lang="scss" scoped>
@use '../../scss/main.scss' as *;

</style>