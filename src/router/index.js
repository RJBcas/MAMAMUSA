import Vue from 'vue'
import Router from 'vue-router'
import Frontapp from '@/components/front/'

import Maps from '@/components/front/maps/'
import Home from '@/components/front/Home'

import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBdYMCf9-VXzP5pTzfxCg-1CDZKSy-iHTA',
    v: '3.5'
  }
})

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'FrontApp',
      component: Frontapp,
      children: [
        {
          path: '',
          name: 'Home',
          component: Home
        },
        {
          path: 'agenda',
          name: 'agenda',
          component: Maps
        }
      ]
    }
  ]
})
