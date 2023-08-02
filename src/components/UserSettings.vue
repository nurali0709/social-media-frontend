<template>
    <div class="user-settings">
      <h2>User Settings</h2>
      <form @submit.prevent="updateUser">
        <label for="username">Username</label>
        <input type="text" id="username" v-model="userData.username" required>
        <br>
        <label for="email">Email</label>
        <input type="email" id="email" v-model="userData.email" required>
        <br>
        <label for="name">Name</label>
        <input type="text" id="name" v-model="userData.name" required>
        <br>
        <label for="surname">Surname</label>
        <input type="text" id="surname" v-model="userData.surname" required>
        <br>
        <button type="submit">Update</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    created() {
        const userId = this.$route.params.userId;
        console.log("UserSettings - User ID:", userId);
        // Rest of the component code
    },
    data() {
      return {
        userData: {
          username: "",
          email: "",
          name: "",
          surname: "",
        },
      };
    },
    methods: {
      updateUser() {
        const userId = this.$route.params.userId; // Make sure you have userId parameter in your route
        axios.put(`http://127.0.0.1:8000/auth/users/${userId}/update`, this.userData)
          .then((response) => {
            // Handle success
            console.log("User data updated successfully:", response.data);
            // You may want to show a success message or redirect to another page
          })
          .catch((error) => {
            // Handle error
            console.error("Failed to update user data:", error);
            // You may want to show an error message to the user
          });
      },
    },
  };
  </script>
  