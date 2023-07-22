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
      // Split the date into parts using "-" as the separator
      const parts = date.split('-');
      const year = parts[0];
      const month = this.getMonthName(parseInt(parts[1]));
      const day = parts[2];
      return `${day} ${month} ${year}`;
    },
    getMonthName(monthNumber) {
      // Convert month number (1 to 12) to the corresponding month name
      const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];
      return monthNames[monthNumber - 1];
    },
  },
};
</script>
  
<style>
.post-block {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px 0;
}

.post {
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: calc(33.33% - 20px); 
  margin: 10px;
  padding: 10px;
  flex: 1 0 auto; /* Allow the post to grow to occupy the entire row width */
  max-width: 300px; 
}

.post-header {
  margin-bottom: 10px;
}

.post-meta {
  font-size: 14px;
  color: #777;
}

.post-content {
  font-size: 16px;
  line-height: 1.6;
}

.post-footer {
  margin-top: 20px;
  border-top: 1px solid #ddd;
  padding-top: 10px;
}

.post-stats {
  font-size: 14px;
  color: #555;
}

.post-stats span {
  margin-right: 20px;
}
</style>
  