import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource/dist/vue-resource';
import Post from './Post.vue';
import store from './store';

// import VueResource from '../src/index';
Vue.use(VueRouter);
Vue.use(VueResource);

const Home = { template: '<div>home</div>' }

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/post/:id', component: Post }
  ]
})

new Vue({
  store,
  router,
  template: `
    <div id="app">
      <h1>Data Fetching</h1>
      <ul>
        <router-link tag="li" to="/"><a>/</a></router-link>
        <li><router-link to="/post/1">/post/1</router-link></li>
        <li><router-link to="/post/2">/post/2</router-link></li>
        <li><router-link to="/post/3">/post/3</router-link></li>
      </ul>
      <router-view class="view"></router-view>
    </div>
  `
}).$mount('#app');
