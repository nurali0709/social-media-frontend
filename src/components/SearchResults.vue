<template>
  <div v-if="searchData.length > 0" class="search-results">
    <h2>Search Results: </h2>
    <div v-for="result in searchData" :key="result.id" class="post">
      <div class="post-header">
        <h2>{{ result.title }}</h2>
        <div class="post-meta">
          <h1><strong>{{ result.author_name }} {{ result.author_surname }}</strong></h1>
          <span class="username">{{ result.author_username }}</span>
        </div>
      </div>
      <div class="post-content">
        <p>{{ result.description }}</p>
      </div>
      <div class="post-footer">
        <span class="posted-on">Posted on: {{ formatDate(result.created_at) }}</span>
        <div class="post-stats">
          <i class="far fa-eye"></i> {{ result.views }} Views
          <i class="far fa-thumbs-up"></i> {{ result.likes }} Likes
          <i class="far fa-thumbs-down"></i> {{ result.dislikes }} Dislikes
        </div>
        <router-link :to="{ name: 'PostDetail', params: { postId: result.id } }">
              <button>View Details</button>
        </router-link>
      </div>
    </div>
  </div>
  <div v-else >
    <p>No results found for "{{ searchQuery }}"</p>
  </div>
</template>
  

<script>

import axios from 'axios';
import { formatDate } from '@/utils.js';

export default {
  props: {
    searchQuery: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      searchData: [],
    };
  },
  created() {
    // Fetch data using the 'searchQuery' parameter
    this.fetchSearchResults();
  },
  watch: {
    // Watch for changes to the 'searchQuery' prop and fetch new data accordingly
    searchQuery: function () {
      this.fetchSearchResults();
    },
  },
  methods: {
    formatDate,
    fetchSearchResults() {
      const url = `http://192.168.1.106:8000/post/search?q=${this.searchQuery}`;
      axios
        .get(url)
        .then(response => {
          this.searchData = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
</script>
  
<style>
.search-results{
  margin-left: 450px;
  max-width: 1000px;
}
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
}

.post-header {
  margin-bottom: 10px;
}

.post-meta {
  font-size: 14px;
  color: #777;
}

.post-meta .username {
  color: gray;
  margin-right: 800px;
}

.post-content {
  font-size: 16px;
  line-height: 1.6;
}

.post-footer {
  margin-top: 20px;
  border-top: 1px solid #ddd;
  padding-top: 10px;
  display: flex;
  justify-content: flex-end; /* Align stats to the right */
  font-size: 14px;
  color: #555;
}
.post-stats {
  margin-right: 20px;
  width: 100%;
}

/* Add Font Awesome icons styles */
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
  