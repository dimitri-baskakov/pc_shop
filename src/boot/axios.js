import axios from 'axios'
import { LocalStorage } from 'quasar'
import { boot } from 'quasar/wrappers'

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
// const api = axios.create({ baseURL: 'https://api.dev.crmrbpc.ru/api/v1' })
const api = axios.create({ baseURL: process.env.API_URL })

api.interceptors.request.use((config) => {
  let token = LocalStorage.getItem('token')
  if (token) {
    config.headers['Authorization'] = `Bearer ${ token }`
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

api.interceptors.response.use((response) => {
  if (response.data && response.data.access_token) {
    LocalStorage.set('token', response.data.access_token)
  }
  return response;
}, (error) => {
  return Promise.reject(error.message);
})

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})

export { api }
