<template>
    <div v-if="post" class="post-detail">
      <div class="post-header">
        <h2>{{ post.title }}</h2>
        <!-- <div class="post-meta">
          <h1><strong>{{ post.author.name }} {{ post.author.surname }}</strong></h1>
          <span class="username">{{ post.author.username }}</span>
        </div> -->
      </div>
      <div class="post-content">
        <p>{{ post.description }}</p>
      </div>
      <div class="post-footer">
        <span class="posted-on">Posted on: {{ formatDate(post.created_at) }}</span>
        <div class="post-stats">
          <i class="far fa-eye"></i> {{ post.views }} Views
          <i class="far fa-thumbs-up"></i> {{ post.likes }} Likes
          <i class="far fa-thumbs-down"></i> {{ post.dislikes }} Dislikes
        </div>
      </div>
    </div>
  
</template>
  
<script>
import axios from 'axios';

  export default {
    props: {
      postId: {
        type: String,
        required: true,
      },
  },
  data() {
    return {
      localPostId: null,
      post: null,
    };
  },
    methods: {
      formatDate(date) {
        if (!date) {
          return 'N/A';
        }
        const parts = date.split('-');
        const day = parts[2];
        const month = this.getMonthName(parseInt(parts[1]));
        const year = parts[0];
        return `${day} ${month} ${year}`;
      },
      getMonthName(monthNumber) {
        const monthNames = [
          'January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December'
        ];
        return monthNames[monthNumber - 1];
      },
      fetchPostDetails() {
      axios.get(`http://192.168.1.106:8000/post/posts/${this.postId}/view`)
        .then(response => {
          this.post = response.data;
        })
        .catch(error => {
          console.error('Error fetching post details:', error);
        });
    },
  },
  watch: {
    postId: {
      immediate: true, // Run the watcher immediately on component mount
      handler(newPostId) {
        this.localPostId = newPostId; // Update the localPostId data property
        this.fetchPostDetails(); // Fetch post details when localPostId changes
      },
    },
  },
};
</script>

<style scoped>

</style>
