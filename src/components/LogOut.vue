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
      logout() {
        console.log('Token:', this.$cookies.get('access_token'));
        // Call the backend API to logout and delete the token cookie
        axios
          .post("http://127.0.0.1:8000/auth/logout")
          .then(() => {
            // Remove the token from the cookie
            console.log('Before Removal');
            this.$cookies.remove("access_token");
            console.log('After Removal');
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
