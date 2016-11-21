import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import NavComponent from './components/nav-component/nav-component';
import FooComponent from './components/foo-component/foo-component';


const Foo = FooComponent;
const Bar = {template: '<div>bar</div>'};
const Main = {template: '<div><router-view></router-view></div>'};

// const routes = [
//
//   { path: '/bar',  component: Bar},
//   { path: '/:section', name:'section', component: Foo}
//
// ];

const routes= [
    {
      path: '/',
      components: {
        default: Main,
        nav: NavComponent
      },
      children: [
        {
          path: '/:section',
          name:'section',
          component: Foo,
          children: [{
            path:'bar',
            name:'bar',
            component: Bar,
          }]
        }
      ],
    }
  ]


// const UserHome = { template: '<div>Home</div>' }
// const UserProfile = { template: '<div>Profile</div>' }
// const UserPosts = { template: '<div>Posts</div>' }
// const Nav = { template: '<div>Nav</div>' }
// const Main = { template: '<div><router-view></router-view></div>' }
//
// const User = {
//   template: `
//     <div class="user">
//       <h2>User {{ $route.params.id }}</h2>
//       <router-view></router-view>
//     </div>
//   `
// }
//
// const routes= [
//     {
//       path:"/",
//       component: Main,
//       children: [
//         { path: '/user/:id', component: User,
//         children: [
//           { path: '', component: UserHome },
//           {
//             path: 'profile',
//             component: UserProfile
//           },
//           {
//             path: 'posts',
//             component: UserPosts
//           }
//         ]
//       }
//     ]
//   }
// ]

const router = new VueRouter({
  routes, // short for routes: routes,
  // mode: 'history',
});


var app = new Vue({
  el: '#app',
  router,
  components: {
    'nav-component': NavComponent
  }
});

var content = new Vue({
  
})
