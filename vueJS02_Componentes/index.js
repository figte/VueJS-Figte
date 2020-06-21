 app=new Vue({
  el:"#app",
  data:{
       titulo:"Mi App VueJS",
       tipo_formulario:null,
       formulario:{  //para recolectar los datos del formulario
           nombre:'',
           email:'',
           carrera:'',
           especialidad:''
       },
       carreras:[
           {id:1, nombre:"Ingenieria en Sistemas"},
           {id:2, nombre:"Licenciatura en idiomas"},
           {id:3, nombre:"Ingenieria en electronica"}

       ],
       especialidades:[
           {id:1, nombre:"Ingenieria"},
           {id:2, nombre:"Tecnico"},
           {id:3, nombre:"Licenciatura"}

       ],
       datos:[]  //para almacenar todos lo datos recolectados en el formulario
  },
  methods: {
      agregar:function(){
          //agregando los datos del formulario al almacenamiento interno
          //de la data, evitando la reactividad
          this.datos.push({
            nombre:this.formulario.nombre,
            email:this.formulario.email,
            carrera:this.formulario.carrera,
            especialidad:this.formulario.especialidad
         });
         alert("agregado"); //mensaje de notificacion
      },
   
     
  },
   computed: {

   },
})