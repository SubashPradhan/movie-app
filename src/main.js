import Vue from 'vue'
import App from './App.vue'
// import Vuetify from 'vuetify';
import vuetify from '@/plugins/vuetify'
import router from './router'

Vue.use(vuetify)
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  router
}).$mount('#app')
