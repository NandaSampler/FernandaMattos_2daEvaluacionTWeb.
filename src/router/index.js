import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Naves from '../views/Naves.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/naves', name: 'Naves', component: Naves },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../views/NotFound.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
