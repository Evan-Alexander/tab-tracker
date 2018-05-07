// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import { sync } from 'vuex-router-sync'
import 'vuetify/dist/vuetify.min.css'
import store from '@/store/store'
import VueYouTubeEmbed from 'vue-youtube-embed'
import Panel from '@/components/globals/Panel'

Vue.config.productionTip = false

// Gives the Vue app a global instance of Vuetify (Material-ui CCS Framework)
Vue.use(Vuetify)
// Use the Youtube plugin with Vue
Vue.use(VueYouTubeEmbed)

// Make Panel Component a Global component
Vue.component('panel', Panel)
// Syncs the store with the router
sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // Inlcude router and vue in the app.
  router,
  store,
  components: { App },
  template: '<App/>'
})
