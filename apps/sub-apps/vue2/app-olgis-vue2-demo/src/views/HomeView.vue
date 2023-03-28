<template>
  <div class="main-view">
    <OlGisMap></OlGisMap>
  </div>
</template>

<script>
import {OlGisMap} from "@lambda/olgis-vue2";
import '@lambda/olgis-vue2/dist/style.css'

export default {
  name: "HomeView",
  components: {
    OlGisMap
  }
}
</script>

<style scoped>
.main-view {
  width: 100%;
  height: 100%;
}
</style>
