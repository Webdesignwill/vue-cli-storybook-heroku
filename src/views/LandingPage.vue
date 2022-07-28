<template>
  <div class="landing-page">
    <img class="banner" src="../static/tv-shows/lesamericains.jpg" />
    <p>Recommened</p>
    <div class="tv-shows">
      <img class="rows" src="../static/tv-shows/cringoYsoldier.jpg" />
      <img class="rows" src="../static/tv-shows/darkmaterials.jpg" />
      <img class="rows" src="../static/tv-shows/GoT.jpg" />
      <img class="rows" src="../static/tv-shows/halo.jpg" />
      <img class="rows" src="../static/tv-shows/hawkeye.webp" />
      <img class="rows" src="../static/tv-shows/heartbeat.webp" />
      <img class="rows" src="../static/tv-shows/ironFist.jpg" />
      <img class="rows" src="../static/tv-shows/mandalorian.webp" />
      <img class="rows" src="../static/tv-shows/loki.webp" />
      <img class="rows" src="../static/tv-shows/lucifer.jpg" />
    </div>
    <div class="tv-shows">
      <img class="rows" src="../static/tv-shows/cringoYsoldier.jpg" />
      <img class="rows" src="../static/tv-shows/darkmaterials.jpg" />
      <img class="rows" src="../static/tv-shows/GoT.jpg" />
      <img class="rows" src="../static/tv-shows/halo.jpg" />
      <img class="rows" src="../static/tv-shows/hawkeye.webp" />
      <img class="rows" src="../static/tv-shows/heartbeat.webp" />
      <img class="rows" src="../static/tv-shows/ironFist.jpg" />
      <img class="rows" src="../static/tv-shows/mandalorian.webp" />
      <img class="rows" src="../static/tv-shows/loki.webp" />
      <img class="rows" src="../static/tv-shows/lucifer.jpg" />
    </div>
    <div class="tv-shows">
      <img class="rows" src="../static/tv-shows/cringoYsoldier.jpg" />
      <img class="rows" src="../static/tv-shows/darkmaterials.jpg" />
      <img class="rows" src="../static/tv-shows/GoT.jpg" />
      <img class="rows" src="../static/tv-shows/halo.jpg" />
      <img class="rows" src="../static/tv-shows/hawkeye.webp" />
      <img class="rows" src="../static/tv-shows/heartbeat.webp" />
      <img class="rows" src="../static/tv-shows/ironFist.jpg" />
      <img class="rows" src="../static/tv-shows/mandalorian.webp" />
      <img class="rows" src="../static/tv-shows/loki.webp" />
      <img class="rows" src="../static/tv-shows/lucifer.jpg" />
    </div>
    <div class="tv-shows">
      <img class="rows" src="../static/tv-shows/cringoYsoldier.jpg" />
      <img class="rows" src="../static/tv-shows/darkmaterials.jpg" />
      <img class="rows" src="../static/tv-shows/GoT.jpg" />
      <img class="rows" src="../static/tv-shows/halo.jpg" />
      <img class="rows" src="../static/tv-shows/hawkeye.webp" />
      <img class="rows" src="../static/tv-shows/heartbeat.webp" />
      <img class="rows" src="../static/tv-shows/ironFist.jpg" />
      <img class="rows" src="../static/tv-shows/mandalorian.webp" />
      <img class="rows" src="../static/tv-shows/loki.webp" />
      <img class="rows" src="../static/tv-shows/lucifer.jpg" />
    </div>
  </div>
</template>
<!-- 
<script>
export default {
  name: 'LandingPage',
}
</script> -->

<style lang="scss" scoped>
.landing-page {
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: url(../static/background-image/peakpx.jpg);
  width: 100%;
}

.banner {
  height: 300px;
}

.tv-shows {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-auto-rows: min-content;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  width: 100%;
  margin-top: 10px;
  overflow-x: scroll;
  scrollbar-width: 3px;
}

.rows {
  background-color: blanchedalmond;
  height: 275px;
}
</style>
