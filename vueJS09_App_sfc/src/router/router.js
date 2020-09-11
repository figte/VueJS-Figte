import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home/home.vue'
import ListPersona from '../components/persona/list.vue'
import ListAnimal from '../components/animal/list.vue'
import FormPersona from '../components/persona/Form.vue'
import FormAnimal from '../components/animal/Form.vue'

Vue.use(VueRouter)

const Error404={template:'<h2>Error404</h2>'}

const routes=[
    {path:'/', component:Home},
    {path:'/persona', component:ListPersona},
    {path:'/personaForm', component:FormPersona},
    {path:'/animal', component:ListAnimal},
    {path:'/animalForm', component:FormAnimal},
    {path:"*",component:Error404},
]

const router=new VueRouter({
    routes
})

export default router