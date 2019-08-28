import axios from 'axios'
import services from './services'

const API = 'http://localhost:5000/'

const http = axios.create({
  baseURL: API
})

export { http }
export default services
