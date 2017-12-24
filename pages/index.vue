<template>
  <div>
    <v-container fluid>
      <v-layout row justify-center>
          <v-flex xs6>
            <form @submit.prevent="submit">
              <h2 class="text-xs-center py-4">Search Music</h2>
              <v-text-field name="search" label="Enter Artist Name" v-model="search" autofocus></v-text-field>
            </form>
          </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        search: null
      }
    },
    methods: {
      submit () {
        this.$router.push(`results/${this.search}`)
      }
    }
  }
</script>
