<template>
  <div v-if="post" class="post-detail">
    <div class="post-meta">
      <div class="author-info">
        <h7><strong>{{ post.author.name }} {{ post.author.surname }}</strong></h7>
        <span class="username">{{ post.author.username }}</span>
      </div>
      <div class="posted-on">
        {{ formatDate(post.created_at) }}
      </div>
    </div>
    <h2 class="title">{{ post.title }}</h2>
    <div class="post-content">
      <p>{{ post.description }}</p>
    </div>
    <div class="post-stats">
      <i class="far fa-eye">{{ post.views }}</i>
      <i class="far fa-thumbs-up">{{ post.likes }}</i>
      <i class="far fa-thumbs-down">{{ post.dislikes }}</i>
      <button @click="showCommentsModal = true" class="comment"><i class="far fa-comment">{{ post.total_num_comments }}</i></button>
      <comments-modal
        v-show="showCommentsModal"
        :post-id="post.id"
        :comments="post.comments"
        @close="showCommentsModal = false"
      ></comments-modal>
    </div>
    <div>
      <h3>You may also like:</h3>
      <div class="recommendations">
        <div
          v-for="recommendation in recommendations"
          :key="recommendation.id"
          class="recommendation-card"
        >
        <router-link class="post-underline" :to="{ name: 'PostDetail', params: { postId: recommendation.id } }">
          <div class="card-header">
            <h2 class="title">{{ recommendation.title }}</h2>
          </div>
          <div class="card-content">
            <p class="truncate">{{ recommendation.description }}</p>
          </div>
          <div class="card-footer">
            <div class="post-stats">
              <i class="far fa-eye"></i> {{ recommendation.views }}
              <i class="far fa-thumbs-up"></i> {{ recommendation.likes }}
              <i class="far fa-thumbs-down"></i> {{ recommendation.dislikes }}
            </div>
          </div>
        </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api";
import { formatDate } from '@/utils.js';
import CommentsModal from '@/components/CommentsModal.vue';

export default {
  props: {
    postId: {
      type: String,
      required: true,
    },
  },
  components: {
    CommentsModal
  },
  data() {
    return {
      post: null,
      recommendations: [],
      showCommentsModal: false,
    };
  },
  methods: {
    formatDate,
    fetchPostDetails() {
      const postId = this.$route.params.postId;
      api
        .get(`/post/posts/${postId}/view`)
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
  margin-right: 15px;
}

.comment{
  cursor: pointer;
}

.title {
  text-align: center;
  margin-bottom: 20px;
  font-size: 20px;
}

.recommendations {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.recommendation-card {
  flex-basis: calc(33.33% - 40px);
  max-width: calc(33.33% - 40px);
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: 10px;
}

.card-header {
  margin-bottom: 10px;
}

.card-header h2 {
  text-align: center;
  margin-bottom: 0;
}

.card-content {
  font-size: 16px;
  line-height: 1.6;
  height: 100px; /* Limit the height of the content */
  overflow: hidden;
  color: grey;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.card-footer button {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
}

.card-footer button:hover {
  background-color: #0056b3;
}
</style>