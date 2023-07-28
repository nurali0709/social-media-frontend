<template>
  <nav class="navbar">
    <div class="nav-logo">
      <!-- Your logo here -->
    </div>
    <div class="nav-menu">
      <router-link to="/">Home</router-link>
      <!-- Other links here -->
      <router-link to="/search-results"></router-link>
    </div>
    <form @submit.prevent="searchPosts" class="search">
      <input v-model="searchInput" type="text" placeholder="Search..." class="search-input">
      <span class="icon"> 
        <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="1" d="M14 5H20" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="1" d="M14 8H17" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="1" d="M22 22L20 20" stroke="#000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      </span>
    </form>
  </nav>
</template>
  
<script>
export default {
  data() {
    return {
      searchInput: '',
    };
  },
  methods: {
    searchPosts() {
      // Use Vue router to navigate to the search results route with the query parameter
      this.$router.push({
        path: '/search-results',
        query: { q: this.searchInput },
      });
    },
  },
  watch: {
    $route(to, from) {
      // Clear the search input when the route changes
      if (to.path !== '/search-results' && from.path === '/search-results') {
        this.searchInput = '';
      }
    },
  },
};
</script>

  
<style scoped>
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #f5f5f5;
  }
  
.nav-menu {
    display: flex;
  }
  
.nav-menu a {
    text-decoration: none;
    color: #333;
    padding: 10px;
    margin: 0 5px;
    border-radius: 4px;
  }
  
.nav-menu a:hover {
    background-color: #ddd;
  }
  
.nav-logo img {
    height: 50px;
  }
  
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #fff; /* Set your desired background color for the navigation bar */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 10px 20px;
    z-index: 999; /* Ensure the navigation bar appears on top of other elements */
  }

.search {
  width: 220px;
  position: relative;
  margin-right: 1000px;
}

.icon {
  position: absolute;
  right: 10px;
  top: calc(50% + 5px);
  transform: translateY(calc(-50% - 5px));
}
.search-input {
  width: 100%;
  height: 40px;
  padding: 10px;
  transition: .2s linear;
  border: 2.5px solid black;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.search-input:focus {
  outline: none;
  border: 0.5px solid black;
  box-shadow: -5px -5px 0px black;
}

.search:hover > .icon {
  animation: anim 1s linear infinite;
}

@keyframes anim {
  0%,
  100% {
    transform: translateY(calc(-50% - 5px)) scale(1);
  }

  50% {
    transform: translateY(calc(-50% - 5px)) scale(1.1);
  }
}

</style>
