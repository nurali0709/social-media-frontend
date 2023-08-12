<template>
    <div class="register">
      <form @submit.prevent="register" class="register-form">
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
import axios from 'axios';
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
        axios.post("http://127.0.0.1:8000/auth/signup", this.user)
          .then((response) => {
            // Save the token received in the cookie
            this.$cookies.set("access_token", response.data.jwt, { expires: 1 });
            this.$store.commit("updateLoggedInStatus", true);
            // Redirect to the home page
            this.$router.push("/");
          })
          .catch((error) => {
            console.error(error);
            // Handle registration failure (e.g., show an error message)
          });
      },
    },
  };
</script>

<style>
.register {
  max-width: 400px;
  margin: 0 auto;
  margin-top: -100px;
  padding: 20px;
  background-color: #f1f1f1;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.register-form label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #555;
  margin-top: 10px;
}

.register-form input[type="text"],
.register-form input[type="email"],
.register-form input[type="password"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.register-form button {
  width: 100%;
  padding: 10px;
  background-color: #176B87;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
}

.register-form button:hover {
  background-color: #DAFFFB;
  color: #176B87;
  transition: 0.5s;
}

.register-form button:focus {
  outline: none;
}

.register {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

</style>