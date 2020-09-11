<template>
    <div>
        <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
            <div class="navbar-brand mr-6 ml-4">
               
            <a class="navbar-item " href="/">
                <span class="icon is-large">
                    <i class="fas fa-layer-group fa-3x mr-5"></i>       
                </span>
                Mi APP
            </a>
                    
               <!-- <a class="navbar-item" href="/">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
                </a>
                <h5 class="navbar-item"> And</h5>
                  <a class="navbar-item" href="/">
                    <img src="../../assets/logo.png" width="30" height="28">
                    <h5>Vue Js</h5>
                </a>
                -->

                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navBar">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navBar" class="navbar-menu ">
                  <div class="navbar-start">    
                        <router-link to="/" class="navbar-item ">
                            <span class="icon is-small ">
                             <i class="fas fa-home mr-1"></i>
                            </span>
                            <span> Inicio</span>
                        </router-link>

                        <router-link to="/persona" class="navbar-item ">
                            <span class="icon is-small ">
                            <i class="fas fa-user-alt mr-1" aria-hidden="true"></i>
                            </span>
                            <span> Persona</span>
                        </router-link>
                   
                        <router-link to="/animal" class="navbar-item ">                      
                            <span class="icon is-small ">
                            <i class="fas fa-dog mr-1" aria-hidden="true"></i>
                            </span>
                            <span> Animales</span>  
                        </router-link>
                  </div>
                

                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <a class="button is-link  ">
                                <i class="fas fa-clipboard mr-1"></i>
                                <strong>Registrarme</strong>
                            </a>
                            <a class="button  ">
                                <i class="fas fa-user-alt mr-1"></i>
                                Iniciar Sesion
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        
    </div>
</template>

<script>
 
export default {
    name:'navbar',
    created() {

          //CARGANDO CONDIGO PARA EL MENU DEL NAVBAR RESPONSIVO
            document.addEventListener('DOMContentLoaded', () => {

            // Get all "navbar-burger" elements
            const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

            // Check if there are any navbar burgers
            if ($navbarBurgers.length > 0) {

                // Add a click event on each of them
                $navbarBurgers.forEach( el => {
                el.addEventListener('click', () => {

                    // Get the target from the "data-target" attribute
                    const target = el.dataset.target;
                    const $target = document.getElementById(target);

                    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                    el.classList.toggle('is-active');
                    $target.classList.toggle('is-active');

                });
                });
            }

        });
    },

}
</script>

<style scoped>
  
</style>