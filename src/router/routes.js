
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Main.vue') },
      { path: '/search', component: () => import('pages/search/search.vue') },
      { path: '/mysport', component: () => import('pages/mysport.vue') },
      { path: '/notifications', component: () => import('pages/notifications.vue') },
      { path: '/feedback', component: () => import('pages/FeedBack.vue') },
      { path: '/profile', component: () => import('pages/profile.vue') },
      { path: '/bookmarks', component: () => import('pages/bookmarks.vue') },
      { path: '/sportslist', component: () => import('pages/SportsList.vue') },
      { path: '/schedule', component: () => import('pages/schedule.vue') },
      { path: '/settings', component: () => import('pages/settings.vue') }
    ]
  }
  // {
  //   path: '/search',
  //   component: () => import('pages/search/search.vue')
  // }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
