<template>
  <div class="bg-gray-100 font-family-karla flex">
    <aside v-if="isOpenSlider==true" class="relative bg-blue-500  h-screen w-64 hidden sm:block shadow-xl">
      <div class="p-6">
        <a
          href="index.html"
          class="text-white text-3xl font-semibold uppercase hover:text-gray-300"
        >Admin</a>
        <button
          class="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center"
        >
          <i class="fas fa-plus mr-3"></i> Nuevo Reporte
        </button>
      </div>
      <nav class="text-white text-base font-semibold pt-3">
        <a
          href="index.html"
          class="flex items-center  text-white py-4 pl-6 nav-item"
        >
          <i class="fas fa-tachometer-alt mr-3"></i>
          Dashboard
        </a>
        <a
          href="blank.html"
          class="flex items-center text-white py-4 pl-6 nav-item"
        >
          <i class="fas fa-sticky-note mr-3"></i>
            Usuarios  
        </a>
      
      </nav>
      <a
        href="#"
        class="absolute w-full upgrade-btn bottom-0 active-nav-link text-white flex items-center justify-center py-4"
      >
        <i class="fas fa-arrow-circle-up mr-3"></i>
        Salir
      </a>
    </aside>

    <div class="w-full flex flex-col h-screen overflow-y-hidden">
      <!-- NAV BAR------------------------------------------------------------------- -->
      <!-- Desktop Header -->
      
      <header class="w-full flex items-center bg-white py-2 px-6 hidden sm:flex">
        <!-- <div class="w-1/2"></div> -->
        <div class="w-1/2">
             <button v-if="isOpenSlider==false" @click="isOpenSlider =!isOpenSlider" class="text-blue-500 text-3xl focus:outline-none">
                <span><i class="fas fa-bars mr-1"></i></span> 
            </button>
            <button v-if="isOpenSlider==true" @click="isOpenSlider =!isOpenSlider" class="text-blue-500 text-3xl focus:outline-none">
                <span> <i class="fas fa-chevron-left mr-1"></i> </span>
            </button>
        </div>
       
        <div  class="relative w-1/2 flex justify-end">
            <button  @click="isOpenMenu = !isOpenMenu"
                class="realtive z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none"
            >
            <img src="https://source.unsplash.com/uJ8LNVCBjFQ/400x400" />
            </button>
            <!-- <button  v-if="isOpenMenu" @click="isOpenMenu = false"
                class="h-full w-full fixed inset-0 cursor-default"
            ></button> -->
            <div v-if="isOpenMenu" class="absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16">
                <a href="#" class="block px-4 py-2 account-link hover:text-white">Mi Cuenta</a>
                <a href="#" class="block px-4 py-2 account-link hover:text-white">Cerrar Sesión</a>
            </div>
        </div>
      </header>

      <!-- Mobile Header & Nav -->
      <header  class="w-full  bg-blue-500 py-5 px-6 sm:hidden">
        <div class="flex items-center justify-between">
          <a
            href="index.html"
            class="text-white text-3xl font-semibold uppercase hover:text-gray-300"
          >Admin</a>
          <button v-if="isOpenMenuMobile==false" @click="isOpenMenuMobile =!isOpenMenuMobile" class="text-white text-3xl focus:outline-none">
               <span><i class="fas fa-bars mr-1"></i></span> 
          </button>
           <button v-if="isOpenMenuMobile==true" @click="isOpenMenuMobile =!isOpenMenuMobile" class="text-white text-3xl focus:outline-none">
               <span> <i class="fas fa-times mr-1"></i> </span>
          </button>
        </div>

        <!-- Dropdown Nav -->
        <nav :class="isOpenMenuMobile ? 'flex': 'hidden'" class="flex flex-col pt-4">
          <a
            href="index.html"
            class="flex items-center active-nav-link text-white py-2 pl-4 nav-item"
          >
            <i class="fas fa-tachometer-alt mr-3"></i>
            Dashboard
          </a>
          <a
            href="blank.html"
            class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
          >
            <i class="fas fa-sticky-note mr-3"></i>
           usuarios
          </a>
         
          <a
            href="#"
            class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
          >
            <i class="fas fa-user mr-3"></i>
            Mi Cuenta
          </a>
          <a
            href="#"
            class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
          >
            <i class="fas fa-sign-out-alt mr-3"></i>
            Cerrar Sesión
          </a>
          <button
            class="w-full bg-white cta-btn font-semibold py-2 mt-3 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center"
          >
            <i class="fas fa-arrow-circle-up mr-3"></i> Salir
          </button>
        </nav>
        <!-- <button class="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                <i class="fas fa-plus mr-3"></i> New Report
        </button>-->
      </header>
      <!--  ---------------------------------------------------------------------------------------- -->

      <!-- CONTENT  -->
      <div class="w-full overflow-x-hidden border-t flex flex-col">
        <!-- CONTENR MAIN -->
        <main class="w-full flex-grow p-6 h-screen">
         <h1 class="text-3xl text-black pb-6">Dashboard</h1>
         
         <!-- CONTENT DINAMIC -->
         <router-view/>

        
        </main>

        <!-- FOOTER -->
        <footer class="w-full bg-white text-right p-4">
          Derechos Reservados
          <a target="_blank" href="#" class="underline">Figte</a>.
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
// import 'alpinejs'      
// import Chart from 'chart.js/dist/Chart'

export default {
  name: "layout2",
  data(){
      return {
          isOpenMenu: false,
          isOpenMenuMobile: false,
          isOpenSlider:true,
        
      }
  },
  created(){
        // var chartOne = document.getElementById('chartOne');
        // this.myChart = new Chart(chartOne, {
        //     type: 'bar',
        //     data: {
        //         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        //         datasets: [{
        //             label: '# of Votes',
        //             data: [12, 19, 3, 5, 2, 3],
        //             backgroundColor: [
        //                 'rgba(255, 99, 132, 0.2)',
        //                 'rgba(54, 162, 235, 0.2)',
        //                 'rgba(255, 206, 86, 0.2)',
        //                 'rgba(75, 192, 192, 0.2)',
        //                 'rgba(153, 102, 255, 0.2)',
        //                 'rgba(255, 159, 64, 0.2)'
        //             ],
        //             borderColor: [
        //                 'rgba(255, 99, 132, 1)',
        //                 'rgba(54, 162, 235, 1)',
        //                 'rgba(255, 206, 86, 1)',
        //                 'rgba(75, 192, 192, 1)',
        //                 'rgba(153, 102, 255, 1)',
        //                 'rgba(255, 159, 64, 1)'
        //             ],
        //             borderWidth: 1
        //         }]
        //     },
        //     options: {
        //         scales: {
        //             yAxes: [{
        //                 ticks: {
        //                     beginAtZero: true
        //                 }
        //             }]
        //         }
        //     }
        // });

        // var chartTwo = document.getElementById('chartTwo');
        // this.myLineChart = new Chart(chartTwo, {
        //             type: 'line',
        //             data: {
        //                 labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        //                 datasets: [{
        //                     label: '# of Votes',
        //                     data: [12, 19, 3, 5, 2, 3],
        //                     backgroundColor: [
        //                         'rgba(255, 99, 132, 0.2)',
        //                         'rgba(54, 162, 235, 0.2)',
        //                         'rgba(255, 206, 86, 0.2)',
        //                         'rgba(75, 192, 192, 0.2)',
        //                         'rgba(153, 102, 255, 0.2)',
        //                         'rgba(255, 159, 64, 0.2)'
        //                     ],
        //                     borderColor: [
        //                         'rgba(255, 99, 132, 1)',
        //                         'rgba(54, 162, 235, 1)',
        //                         'rgba(255, 206, 86, 1)',
        //                         'rgba(75, 192, 192, 1)',
        //                         'rgba(153, 102, 255, 1)',
        //                         'rgba(255, 159, 64, 1)'
        //                     ],
        //                     borderWidth: 1
        //                 }]
        //             },
        //             options: {
        //                 scales: {
        //                     yAxes: [{
        //                         ticks: {
        //                             beginAtZero: true
        //                         }
        //                     }]
        //                 }
        //             }
        //         });

  }
};
</script>

<style>
     @import url('https://fonts.googleapis.com/css?family=Karla:400,700&display=swap');
        .font-family-karla { font-family: karla; }
        .bg-sidebar { background: #3d68ff; }
        .cta-btn { color: #3d68ff; }
        .upgrade-btn { background: #1947ee; }
        .upgrade-btn:hover { background: #0038fd; }
        .active-nav-link { background: #1947ee; }
        .nav-item:hover { background: #1947ee; }
        .account-link:hover { background: #3d68ff; }
</style>