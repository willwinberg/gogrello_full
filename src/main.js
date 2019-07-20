import Vue from 'vue'
import './plugins/fontawesome'
import App from './App'
import router from './router'
// import store from './store'
import axios from 'axios'

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://localhost:3000'

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
