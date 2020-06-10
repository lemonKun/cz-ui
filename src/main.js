import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import CzUi from './packages/index';

Vue.use(CzUi);

new Vue({
  render: h => h(App),
}).$mount('#app')
