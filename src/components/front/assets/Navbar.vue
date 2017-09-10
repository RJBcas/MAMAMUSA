<template>
        <!-- NAV-->
      <nav id="top-menu" class="navbar navbar-default sinbor" role="navigation">
        <div class="collapse navbar-collapse navbar-ex1-collapse">
           <ul class="nav navbar-nav">
              <li class="active"><router-link to="/">HOME</router-link></li>
              <li ><router-link to="/">NOTAS</router-link></li>
              <li><router-link to="agenda">AGENDA</router-link></li>
              <li><a href="centros.html">CENTROS</a></li>
            <li><a href="sala_ensayo.html">TALLERES</a></li>
              <li><a href="#">HOLA!</a></li>
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

      </nav>
      
      <!-- NAV-->   
</template>
<script>
</script>
<style>
#top-menu{
  top: 3.9%;
position: absolute;
width: 65%;
z-index:99;
}
</style>