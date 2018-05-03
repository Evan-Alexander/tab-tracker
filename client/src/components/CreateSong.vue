
<template>
  <div>
    <v-layout>
      <v-flex xs4 class="mt-3">
        <panel title="Song Metadata">
          <v-text-field
          label="Title"
          v-model="song.title"
          ></v-text-field>
          <v-text-field
          label="Artist"
          v-model="song.artist"
          ></v-text-field>
          <v-text-field
          label="Genre"
          v-model="song.genre"
          ></v-text-field>
          <v-text-field
          label="Album"
          v-model="song.album"
          ></v-text-field>
          <v-text-field
          label="Album Image URL"
          v-model="song.albumImageUrl"
          ></v-text-field>
          <v-text-field
          label="YouTube ID"
          v-model="song.youtubeId"
          ></v-text-field>
        </panel>
      </v-flex>
      <v-flex xs8 class="ml-3 mt-3">
        <panel title="Song Structure">
          <v-text-field
          label="Tabs"
          multi-line
          v-model="song.tabs"
          ></v-text-field>
          <v-text-field
          label="Lyrics"
          multi-line
          v-model="song.lyrics"
          ></v-text-field>
        </panel>
        <v-btn
          dark
          class="cyan"
          @click="create">
          Create Song
        </v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      }
    }
  },
  methods: {
    async create () {
      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (error) {
        console.log(error)
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>

</style>
