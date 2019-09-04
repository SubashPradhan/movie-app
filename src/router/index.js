import Vue from 'vue'
import VueRouter from 'vue-router'
import LatestMovie from '@/components/LatestMovie'
import Movie from '@/components/Movie'
import vuetify from '@/plugins/vuetify'         // check
import SearchMovie from '@/components/SearchMovie'

Vue.use(vuetify) //check
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
  {
    path: '/movie-search/',
    name: 'SearchMovie',
    component : SearchMovie,
    props: true
  }
]
})