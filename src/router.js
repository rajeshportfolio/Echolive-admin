import { createRouter, createWebHistory } from 'vue-router'
import Login from './pages/Login.vue'
import Dashboard from './pages/Dashboard.vue'
import Users from './pages/Users.vue'
import UserDetails from './pages/UserDetails.vue'
import Transactions from './pages/Transactions.vue'

const routes = [
  { path: '/', component: Login },
  { path: '/dashboard', component: Dashboard },
  { path: '/users', component: Users },
  { path: '/userDetails', component: UserDetails },
  { path: '/transactions', component: Transactions },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


export default router
