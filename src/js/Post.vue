<template>
  <div class="post">
    <div class="loading" v-if="loading">Loading...</div>
    <div v-if="error" class="error">
      {{ error }}
    </div>
    <transition name="slide">
      <!--
        giving the post container a unique key triggers transitions
        when the post id changes.
      -->
      <div v-if="cached" class="content" :key="cached.id">
        <h2>{{ cached.title }}</h2>
        <p>{{ cached.body }}</p>
      </div>
    </transition>
  </div>
</template>

<script>
import { getPost } from './api'

export default {
  data () {
    return {
      loading: false,
      post: null,
      error: null,
      cached: null,
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      // this.error = this.post = null
      // this.loading = true
      // getPost(this.$route.params.id, (err, post) => {
      //   this.loading = false
      //   if (err) {
      //     this.error = err.toString()
      //   } else {
      //     this.post = post
      //   }
      // })
      console.log(this.$store.getters.doneTodos ? this.$store.getters.doneTodos.id : null);
      this.error = this.cached = null;
      this.loading = true;
      this.$http.get('https://jsonplaceholder.typicode.com/posts/' + this.$route.params.id).then(function(response) {
        this.cached = response.data;
        // console.log(this.cached.id);
        this.loading = false;
        this.$store.commit('save', this.cached)
        // success callback
      }, (response) => {
        this.error = err.toString()
      });
    }
  }
}
</script>

<style>
.loading {
  position: absolute;
  top: 10px;
  right: 10px;
}
.error {
  color: red;
}
.content {
  transition: all .35s ease;
  position: absolute;
}
.slide-enter {
  opacity: 0;
  transform: translate(30px, 0);
}
.slide-leave-active {
  opacity: 0;
  transform: translate(-30px, 0);
}
</style>
