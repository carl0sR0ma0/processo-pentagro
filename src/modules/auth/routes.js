export default [
  {
    name: 'login',
    path: '/login',
    component: () => import(/* webpackChunckName: "Login" */ './pages/Login')
  }
]
