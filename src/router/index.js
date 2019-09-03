import Vue from 'vue'
import VueRouter from 'vue-router'
import LatestMovie from '@/components/LatestMovie'
import Movie from '@/components/Movie'
import vuetify from '@/plugins/vuetify'


Vue.use(vuetify)
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',                //removes # from url
  routes:[
    {
      path: '/',
      name: 'LatestMovie',
      component: LatestMovie
  },
  {
    path: '/movie/:id',
    name: 'Movie',
    props: true,     // Passing props 
    component: Movie
  },
]
})