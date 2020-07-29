import Vue from 'vue'
import Vuex from 'vuex'

//se le indica a vue que se utilizara vuex para  el manejo del estado
Vue.use(Vuex)

export default new Vuex.Store({
     //creando objetos para vuex
    state :{
        todos:[
            {
                id:0,
                task:'Tarea 1',
                completed:false
            },
            {
                id:1,
                task:'Tarea 2',
                completed:true
            },
            {
                id:2,
                task:'Tarea 3',
                completed:false
            }
        ]
    },
  
     getters:{
        getTodos:state=>state.todos
    },
  
     mutations:{
        ADD_TODO:(state, payload)=>{
            const newTask={
                id:payload.id,
                task:payload.task,
                completed:false
            }

            state.todos.unshift(newTask)
        },
        TOGGLE_TODO:(state, payload)=>{
             let item=state.todos.find(todo=>todo.id===payload)   
             item.completed=!item.completed
        },

        DELETE_TODO:(state, payload)=>{
            let index=state.todos.find(todo=>todo.id===payload) 
            state.todos.splice(index,1)
        }
    },
   
     actions:{
        addTodo:(context,payload)=>{
            context.commit('ADD_TODO',payload)
        },
        toggleTodo:(context,payload)=>{
            context.commit('TOGGLE_TODO',payload)
        },
        deleteTodo:(context,payload)=>{
            context.commit('DELETE_TODO',payload)
        }
    },
})