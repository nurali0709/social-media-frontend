<template>
    <div>
      <h1>Register</h1>
      <form @submit.prevent="register">
        <label for="username">Username</label>
        <input type="text" id="username" v-model="user.username" required>
        <br>
        <label for="password">Password</label>
        <input type="password" id="password" v-model="user.password" required>
        <br>
        <label for="email">Email</label>
        <input type="email" id="email" v-model="user.email" required>
        <br>
        <label for="name">Name</label>
        <input type="text" id="name" v-model="user.name" required>
        <br>
        <label for="surname">Surname</label>
        <input type="text" id="surname" v-model="user.surname" required>
        <br>
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: {
          username: "",
          password: "",
          email: "",
          name: "",
          surname: "",
        },
      };
    },
    methods: {
      register() {
        // Call the backend API to register the user
        this.$axios.post("/signup", this.user)
          .then((response) => {
            // Save the token received in the cookie
            this.$cookies.set("access_token", response.data.jwt, { expires: 1 });
            // Redirect to the dashboard or any other protected page
            this.$router.push("/dashboard");
          })
          .catch((error) => {
            console.error(error);
            // Handle registration failure (e.g., show an error message)
          });
      },
    },
  };
  </script>
  