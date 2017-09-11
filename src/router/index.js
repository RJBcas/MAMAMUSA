import Vue from 'vue'
import Router from 'vue-router'
import Frontapp from '@/components/front/'

import Home from '@/components/front/Home'
import Notas from '@/components/front/Notas'
import Agenda from '@/components/front/Agenda'
import Centros from '@/components/front/Centros'
import Talleres from '@/components/front/Talleres'
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
          path: 'notas',
          name: 'notas',
          component: Notas
        },
        {
          path: 'agenda',
          name: 'agenda',
          component: Agenda
        },
        {
          path: 'centros',
          name: 'centros',
          component: Centros
        },
        {
          path: 'talleres',
          name: 'talleres',
          component: Talleres
        }
      ]
    }
  ]
})
