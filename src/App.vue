<template>
  <div class="container">
    <h1 class="page-title">{{ title }}</h1>
    <ul class="list-photos">
      <li class="list-photos__item" v-for="photo of photos" :key="photo.id">
        <emiscode-panel :title="photo.title">
          <img class="photo" :src="photo.thumbnailUrl">
        </emiscode-panel>
      </li>
    </ul>
  </div>
</template>

<script>
import Panel from './components/shared/panel/Panel.vue'

export default {
  components: {
    'emiscode-panel': Panel
  },

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
    .then(data => this.photos = data.slice(0, 24), err => {
      console.log(err)
    })
  }
};
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

  .page-title {
    color: #fff;
    text-align: center;
  }

  .list-photos {
    list-style: none;
  }

  .list-photos__item {
    display: inline-block;
    
  }

  .list-photos__item-title {
    font-size: 12px;
    text-transform: uppercase;
  }

  .photo {
    width: 100%;
  }
</style>
