
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/PageTodo.vue') },
      { path: '/settings', component: () => import('src/pages/PageSettings.vue') },
      { path: '/settings/help', component: () => import('src/pages/PageHelp.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
