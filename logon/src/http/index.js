import axios from 'axios'

const API = 'http://localhost:5000/'

const http = axios.create({
  baseURL: API
})

const setBearerToken = token => {
  http.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export default http
export { setBearerToken }
