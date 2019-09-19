import { routes as auth } from '../modules/auth'
import { routes as dashboard } from '../modules/dashboard'

export default [
  ...auth,
  ...dashboard
]
