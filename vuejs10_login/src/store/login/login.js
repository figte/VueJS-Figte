
const login={
    namespaced: true,
    state:()=>({
        login:false,
        user:{},
    }),
    getters:{
        getStateLogin(state){
            return state.login
        }
    },
    mutations:{
        setStateLogin(state, valor){
            state.login=valor
        }
    },
    actions:{
        setStateLogin(context,valor){
            context.commit('setStateLogin',valor)
        }
    }
}

export default login