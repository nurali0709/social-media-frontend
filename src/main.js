import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js';
import VueCookies from "vue-cookies";
import store from './store/index.js';
import axios from 'axios';

// Configure axios instance with the withCredentials option
const axiosInstance = axios.create({
  baseURL: 'http://192.168.1.106:8000',
  withCredentials: true,
});

const app = createApp(App);
app.use(VueCookies);

// Check if the token is present in the cookie
const token = app.config.globalProperties.$cookies.get('access_token');
if (token) {
  // Update the isLoggedIn state in the store to true
  store.commit('updateLoggedInStatus', true);
  // Set the authorization header for all API requests
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

app.use(router);
// Inject the configured axios instance into the Vue app as $axios
app.config.globalProperties.$axios = axiosInstance;

app.use(store);
app.mount('#app');