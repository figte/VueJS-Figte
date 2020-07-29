<template>
   <div>
       <fieldset>
         <h1>{{titulo}}</h1>
         <hr>
         <p>{{descripcion}}</p>
         <button @click="ver">Ver</button>
       </fieldset>
   </div>
</template>

<script>
export default {
   name:'item',
   props:['titulo','descripcion'],
   methods: {
      ver(){
         alert("observando...."+this.descripcion)
      }
   },
}
</script>

<style>

</style>