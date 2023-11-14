import {reactive} from "vue";

export const store = reactive({
  //* collegamento con le Api della repo laravel-api
  apiUrl: 'http://127.0.0.1:8000/api/',
  
  //* rotte per la soluzione 1 cioè chiamate api con più rotte
  // apiUrl: 'http://127.0.0.1:8000/api/projects',
  // apiUrl: 'http://127.0.0.1:8000/api/projects/type',
  // apiUrl: 'http://127.0.0.1:8000/api/projects/technologies',
  // apiUrl: 'http://127.0.0.1:8000/api/projects/project-type/' + id',
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

})