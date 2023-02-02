import axios from 'axios'
import { serviceInterceptors } from '../utils'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

serviceInterceptors(api)

export * from './lib'
export { api }
