import Vue from 'vue';


const NavComponent = Vue.component('nav-component', {
  template: `
  <nav>
    <router-link :to="{name:'section', params:{section:'demo'}}">Go to Demo</router-link>
    <router-link :to="{name:'section', params:{section:'foo'}}">Go to Foo</router-link>
    <router-link :to="{name:'bar', params:{section:$route.params.section}}">Go to Foo Childs</router-link>
  </nav>
`
});

export default NavComponent;
