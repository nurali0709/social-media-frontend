import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js';
import VueCookies from "vue-cookies";
import store from './store/index.js';

const app = createApp(App);
app.use(VueCookies);
app.use(router);
app.use(store);
app.mount('#app');