import { createRouter, createWebHistory } from 'vue-router';
import PostBlock from '@/components/PostBlock.vue';
import PostDetail from '@/components/PostDetail.vue';
import SearchResults from '@/components/SearchResults.vue';
import LogIn from "@/components/LogIn.vue";
import SignUp from "@/components/SignUp.vue";
import LogOut from "@/components/LogOut.vue";
import UserSettings from "@/components/UserSettings.vue";
import CreatePost from "@/components/CreatePost.vue"
import store from '@/store/index.js';

const routes = [
  { 
    path: '/', 
    component: PostBlock 
  },
  {
    path: '/post/:postId', 
    component: PostDetail, 
    name: 'PostDetail', 
    props: true },
  {
    path: '/search-results',
    component: SearchResults,
    props: route => ({ searchQuery:  route.query.q })
    },
  {
    path: '/login',
    component: LogIn,
    name: 'Login'
  },
  {
    path: '/signup',
    component: SignUp,
    name: 'Signup'
  },
  {
    path: '/logout',
    component: LogOut,
    name: 'Logout'
  },
  {
    path: '/settings/:userId',
    component: UserSettings,
    name: 'Settings',
    // Add the beforeEnter guard
    beforeEnter: (to, from, next) => {
      const isLoggedIn = store.state.isLoggedIn; // Get the isLoggedIn state from Vuex store
      if (isLoggedIn) {
        // User is authenticated, allow access to the "Settings" page
        next();
      } else {
        // User is not authenticated, redirect to the login page or show an error message
        next('/login'); // Replace '/login' with the path to your login page
      }
    },
  },
  {
    path: '/create-post',
    component: CreatePost,
    name: 'CreatePost'
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
