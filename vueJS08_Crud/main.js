// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCjVm4m57Xkmj82c9dTjwX1SdYuLPVl_Ig",
    authDomain: "myapp-a9c4b.firebaseapp.com",
    databaseURL: "https://myapp-a9c4b.firebaseio.com",
    projectId: "myapp-a9c4b",
    storageBucket: "myapp-a9c4b.appspot.com",
    messagingSenderId: "814232557555",
    appId: "1:814232557555:web:34a91a64e79ae641fba486",
    measurementId: "G-JJPZHZCK7V"
},
    // Initialize Firebase
    app = firebase.initializeApp(firebaseConfig),
    db = app.database(),
    personaModel = db.ref('personas')

  

//agregando componentes
Vue.component("datos", {
    template: "#datos",
    data() {
        return {
            data: [],
            persona: {
                id:"",
                nombre: "",
                edad: null,
                direccion: ""
            },
            table:null,
            edit:false
        }
    },
    mounted() {

        this.cargarDatos()

    },
    methods: {
        //funcion para obtener registros de la base de datos
        cargarDatos() {
            this.data = [];

            //realizando la peticion a firebase,para cargar los datos
            personaModel.once("value").then((data) => {
                // console.log(data.val())
                //recorriendo los datos ordenados
                data.forEach(element => {
                    id=element.key;
                    nombre = element.val().nombre
                    edad = element.val().edad
                    direccion = element.val().direccion
                    operaciones = `
                           <button onclick='vue.$children[0].eliminar("`+element.key+`")' class="btn btn-danger far fa-trash-alt ml-1 mb-1">  Eliminar</button>
                           <button onclick='vue.$children[0].cargarEstudiante("`+element.key+`")' class="btn btn-primary fas fa-edit" data-toggle="modal" data-target="#myModal">  Modificar</button>
                        `
                     //this.data.push(element.val())
                    // console.log(element.key)
                    //agregando los datos al objeto  manejado con VUE JS con reactividad
                    this.data.push({id:id, nombre: nombre, edad: edad, direccion: direccion, operaciones: operaciones })
                })

             
                //  $('#table').DataTable().destroy();

                this.table = $('#table').DataTable({

                    "searching": true,
                    "destroy": true,
                    "conditionalPaging": true,
                    "scrollY": '330px',
                    "scrollCollapse": true,
                    "paging": true,
                    "lengthMenu": [[5, 10, 20, 30], [5, 10, 20, 30]],
                    "order": [[0, "desc"]],
                    "responsive": true,
                   "data": this.data, //agregando datos del objeto manejado con VUE de forma reactiva
                    "columns": [
                        // { "data": 'id' },
                        { "data": 'nombre' },
                        { "data": 'edad' },
                        { "data": 'direccion' },
                        { "data": 'operaciones' },
                    ],

                    // dom: 'Bfrtip',

                    "language": {
                        "lengthMenu": "Mostrar _MENU_ ",
                        "zeroRecords": "Datos no encontrados",
                        "info": "Mostar páginas _PAGE_ de _PAGES_",
                        "infoEmpty": "Datos no encontrados",
                        "infoFiltered": "(Filtrados por _MAX_ total registros)",
                        "search": "Buscar:",
                        "paginate": {
                            "first": "Primero",
                            "last": "Anterior",
                            "next": "Siguiente",
                            "previous": "Anterior"
                        },
                    }

                })

                //agregando un nueva instancia de botones
                new $.fn.dataTable.Buttons(this.table, {

                    buttons: [
                        {
                            extend: 'excelHtml5',
                            autoFilter: true,
                            sheetName: 'Exported data',
                            className: 'btn btn-success mb-3 far fa-file-excel',
                            text: "  Excel",
                            download: 'open',
                            exportOptions: {
                                modifier: {
                                    page: 'current'
                                },
                                columns:[0,1,2]
                            }

                        },
                        {
                            extend: 'pdfHtml5',
                            title: "LISTADO DE PERSONAS",
                            //    messageTop: 'listado de personas',
                            download: 'open',
                            className: 'btn btn-lg btn-info mb-3 far fa-file-pdf',
                            text: "  PDF",
                            exportOptions: {
                                modifier: {
                                    page: 'current'
                                },
                                columns:[0,1,2]
                            }
                        },
                        ,
                        {
                            extend: "print",
                            text: "  Imprimir",
                            title: "LISTADO DE PERSONAS",
                            className: 'btn btn-lg  mb-3 fas fa-print',
                            exportOptions: {
                                modifier: {
                                    page: 'current'
                                },
                                columns:[0,1,2]
                            }
                        },
                        {
                            extend: "colvis",
                            text: "  Visibilidad",
                            className: 'btn btn-lg btn-warning mb-3 fas fa-th-list',
                        }

                    ],
                })

                //anexando la instancia de botones antes creada                   
                this.table.buttons(0, null).container().prependTo(
                    this.table.table().container()
                )

                // table.buttons(0,null).container()
                //     .appendTo( $('.col-sm-6:eq(0)', table.table().container() ) );
            })

            //console.log(this.data)
        },

        guardar() {
            //realizando el guardado en la base de datos        
            personaModel.push({ nombre: this.persona.nombre, edad: this.persona.edad, direccion: this.persona.direccion })
                .then(() => {
                    //realizando la notificacion de guardado  
                    swal({
                        title: "Guardado!",
                        text: "Registro guardado con exito!",
                        icon: "success",
                        button: "ok",
                    });
                      //recargando datos
                    this.cargarDatos()
                    //reset del objeto persona
                    this.persona = {
                        nombre: "",
                        edad: null,
                        direccion: ""
                    }
                })

          

        },
        
        eliminar(id){
            
            personaModel.child(id).remove()
            .then(() =>{
                swal({
                    title: "Eliminado!",
                    text: "Registro eliminado con exito!",
                    icon: "success",
                    button: "ok",
                })
                  //recargando datos
                
            })
            .catch(() => {
                swal({
                    title: "Problemas!",
                    text: "No se elimino el registro!",
                    icon: "danger",
                    button: "ok",
                });
            })

            this.cargarDatos()
        },

        cargarEstudiante(id){
            personaModel.child(id).once("value").then((data) => {
               this.persona.id=data.key
               this.persona.nombre=data.val().nombre
               this.persona.edad=data.val().edad
               this.persona.direccion=data.val().direccion
               this.edit=true
           })
        },

        modificar(){
            personaModel.child(this.persona.id).update({
                nombre: this.persona.nombre ,
                edad:this.persona.edad,
                direccion: this.persona.direccion
              })
                .then(() =>{
                    swal({
                        title: "Modificado!",
                        text: "Registro modificado con exito!",
                        icon: "success",
                        button: "ok",
                    })
                      //recargando datos
                      this.cargarDatos()
                      
                      this.reset()
                    
                })
                .catch(() => {
                    swal({
                        title: "Problemas!",
                        text: "No se modifico el registro!",
                        icon: "danger",
                        button: "ok",
                    });
                })
    
        },

        reset(){
            this.edit=false
             //reset del objeto persona
             this.persona = {
                nombre: "",
                edad: null,
                direccion: ""
            }
        }
    },
})

//creando instancia de vue y pasando la instacia de vue router
const vue = new Vue({
    el: '#app',
})

console.log(vue.$children[0].data)