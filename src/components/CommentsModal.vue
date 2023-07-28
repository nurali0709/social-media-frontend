<template>
    <div class="comments-modal">
      <button class="close-button" @click="closeModal">
        <i class="fas fa-times"></i>
      </button>
      <div class="modal-content">
        <h2>Comments</h2>
        <ul v-if="localComments.length > 0">
          <li v-for="comment in localComments" :key="comment.id">
            <div class="comment-block">
              <div class="comment-header">
                <span class="user-name">{{ comment.user_name }}</span>
                <span class="user-surname">{{ comment.user_surname }}</span>
                <span class="comment-date">{{ formatDate(comment.created_comment) }}</span>
              </div>
              <div class="comment-text">{{ comment.text }}</div>
            </div>
            <ul v-if="comment.responses" class="response-list">
              <li v-for="response in comment.responses" :key="response.id">
                <div class="comment-block">
                  <div class="comment-header">
                    <span class="user-name">{{ response.user_name }}</span>
                    <span class="user-surname">{{ response.user_surname }}</span>
                    <span class="comment-date">{{ formatDate(response.created_response) }}</span>
                  </div>
                  <div class="comment-text">{{ response.text }}</div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
        <p v-else>No Comments Yet</p>
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
      showModal: {
        type: Boolean,
        required: true,
      },
      comments: {
        type: Array,
        default: () => [],
      },
    },
    data() {
    return {
      localComments: [],
    };
  },
  methods: {
    formatDate,
    closeModal() {
      this.$emit('close');
    },
    fetchComments() {
      const url = `http://127.0.0.1:8000/comment/comments/${this.postId}`;
      axios
        .get(url)
        .then(response => {
          this.localComments = response.data;
        })
        .catch(error => {
          console.error('Error fetching comments:', error);
        });
    },
  },
  watch: {
    postId() {
      // Watch for changes in the postId prop and fetch new comments
      this.fetchComments();
    },
  },
  created() {
    // Fetch comments when the component is created
    this.fetchComments();
  },
};
</script>


<style scoped>
.comments-modal {
  position: fixed;
  bottom: 0;
  left: 50%;
  width: 100%;
  height: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  color: #000;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.modal-content {
  max-height: 500px;
  overflow-y: auto;
}

.modal-content h2 {
  margin-top: 0;
}

.modal-content ul {
  list-style: none;
  padding: 0;
}

.modal-content li {
  margin-bottom: 10px;
}

.comment-header {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  font-weight: bold;
}

.user-name {
  margin-right: 5px;
}

.user-surname {
  color: #777;
}

.comment-text {
  margin-top: 5px;
  line-height: 1.4;
}

.response-list {
  margin-left: 20px;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 25px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: #000;
}

.close-button:hover {
  color: #f00;
}
</style>
  