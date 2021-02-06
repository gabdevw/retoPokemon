import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import Login from '@/components/Login'
import Home from '@/components/Home'
import PokemonDetail from '@/components/PokemonDetail'
import RickMorthy from '@/components/RickMorthy'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  },

  {
    path: '/pokemon-detail',
    name: 'PokemonDetail',
    component: PokemonDetail
  },

  {
    path: '/rickMorthy',
    name: 'RickMorthy',
    component: RickMorthy
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
 