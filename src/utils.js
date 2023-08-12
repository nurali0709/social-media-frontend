import api from "@/api";

export function formatDate(date) {
    if (!date) {
      return 'N/A';
    }
    const parts = date.split('-');
    const day = parts[2];
    const month = getMonthName(parseInt(parts[1]));
    const year = parts[0];
    return `${day} ${month} ${year}`;
  }
  
  export function getMonthName(monthNumber) {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return monthNames[monthNumber - 1];
  }

  export function fetchPosts() {
    return api.get('/post/posts')
      .then(response => {
        // Check if the response data is an array before returning the posts
        if (Array.isArray(response.data)) {
          return response.data;
        } else {
          console.error('Invalid data format: Expected an array of posts');
          return [];
        }
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
        return [];
      });
  }

export function fetchPostsOrderByLikes() {
    return api.get('/post/posts/order_likes')
      .then(response => {
        // Check if the response data is an array before returning the posts
        if (Array.isArray(response.data)) {
          return response.data;
        } else {
          console.error('Invalid data format: Expected an array of posts');
          return [];
        }
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
        return [];
      });
  }

export function fetchPostsOrderByViews() {
    return api.get('/post/posts/order_views')
      .then(response => {
        // Check if the response data is an array before returning the posts
        if (Array.isArray(response.data)) {
          return response.data;
        } else {
          console.error('Invalid data format: Expected an array of posts');
          return [];
        }
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
        return [];
      });
  }
