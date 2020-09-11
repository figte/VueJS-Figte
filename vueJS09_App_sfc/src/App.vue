<template>
  <div id="app">

    <div class="columns ">
      <div class="column">
        <barra-navegacion></barra-navegacion>
      </div>
    </div>
 
    <div class="columns  is-mobile mt-6">
      <!-- <div class="column is-2">
        <navegacion></navegacion>
      </div> -->
      <div class="column is-12">
        <router-view></router-view>
      </div>
    </div>
  
    <div class="columns">
      <div class="column">
        <pie-pagina></pie-pagina>
      </div>
    </div>
    
  </div>
 
</template>

<script>


import List from './components/persona/List.vue'
import Add from './components/persona/Form.vue'
import Menu from './components/layout/menu.vue'
import Footer from './components/layout/footer.vue'
import BarraNavegacion from './components/layout/navbar.vue'


export default {
  name: 'app',
  components:{
    'list':List,
    'add':Add,
    'navegacion':Menu,
    'pie-pagina':Footer,
    'barra-navegacion':BarraNavegacion
  },
  data () {
    return {
      msg: 'Mi App'
    }
  },
  computed: {
    personas(){
      return this.$store.getters.getPersonas
    }
  },
  methods: {
   
  },
}
</script>

<style lang="scss">
 
   
  
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }

// h1, h2 {
//   font-weight: normal;
// }

// ul {
//   list-style-type: none;
//   padding: 0;
// }

// li {
//   display: inline-block;
//   margin: 0 10px;
// }

// a {
//   color: #42b983;
// }
</style>
