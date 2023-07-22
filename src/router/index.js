import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import SignUp from '../views/SignUp.vue';
import Search from '../views/Search.vue';
import PostBlock from '../components/PostBlock.vue';


Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/signup', component: SignUp },
  { path: '/search', component: Search },
  { path: '/postblock', component: PostBlock }
];

const router = new VueRouter({
  routes,
});

export default router;
