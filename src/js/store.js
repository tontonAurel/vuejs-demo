import Vue from 'vue'
import Vuex from 'vuex/dist/vuex'

Vue.use(Vuex);

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  post: null,
  todos: [
    { id: 1, text: '...', done: true },
    { id: 2, text: '...', done: false }
  ]
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  save (state, post) {
    state.post = post
  },
}

// actions are functions that causes side effects and can involve
// asynchronous operations.
const actions = {
}

// getters are functions
const getters = {
  cachedPost: state => {
      return state.post
    },
  doneTodos: state => {
      return state.post
    }
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
