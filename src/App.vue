<template>
  <div id="app">
    <NavBar @search-results="handleSearchResults" />
    <router-view />
    <div v-if="searchData !== null">
      <SearchResults :searchData="searchData" />
    </div>
    <div v-else>
      <PostBlock :posts="posts" />
    </div>
  </div>
</template>


<script>
import NavBar from './components/NavBar.vue';
import SearchResults from './components/SearchResults.vue';
import PostBlock from './components/PostBlock.vue';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    NavBar,
    SearchResults,
    PostBlock,
  },
  data() {
    return {
      posts: [], // Posts fetched from the backend will be stored here
      searchData: null, // Search results will be stored here
    };
  },
  methods: {
    handleSearchResults(data) {
      this.searchData = data;
    },
    fetchPosts() {
      axios.get('http://192.168.1.106:8000/post/posts')
        .then(response => {
          // Check if the response data is an array before updating the posts
          if (Array.isArray(response.data)) {
            this.posts = response.data;
          } else {
            console.error('Invalid data format: Expected an array of posts');
          }
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


