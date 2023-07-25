import { createRouter, createWebHistory } from 'vue-router';
import PostBlock from '@/components/PostBlock.vue';
import PostDetail from '@/components/PostDetail.vue';
import SearchResults from '@/components/SearchResults.vue';

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
    }  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
