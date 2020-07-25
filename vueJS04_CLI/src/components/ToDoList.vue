<template>
<div>
    <ul class="listado">
        <li v-for="todo in todos" :key="todo.text" v-text="todo.text"></li>
    </ul>

</div>
</template>

<script>
  import {EventBus} from '../helpers/EventBus.js'
  export default{
    name:'todo-list',
    props: ['todos'],
    created () {
      EventBus.$on('todo-add', todo => {
        this.todos.push(todo)
      })
    }
  }
</script>

<style lang="css" scoped>

  .listado{
    list-style-type: none; 
    background-color: darkgray;
  }
   .listado li {
    border: 2px solid rgb(6, 2, 63);
   }
</style>