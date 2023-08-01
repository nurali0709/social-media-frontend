<template>
  <div v-if="searchData.length > 0" class="search-results">
    <h2>Search Results: </h2>
    <div v-for="result in searchData" :key="result.id" class="post">
      <router-link class="post-underline" :to="{ name: 'PostDetail', params: { postId: result.id } }">
        <div class="post-meta">
          <h3 class="name">
            <strong>{{ result.author_name }} {{ result.author_surname }}</strong>
          </h3>
          <div class="name-info">
            <span class="username">{{ result.author_username }}</span>
          </div>
        </div>
        <h2 class="title">{{ result.title }}</h2>
        <div class="post-content">
          <p class="truncate">{{ result.description }}</p>
        </div>
        <div class="post-footer">
          <div class="posted-on">
            {{ formatDate(result.created_at) }}
          </div>
          <div class="post-stats">
            <i class="far fa-eye"></i> {{ result.views }}
            <i class="far fa-thumbs-up"></i> {{ result.likes }}
            <i class="far fa-thumbs-down"></i> {{ result.dislikes }}
            <i class="far fa-comment"></i> {{ result.comments }}
          </div>
        </div>
      </router-link>
    </div>
  </div>
  <div v-else>
    <p class="no-results">No results found for "{{ searchQuery }}"</p>
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
  margin-top: 100px;
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

.post-underline {
  text-decoration: none;
}

.post-header {
  margin-bottom: 10px;
}

.post-meta {
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start; /* Align items to the top */
  margin-bottom: 10px;
}

.name {
  color: rgb(70, 47, 47);
}

.username {
  color: rgb(70, 47, 47);
}

.name-info {
  display: flex;
  align-items: center;
  margin-left: -810px;
  margin-top: 20px;
}

.title {
  font-weight: bold;
  margin-bottom: 10px;
  color: black;
}

.post-content {
  font-size: 16px;
  line-height: 1.6;
  color: grey;
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

.no-results {
  margin-top: 500px;
}
</style>
  