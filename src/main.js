import Vue from 'vue'
import App from './App.vue'
import router from './router';

import "./style.scss";

/*
import VueRouter from "vue-router";
import Home from './components/Home.vue'
import Blog from './components/Blog.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

*/
Vue.config.productionTip = false;


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App),
}).$mount('#app')
