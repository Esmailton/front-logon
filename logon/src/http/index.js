import axios from 'axios'
import services from './services'

const API = 'http://localhost:5000/'

const http = axios.create()
http.defaults.baseURL = API

// console.log(http.get('movement/'))

export { http }

export default services
