// Composables
import { createRouter, createWebHistory } from 'vue-router';
import Gate from '@/views/Gate.vue';
import Aboutus from '@/views/Aboutus.vue';
import Portfolio from '@/views/Portfolio.vue';
import Gallery from '@/views/Gallery.vue';
import Contact from '@/views/Contact.vue';

const routes = [
  { path: '/', component:Gate },
  { path: '/about', component: Aboutus},
  { path: '/portfolio', component:Portfolio},
  { path: '/gallery', component:Gallery },
  { path: '/contact', component:Contact }
  
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

export default router
