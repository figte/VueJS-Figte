<template>
    <div>
        <item v-for="(item, index) in items" :key="index" :titulo="item.titulo" :descripcion="item.descripcion"></item>
    </div>
</template>

<script>
import item from "./item.vue" 
export default {
    name:'feed',
    components:{
        'item':item
    },
    data() {
        return {
            items:[
                {titulo:"Publicacion 1", descripcion:'esta es la primera publicacion'},
                {titulo:"Publicacion 2", descripcion:'esta es la segunda publicacion'},
                {titulo:"Publicacion 3", descripcion:'esta es la tercer publicacion'},
            ]
        }
    },
}
</script>

<style>

</style>