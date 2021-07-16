export default [
  {
    path: '/saveuser',
    name: 'User',
    component: () => import(/* webpackChunkName: "about" */ './User.vue')
  }
]
