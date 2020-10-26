import axios from 'axios'
import Cookies from 'js-cookie'
import { AuthToken } from '@/store/types'


axios.defaults.baseURL = 'http://localhost/api'
axios.defaults.headers = {
  withCredentials: true
}
axios.interceptors.request.use(request => {
  const authTokens = Cookies.get('auth_tokens')
  if (authTokens !== undefined) {
    const parsedTokens: AuthToken = JSON.parse(authTokens)
    request.headers = {
      ['access-token']: parsedTokens['access-token'],
      client: parsedTokens.client,
      uid: parsedTokens.uid
    }
  }
  return request
})

export default axios
