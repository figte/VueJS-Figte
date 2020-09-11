<template>
   <div class="container">
        <h3 class="title has-text-centered" v-if="estado=='guardar'">Agregar Persona</h3>
        <h3 class="title has-text-centered"  v-if="estado=='modificar'">Modificar Persona</h3>

        <div class="field">
            <label class="label">Nombre</label>
            <div class="control">
                <input class="input" type="text" placeholder="Digite el nombre del animal" v-model="animal.nombre"> 
            </div>
        </div>
        <div class="field">
            <label class="label">Tipo</label>
            <div class="control">
                <input class="input" type="text" placeholder="Digite el tipo de animal" v-model="animal.tipo"> 
            </div>
        </div>
        <div class="field">
            <label class="label">Edad</label>
            <div class="control">
                <input class="input" type="number" placeholder="Digite la edad del animal" v-model="animal.edad"> 
            </div>
        </div>

         <div class="field">
            <label class="label">Dueño</label>
            <div class="control">
                <input class="input" type="text" placeholder="Digite el nombre del dueño" v-model="animal.duenio"> 
            </div>
        </div>
       
        <router-link to="/animal">
            <button class="button is-danger"  @click="reset">
                <i class="fas fa-reply mr-1"></i>
                Cancelar</button>
        </router-link>
        <router-link to="/animal">
            <button class="button is-primary" v-if="estado=='guardar'" @click="agregarAnimal">
                <i class="fas fa-save mr-1"></i>
                Agregar
            </button>    
        </router-link>
        <router-link to="/animal">
            <button class="button is-success" v-if="estado=='modificar'" @click="modificarAnimal">
                 <i class="fas fa-save mr-1"></i>
                Terminar
            </button>
        </router-link>

   </div>
</template>

<script>
export default {
    name:'form-animal',
    data() {
        return {
            data:{
                key:0,
                nombre:'',
                tipo:'',
                edad:0,
                duenio:''
            }
        }
    },
    computed: {
        animal(){
            return this.$store.getters.getAnimal
        },
        estado(){
           return this.$store.getters.getEstado 
        }
    }, 
    methods: {
       agregarAnimal(){
            this.$store.dispatch('setAnimal',this.animal)
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
       
       modificarAnimal(){
           this.$store.dispatch('updateAnimal',this.animal)
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
           this.$store.dispatch('loadAnimal',{valor:this.data,estado:'guardar'})
        }
    },


}
</script>

<style>

</style>