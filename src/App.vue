<template>
  <div class="container">
    <emiscode-menu :routes="routes"/>
    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { routes } from "./routes";
import Menu from "./components/shared/navigation/Menu.vue"

export default {
  components: {
    'emiscode-menu': Menu
  },

  data() {
    return {
      routes: routes.filter(route => route.menu)
    };
  },
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

.page-enter,
.page-leave-active {
  opacity: 0;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
</style>
