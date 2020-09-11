
import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import router from './router/router'

// import datatable from 'https://cdn.datatables.net/v/dt/jq-3.3.1/dt-1.10.21/af-2.3.5/b-1.6.3/datatables.min.js'

import { VuejsDatatableFactory } from 'vuejs-datatable'; 
Vue.use( VuejsDatatableFactory );

import 'bulma/css/bulma.css'
import './assets/css/style.scss'
import './assets/js/code.js'


new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
})
