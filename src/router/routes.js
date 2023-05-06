
const routes = [
  { path: '/options', component: () => import('pages/OptionsPage.vue') },
  { path: '/popup', component: () => import('pages/PopupPage.vue') },
  { path: '/main', component: () => import('pages/MainPage.vue') },
]

export default routes
