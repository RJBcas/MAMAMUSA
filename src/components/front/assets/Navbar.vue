<template>
        <!-- NAV-->
      <nav id="top-menu" class="navbar navbar-default sinbor" role="navigation">
        <div class="collapse navbar-collapse navbar-ex1-collapse">
           <ul class="nav navbar-nav">
              <li @click="isActive(1)" v-bind:class="[ menuActive === 1 ? 'active' : '']">
                <router-link to="/">
                  HOME
                </router-link>
              </li>
              <li @click="isActive(2)" v-bind:class="[ menuActive === 2 ? 'active' : '']">
                <router-link to="notas">
                  NOTAS
                </router-link>
              </li>
              <li @click="isActive(3)" v-bind:class="[ menuActive === 3 ? 'active' : '']">
                <router-link to="agenda">
                  AGENDA
                </router-link>
              </li>
              <li @click="isActive(4)" v-bind:class="[ menuActive === 4 ? 'active' : '']">
                <router-link to="centros">
                  CENTROS
                </router-link>
              </li>
              <li @click="isActive(5)" v-bind:class="[ menuActive === 5 ? 'active' : '']">
                <router-link to="talleres">
                  TALLERES
                </router-link>
              </li>
              <li  @click="isActive(6)" v-bind:class="[ menuActive === 6 ? 'active' : '']"  >
                  <a href="#" data-toggle="modal" data-target=".modal-info1" @click="alert()">HOLA! </a>
              </li>
              <li><a href="#"><img src="static/imagenes/RADIO.png" alt=""></a></li>

          </ul>
       
          <form class="navbar-form navbar-left" role="search">
            <div class="form-group">
            <div class="search">
             <input type="text" class="form-control gris sinbor" placeholder=" Buscar">
             <span class="fa bn fa-search glyphicon glyphicon-search"></span>
        </div>
              
            </div>
           
          </form>
          <ul class="nav navbar-nav">
            
          <li><a href="#"><img src="static/imagenes/FAVORITOS.png" alt=""></a></li>
        <li><a href="#"><img src="static/imagenes/FAVORITOS.png" alt=""></a></li>
          
          </ul>
        </div>
        <div v-if="modal === true">
          <modal1 id="mdd"  @closeModal="modal = false"></modal1>
        </div>
      </nav>
      
      <!-- NAV-->


      
</template>
<script>
  import Modaltop from './Modaltop'
  export default{
    components: {
      modal1: Modaltop
    },
    data () {
      return {
        modal: false,
        menuActive: 1
      }
    },
    methods: {
      isActive (num) {
        this.menuActive = num
      },
      alert () {
        this.modal = true
      }
    }
  }
</script>
<style>
#mdd{
  z-index: 999999999;
}
#top-menu{
  top: 3.9%;
position: absolute;
width: 65%;
z-index:99;
}
</style>