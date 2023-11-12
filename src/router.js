import { createRouter, createWebHistory } from "vue-router";

import Home from './components/pages/Home.vue';
import Contacts from './components/pages/Contacts.vue';

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





  ]
})

export {router}
















































