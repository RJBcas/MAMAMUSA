<template>
  <div class="FrontApp">
    <navbar></navbar>
    <lateralbar></lateralbar>
    <div>
       <router-view></router-view>
    </div>
    <foo></foo>
  </div>
</template>
<script>
  import Footer from './assets/Footer.vue'
  import Navbar from './assets/Navbar.vue'
  import Lateralbar from './assets/Lateralbar'
  export default{
    components: {
      foo: Footer,
      navbar: Navbar,
      lateralbar: Lateralbar
    },
    data () {
      return {
      }
    }
  }
</script>
<style>
</style>