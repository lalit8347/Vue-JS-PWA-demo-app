import Vue from 'vue'
import Router from 'vue-router'
import Customers from './views/Customers.vue'
import thankyou from './views/Thankyou.vue'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      redirect: '/customers'
    },
    {
      path: '/customers',
      name: 'customers',
      component: Customers
    },
    {
      path: '/thankyou/:id',
      name: 'thankyou',
      component: thankyou
    }
  ]
})
export default router
