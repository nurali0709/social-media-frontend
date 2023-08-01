import { createRouter, createWebHistory } from 'vue-router';
import PostBlock from '@/components/PostBlock.vue';
import PostDetail from '@/components/PostDetail.vue';
import SearchResults from '@/components/SearchResults.vue';
import LogIn from "@/components/LogIn.vue";
import SignUp from "@/components/SignUp.vue";
import LogOut from "@/components/LogOut.vue";

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
    path: '/register',
    component: SignUp,
    name: 'Register'
  },
  {
    path: '/logout',
    component: LogOut,
    name: 'Logout'
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
