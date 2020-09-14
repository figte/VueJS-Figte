import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home/router'
import login from '../views/login/router'
import usuario from '../views/usuario/router'
import error from '../views/error/router'

Vue.use(VueRouter)



const routes=[
    {path:'/',redirect:'login'},
    login,
    home,
    usuario,
    error,
  ]




const router = new VueRouter({
  routes
})

// router.beforeEach((to, from, next) => {
//   // redirect to login page if not logged in and trying to access a restricted page
//   const publicPages = ['/login', '/register'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');

//   if (authRequired && !loggedIn) {
//     return next('/login');
//   }

//   next();
// })

export default router
