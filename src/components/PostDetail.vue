<template>
  <div v-if="post" class="post-detail">
    <div class="post-header">
      <h2>{{ post.title }}</h2>
      <div class="post-meta">
        <h1><strong>{{ post.author.name }} {{ post.author.surname }}</strong></h1>
        <span class="username">{{ post.author.username }}</span>
      </div>
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
    <div>
      <h3>Recommendations</h3>
      <ul>
        <li v-for="recommendation in recommendations" :key="recommendation.id">
          <router-link :to="{ name: 'PostDetail', params: { postId: recommendation.id } }">
            {{ recommendation.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { formatDate } from '@/utils.js';

export default {
  props: {
    postId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      post: null,
      recommendations: [],
    };
  },
  methods: {
    formatDate,
    fetchPostDetails() {
      const postId = this.$route.params.postId;
      axios
        .get(`http://192.168.1.106:8000/post/posts/${postId}/view`)
        .then(response => {
          this.post = response.data.post;
          this.recommendations = response.data.recommendations;
        })
        .catch(error => {
          console.error('Error fetching post details:', error);
        });
    },
  },
  created() {
    this.fetchPostDetails();
  },
};
</script>

<style scoped>

</style>
