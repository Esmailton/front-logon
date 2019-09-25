import store from '../store'

export default async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    try {
      await store.dispatch('auth/ActionCheckToken')
    } catch (err) {
      next({
        name: 'signin',
        query: { redirect: to.fullPath }
      })
    }
    if (store.getters['auth/hasToken'] && to.name === 'signin') {
      next({
        name: 'dashboard',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
}
