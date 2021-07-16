import { routes as user } from '../pages/User'
import { routes as auth } from '../modules/auth'

export default [
  ...auth,
  ...user
]
