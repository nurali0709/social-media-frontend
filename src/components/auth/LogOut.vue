<template>
    <div>
      <h1>Logout</h1>
      <button @click="logout">Logout</button>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  methods: {
    async logout() {
      try {
        const token = localStorage.getItem("jwt");
        axios.defaults.headers.common['Authorization'] = token
        
        await axios.post("http://127.0.0.1:8000/auth/logout", {
          data: {
            token: token,
          },
          headers: {
            Authorization: token,
          },
        });

        localStorage.removeItem("jwt");
        localStorage.removeItem("userData");

        this.$store.commit("updateLoggedInStatus", false);
        this.$router.push("/login");

      } catch (error) {
        console.error(error);
        // Handle logout failure (e.g., show an error message)
      }
    },
  },
};
</script>