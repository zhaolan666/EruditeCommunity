import { createWebHashHistory, createRouter, RouteComponent } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import ColumnDetail from '../views/ColumnDetail.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    components: Home
  }, {
    path: '/login',
    name: 'login',
    components: Login
  }, {
    path: '/column/:id',
    name: 'column',
    components: ColumnDetail
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
}) as any



export default {
  router
}
