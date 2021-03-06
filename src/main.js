import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import dataManager from './DataManager.js'

Vue.config.productionTip = false;

new Vue({
  router,
  data : dataManager,
  render: h => h(App)
}).$mount("#app");

