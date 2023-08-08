<template>
  <div id="app">
    <NavBar @search-results="handleSearchResults" />
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
  },
  created() {
    const token = localStorage.getItem("jwt");
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (token && userData) {
      this.$store.commit("updateLoggedInStatus", true);
      this.$store.commit("updateUserId", userData.id);
      this.$store.commit("updateUserData", userData);
    }
  },
  data() {
    return {
      searchData: null,
    };
  },
  methods: {
    handleSearchResults(data) {
      this.searchData = data;
    },
  },
};
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
</style>
