import { createWebHashHistory, createRouter, RouteComponent } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import ColumnDetail from '../views/ColumnDetail.vue'
import CreatePost from '../views/CreatePost.vue'


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
  },
  {
    path: '/post',
    name: 'post',
    components: CreatePost
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
}) as any



export default {
  router
}
