import { createRouter, createWebHistory } from "vue-router";

import Home from './components/pages/Home.vue';
import Contacts from './components/pages/Contacts.vue';
import Projects from './components/pages/Projects.vue';

import Error404 from './components/pages/Error404.vue';

const router = createRouter({
  history: createWebHistory(),
  // serve per mantenere il link (con la classe css active) attivo della pagina corrente durante la navigazione delle pagine
  linkExactActiveClass: 'active',

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contatti',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/progetti',
      name: 'projects',
      component: Projects
    },



    // deve essere sempre l'ultima
    {
      path: '/:pathMatch(.*)*',
      name: 'error404',
      component: Error404
    }

  ]
})

export {router}
















































