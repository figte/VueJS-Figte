<template>
   <div class="container ">
        <h3 class="title has-text-centered" v-if="estado=='guardar'">Agregar Persona</h3>
        <h3 class="title has-text-centered"  v-if="estado=='modificar'">Modificar Persona</h3>

        <div class="field">
            <label class="label">Nombre</label>
            <div class="control">
                <input class="input" type="text" placeholder="Digite su nombre" v-model="persona.nombre"> 
            </div>
        </div>

        <div class="field">
            <label class="label">Edad</label>
            <div class="control">
                <input class="input" type="number" placeholder="Digite su edad" v-model="persona.edad"> 
            </div>
        </div>

        <div class="field">
            <label class="label">Direccion</label>
            <div class="control">
                <textarea class="textarea" cols="30" rows="3" placeholder="digite su direccion" v-model="persona.direccion"></textarea>    
            </div>
        </div>
       
        <router-link to="/persona">
            <button class="button is-danger"  @click="reset">
                <i class="fas fa-reply mr-1"></i>
                Cancelar</button>
        </router-link>
        <router-link to="/persona">
            <button class="button is-primary" v-if="estado=='guardar'" @click="agregarPersona">
                <i class="fas fa-save mr-1"></i>
                Agregar
            </button>    
        </router-link>
        <router-link to="/persona">
            <button class="button is-success" v-if="estado=='modificar'" @click="modificarPersona">
                 <i class="fas fa-save mr-1"></i>
                Terminar
            </button>
        </router-link>

   </div>
</template>

<script>
export default {
    name:'form-persona',
    data() {
        return {
            data:{
                key:0,
                nombre:'',
                edad:0,
                direccion:''            }
        }
    },
    computed: {
        persona(){
            return this.$store.getters.getPersona
        },
        estado(){
           return this.$store.getters.getEstado 
        }
    }, 
    methods: {
       agregarPersona(){
            this.$store.dispatch('setPersona',this.persona)
            .then(
               ()=>{
                    this.reset()
                    alert("Registro guardado!")
                   }
            )
            .catch(
                ()=>alert("Error al guardar")
            )
            
        },
       
       modificarPersona(){
           this.$store.dispatch('updatePersona',this.persona)
            .then(
               ()=>{
                    this.reset()
                    alert("Registro modificado!")
                   }
            )
            .catch(
                ()=>alert("Error al modificar")
            )
           
       },

       reset(){
           
           this.$store.dispatch('loadPersona',{valor:{nombre:'',edad:0,direccion:''},estado:'guardar'})
        }
    },


}
</script>

<style>

</style>