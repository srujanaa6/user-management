import User from 'layouts/User.vue'

const routes = [
  {
    path: '/',
    component: () => import('layouts/Mainlayout.vue'),

    children: [
      { path: '/',name:'index', component: () => import('components/LoginForm.vue') },

    ]
  },
  {
    path:'/user-dashboard',
    component: () => import('layouts/User.vue'),
    children:[

    { path:'/user-dashboard',name:'userDashboard',component: () => import('components/UserDashboard.vue')}    ,
    ]
  },
  {
    path:'/admin-dashboard',
    component: () => import('layouts/admin.vue'),
    children:[

      { path: '/admin-dashboard',name:'adminDashboard', component: () => import('components/AdminDashboard.vue') },

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
    ,

  },
 
]

export default routes
