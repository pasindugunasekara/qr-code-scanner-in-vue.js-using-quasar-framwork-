
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [

      { path: '/', component: () => import('pages/HomePage.vue') },
      { path: 'index', component: () => import('pages/Index.vue') }
    ]
  },
]
  // Always leave this as last one,
  // but you can also remove it
  if (process.env.MODE !== 'ssr'){
    routes.push({
      path: '*',
      component: () => import('pages/Error404.vue')
    })
    
  }


export default routes
