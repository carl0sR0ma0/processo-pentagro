export default [
  {
    name: 'user',
    path: '/saveuser',
    component: () => import(/* webpackChunckName: "Login" */ './pages/User')
  }
]
