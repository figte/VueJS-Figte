<template>
        <aside id="navBar" class="menu">
           
        
            <p class="menu-label">
                <i class="fas fa-wrench mr-1"></i>
                Administracion
            </p>
            <ul class="menu-list is-active">  
                <li><router-link to="/"> 
                    <i class="fas fa-home mr-1"></i>
                    Inicio
                </router-link></li>
                <li>
                    <router-link to="/persona">
                    <i class="fas fa-user-circle mr-1"></i>
                    Persona</router-link>
                <ul>
                    <li><router-link to="/personaForm">
                     <i class="fas fa-plus-circle mr-1"></i>
                     Nuevo Registro
                     </router-link></li>
                </ul>
                </li>
            </ul>
        </aside>
    
</template>

<script>
export default {
    name:'navegacion'
}
</script>

<style>

</style>