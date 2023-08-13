<template>
    <div class="user-settings">
      <h2>User Settings</h2>
      <form @submit.prevent="updateUser" class="settings-form">
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
        <button type="submit" class="update-button">Update</button>
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
        const token = localStorage.getItem("jwt");
        axios.defaults.headers.common['Authorization'] = token

        const userId = this.$route.params.userId;
        axios.put(`http://127.0.0.1:8000/auth/users/${userId}/update`, this.userData, {
          data: {
            token: token,
          },
          headers: {
            Authorization: token,
          },
        })
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

<style scoped>
.user-settings {
  max-width: 600px;
  margin: auto;
  padding: 30px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.user-settings h2 {
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}

.settings-form {
  display: flex;
  flex-direction: column;
}

.settings-form label {
  font-size: 16px;
  margin-bottom: 5px;
  color: #555;
}

.settings-form input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 15px;
  font-size: 14px;
}

.settings-form button.update-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.settings-form button.update-button:hover {
  background-color: #0056b3;
}
</style>
  