import { createRouter, createWebHistory } from 'vue-router';
import Guestbook from '@/components/Guestbook.vue';
import Guestlist from '@/components/Guestlist.vue';

const routes = [
  { path: '/', component: Guestbook },
  { path: '/guestlist', component: Guestlist }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
