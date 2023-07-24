<template>
  <div class="post-block">
    <div v-for="post in posts" :key="post.id" class="post">
      <div class="post-header">
        <h2>{{ post.title }}</h2>
        <div class="post-meta">
          <h1><strong>{{ post.author_name }} {{ post.author_surname }}</strong></h1>
          <span class="username">{{ post.author_username }}</span>
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
        <!-- Use router-link to navigate to the detail page -->
        <router-link :to="{ name: 'PostDetail', params: { postId: post.id } }">
        <button>View Details</button>
      </router-link>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    posts: {
      type: Array,
      default: () => [],
    },
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
