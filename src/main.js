import Vue from 'vue'
import App from './App'
import router from './router'
import 'whatwg-fetch'
import '../static/style.scss'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
