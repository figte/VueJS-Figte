<template>
  <div>
    <div v-if="login==true">
      <nav-bar></nav-bar>
       <router-view/>
    </div>
    <div v-if="login==false">
        <h1>No has iniciado session</h1>
    </div>
  </div>
</template>

<script>
import NavBar from './navbar/NavBar.vue'

export default {
    name:'layout',
    components:{
        'nav-bar':NavBar
    },
    computed:{
      login:{
        get(){
          return this.$store.getters['login/getStateLogin']
        },
        set(){
          return this.$store.dispatch('setStateLogin',this.login)
        }
      }
    },
    created(){
        this.validarSession();
    },
    watch:{
      '$route':'validarSession'
    },
    methods:{
      validarSession(){
        if(this.$store.getters['login/getStateLogin']==false){
            this.$router.replace('login')
         }
      }
    }
}
</script>

<style>

</style>