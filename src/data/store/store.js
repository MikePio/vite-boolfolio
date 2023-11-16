import {reactive} from "vue";
import axios from "axios"

export const store = reactive({
  //* collegamento con le Api della repo laravel-api
  apiUrl: 'http://127.0.0.1:8000/api/',

  //* rotte per la soluzione 1 cioè chiamate api con più rotte
  // apiUrl: 'http://127.0.0.1:8000/api/projects',
  // apiUrl: 'http://127.0.0.1:8000/api/projects/type',
  // apiUrl: 'http://127.0.0.1:8000/api/projects/technologies',
  // apiUrl: 'http://127.0.0.1:8000/api/projects/project-type/' + id',
  // apiUrl: 'http://127.0.0.1:8000/api/projects/project-technology/' + id',
  // apiUrl: 'http://127.0.0.1:8000/api/projects + slug',
  //* rotta per la soluzione 2 cioè chiamate api con una sola rotta
  // apiUrl: 'http://127.0.0.1:8000/api/projects',

  // per centralizzare i dati, nello store sono contenuti: 
  projects:[],
  links:[],
  first_page_url: null,
  last_page_url: null,
  current_page:null,
  last_page:null,
  types:[],
  technologies:[],
  // pagina di dettaglio del progetto
  project:[],
  loaded: false,
  //* per far scomparire il paginate della ricerca e far comparire quello di default
  showPaginateForSearch: false,
  toSearch: '',

  getApiSearchPaginate(pageNumber){
    //! aggiungere obbligatoriamente un loader perché, ad esempio, se richiamo this.project.name prima che venga effettuata la chiamata api si genera un errore 
    store.loaded = true;
    axios.get(pageNumber)
      .then(result => {
        store.projects = result.data.data;
        store.links = result.data.links;
        store.first_page_url = result.data.first_page_url;
        store.last_page_url = result.data.last_page_url;
        store.current_page = result.data.current_page;
        store.last_page = result.data.last_page;
        store.loaded = true;
        store.toSearch = '';
        //* per far scomparire il paginate di default e far comparire quello della ricerca
        store.showPaginateForSearch = true;
        // console.log(result.data);
      });
  },

})