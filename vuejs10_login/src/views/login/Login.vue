<template>
  <div class="container mx-auto mt-20 max-w-md  md:w-2/4 ">
   <form class="bg-blue-500 shadow-xl rounded px-6 pt-6 pb-8 mb-4 "  @submit.prevent="login" >
    <div>
        <img class="mx-auto" src="../../assets/login.svg" width="200" alt="50" >
        <h1 class="text-center text-white  text-lg font-bold">Inicio de Sesión</h1>
    </div>
    <div class="mb-4">
      <label class="block text-white  text-sm font-bold mb-2" for="username">
        Usuario
      </label>
      <input required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Digita tu usuario">
    </div>
    <div class="mb-6">
      <label class="block text-white  text-sm font-bold mb-2" for="password">
        Contraseña
      </label>
      <input required class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Digita tu contraseña">
      <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
    </div>
    <div class="flex items-center justify-between">
   
      <button class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0" type="submit">
        Entrar
      </button>
      <a class="inline-block align-baseline font-bold text-sm text-white ml-3" href="#">
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
    methods:{
      login(){
         this.$router.replace('home')
         this.$store.dispatch('login/setStateLogin',true)
      }
    }
}
</script>

<style>

</style>