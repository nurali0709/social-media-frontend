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
        // Call the backend API to logout and delete the token cookie
        this.$axios.post("/logout")
          .then(() => {
            // Remove the token from the cookie
            this.$cookies.remove("access_token");
            // Redirect to the login page or any other public page
            this.$router.push("/login");
          })
          .catch((error) => {
            console.error(error);
            // Handle logout failure (e.g., show an error message)
          });
      },
    },
  };
  </script>
  