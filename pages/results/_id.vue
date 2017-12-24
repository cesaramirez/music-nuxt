<template>
  <div>
    <v-container fluid grid-list-xl>
      <v-layout justify-center>
        <v-flex>
          <template v-if="albumExists">
            <h2>Results for {{ $route.params.id }}</h2>
            <template v-for="album in albumData">
              <card :album="album"></card>
            </template>
          </template>
          <template v-else>
            <h2 class="text-xs-center">Could Not Find Album</h2>
          </template>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'
import Card from '~/components/Card.vue'
export default {
  asyncData ({ params }) {
    return axios
      .get(`https://itunes.apple.com/search?term=${params.id}&entity=album`)
      .then(response => {
        return {albumData: response.data.results}
      })
  },
  components: {
    Card
  },
  computed: {
    albumExists () {
      return this.albumData.length > 0
    }
  }
}
</script>

<style scoped>

</style>
