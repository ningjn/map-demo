<script setup>
import VMap from '@/components/openlayers-gis/map/VMap.vue'
import VTile from '@/components/openlayers-gis/layers/tile/TileLayer.vue'
import VVector from '@/components/openlayers-gis/layers/vector/VectorLayer.vue'
import VGraphic from '@/components/openlayers-gis/layers/graphic/GraphicLayer.vue'

</script>

<template>
  <div id="app">
    <v-map>
      <v-tile :tile-type="ARCGIS_NORMAL"></v-tile>
    </v-map>
  </div>
</template>

<style scoped>

</style>
