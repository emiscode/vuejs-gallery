<template>
  <div class="panel">
    <div class="panel-content" @dblclick="setTitleVisibility">
      <slot></slot>
    </div>
    <transition name="panel-fade">
      <div class="panel-title" v-show="visibility">
        <div class="panel-title__label">{{ title }}</div>
        <slot name="buttons"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["title"],

  methods: {
    setTitleVisibility() {
      this.visibility = !this.visibility;
    },
  },

  data() {
    return {
      visibility: true,
    };
  },
};
</script>

<style scoped>
.panel {
  margin: 5px;
  width: 190px;
  height: 100%;
  min-height: 310px;
  text-align: center;
  vertical-align: top;
  display: inline-block;
  background: #f1f1f1;
  border: solid 1px #000;
}

.panel-title {
  padding: 0px 10px 0px 10px;
}

.panel-title__label {
  min-height: 120px;
}

.panel-content {
  width: 100%;
}

.panel-fade-enter,
.panel-fade-leave-active {
  opacity: 0;
}

.panel-fade-enter-active,
.panel-fade-leave-active {
  transition: opacity 0.5s;
}
</style>
