<template>
  <v-app>
    <ToolBar/>
    <nuxt/>
  </v-app>
</template>
<script>
import ToolBar from '~/components/Toolbar.vue'

export default {
  components: {
    ToolBar
  }
}
</script>

<style lang="stylus">
html, body {
  font-family: Roboto, sans-serif;
}
</style>

