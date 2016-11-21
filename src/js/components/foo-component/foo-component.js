import Vue from 'vue';


const FooComponent = Vue.component('foo-component', {
  template: `
  <div :class="$route.params.section">
  Name {{ $route.params.section }}
  <div>
    <transition name="fade">
    <router-view></router-view>
    </transition>
  </div>
  </div>`,
});

export default FooComponent;
