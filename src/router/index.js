import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import All from '@/components/all'
import Single from '@/components/single'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/all',
      name: 'All',
      component: All
    },
    {
      path: '/single',
      name: 'Single',
      component: Single
    }
  ]
})
