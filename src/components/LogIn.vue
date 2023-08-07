<template>
    <div class="login-container">
      <form @submit.prevent="login" class="login-form">
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
        this.$axios.post("http://192.168.1.106:8000/auth/login", this.user, { withCredentials: true })
          .then((response) => {
            // Save the token received in the cookie
            // this.$cookies.set("access_token", response.data.jwt, "1d");
            this.$store.commit("updateLoggedInStatus", true);
            this.$store.commit("updateUserId", response.data.user.id); // Adjust the property accordingly based on the actual response from the backend

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


<style>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  margin-top: -100px;
  padding: 20px;
  background-color: #f1f1f1;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.login-form label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #555;
  margin-top: 10px;
}

.login-form input[type="text"],
.login-form input[type="password"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.login-form button {
  width: 100%;
  padding: 10px;
  background-color: #176B87;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
}

.login-form button:hover {
  background-color: #DAFFFB;
  color: #176B87;
}

.login-form button:focus {
  outline: none;
}

/* Center the form vertically */
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>
  