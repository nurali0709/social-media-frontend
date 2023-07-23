<template>
    <div>
      <h1>Welcome to the Home Page</h1>
      <router-link to="/postblock">Go to PostBlock</router-link>
    </div>
  </template>
  
  <script>
  import PostBlock from '../components/PostBlock.vue';
  import NavBar from '@/components/NavBar.vue';
  
  export default {
    name: 'Home',
    components: {
      PostBlock,
      NavBar
    },
  };
  </script>
  
  <style>
  /* Add any additional styles specific to the Home page here */
  </style>
  