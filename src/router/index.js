import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Destinations from '../views/Destinations.vue';
import Destination from '../views/Destination.vue';
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
  },
  {
    path: '/destinations',
    name: 'destinations',
    component: Destinations,
  },
  {
    path: '/destinations/:id',
    name: 'destination',
    component: Destination,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
});

export default router;
