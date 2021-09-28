import Vue from 'vue'
import App from './App.vue'
import { routes } from './routes'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import './directives/Transform'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.options.root = 'https://jsonplaceholder.typicode.co'

new Vue({
  el: '#app',
  render: h => h(App),
  router: new VueRouter({ routes, mode: 'history' })
})
