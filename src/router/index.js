import { createRouter, createWebHistory } from 'vue-router';
import PostBlock from '@/components/PostBlock.vue';
import PostDetail from '@/components/PostDetail.vue';

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
