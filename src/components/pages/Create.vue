<template>
  <div>
    <h1 class="title-create">Form</h1>
    <form @submit.prevent="savePhoto()">
      <div class="form-container">
        <label for="url">Thumbnail URL</label>
        <input
          id="thumbnailUrl"
          name="thumbnailUrl"
          autocomplete="off"
          v-model="photo.thumbnailUrl"
          v-validate
          data-vv-rules="required|min:3"
        />
        <span class="msg-validate-field" v-show="errors.has('thumbnailUrl')">{{
          errors.first("thumbnailUrl")
        }}</span>
        <div class="container-preview-img">
          <emiscode-img-responsive
            v-show="photo.thumbnailUrl"
            :url="photo.thumbnailUrl"
          />
        </div>
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
        <router-link :to="{ name: 'home' }">
          <emiscode-btn-action type="button" label="Back" styleType="default" />
        </router-link>
      </div>
      <div class="container-message">
        <p class="message" v-show="message">{{ message }}</p>
      </div>
    </form>
  </div>
</template>

<script>
import ButtonAction from "../shared/navigation/ButtonAction.vue";
import ImgResponsive from "../shared/img-responsive/ImgResponsive.vue";
import Photo from "../../models/Photo";
import PhotoService from "../../services/PhotoService";

export default {
  components: {
    "emiscode-btn-action": ButtonAction,
    "emiscode-img-responsive": ImgResponsive,
  },

  data() {
    return {
      photo: new Photo(),
      id: this.$route.params.id,
      message: "",
    };
  },

  created() {
    this.service = new PhotoService(this.$resource);

    if (this.id) {
      console.log(`Getting photo by Id ${this.id}`);

      this.service
        .findById(this.id)
        .then((photo) => {
          this.photo = photo[0];
        })
        .catch((err) => {
          console.log(err);
          this.message = `Error while chaging photo: ${this.id}`;
        });
    }
  },

  methods: {
    setPhoto(prop, event) {
      this.photo[prop] = event.target.value;
    },

    savePhoto() {
      this.$validator.validateAll().then((success) => {
        if (success) {
          const { title, thumbnailUrl } = this.photo;
          const photo = { title, thumbnailUrl };

          this.service
            .save(photo)
            .then(() => {
              this.message = `Saved: ${JSON.stringify(photo)}`;
              this.photo = new Photo();
            })
            .catch((err) => {
              console.log(err);
              this.message = `Error while saving photo: ${JSON.stringify(err)}`;
            });
        } else {
          console.log(success);
          this.message = `Form has errors, cannot send photo to be saved`;
        }
      });
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

.container-preview-img {
  width: 150px;
  display: block;
  margin-top: 5px;
}

.container-message {
  background: cyan;
}

.message {
  padding: 5px;
  color: #333;
  font-weight: bold;
}

.msg-validate-field {
  display: block;
  margin-top: 10px;
  color: lightcoral;
}
</style>

