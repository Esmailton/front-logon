export default [
  {
    name: 'signin',
    path: '/signin',
    component: () => import(/* webpackChunkName: "signin" */ './views/Signin.vue')
  }
]
