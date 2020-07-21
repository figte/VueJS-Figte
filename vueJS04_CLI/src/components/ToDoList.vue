<template>
    <ul>
        <li v-for="todo in todos" :key="todo.text" v-text="todo.text"></li>
    </ul>
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
