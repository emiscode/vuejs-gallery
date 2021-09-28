import Vue from 'vue'
import App from './App.vue'
import { routes } from './routes'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VeeValidate from 'vee-validate'

import './directives/Transform'
// import 'bootstrap/dist/css/bootstrap.css'
// import './assets/css/style.css'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VeeValidate)

Vue.http.options.root = 'https://jsonplaceholder.typicode.com'

new Vue({
  el: '#app',
  render: h => h(App),
  router: new VueRouter({ routes, mode: 'history' })
})
