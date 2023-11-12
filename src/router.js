import { createRouter, createWebHistory } from "vue-router";

import Home from './components/pages/Home.vue';
import Contacts from './components/pages/Contacts.vue';
import Error404 from './components/pages/Error404.vue';

const router = createRouter({
  history: createWebHistory(),

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
      path: '/:pathMatch(.*)*',
      name: 'error404',
      component: Error404
    }

  ]
})

export {router}
















































