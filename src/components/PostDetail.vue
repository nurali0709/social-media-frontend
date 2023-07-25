<template>
  <div v-if="post" class="post-detail">
    <div class="post-meta">
      <div class="author-info">
        <h7><strong>{{ post.author.name }} {{ post.author.surname }}</strong></h7>
        <span class="username">{{ post.author.username }}</span>
      </div>
      <div class="posted-on">
        Posted on: {{ formatDate(post.created_at) }}
      </div>
    </div>
    <h2 class="title">{{ post.title }}</h2>
    <div class="post-content">
      <p>{{ post.description }}</p>
    </div>
    <div class="post-stats">
      <i class="far fa-eye"></i> {{ post.views }} Views
      <i class="far fa-thumbs-up"></i> {{ post.likes }} Likes
      <i class="far fa-thumbs-down"></i> {{ post.dislikes }} Dislikes
    </div>
    <div>
      <h3>Recommendations</h3>
      <div class="recommendations">
        <div
          v-for="recommendation in recommendations"
          :key="recommendation.id"
          class="recommendation-card"
        >
          <div class="post-header">
            <h2 class="title">{{ recommendation.title }}</h2>
          </div>
          <div class="post-content">
            <p>{{ recommendation.description }}</p>
          </div>
          <div class="post-footer">
            <div class="post-stats">
              <i class="far fa-eye"></i> {{ recommendation.views }} Views
              <i class="far fa-thumbs-up"></i> {{ recommendation.likes }} Likes
              <i class="far fa-thumbs-down"></i> {{ recommendation.dislikes }} Dislikes
            </div>
            <!-- Use router-link to navigate to the detail page -->
            <router-link :to="{ name: 'PostDetail', params: { postId: recommendation.id } }">
              <button>View Details</button>
            </router-link>
          </div>
        </div>
      </div>
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
  watch: {
    postId() {
      // Watch for changes in the postId prop and fetch new post details
      this.fetchPostDetails();
    },
  },
};
</script>

<style scoped>
.post-detail {
  padding: 20px;
  max-width: 1000px;
  margin: 170px auto 0;
}

.post-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.post-meta .author-info {
  display: flex;
  flex-direction: column;
}

.post-meta h7 {
  margin: 0;
}

.post-meta .username {
  color: #666;
}

.post-content {
  margin-bottom: 20px;
}

.post-stats {
  color: #666;
  display: flex;
  justify-content: center;
}

.post-stats i {
  margin-right: 5px;
}

.title {
  text-align: center;
  margin-bottom: 20px;
}
</style>