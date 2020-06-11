import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import LkUi from './packages/index';

Vue.use(LkUi);

new Vue({
  render: h => h(App),
}).$mount('#app')
