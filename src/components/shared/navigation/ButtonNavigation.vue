<template>
  <a href="url" class="btn-navigation">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: ["url"],
};
</script>

<style scoped>
.btn-navigation {
  color: #333;
  width: 100px;
  padding: 5px;
  display: block;
  margin: 0 auto;
  border-radius: 5px;
  text-align: center;
  margin-bottom: 13px;
  text-decoration: none;
  background: yellowgreen;
}
</style>
