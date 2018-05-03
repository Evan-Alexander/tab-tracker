import Api from '@/services/Api'
// api.js sets up the base URL
export default {
  getAllSongs () {
    return Api().get('songs')
  },
  post (song) {
    return Api().post('songs', song)
  }
}
