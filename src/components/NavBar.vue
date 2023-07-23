<template>
  <nav class="navbar">
    <div class="nav-logo">
      <!-- Your logo here -->
    </div>
    <div class="nav-menu">
      <router-link to="/">Home</router-link>
      <!-- Other links here -->
    </div>
    <form @submit.prevent="searchPosts" class="search">
      <input v-model="searchInput" type="text" placeholder="Search...">
      <button type="submit">Search</button>
    </form>
  </nav>
</template>
  
<script>
import axios from 'axios';

export default {
  data() {
    return {
      searchInput: '',
    };
  },
  methods: {
    searchPosts() {
      const url = `http://192.168.1.106:8000/post/search?q=${this.searchInput}`;

      axios.get(url)
        .then(response => {
          // Emit the search results to the parent component
          this.$emit('search-results', response.data);
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
</script>
  
<style scoped>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #f5f5f5;
  }
  
  .nav-menu {
    display: flex;
  }
  
  .nav-menu a {
    text-decoration: none;
    color: #333;
    padding: 10px;
    margin: 0 5px;
    border-radius: 4px;
  }
  
  .nav-menu a:hover {
    background-color: #ddd;
  }
  
  .nav-logo img {
    height: 50px;
  }
  
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #fff; /* Set your desired background color for the navigation bar */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 10px 20px;
    z-index: 999; /* Ensure the navigation bar appears on top of other elements */
  }

  .search{
    margin-right: 1000px;
  }
</style>
  