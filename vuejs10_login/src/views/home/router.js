import Home from './Home.vue'
import Layout from '../../layouts/Layout2.vue'
const routes=
    {
        path:'/',
        component:Layout,
        children:[
            {
                path:'home',
                name:'home',
                component:Home
            }
        ],
        meta: {
            requiresAuth: true
        },
    }


export default routes