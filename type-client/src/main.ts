import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCompositionApi from '@vue/composition-api'
import './assets/tailwind.css'
import './assets/sass/main.scss'
import { MyLibrary } from 'my-library'

Vue.use(VueCompositionApi)
Vue.use(MyLibrary as any)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
