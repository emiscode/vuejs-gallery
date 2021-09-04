<template>
  <nav>
    <ul>
      <li class="btn-list" v-for="route in routes" :key="route.id">
        <router-link class="btn-nav" :to="route.path">{{
          route.title
        }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
      routes: {
          type: Array,
          required: true
      }
  }
};
</script>

<style scoped>
.btn-list {
  display: inline;
}

.btn-nav {
  margin: 5px;
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
