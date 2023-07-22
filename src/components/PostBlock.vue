<template>
    <div class="post-block">
      <div v-for="post in posts" :key="post.id" class="post">
        <div class="post-header">
          <h2>{{ post.title }}</h2>
          <div class="post-meta">
            <span>By: {{ post.author_username }}</span>
            <span>Posted on: {{ formatDate(post.created_at) }}</span>
          </div>
        </div>
        <div class="post-content">
          <p>{{ post.description }}</p>
        </div>
        <div class="post-footer">
          <div class="post-stats">
            <span>{{ post.views }} Views</span>
            <span>{{ post.likes }} Likes</span>
            <span>{{ post.dislikes }} Dislikes</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        posts: [], // Posts fetched from the backend will be stored here
      };
    },
    mounted() {
      this.fetchPosts(); // Fetch posts from the backend when the component is mounted
    },
    methods: {
      fetchPosts() {
        axios.get('http://192.168.1.106:8000/post/posts')
          .then(response => {
            this.posts = response.data;
          })
          .catch(error => {
            console.error(error);
          });
      },
      formatDate(date) {
        if (!date) {
        return 'N/A'; // Return a fallback value when the date is not available
      }
        // Add a method to format the date as you desire
        // For example, you can use a library like moment.js
        // or write a custom function to format the date
        // This example assumes the date format is "YYYY-MM-DD"
        const parts = date.split('-');
        return `${parts[2]}/${parts[1]}/${parts[0]}`;
      },
    },
  };
  </script>
  
  <style>
  .post-block {
    /* Styles for the post block container */
  }
  
  .post {
    /* Styles for individual post cards */
  }
  
  /* Add other CSS styles as needed */
  </style>
  