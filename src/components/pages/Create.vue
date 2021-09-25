<template>
  <div>
    <h1 class="title-create">Create</h1>
    <form @submit.prevent="savePhoto()">
      <div class="form-container">
        <label for="url">URL</label>
        <input
          id="thumbnailUrl"
          autocomplete="off"
          @input="setPhoto('thumbnailUrl', $event)"
          :value="photo.thumbnailUrl"
        />
        <emiscode-img-responsive />
      </div>

      <div class="form-container">
        <label for="title">Title</label>
        <textarea
          id="title"
          autocomplete="off"
          @input="setPhoto('title', $event)"
          :value="photo.title"
        ></textarea>
      </div>

      <div class="container-center">
        <emiscode-btn-action type="submit" label="Save" styleType="default" />
        <router-link to="/">
          <emiscode-btn-action type="button" label="Back" styleType="default" />
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import ButtonAction from "../shared/navigation/ButtonAction.vue";
import ImgResponsive from "../shared/img-responsive/ImgResponsive.vue";

export default {
  components: {
    "emiscode-btn-action": ButtonAction,
    "emiscode-img-responsive": ImgResponsive,
  },

  data() {
    return {
      photo: {
        title: "",
        thumbnailUrl: "",
      },
    };
  },

  methods: {
    setPhoto(prop, event) {
      this.photo[prop] = event.target.value;
    },

    savePhoto() {
      const { title, thumbnailUrl } = this.photo;
      const photo = { title, thumbnailUrl };

      console.log(photo);

      this.photo = {
        title: "",
        thumbnailUrl: "",
      };
    },
  },
};
</script>

<style scoped>
.title-create {
  color: #ffffff;
  text-align: center;
}

.container-center {
  text-align: center;
}

.form-container {
  font-size: 1.2em;
  margin-bottom: 30px;
}

.form-container label {
  color: cyan;
  display: block;
  font-weight: bold;
}

.form-container label + input,
.form-container textarea {
  width: 100%;
  font-size: inherit;
  border-radius: 5px;
  padding: 5px;
}
</style>

