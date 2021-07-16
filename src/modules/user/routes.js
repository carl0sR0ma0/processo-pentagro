export default [
  {
    name: 'user',
    path: '/user',
    component: () => import(/* webpackChunckName: "Login" */ './pages/User')
  }
]
