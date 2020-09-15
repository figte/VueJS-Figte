import firebase from "firebase/app";
import "firebase/app";
import "firebase/auth";
import swal from 'sweetalert'

const login={
    namespaced: true,
    state:()=>({
        login:false,
        user:{
            email:''
        },
    }),
    getters:{
        getStateLogin(state){
            return state.login
        },
        getUser(state){
            return state.user
        }
    },
    mutations:{
        setStateLogin(state, value){
            state.login=value
        },
        setUser(state,value){
            state.user=value
        }
    },
    actions:{
        
        login(context,value){
            firebase
            .auth()
            .signInWithEmailAndPassword(value.email, value.password)
              .then( (data) =>  {
                context.commit('setStateLogin',value.stateLogin)
               
                context.commit('setUser',{email:data.user.email})
                value.component.$router.replace('home')
                
              })
              .catch((error) =>{
                swal({
                    title: "Problemas!",
                    text: "Credenciales incorrectas",
                    icon: "error",
                    button: "entendido",
                  }) 
               console.log(error.message)
              }); 
        },

        logout(context,value){
            firebase
            .auth()
            .signOut()
              .then( () => {
                context.commit('setStateLogin',value.stateLogin)
                value.component.$router.replace('login')
              })    
        }
    }
}

export default login