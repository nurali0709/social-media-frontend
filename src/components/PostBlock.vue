<template>
  <div class="post-block">
    <router-link v-for="post in localPosts" :key="post.id" class="post" :to="{ name: 'PostDetail', params: { postId: post.id } }">
      <div class="post-meta">
        <h1><strong>{{ post.author_name }} {{ post.author_surname }}</strong></h1>
        <span class="username">{{ post.author_username }}</span>
      </div>
      <h2 class="title">{{ post.title }}</h2>
      <div class="post-content">
        <p class="truncate">{{ post.description }}</p>
      </div>
      <div class="post-footer">
        <div class="posted-on">
          {{ formatDate(post.created_at) }}
        </div>
        <div class="post-stats">
          <i class="far fa-eye"></i> {{ post.views }}
          <i class="far fa-thumbs-up"></i> {{ post.likes }}
          <i class="far fa-thumbs-down"></i> {{ post.dislikes }}
        </div>
      </div>
    </router-link>
  </div>
</template>


<script>
import { fetchPosts } from '@/utils.js';
import { formatDate } from '@/utils.js';

export default {
  props: {
    posts: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      localPosts: [],
    };
  },
  methods: {
    formatDate,
    fetchPosts() {
      fetchPosts()
        .then(posts => {
          this.localPosts = posts;
        })
        .catch(error => {
          console.error('Error fetching posts:', error);
        });
    },
  },
  watch: {
    posts(newPosts) {
      // Update localPosts when the posts prop changes
      this.localPosts = newPosts;
    },
  },
  mounted() {
    this.fetchPosts(); // Fetch posts when the component is mounted
  },
};
</script>

<style>
.post-block {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px 0;
  margin-left: 450px;
  max-width: 1000px;
}

.post {
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  margin: 10px;
  padding: 10px;
  text-decoration: none;
}

.post-meta {
  font-size: 14px;
  color: #777;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.post-meta .username {
  color: gray;
  margin-right: 800px;
}

.title {
  font-weight: bold;
  margin-bottom: 10px;
}

.post-content {
  font-size: 16px;
  line-height: 1.6;
}

.post-content .truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5; /* Number of lines to show before truncation */
  -webkit-box-orient: vertical;
}

.post-footer {
  margin-top: 20px;
  border-top: 1px solid #ddd;
  padding-top: 10px;
  display: flex;
  justify-content: flex-end;
  font-size: 14px;
  color: #555;
}
.post-stats {
  margin-right: 20px;
  width: 100%;
}

.post-footer i {
  margin-left: 5px;
}

.posted-on {
    margin-right: 600px;
    width: 100%;
}

.name {
    margin-right: 800px;
}
</style>
