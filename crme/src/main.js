import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import eleUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' //此方法只能引入本地文件

Vue.use(eleUi)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
