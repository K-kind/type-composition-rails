import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/api'
axios.defaults.headers = {
  withCredentials: true
}

export default axios
