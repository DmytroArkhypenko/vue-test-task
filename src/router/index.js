import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'contacts-list',
    component: () => import('../views/ContactsList.vue'),
  },
  {
    path: '/contact/:id',
    name: 'contact',
    component: () => import('../views/Contact.vue'),
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
