<template>
<div >
    <ul class="menu">
        <li><a class="active" href="#home">Home</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">About</a></li>
    </ul>
</div>
</template>

<script>
export default {
    name:'nav-bar',
}
</script>

<style lang="css" scoped>
         .menu {
            list-style-type: none;
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color:coral;
        }

        .menu li {
         float: left;
        }

        .menu li a {
            display: block;
            color: white;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
        }

       .menu li a:hover:not(.active) {
             background-color: #111;
        }

        .active {
          background-color: #4CAF50;
        }
</style>