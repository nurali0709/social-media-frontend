<template>
  <div id="app">
    <nav>
      <div class="nav-logo">
        <img alt="Vue logo" src="./assets/logo.png">
      </div>
      <div class="nav-menu">
        <router-link to="/">Home</router-link>
        <router-link to="/search">Search</router-link>
        <router-link to="/login">Login</router-link>
        <router-link to="/signup">Sign Up</router-link>
      </div>
    </nav>

    <router-view />

    <PostBlock /> <!-- Include the PostBlock component here -->
  </div>
</template>

<script>
import PostBlock from './components/PostBlock.vue' // Import the PostBlock component

export default {
  name: 'App',
  components: {
    PostBlock // Register the PostBlock component
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

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

/* Add more styles for the PostBlock component if necessary */
</style>

