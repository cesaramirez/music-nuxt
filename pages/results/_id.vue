<template>
  <div>
    <v-container fluid>
      <v-layout row justify-center>
        <h2>Hello from results route {{ $route.params.id }}</h2>
        {{ albumData }}
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  asyncData ({ params }) {
    return axios
      .get(`https://itunes.apple.com/search?term=${params.id}&entity=album`)
      .then(response => {
        return {albumData: response.data.results}
      })
  },
  middleware: 'search'
}
</script>

<style scoped>

</style>
