import Vue from 'vue'
import store from './store/index'  //se  importa vuex
import App from './App.vue'

new Vue({
  store, //se agrega a la instacion de vue el store instancido con vuex
  el: '#app',
  render: h => h(App)
})
