
<template>
  <div>
    <v-layout>
      <v-flex xs4 class="mt-3">
        <panel title="Song Metadata">

          <v-text-field
          label="Title"
          v-model="song.title"
          required
          :rules="[required]"
          ></v-text-field>

          <v-text-field
          label="Artist"
          v-model="song.artist"
          required
          :rules="[required]"
          ></v-text-field>

          <v-text-field
          label="Genre"
          v-model="song.genre"
          required
          :rules="[required]"
          ></v-text-field>

          <v-text-field
          label="Album"
          v-model="song.album"
          required
          :rules="[required]"
          ></v-text-field>

          <v-text-field
          v-model="song.albumImageUrl"
          label="Album Image URL"
          required
          :rules="[required]"
          ></v-text-field>

          <v-text-field
          label="YouTube ID"
          v-model="song.youtubeId"
          required
          :rules="[required]"
          ></v-text-field>

        </panel>
      </v-flex>
      <v-flex xs8 class="ml-3 mt-3">
        <panel title="Song Structure">

          <v-text-field
          label="Tabs"
          v-model="song.tabs"
          required
          :rules="[required]"
          multi-line
          ></v-text-field>

          <v-text-field
          label="Lyrics"
          v-model="song.lyrics"
          required
          :rules="[required]"
          multi-line
          ></v-text-field>

        </panel>
        <div class="danger-alert" v-if="error">
          {{ error }}
        </div>
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
        tabs: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async create () {
      this.error = null
      const areAllSongsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      console.log(this.song.albumImageUrl)
      if (!areAllSongsFilledIn) {
        this.alert = true
        this.error = 'Please fill in all the required fields.'
        return
      }
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
