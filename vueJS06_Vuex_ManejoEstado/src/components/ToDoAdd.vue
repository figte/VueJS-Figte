<template >
        <form @submit.prevent="addTodo">
            <input type="text" class="ToDo-input" placeholder="agregue una tarea" v-model="task">
        </form>
</template>
<script>
    export default {
        name:'todo-add',
        data(){
            return {
                task:'',
                id:3
            }
        },
        methods:{
            addTodo(){
                this.$store.dispatch('addTodo',this)
                this.id++
                this.task=''
            }
        },
    }
</script>