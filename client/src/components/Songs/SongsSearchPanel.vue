<template>
  <panel title="Search">
    <v-text-field
      label="Search by song title, artist, album, or genre"
      v-model="search"
    ></v-text-field>
  </panel>
</template>

<script>
import _ from 'lodash'
export default {
  data () {
    return {
      search: ''
    }
  },
  // Watch = event handler that watches for text entered in search text field
  watch: {
    search: _.debounce(async function (value) {
      const route = {
        name: 'songs'
      }
      // If search text field is not empty
      if (this.search !== '') {
        // The search is ...
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    }, 200),
    // This updates the URLaddress and vice a versa for the search field
    '$route.query.search': {
      immediate: true,
      handler (value) {
        this.search = value
      }
    }
  }
}
</script>

<style scoped>

</style>
