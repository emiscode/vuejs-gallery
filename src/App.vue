<template>
  <div class="container">
    <h1 class="page-title">{{ title }}</h1>
    <ul class="list-photos">
      <li class="list-photos__item" v-for="photo of photos" :key="photo.id">
        <div class="panel">
          <div class="panel-photo">
            <img class="photo" :src="photo.thumbnailUrl">
          </div>
          <div class="panel-title">
            <p class="list-photos__item-title">{{ photo.title }}</p>
          </div>
        </div>
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

  .panel {
    margin: 5px;
    width: 190px;
    height: 100%;
    min-height: 300px;
    text-align: center;
    vertical-align: top;
    display: inline-block;
    background: #f1f1f1;
    border: solid 1px #000;
  }

  .list-photos__item-title {
    font-size: 12px;
    text-transform: uppercase;
  }

  .panel-title {
    padding: 0px 10px 0px 10px;
  }

  .panel-photo {
    width: 100%;
  }

  .photo {
    width: 100%;
  }
</style>
