import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/UserRegister.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/UserLogin.vue')
  },
  {
    path: '/store/:id',
    name: 'store',
    component: () => import('../views/FurnitureStore.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
