import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'

Vue.use(vuetify)
Vue.config.productionTip = false

new Vue({
  vuetify,
  // components : {App, 'LatestMovie': LatestMovie},
  render: h => h(App),
  router
}).$mount('#app')
