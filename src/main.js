// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import $ from 'jquery'
import router from './router'
import MuseUI from 'muse-ui'
import MaterialDesignIcons from 'material-design-icons'
import 'material-design-icons/iconfont/material-icons.css'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-light.css'
import 'mint-ui/lib/style.css'
import Mint from 'mint-ui'
Vue.use(Mint);
Vue.use(MuseUI)
Vue.use(MaterialDesignIcons)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
