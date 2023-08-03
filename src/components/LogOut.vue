<template>
    <div>
      <h1>Logout</h1>
      <button @click="logout">Logout</button>
    </div>
</template>

<script>
export default {
  methods: {
    logout() {
      try {
        this.$axios.post("http://192.168.1.106:8000/auth/logout");

        // Update the isLoggedIn state in the store to false
        this.$store.commit("updateLoggedInStatus", false);

        // Remove the access_token cookie
        this.$cookies.remove("access_token");

        // Redirect to the login page
        this.$router.push("/login");

        // Wait for a short delay (e.g., 100ms) before reloading the page
        // setTimeout(() => {
        //   window.location.reload();
        // }, 100);
      } catch (error) {
        console.error(error);
        // Handle logout failure (e.g., show an error message)
      }
    },
  },
};
</script>