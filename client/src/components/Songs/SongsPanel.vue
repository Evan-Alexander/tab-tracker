
<template>
  <panel title="Songs">
      <v-btn
        slot="action"
        @click="navigateTo({name: 'songs-create'})"
        class="cyan accent-1"
        light
        small
        absolute right middle
        fab>
        <v-icon>add</v-icon>
      </v-btn>

    <div v-for="song in songs" :key="song.id" class="song">

      <v-layout>
        <v-flex xs6>
          <div class="song-title">
            {{ song.title }}
          </div>
          <div class="song-artist">
            {{ song.artist }}
          </div>
          <div class="song-genre">
            {{ song.genre }}
          </div>

          <v-btn
            dark
            class="cyan"
            @click="navigateTo({
              name: 'song',
              params: { songId: song.id }})">
            View
          </v-btn>
        </v-flex>

        <v-flex xs6>
          <img class="album-image" :src="song.albumImageUrl">
        </v-flex>

      </v-layout>
    </div>
  </panel>
</template>

<script>
import SongsService from '@/services/SongsService'
export default {
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
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongsService.getAllSongs(value)).data
        console.log(this.songs)
      }
    }
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
