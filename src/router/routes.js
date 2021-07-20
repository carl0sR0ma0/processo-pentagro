import { routes as auth } from '../modules/auth'
import { routes as user } from '../modules/user'
import { routes as home } from '../pages/Home'

export default [
  ...auth,
  ...user,
  ...home
]
