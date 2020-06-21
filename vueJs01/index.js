const app=new Vue({ 
    el:"#app",
    data:{
        saludo:"Hola a todos!",
        productos:[],
        usuarios:[],
        n1:0,
        n2:0
    },
    methods: {
        
    },
    created() {

        //peticion para obtener un listado de usuario
        //asignandolo a la variable usuarios.
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then(json=>{
            this.usuarios=json;
        })

    }
});


