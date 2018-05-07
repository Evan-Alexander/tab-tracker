import Api from '@/services/Api'
// api.js sets up the base URL
export default {

  getAllSongs (search) {
    return Api().get('songs', {
      params: {
        search: search
      }
    })
  },
  post (song) {
    return Api().post('songs', song)
  },
  show (songId) {
    return Api().get(`songs/${songId}`)
  },
  put (song) {
    return Api().put(`songs/${song.id}`, song)
  }
}
