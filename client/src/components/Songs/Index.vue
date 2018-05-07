
<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <songs-panel />
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
import SongsPanel from './SongsPanel'
export default {
  components: {
    Panel,
    SongsPanel
  },
  data () {
    return {
      songs: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    this.songs = (await SongsService.getAllSongs()).data
    // do a request to the backend for all songs
  }
}
</script>

<style scoped>
  .song {
    padding: 30px;
    overflow: hidden;
    height: 330px;
  }
  .album-image {
    width: 70%;
    margin: 0 auto;
  }
  .song-title {
    font-size: 30px;
  }
  .song-artist {
    font-size: 24px;
  }
  .song-genre {
    font-size: 18px;
  }

</style>
