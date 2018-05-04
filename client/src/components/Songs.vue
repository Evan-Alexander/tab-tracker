
<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
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

        <div v-for="song in songs"
          :key="song.id">
          {{ song.title }}
          {{ song.artist }}
          {{ song.album }}
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
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
    console.log('songs', this.songs)
    // do a request to the backend for all songs
  }
}
</script>

<style scoped>

</style>
