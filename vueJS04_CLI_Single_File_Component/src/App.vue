<template>
  <div id="app">
     <nav-bar></nav-bar>  
    <img src="./assets/logo.png" />
    <h1>{{ msg }}</h1>
    
    <div>
      <todo-list :todos="todos"></todo-list>
      <todo-add></todo-add>
    </div> <br><br>

      <feed></feed>

  </div>
</template>

<script>
import ToDoList from "./components/ToDoList.vue";
import ToDoAdd from "./components/ToDoAdd.vue";
import feed from "./components/feed.vue";
import navBar from "./components/navBar.vue";

export default {
  name: "app",
  components: {
    'todo-list':ToDoList,
    'todo-add':ToDoAdd,
    'feed': feed,
    'nav-bar':navBar,
  },
  data() {
    return {
      msg: "Mi App con Vue CLI",
      todos: [{ text: "Tarea 1" }, { text: "Tarea 2" }]
    };
  }
};
</script>

<style lang="css" >
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

</style>
