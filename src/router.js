import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ './views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/service/phone-tablet',
      name: 'phone_tablet',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Phone_tablet.vue')
    },
    {
      path: '/service/microsoldering',
      name: 'microsoldering',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Microsoldering.vue')
    },
    {
      path: '/service/unlock',
      name: 'unlock',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Unlock.vue')
    },
    {
      path: '/service/computer',
      name: 'computer',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Computer.vue')
    },
    {
      path: '/service/datarecovery',
      name: 'datarecovery',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Datarecovery.vue')
    },
  ]
})

// {icon: 'fa-mobile-alt', text: 'Phone & Tablet Repair', route: '/service/phone-tablet'},
// {icon: 'fa-microscope', text: 'Microsoldering', route: '/service/microsoldering'},
// {icon: 'fa-unlock', text: 'Phone Unlocking', route: '/service/unlock'},
// {icon: 'fa-desktop', text: 'Computer Service', route: '/service/computer'},
// {icon: 'fa-file-medical', text: 'Data Recovery', route: '/service/datarecovery'},