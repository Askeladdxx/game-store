
const routes = [
  {
    path: '/',
    component: () => import('pages/game-store/HomePage.vue'),
   
  },
  {
    path: '/browse',
    name: 'browse',
    component: () => import('pages/game-store/BrowsePage.vue'),
   
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
