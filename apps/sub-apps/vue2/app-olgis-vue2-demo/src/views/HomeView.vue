<template>
  <div class="main-view">
    <v-map>
      <v-tile :tile-type="'ARCGIS_NORMAL'"></v-tile>
    </v-map>
  </div>
</template>

<script>
import {VMap, VTile} from "@lambda/olgis-vue2";
import '@lambda/olgis-vue2/olgis-vue2.css'

export default {
  name: "HomeView",
  components: {
    VMap,
    VTile
  }
}
</script>

<style scoped>
.main-view {
  width: 100%;
  height: 100%;
}
</style>
