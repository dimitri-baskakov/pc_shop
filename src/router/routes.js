
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      // { path: 'products/:id', component: () => import('pages/Product.vue') },
      { path: 'cart', component: () => import('pages/Cart.vue') },
      { path: 'personal-area', component: () => import('pages/PersonalArea.vue') },
      { path: '/about', component: () => import('pages/About.vue') },
      { path: '/contacts', component: () => import('pages/Contacts.vue') },
      { path: '/terms-of-use', component: () => import('pages/TermsOfUse.vue') },
      { path: '/cookies', component: () => import('pages/Cookies.vue') },
      { path: '/privacy-policy', component: () => import('pages/PrivacyPolicy.vue') },
      { path: '/order-details', component: () => import('pages/OrderDetails.vue') },
      { path: '/personal-order/:id', component: () => import('pages/PersonalOrder.vue') },
    ],
  },

  {
    path: '/sections/:slug/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Section.vue') },
      { path: 'assemblies/:id', component: () => import('pages/Assembly.vue'), name: 'assembly' },
      { path: 'products/:id', component: () => import('pages/Product.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
