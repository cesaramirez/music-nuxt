<template>
<v-flex column md4 wrap>
  <v-card color="purple" target="_blank" :href=" album.artistViewUrl" class="white--text my-4">
    <v-container fluid >
      <v-layout row>
        <v-flex xs7>
          <div>
            <div class="headline">{{ album.collectionCensoredName }}</div>
            <div>{{ album.artistName }}</div>
          </div>
        </v-flex>
        <v-flex xs5>
          <v-card-media :src="album.artworkUrl100" height="100px" contain></v-card-media>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
  </v-flex>
</template>

<script>
  export default {
    props: ['album']
  }
</script>

<style scoped>


</style>
