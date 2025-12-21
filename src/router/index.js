import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: 'Biswasindhu Mandal - Digital CV',
      description: 'Full Stack & OTT Front End Developer',
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
    meta: {
      title: 'About - Biswasindhu Mandal',
    },
  },
  {
    path: '/skills',
    name: 'Skills',
    component: () => import('@/views/Skills.vue'),
    meta: {
      title: 'Skills - Biswasindhu Mandal',
    },
  },
  {
    path: '/experience',
    name: 'Experience',
    component: () => import('@/views/Experience.vue'),
    meta: {
      title: 'Experience - Biswasindhu Mandal',
    },
  },
  {
    path: '/education',
    name: 'Education',
    component: () => import('@/views/Education.vue'),
    meta: {
      title: 'Education - Biswasindhu Mandal',
    },
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('@/views/Portfolio.vue'),
    meta: {
      title: 'Portfolio - Biswasindhu Mandal',
    },
  },
  // 404 Page
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
    meta: {
      title: 'Page Not Found',
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    } else {
      return { top: 0, behavior: 'smooth' };
    }
  },
});

// Navigation guard for meta tags
router.beforeEach((to, from, next) => {
  // Update document title
  document.title = to.meta.title || 'Biswasindhu Mandal - Digital CV';

  // Update meta description
  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta && to.meta.description) {
    descriptionMeta.setAttribute('content', to.meta.description);
  }

  next();
});

export default router;
