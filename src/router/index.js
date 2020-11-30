import Vue from "vue";
import VueRouter from "vue-router";
import Home from '../components/Home.vue'
import Blog from '../components/Blog.vue'


import Football from '../components/Football.vue'
import Hockey from '../components/Hockey.vue'
import Details from '../components/Details.vue'
import { BNavbar } from 'bootstrap-vue'
import { NavbarPlugin } from 'bootstrap-vue'
import { BContainer } from 'bootstrap-vue'
import { BMedia } from 'bootstrap-vue'
import { BImg } from 'bootstrap-vue'
import { BCard } from 'bootstrap-vue'
import { BCardGroup } from 'bootstrap-vue'
import { BCardText } from 'bootstrap-vue'

Vue.use(NavbarPlugin);
Vue.component('b-container', BContainer);
Vue.component('b-card', BCard);
Vue.component('b-card-group', BCardGroup);
Vue.component('b-card-text', BCardText);
Vue.component('b-navbar', BNavbar);
Vue.component('b-media', BMedia);
Vue.component('b-img', BImg);

Vue.use(VueRouter);

/*
const foot = {
    template: '<div class="user"><h2>Football {{ $route.params.id }}</h2><router-view></router-view></div>'
  }

  const hoc = {
    template: '<div class="user"><h2>Hockey {{ $route.params.id }}</h2><router-view></router-view></div>'
  }
*/
  const LaLiga = { template: '<div class="user"><h2>laliga {{ $route.params.id }}</h2><router-view></router-view</div>' 
}
  const PremierLeague = { template: '<h1>PremierLeague</h1>'+ Football }

  const NHL = { template: '<div>NHL</div>' + Hockey }
  const KHL = { template: '<div>KHL</div>' + Hockey }


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
  { path: '/football/:id', component: Football,
      children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'laliga',
          component: LaLiga
        },
        {
          // UserPosts will be rendered inside User's <router-view>
          // when /user/:id/posts is matched
          path: 'premierleague',
          component: PremierLeague
        }
      ]
    },
    { path: '/hockey/:id', component: Hockey,
      children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'NHL',
          component: NHL
        },
        {
          // UserPosts will be rendered inside User's <router-view>
          // when /user/:id/posts is matched
          path: 'KHL',
          component: KHL
        }
      ]
    },
    {
      path: "/details",
      name: "Details",
      component: Details,
    }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

export default router;