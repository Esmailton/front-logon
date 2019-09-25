import http from './index'
import store from '../store'

const sucess = res => res

const error = err => {
  if (401 === err.response.status) {
    store.dispatch('auth/ActionSignOut')
    window.location = '/signin'
  } else {
    return Promise.reject(err)
  }
}

http.interceptors.response.use(sucess, error)
