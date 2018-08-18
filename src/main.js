import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from './vuex/index'
import "./registerServiceWorker";
import './ml'

import Notifications from 'vue-notification'
Vue.use(Notifications)

import VeeValidate from 'vee-validate'
Vue.use(VeeValidate)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
