import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/Home/Home.vue')
const cart = () => import('../views/cart/cart.vue')
const profile = () => import('../views/profile/profile.vue')
const category = () => import('../views/category/category.vue')
const Detail = () => import ('../views/detail/Detail.vue')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'',
      redirect:'/home'
    },
    {
      path:'/home',
      component: Home
    },
    {
      path:'/cart',
      component:cart
    },
    {
      path:'/category',
      component:category
    },
    {
      path:'/profile',
      component:profile
    },
    {
      path:'/detail',
      component:Detail
    }
  ]
})
