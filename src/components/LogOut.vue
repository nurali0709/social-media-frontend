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
        await this.$store.dispatch("logout");
        this.$cookies.remove("access_token");
  
        this.$router.push("/login");

        // Wait for a short delay (e.g., 100ms) before reloading the page
        setTimeout(() => {
          window.location.reload();
        }, 100);
      } catch (error) {
        console.error(error);
        // Handle logout failure (e.g., show an error message)
      }
    },
  },
};
</script>
