<template>
  <div class="container">
    <nav>
      <ul>
        <li class="btn-list"><router-link class="btn-nav" to="/">Home</router-link></li>
        <li class="btn-list"><router-link  class="btn-nav" to="/create">Create</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
body {
  background: #333;
}

.container {
  width: 89%;
  margin: 0 auto;
  font-family: sans-serif;
}

.btn-list {
  display: inline;
}

.btn-nav {
  color: #333;
  width: 100px;
  padding: 5px;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  background: yellowgreen;
}
</style>
