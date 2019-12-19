import http from '@/http'

export const add = function addFunc (payload) {
  return http({ url: 'employee/', method: 'post', data: payload }).then(res => {
  })
}

export function employeeResponse () {
  return http.get('employee/')
}
