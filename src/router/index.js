import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/views/auth/Login'
import Dashboard from '@/views/layouts/Dashboard'
import Collections from '@/views/collections/Collections'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      component: Dashboard,
      children: [
        {
          path: 'collections',
          name: 'Collections',
          component: Collections
        }
      ]
    }
  ]
})
