<template>
    <div class="comments-modal">
      <div class="modal-content">
        <h2>Comments</h2>
        <ul>
          <li v-for="comment in comments" :key="comment.id">{{ comment.text }}</li>
        </ul>
      </div>
      <button @click="closeModal">Close</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      postId: {
        type: String,
        required: true,
      },
      showModal: {
        type: Boolean,
        required: true,
      },
      comments: {
        type: Array,
        default: () => [],
      },
    },
    methods: {
    closeModal() {
      this.$emit('close'); // Emit the 'close' event to notify the parent component
    },
  },
};
</script>
  
  <style scoped>
  .comments-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    max-width: 400px;
  }
  
  .modal-content h2 {
    text-align: center;
    margin-bottom: 10px;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  ul li {
    margin-bottom: 5px;
  }
  </style>
  