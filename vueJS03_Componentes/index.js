
//creando componente estatico
Vue.component("componente", {
    template:`  
    <div>
        <h1>componente</h1>
        <ul>
            <li>dato 1</li>
        </ul>
    </div>
    `,
})

//creando un componente dinamico 
Vue.component("elemento", {
    props:['usuario'],
    template:"#tarjeta",

})

//creando instancia de aplicacion VueJS
const mv=new Vue({
    el:"#app",
    data:{
        titulo:"App con VueJs",
        usuarios:[
            {nombre:"jose"},
            {nombre:"juan"}
        ],
        item:"valor"
    },
});



