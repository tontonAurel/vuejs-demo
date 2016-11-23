import Vue from 'vue';


const NavComponent = Vue.component('nav-component',  {
  template: `
    <div>
    <span>{{ message }}</span>
    <div>
      {{ header }}
      </div>
    </div>`,
  data: function() {
    return {
      message: 'content',
    }
  }, computed: {
    header: function() {
      return this.message + new Date()
    }
  }
})

export default NavComponent;
