import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from "./router"
import { store } from './store/store'
import i18n from './i18n'

// asset imports
import "./assets/scss/main.scss"


window.eventBus = new Vue()


Vue.config.productionTip = false;


router.beforeEach((to, from, next) => {

  let language = to.params.lang;
  if (!language) {
    language = 'en'
  }

  i18n.locale = language
  next()
})






new Vue({
  router,
  store: store,
  i18n,
  render: h => h(App)
}).$mount('#app')