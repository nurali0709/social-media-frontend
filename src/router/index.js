import { createRouter, createWebHistory } from 'vue-router';
import PostBlock from '../components/PostBlock.vue';
import PostDetail from '@/components/PostDetail.vue';
// import PostDetailPage from '@/views/PostDetailPage.vue';

const routes = [
  { path: '/postblock', component: PostBlock },
  {
    path: '/post/:postId',
    name: 'PostDetail', // New route name for the detailed post page
    component: PostDetail, // Updated path for the detailed post page
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
