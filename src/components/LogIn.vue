<template>
    <div>
      <h1>Login</h1>
      <form @submit.prevent="login">
        <label for="username">Username</label>
        <input type="text" id="username" v-model="user.username" required>
        <br>
        <label for="password">Password</label>
        <input type="password" id="password" v-model="user.password" required>
        <br>
        <button type="submit">Login</button>
      </form>
    </div>
</template>

<script>
import axios from 'axios';
  export default {
    data() {
      return {
        user: {
          username: "",
          password: "",
        },
      };
    },
    methods: {
      login() {
        // Call the backend API to log in
        axios.post("http://192.168.1.106:8000/auth/login", this.user)
          .then((response) => {
            // Save the token received in the cookie
            this.$cookies.set("access_token", response.data.jwt, "1d");
            // Update the isLoggedIn state in the store to true
            this.$store.commit("updateLoggedInStatus", true);
            // Redirect to the dashboard or any other protected page
            this.$router.push("/");
          })
          .catch((error) => {
            console.error(error);
            // Handle login failure (e.g., show an error message)
          });
      },
    },
  };
</script>
  