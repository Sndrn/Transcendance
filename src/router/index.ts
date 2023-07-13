import { createRouter, createWebHistory } from 'vue-router';
import Home3D from '../views/Home3d.vue';
import Landing from '../views/Landing.vue'

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/home3d',
    name: 'Home3D',
    component: Home3D
  }
  // Autres routes...
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});


export default router;
