<template>
    <div>
      <h1>Logout</h1>
      <button @click="logout">Logout</button>
    </div>
</template>
  
<script>
export default {
  methods: {
    async logout() {
      try {
        await this.$store.dispatch("logout"); // Call the logout action in the store
        this.$cookies.remove("access_token"); // Remove the access token from the cookie
        // Redirect to the login page or any other public page
        this.$router.push("/login");
      } catch (error) {
        console.error(error);
        // Handle logout failure (e.g., show an error message)
      }
    },
  },
};
</script>