import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
// import Jobs from '../views/jobs/Jobs.vue';
// import JobDetails from '../views/jobs/JobDetails.vue';
// import NotFound from '../views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    // // route level code-splitting
    // // this generates a separate chunk (about.[hash].js) for this route

    // // which is lazy-loaded when the route is visited.
    // component: () => import('../views/AboutView.vue')
  },
  // {
  //   path: '/jobs',
  //   name: 'Jobs',
  //   component: Jobs,
  // },
  // {
  //   path: '/jobs/:id',
  //   name: 'JobDetails',
  //   component: JobDetails,
  //   props: true,
  // },
  //redirect
  // {
  //   path: '/all-jobs',
  //   redirect: './jobs',
  // },
  //catchall 404
  // {
  //   path: '/:catchAll(.*)',
  //   name: 'NotFound',
  //   component: NotFound,
  // },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
});

export default router;
