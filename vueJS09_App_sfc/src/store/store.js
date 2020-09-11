import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        personas:[
            {
                key:0,
                nombre:'Juan Perez',
                edad:18,
                direccion:'El Salvador'
  
            },
            {
                key:0,
                nombre:'Lucia Perez',
                edad:20,
                direccion:'La Union'
  
            },
            {
                key:0,
                nombre:'Matias Lopez',
                edad:26,
                direccion:'El Salvador'
  
            },
            {
                key:0,
                nombre:'Luisa Lopez',
                edad:26,
                direccion:'Santa Ana'
  
            },
            {
                key:0,
                nombre:'Julio Lopez',
                edad:18,
                direccion:'El Salvador'
  
            },
            {
                key:0,
                nombre:'Josue Lopez',
                edad:20,
                direccion:'El Salvador'
  
            },
            {
                key:0,
                nombre:'Julia Lopez',
                edad:18,
                direccion:'Sonsonate'
  
            }
        ],
        persona:{
            key:0,
            nombre:'',
            edad:0,
            direccion:''
        },
        animales:[
            {
                key:0,
                nombre:'Killer',
                tipo:'Perro',
                edad:2,
                duenio:'Matias'
            },
            {
                key:0,
                nombre:'Celina',
                tipo:'Gato',
                edad:1,
                duenio:'Mario'
            },
            {
                key:0,
                nombre:'Micho',
                tipo:'Gato',
                edad:1,
                duenio:'Mario'
            }

        ],
        animal:{
            key:0,
            nombre:'',
            tipo:'',
            edad:0,
            duenio:''
        },
        estado:'guardar'
    },
    getters:{
        getPersonas:state=>state.personas,
        getPersona:state=>state.persona,
        getEstado:state=>state.estado,
        getAnimales:state=>state.animales,
        getAnimal:state=>state.animal,

    },
    mutations:{
        setPersona(state,valor){
            state.personas.push(valor)
        },
        deletePersona(state,valor){
           state.personas.splice(valor,1)
        },
        loadPersona(state,valor){
            state.persona=valor
        },
        updatePersona(state,valor){
            state.personas[valor.key]=valor
        },

        setAnimal(state,valor){
            state.animales.push(valor)
        },
        deleteAnimal(state,valor){
           state.animales.splice(valor,1)
        },
        loadAnimal(state,valor){
            state.animal=valor
        },
        updateAnimal(state,valor){
            state.animales[valor.key]=valor
        },

        setEstado(state,valor){
            state.estado=valor
        },
    },
    actions:{
        setPersona(context,valor){
            context.commit('setPersona',valor)
        },
        deletePersona(context,valor){
            context.commit('deletePersona',valor)
        },
        loadPersona(context,valor){
            context.commit('loadPersona',valor.valor)
            context.commit('setEstado',valor.estado)
        },
        updatePersona(context,valor){
            context.commit('updatePersona',valor)
        },

        setAnimal(context,valor){
            context.commit('setAnimal',valor)
        },
        deleteAnimal(context,valor){
            context.commit('deleteAnimal',valor)
        },
        loadAnimal(context,valor){
            context.commit('loadAnimal',valor.valor)
            context.commit('setEstado',valor.estado)
        },
        updateAnimal(context,valor){
            context.commit('updateAnimal',valor)
        }

    }
})
