import Vue from 'vue';
import App from './App.vue';


Vue.config.productionTip = false;
Vue.component("clock", () => import("@/components/clock"));
new Vue({
  render: h => h(App),
}).$mount('#app');
