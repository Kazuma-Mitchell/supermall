import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// import { createApp } from "vue"
// import VueRouter from "vue-router"
// const app = createApp();
// app.use(VueRouter)

const Kazuma = () => import('../views/kazuma/Kazuma')
const Mika = () => import('../views/mika/Mika')
const Cealan = () => import('../views/cealan/Cealan')
const William = () => import('../views/william/William')
const routes = [
  {
    path: '',
    redirect: '/kazuma'
  },
  {
    path: '/kazuma',
    component: Kazuma
  },
  {
    path: '/mika',
    component: Mika
  },
  {
    path: '/cealan',
    component: Cealan
  },
  {
    path: '/william',
    component: William
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})



export default router
