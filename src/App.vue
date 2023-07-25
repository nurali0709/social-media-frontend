<template>
  <div id="app">
    <NavBar @search-results="handleSearchResults" />
    <router-view />
    <PostBlock :posts="posts" />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import PostBlock from './components/PostBlock.vue';
import { fetchPosts } from './utils.js';

export default {
  name: 'App',
  components: {
    NavBar,
    PostBlock,
  },
  data() {
    return {
      posts: [],
      searchData: null,
    };
  },
  methods: {
    handleSearchResults(data) {
      this.searchData = data;
    },
    fetchPosts() {
      fetchPosts() // Call the fetchPosts function from utils.js
        .then(posts => {
          this.posts = posts;
        })
        .catch(error => {
          console.error('Error fetching posts:', error);
        });
    },
  },
  mounted() {
    this.fetchPosts();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
