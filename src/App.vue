<template>
  <div>
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="photo of photos" :key="photo.id">
        <img :src="photo">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Dogs",
      photos: [],
    };
  },
  created() {
    const apis = [
      'https://dog.ceo/api/breed/hound/english/images',
      'https://jsonplaceholder.typicode.com/photos'
    ]

    this.$http.get(apis[0])
    .then(res => res.json())
    .then(data => this.photos = data.message, err => {
      console.log(err)
    })
  }
};
</script>

<style>
</style>
