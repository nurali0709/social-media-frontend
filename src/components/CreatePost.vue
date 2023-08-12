<template>
    <div class="create-post">
      <h1>Create Post</h1>
      <form @submit.prevent="onSubmit">
        <input type="text" v-model="title" placeholder="Title">
        <textarea v-model="description" placeholder="Description"></textarea>
        <button type="submit">Create Post</button>
      </form>
    </div>
</template>
  
<script>
import api from "@/api";
  
  export default {
    data() {
      return {
        title: '',
        description: '',
      };
    },
    methods: {
      onSubmit() {
        const data = {
          title: this.title,
          description: this.description,
        };
        api.post(
          '/post/create_post',
          data,
          {
            headers: {
              Authorization: localStorage.getItem('jwt'),
            },
          },
        );
      },
    },
  };
</script>
  