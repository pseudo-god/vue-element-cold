import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';

import ElementUI from 'element-ui';
import '@/style/index.scss'; // global css
import '@/style/element-variables.scss';

import '@/icons/index.js';

Vue.use(ElementUI);
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App)
}).$mount('#app');
