import { AxiosInstance } from 'axios'

export const serviceInterceptors = (api: AxiosInstance) =>
  api.interceptors.response.use(
    (response) => response,
    (error) => {
      console.error(`Looks like there was a problem: ${error.message}`)
      return Promise.reject(error)
    }
  )
