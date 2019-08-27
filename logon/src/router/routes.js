import { routes as auth } from '../modules/auth'
import { routes as home } from '../modules/dashboard'

export default [
  ...auth,
  ...home
]
