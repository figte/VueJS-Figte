<template>
    <div class="container is-fluid mt-3">
         <router-link to="/personaForm">
            <button class="button is-info ">
                <i class='fas fa-plus-circle mr-1'></i> 
                Nuevo registro
            </button>
         </router-link> <br><br>
        <h4 class="is-size-3 has-text-centered ">Listado de personas</h4>
        <table  id="table" width="100%" class="table is-hoverable table is-narrow  is-fullwidth" >
            <thead>
                <tr>
                <th>NOMBRE</th>
                <th>EDAD</th>
                <th>DIRECCION</th>
                <th>OPERACIONES</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in personas" :key="index">
                    <td>{{item.nombre}}</td>
                    <td>{{item.edad}}</td>
                    <td>{{item.direccion}}</td>
                    <td>
                        <button class="button is-small is-danger mb-1" @click="eliminar(index)">
                            <i class="far fa-trash-alt mr-1"></i>    
                             Eliminar
                        </button>
                        <router-link to="/personaForm">
                            <button class="button is-small is-warning mb-1" @click="cargarPersona(item,index)">
                                <i  class="far fa-edit mr-1"></i>
                                Modificar
                            </button>
                        </router-link>
                        
                    </td>
                </tr>
            </tbody>

        </table>

        <!-- <datatable :columns="columns" :data="rows"></datatable> -->
    </div>
</template>

<script >
import $ from 'jquery'
import dt2 from 'datatables-bulma'
export default {
    name:'list',
    data() {
        return {
            // columns: [
            //     {label: 'id', field: 'id'},
            //     {label: 'Username', field: 'user.username', headerClass: 'class-in-header second-class'},
            //     {label: 'First Name', field: 'user.firstName'},
            //     {label: 'Last Name', field: 'user.lastName'},
            //     {label: 'Email', field: 'user.email'},
            //     {label: 'Address', representedAs: ({address, city, state}) => `${address}<br />${city}, ${state}`, interpolate: true}
            // ],
            // rows: [
            //     //...
            //     {
            //         id: 1,
            //         user: {
            //             username: "dprice0",
            //             firstName: "Daniel",
            //             lastName: "Price",
            //             email: "dprice0@blogs.com"
            //         },
            //         address: "3 Toban Park",
            //         city: "Pocatello",
            //         state: "Idaho"
            //     },
            //     {
            //         id: 2,
            //         user: {
            //             username: "dprice0",
            //             firstName: "Daniel",
            //             lastName: "Price",
            //             email: "dprice0@blogs.com"
            //         },
            //         address: "3 Toban Park",
            //         city: "Pocatello",
            //         state: "Idaho"
            //     }
                //...
            // ]
        }
    },
    mounted() {
       var table= $('#table').DataTable({
                    // dom: 'Bfrtip',
                    // buttons: [
                    //     'copy', 'excelHtml5', 'pdfHtml5'
                    // ],
                    "searching": true,
                    "destroy": true,
                    "conditionalPaging": true,
                    // "scrollY": '330px',
                    "scrollCollapse": true,
                    "paging": true,
                    "lengthMenu": [[5, 10, 20, 30], [5, 10, 20, 30]],
                    "order": [[0, "desc"]],
                    
                    "responsive": true,
                    // "data": this.data, //agregando datos del objeto manejado con VUE de forma reactiva
                    // "columns": [
                    //     // { "data": 'id' },
                    //     { "data": 'nombre' },
                    //     { "data": 'edad' },
                    //     { "data": 'direccion' },
                    //     { "data": 'operaciones' },
                    // ],
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
        

       
        //  //agregando un nueva instancia de botones
        // new $.fn.dataTable.Buttons(table, {
        //             buttons: [
        //                 {
        //                     extend: 'excelHtml5',
        //                     autoFilter: true,
        //                     sheetName: 'Exported data',
        //                     className: 'btn mb-3  fa-file-excel',
        //                     text: "  Excel",
        //                     download: 'open',
        //                     exportOptions: {
        //                         modifier: {
        //                             page: 'current'
        //                         },
        //                         columns: [0, 1, 2]
        //                     }

        //                 },
        //                 {
        //                     extend: 'pdfHtml5',
        //                     title: "LISTADO DE PERSONAS",
        //                     //    messageTop: 'listado de personas',
        //                     download: 'open',
        //                     className: 'btn  mb-3 far fa-file-pdf',
        //                     text: "  PDF",
        //                     exportOptions: {
        //                         modifier: {
        //                             page: 'current'
        //                         },
        //                         columns: [0, 1, 2]
        //                     }
        //                 },
        //                 {
        //                     extend: "print",
        //                     text: "  Imprimir",
        //                     title: "LISTADO DE PERSONAS",
        //                     className: 'btn  mb-3 fas fa-print',
        //                     exportOptions: {
        //                         modifier: {
        //                             page: 'current'
        //                         },
        //                         columns: [0, 1, 2]
        //                     }
        //                 },
        //             ]
        //         })

        // //anexando la instancia de botones antes creada                   
        // table.buttons(0, null).container().prependTo(
        //     table.table().container()
        // )
},
    computed: {
        personas(){
            return this.$store.getters.getPersonas
        }
    },
    methods: {
        eliminar(key){
            this.$store.dispatch('deletePersona',key)
        },
        cargarPersona(valor,key){
            valor.key=key
            this.$store.dispatch('loadPersona',{valor:valor,estado:'modificar'})
        }
    },
}
</script>

<style >
@import '~datatables.net-dt/css/jquery.dataTables.css';
@import '~datatables-bulma/css/dataTables.bulma.min.css';
</style>