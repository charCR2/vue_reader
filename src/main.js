// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import MuseUI from 'muse-ui';
import './assets/reset.css'
import 'muse-ui/dist/muse-ui.css';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import store from './store'
import Mui from 'vue-awesome-mui';

Vue.use(Mui);  //监听手机返回键
Vue.use(MintUI); //两个ui框架
Vue.use(MuseUI);
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
