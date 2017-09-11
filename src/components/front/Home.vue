<template>

  <div class="Home">
  <lateralBar></lateralBar>
  <videoFondo></videoFondo>
  <publicidadFuter></publicidadFuter>
  </div>

</template>
<script>
  
  import LateralBar from './assets/Lateralbar'
  import Footer from './assets/Footer'
  import VideoFondo from './assets/VideoFondo'
  export default{
    components: {
      lateralBar: LateralBar,
      publicidadFuter: Footer,
      videoFondo: VideoFondo
    }
  }
</script>
<style scoped>
 .Home{
  background: black;
 }
 .fondo-im{
  position: absolute;
  display: block;
 }
</style>