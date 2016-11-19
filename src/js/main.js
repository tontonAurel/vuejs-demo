import Vue from 'vue';
// don't worry, we haven't created this yet!
import AppComponent from './components/app-component/app-component';

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hesllo Vue!',
    title: 'Test Title ' + new Date(),
    seen: true,
    todos: [
      {text:'Todo 1'},
      {text:'Todo 2'},
      {text:'Todo 3'},
      {text:'Todo 4'},
    ]
  },
  methods: {
    updateMessage: function (d) {
      this.message = d;
    }
  },
  components: {
    'app-component': AppComponent
  }
});
