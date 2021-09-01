<template>
  <div class="container">
    <h1 class="page-title">{{ title }}</h1>
    <ul class="list-photos">
      <li class="list-photos__item" v-for="photo of photos" :key="photo.id">
        <p class="list-photos__item-title">{{ photo.title }}</p>
        <img :src="photo.thumbnailUrl">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Gallery",
      photos: [],
    };
  },
  created() {
    const api = 'https://jsonplaceholder.typicode.com/albums/1/photos'

    this.$http.get(api)
    .then(res => res.json())
    .then(data => this.photos = data.slice(0, 21), err => {
      console.log(err)
    })
  }
};
</script>

<style>
  .container {
    width: 89%;
    margin: 0 auto;
    font-family: sans-serif;
  }

  .page-title {
    text-align: center;
  }

  .list-photos {
    list-style: none;
  }

  .list-photos__item {
    width: auto;
    display: inline-block;
    margin: 0px 2px 0px 2px;
  }

  .list-photos__item-title {
    display: none;
  }
</style>
