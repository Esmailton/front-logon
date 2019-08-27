import axios from 'axios'

const API = 'http://localhost:5000/'

const http = axios.create({
  baseURL: API
})

export default http
