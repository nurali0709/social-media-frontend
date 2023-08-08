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
app.use(router);
app.config.globalProperties.$axios = axiosInstance;

app.use(store);
app.mount('#app');
