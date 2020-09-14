import Usuario from './Usuario.vue'
import Layout from '../../layouts/Layout2.vue'
const routes=
    {
        path:'/',
        component:Layout,
        children:[
            {
                path:'usuario',
                name:'usuario',
                component:Usuario
            }
        ]
    }


export default routes