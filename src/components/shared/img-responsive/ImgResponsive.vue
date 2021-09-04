<template>
  <img class="photo" :src="url" :alt="title"/>
</template>

<script>
export default {
  props: ["url", "title"],
};
</script>

<style scoped>
.photo {
  width: 100%;
}
</style>