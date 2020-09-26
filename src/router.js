import Vue from 'vue'
import VueRouter from 'vue-router'

import game from '@game/routes/game-routes'

Vue.use(VueRouter)

const routes = [
  ...game,

  // unrecognized path
  {
    path: '*',
    redirect: '/',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
