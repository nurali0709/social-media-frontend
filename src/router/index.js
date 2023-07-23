import { createRouter, createWebHistory } from 'vue-router';
import PostBlock from '../components/PostBlock.vue';
import PostDetail from '../components/PostDetail.vue';

const routes = [
  { path: '/postblock', component: PostBlock },
  {
    path: '/post/:id',
    name: 'PostDetail',
    component: PostDetail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
