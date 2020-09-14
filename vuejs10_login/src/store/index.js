import Vue from 'vue'
import Vuex from 'vuex'
import login from './login/login'

Vue.use(Vuex)

export default new Vuex.Store({
  // namespaced: true,
  modules:{
    login
  }
})
