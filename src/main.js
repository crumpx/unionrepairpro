import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'
import Meta from 'vue-meta'
Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDf2kJb69FWP2xFAO3dRcpy2RKr9N5rvE8',
    //libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
 
    //// If you want to set the version, you can do so:
    // v: '3.26',
  },
})

Vue.use(Meta)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
