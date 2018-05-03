import Api from '@/services/Api'
// api.js sets up the base URL
export default {
  register (credentials) {
    return Api().post('register', credentials)
  },

  login (credentials) {
    return Api().post('login', credentials)
  }
}
