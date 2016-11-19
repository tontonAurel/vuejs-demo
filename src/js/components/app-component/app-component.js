import Vue from 'vue';

const AppComponent = Vue.component('app-component', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>',
});

export default AppComponent;
