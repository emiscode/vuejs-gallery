<template>
  <div>
    <h1 class="page-title">{{ title }}</h1>
    <input
      type="search"
      class="search"
      placeholder="search"
      @input="doSearch($event)"
    />
    <ul class="list-photos">
      <li
        class="list-photos__item"
        v-for="photo of filteredPhotos"
        :key="photo.id"
      >
        <emiscode-panel :title="photo.title">
          <emiscode-img-responsive
            :src="photo.thumbnailUrl"
            :alt="photo.title"
          />
          <emiscode-btn-action type="button" label="Delete" slot="buttons"/>
        </emiscode-panel>
      </li>
    </ul>
  </div>
</template>

<script>
import Panel from "../shared/panel/Panel.vue";
import ImgResponsive from "../shared/img-responsive/ImgResponsive.vue";
import ButtonAction from "../shared/navigation/ButtonAction.vue";

export default {
  components: {
    "emiscode-panel": Panel,
    "emiscode-img-responsive": ImgResponsive,
    "emiscode-btn-action": ButtonAction,
  },

  methods: {
    doSearch(event) {
      this.search = event.target.value;
    },
  },

  computed: {
    filteredPhotos() {
      if (this.search) {
        //return this.photos.filter(photo => photo.title.includes(this.search.trim()))
        const exp = new RegExp(this.search.trim(), "i");
        return this.photos.filter((photo) => exp.test(photo.title));
      } else {
        return this.photos;
      }
    },
  },

  data() {
    return {
      title: "Gallery",
      photos: [],
      search: "",
    };
  },
  created() {
    const api = "https://jsonplaceholder.typicode.com/albums/1/photos";

    this.$http
      .get(api)
      .then((res) => res.json())
      .then(
        (data) => (this.photos = data.slice(0, 24)),
        (err) => {
          console.log(err);
        }
      );
  },
};
</script>

<style>
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

.search {
  width: 30%;
  padding: 10px;
  margin: 0 auto;
  display: block;
}
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
