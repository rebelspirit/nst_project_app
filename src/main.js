// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbvue/build/css/mdb.css';
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;
var VueTouch = require('vue-touch');
Vue.use(VueTouch, {name: 'v-touch'});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});