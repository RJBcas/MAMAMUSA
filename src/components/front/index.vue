<template>
  <div class="FrontApp">
    <navbar></navbar>
    <div>
       <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import Navbar from './assets/Navbar.vue'
  export default{
    components: {
      navbar: Navbar
    }
  }
</script>
<style>
</style>