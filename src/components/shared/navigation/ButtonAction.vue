<template>
  <button class="btn btn-danger" :type="type">{{ label }}</button>
</template>

<script>
export default {
  props: ["type", "label"],
};
</script>

<style scoped>
.btn {
  margin: 10px;
  border: none;
  padding: 5px;
  color: #333;
  cursor: pointer;
  text-align: center;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
}

.btn-danger {
  background: lightcoral;
}

.btn-default {
  background: yellowgreen;
}
</style>
