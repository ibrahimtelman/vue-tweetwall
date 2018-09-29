import VueSocketio from 'vue-socket.io';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(VueSocketio, '//:8081', store);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
