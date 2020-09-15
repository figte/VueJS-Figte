<template>
  <div class="container mx-auto mt-20  max-w-xs  xs:w-1/4 ">
   <form class="bg-blue-500 shadow-xl rounded px-6 pt-6 pb-8 mb-4 "  @submit.prevent="login" >
     <div>

     </div>
    <div>
        <img class="mx-auto" src="../../assets/img/login.svg" width="200" alt="50" >
        <h1 class="text-center text-white  text-lg font-bold">Inicio de Sesión</h1>
    </div>
    <div class="mb-4">
      <label class="block text-white  text-sm font-bold mb-2" for="username">
        Usuario
      </label>
      <input v-model="email" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="email" placeholder="Digita tu usuario">
    </div>
    <div class="mb-6">
      <label class="block text-white  text-sm font-bold mb-2" for="password">
        Contraseña
      </label>
      <input v-model="password" required class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="Digita tu contraseña">
      <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
    </div>
    <div class="flex items-center justify-between">
   
      <button class="inline-block text-sm px-4 py-2 leading-none shadow-lg rounded text-white hover:text-blue-800 bg-blue-800 hover:bg-white  mt-4 lg:mt-0" type="submit">
        Entrar
      </button>
      <a class="inline-block align-baseline font-bold text-sm text-blue-800 hover:text-white ml-3" href="#">
        ¿Olvidaste tu contraseña?
      </a>
    </div>
  </form>
  <p class="text-center text-gray-500 text-xs">
    &copy;2020 @Figte, Derechos Reservados
  </p>
</div>
</template>

<script>

export default {
    name:'login',
    data(){
      return {
        email:'',
        password:'',
      }
    },
    methods:{
      login(){
         this.$store.dispatch('login/login',{email:this.email,password:this.password,stateLogin:true,component:this})
      
      }
    }
}
</script>

<style>

</style>