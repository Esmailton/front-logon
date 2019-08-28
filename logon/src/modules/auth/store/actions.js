import services from '@/http'
import * as types from './mutations-types'

export const ActionDoLogin = (context, payload) => {
  return services.auth.signin(payload)
}

export const ActionsSetUser = ({ commit }, payload) => {
  commit(types.SET_USER, payload)
}

export const ActionSetToken = ({ commit }, payload) => {
  commit(types.SET_TOKEN)
}
