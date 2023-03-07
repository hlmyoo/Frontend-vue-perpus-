import Vue from 'vue'
import App from './App.vue'
import router from './router'


Vue.config.productionTip = false

Vue.component('navbar-component', require('./components/template/NavigationBar.vue').default);
Vue.component('sidebar-component', require('./components/template/AppSidebar.vue').default);

new Vue({
  router,
  
  render: h => h(App)
}).$mount('#app')

