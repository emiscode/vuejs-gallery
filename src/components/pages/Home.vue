<template>
  <div>
    <h1 v-emiscode-transform.reverse class="page-title">{{ title }}</h1>
    <p v-emiscode-colorize="'cyan'" class="page-subTitle">{{ subTitle }}</p>
    <input
      type="search"
      class="search"
      placeholder="search"
      @input="doSearch($event)"
      v-emiscode-transform:scale="{ dimension: 1, animation: true }"
    />
    <div class="container-message">
        <p class="message" v-show="message">{{ message }}</p>
      </div>
    <ul class="list-photos">
      <li
        class="list-photos__item"
        v-for="photo of filteredPhotos"
        :key="photo.id"
      >
        <emiscode-panel v-emiscode-transform:rotate="{ dimension: 180, animation: true }" :title="photo.title">
          <emiscode-img-responsive
            :src="photo.thumbnailUrl"
            :alt="photo.title"
          />
          <emiscode-btn-action
            type="button"
            label="Delete"
            slot="buttons"
            :confirm="true"
            styleType="danger"
            @btnClicked="remove(photo)"
          />
          <router-link :to="{ name: 'modify', params: { id: photo.id } }" slot="buttons">
          <emiscode-btn-action
            type="button"
            label="Modify"
            styleType="default-blue"
          />
          </router-link>
        </emiscode-panel>
      </li>
    </ul>
  </div>
</template>

<script>
import Panel from "../shared/panel/Panel.vue";
import ImgResponsive from "../shared/img-responsive/ImgResponsive.vue";
import ButtonAction from "../shared/navigation/ButtonAction.vue";
import Colorize from "../../directives/Colorize"
import PhotoService from "../../services/PhotoService"

export default {
  components: {
    "emiscode-panel": Panel,
    "emiscode-img-responsive": ImgResponsive,
    "emiscode-btn-action": ButtonAction,
  },

  directives: {
    'emiscode-colorize': Colorize
  },

  methods: {
    doSearch(event) {
      this.search = event.target.value;
    },

    remove(photo) {
      this.message = ''
      this.service.delete(photo.id)
      .then(() => {
        const index = this.photos.findIndex(el => {
          return el.id == photo.id
        })
      
        this.photos.splice(index, 1)
      })
      .catch(err => {
        console.log(err)
        this.message = `Error while removing photo: ${JSON.stringify(err)}`
      })
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
      subTitle: "Amazing 150x150 photos",
      photos: [],
      search: "",
      message: ''
    };
  },
  created() {
    this.service = new PhotoService(this.$resource)

    this.service
      .listAll()
      .then((data) => this.photos = data.slice(0, 24))
      .catch((err) => { 
        this.message = err.message
      })
  },
};
</script>

<style>
.page-title {
  color: #fff;
  text-align: center;
}

.page-subTitle {
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

.container-message {
  background: cyan;
}

.message {
  padding: 5px;
  color: #333;
  font-weight: bold;
}
</style>
