import Vue from 'vue'
import VueRouter from 'vue-router'
import AAA from '../components/AAA.vue'
import Login from '../view/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'AAA',
    component: AAA
  },
  // 配置登陆页面的路由
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
