<template>
  <nav class="navbar">
    <div class="nav-logo">
      <!-- Your logo here -->
    </div>
    <div class="nav-menu">
      <router-link to="/" class="home">Home</router-link>
      <div class="login-register">
        <router-link to="" class="button">Login</router-link>
        <router-link to="" class="button">Register</router-link>
      </div>
      <!-- Other links here -->
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
    align-items: center;
    gap: 3rem;
    list-style: none;
  }
  
.nav-menu a {
    color: #DAFFFB;
    padding: 10px;
    text-transform: uppercase;
    transition: 0.2s;
    text-decoration: none;
    -webkit-transition: 0.2s;
    -moz-transition: 0.2s;
    -ms-transition: 0.2s;
    -o-transition: 0.2s;
  }

.nav-menu::after {
    content: '';
    display: block;
    border-top: 2px solid #DAFFFB;
    transform: scaleX(0);
    -webkit-transform: scaleX(0);
    -moz-transform: scaleX(0);
    -ms-transform: scaleX(0);
    -o-transform: scaleX(0);
    transition: transform 250ms ease-in-out;
    -webkit-transition: transform 250ms ease-in-out;
    -moz-transition: transform 250ms ease-in-out;
    -ms-transition: transform 250ms ease-in-out;
    -o-transition: transform 250ms ease-in-out;
}

.nav-menu:hover::after {
    transform: scaleX(0.8);
    -webkit-transform: scaleX(0.8);
    -moz-transform: scaleX(0.8);
    -ms-transform: scaleX(0.8);
    -o-transform: scaleX(0.8);
}

.nav-menu .home:hover {
  border-bottom: 2px solid #DAFFFB;
}

  
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    width: 100%;
    height: 70px;
    background: #176B87;
    color: #DAFFFB;
    position: fixed;
    top: 0;
}

.login-register {
    display: flex;
    flex-direction: row;
    gap: 1rem;
}

.button {
    color: #DAFFFB;
    border: 2px solid #DAFFFB;
    padding: 5px 20px;
    text-transform: uppercase;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
    transition: all ease-in 0.3s;
    -webkit-transition: all ease-in 0.3s;
    -moz-transition: all ease-in 0.3s;
    -ms-transition: all ease-in 0.3s;
    -o-transition: all ease-in 0.3s;
}

.button:hover {
    background: #DAFFFB;
    color: #176B87;
    transition: 1s;
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
