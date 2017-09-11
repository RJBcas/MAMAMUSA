<template>
  <div class="Notas" >
  <videoFondo></videoFondo>
  
    <!-- LOGO-->
      <img id="logo-right" src="static/imagenes/logoo.png" class="logo" alt="">
      <!-- LOGO-->
      <!--SLider-->

<div class="contenedor ta_ca">
      <div class="imagen actual">
        <img src="static/imagenes/01SL.jpg" />
      
        
        <div class="texto"><h1 class="azul">LA BANDA DE RAMIRO</h1></div>
      </div>
      
      <div class="imagen">
        <img src="static/imagenes/nms.jpg" />
      <div class="texto"><h1 class="azul">LA BANDA DE RAMIRO X</h1></div>
      </div>
      
      <div class="imagen">
        <img src="static/imagenes/fs.jpg" />
      <div class="texto"><h1 class="azul">LA BANDA DE RAMIRO</h1></div>
      </div>
      
      <div class="imagen">
        <img src="http://www.reciclay.com.ve/gio/yosemite.jpg" />
      <div class="texto"><h1 class="azul">LA BANDA DE RAMIRO</h1></div>
      </div>
      
      <a href="#" class="anterior" onclick="anterior();">&#10094;</a>
      <a href="#" class="siguiente" onclick="siguiente();">&#10095;</a>
      
      <div class="puntos">
        <span class="punto activo" onclick="mostrar(0);"></span>
        <span class="punto" onclick="mostrar(1);"></span>
        <span class="punto" onclick="mostrar(2);"></span>
        <span class="punto" onclick="mostrar(3);"></span>
      </div>
    </div>
      <!--SLIDER-->
      <!--PUBLICIDAD 1.0-->

      <div class="row">
        <div class="col-md-6" id="ban_no">
          <div class="col-md-4 banert"><img src="static/imagenes/carousel-image-1.png" alt=""> </div>
          <div class="col-md-4 banert"><img src="static/imagenes/carousel-image-2.png" alt=""> </div>
          <div class="col-md-4 banert"><img src="static/imagenes/carousel-image-3.png" alt=""> </div>          
        </div>
        <div class="col-md-6" id="ban_no1">
          <div class="col-md-4 banert"><img src="static/imagenes/carousel-image-4.png" alt=""></div>
          <div class="col-md-4 banert"><img src="static/imagenes/carousel-image-5.png" alt=""></div>
          <div class="col-md-4 banert"><img src="static/imagenes/carousel-image-6.png" alt=""></div>
        </div>
      </div>
      <!--PUBLICIDAD 1.0-->
      <!--VIDEO-->

      <div class="row">
      
        <div class="col-md-12 video_titulos" >
        <h3 class="titulos"> MUSXS RECOMENDADOS</h3>
      
      <video id="vide" src="video/vidwp.mp4" controls muted  >
      </video> 
        </div>
      </div>
      <!--VIDEO-->
      <!--notas-->
      <!--notas-->
      <div class="row notas_notas">
        <div class="col-md-4 pub_c f">
            <figure class="hero-grid effect-move">
               <img class="hero-grid-image effect-image" src="static/imagenes/notas1.3.1.jpg" alt="" />    
              <figcaption class="hero-grid-content">
                <span class="hero-tag effect-target titulos">Centro</span>
                <h2 class="hero-grid-title effect-text effect-target titulos"> <strong>TITULO BOLUDO</strong> <br><strong>TITULO BOLUDO</strong></h2>
                <h5 class="hero-grid-title effect-text effect-target">AUTOR: CUARTETO DE NOS </h5> <h5 class="hero-grid-title effect-text effect-target"> PH: APOCALIPSIS ZOMBIS</h5>

                
                <h5 class="hero-grid-title effect-text  effect-target">19.03.2022</h5>
                <p class="hero-grid-text effect-target effect-text" >Impulsamos actividades culturales con el objetivo de posicionarnos críticamente ante la realidad de nuestros días, siendo parte de las distintas</p>
                <a class="hero-grid-link"  data-toggle="modal" data-target="#myModal" href="#">INFO</a>
              </figcaption>
           </figure>

        </div>
         

        <div class="col-md-4 pub_c f">
            <figure class="hero-grid effect-move">
               <img class="hero-grid-image effect-image" src="static/imagenes/notas1.3.1.jpg" alt="" />    
              <figcaption class="hero-grid-content">
                <span class="hero-tag effect-target titulos">Centro</span>
                <h2 class="hero-grid-title effect-text effect-target titulos"> <strong>CENTRO BOLUDO</strong> <br><strong>CENTRO BOLUDO</strong></h2>
                <h5 class="hero-grid-title effect-text effect-target"> DIRECCION: ETC ETC ETC ETC <br>DIRECCION: ETC ETC ETC ETC</h5>
                
                <h5 class="hero-grid-title effect-text  effect-target">HORARIO:10:00 9:00pm</h5>
                <p class="hero-grid-text effect-target effect-text" >Impulsamos actividades culturales con el objetivo de posicionarnos críticamente ante la realidad de nuestros días, siendo parte de las distintas</p>
                <a class="hero-grid-link"  data-toggle="modal" data-target="#myModal" href="#">INFO</a>
              </figcaption>
           </figure>

        </div>
        <div class="col-md-4 pub_c f">
            <figure class="hero-grid effect-move">
               <img class="hero-grid-image effect-image" src="static/imagenes/notas1.3.1.jpg" alt="" />    
              <figcaption class="hero-grid-content">
                <span class="hero-tag effect-target titulos">Centro</span>
                <h2 class="hero-grid-title effect-text effect-target titulos"> <strong>CENTRO BOLUDO</strong> <br><strong>CENTRO BOLUDO</strong></h2>
                <h5 class="hero-grid-title effect-text effect-target"> DIRECCION: ETC ETC ETC ETC <br>DIRECCION: ETC ETC ETC ETC</h5>
                
                <h5 class="hero-grid-title effect-text  effect-target">HORARIO:10:00 9:00pm</h5>
                <p class="hero-grid-text effect-target effect-text" >Impulsamos actividades culturales con el objetivo de posicionarnos críticamente ante la realidad de nuestros días, siendo parte de las distintas</p>
                <a class="hero-grid-link"  data-toggle="modal" data-target="#myModal" href="#">INFO</a>
              </figcaption>
           </figure>

        </div>
        <div class="col-md-4 pub_c f">
            <figure class="hero-grid effect-move">
               <img class="hero-grid-image effect-image" src="static/imagenes/notas1.3.1.jpg" alt="" />    
              <figcaption class="hero-grid-content">
                <span class="hero-tag effect-target titulos">Centro</span>
                <h2 class="hero-grid-title effect-text effect-target titulos"> <strong>CENTRO BOLUDO</strong> <br><strong>CENTRO BOLUDO</strong></h2>
                <h5 class="hero-grid-title effect-text effect-target"> DIRECCION: ETC ETC ETC ETC <br>DIRECCION: ETC ETC ETC ETC</h5>
                
                <h5 class="hero-grid-title effect-text  effect-target">HORARIO:10:00 9:00pm</h5>
                <p class="hero-grid-text effect-target effect-text" >Impulsamos actividades culturales con el objetivo de posicionarnos críticamente ante la realidad de nuestros días, siendo parte de las distintas</p>
                <a class="hero-grid-link"  data-toggle="modal" data-target="#myModal" href="#">INFO</a>
              </figcaption>
           </figure>

        </div>

      </div>
      <!--notas-->
      <!--publicidad notas-->
      <div class="row">
        <div class="col-md-4 pub_not"></div>
        <div class="col-md-4 pub_not "></div>
        <div class="col-md-4 pub_not"></div>
      </div>
      <!--publicidad notas--> 
      <!--categorias-->
      <div class="row"> 
        <nav id="filtro_notas" class="navbar navbar-default sinbor1" role="navigation">
        <div class="collapse navbar-collapse navbar-ex1-collapse">
           <ul class="nav navbar-nav titulos">
              <li  ><a href="#" class="azul nav_2" >TODOS</a></li>
            <li ><a href="#" class="circo nav_2">CIRCO</a></li>
              <li ><a href="#" class="musica nav_2" >MUSICA</a></li>
              <li ><a href="#" class="teatro nav_2" >TEATRO</a></li>
              <li ><a href="#" class="entrevi nav_2">ENTREVISTAS</a></li>
          </ul>
        </div>

      </nav>
      </div>
      <!--categorias-->
      <!--Notas-->
      <div class="notas_c notas_notas"> 
        <div class="row">
        <div class="col-md-4 pub_c f">
            <figure class="hero-grid effect-move">
               <img class="hero-grid-image effect-image" src="static/imagenes/notas1.3.1.jpg" alt="" />    
              <figcaption class="hero-grid-content">
                <span class="hero-tag effect-target titulos">Centro</span>
                <h2 class="hero-grid-title effect-text effect-target titulos"> <strong>CENTRO BOLUDO</strong> <br><strong>CENTRO BOLUDO</strong></h2>
                <h5 class="hero-grid-title effect-text effect-target"> DIRECCION: ETC ETC ETC ETC <br>DIRECCION: ETC ETC ETC ETC</h5>
                
                <h5 class="hero-grid-title effect-text  effect-target">HORARIO:10:00 9:00pm</h5>
                <p class="hero-grid-text effect-target effect-text" >Impulsamos actividades culturales con el objetivo de posicionarnos críticamente ante la realidad de nuestros días, siendo parte de las distintas</p>
                <a class="hero-grid-link"  data-toggle="modal" data-target="#myModal" href="#">INFO</a>
              </figcaption>
           </figure>

        </div>
        <div class="col-md-4 pub_c f">
            <figure class="hero-grid effect-move">
               <img class="hero-grid-image effect-image" src="static/imagenes/notas1.3.1.jpg" alt="" />    
              <figcaption class="hero-grid-content">
                <span class="hero-tag effect-target titulos">Centro</span>
                <h2 class="hero-grid-title effect-text effect-target titulos"> <strong>CENTRO BOLUDO</strong> <br><strong>CENTRO BOLUDO</strong></h2>
                <h5 class="hero-grid-title effect-text effect-target"> DIRECCION: ETC ETC ETC ETC <br>DIRECCION: ETC ETC ETC ETC</h5>
                
                <h5 class="hero-grid-title effect-text  effect-target">HORARIO:10:00 9:00pm</h5>
                <p class="hero-grid-text effect-target effect-text" >Impulsamos actividades culturales con el objetivo de posicionarnos críticamente ante la realidad de nuestros días, siendo parte de las distintas</p>
                <a class="hero-grid-link"  data-toggle="modal" data-target="#myModal" href="#">INFO</a>
              </figcaption>
           </figure>

        </div>
        <div class="col-md-4 pub_c f">
            <figure class="hero-grid effect-move">
               <img class="hero-grid-image effect-image" src="static/imagenes/notas1.3.1.jpg" alt="" />    
              <figcaption class="hero-grid-content">
                <span class="hero-tag effect-target titulos">Centro</span>
                <h2 class="hero-grid-title effect-text effect-target titulos"> <strong>CENTRO BOLUDO</strong> <br><strong>CENTRO BOLUDO</strong></h2>
                <h5 class="hero-grid-title effect-text effect-target"> DIRECCION: ETC ETC ETC ETC <br>DIRECCION: ETC ETC ETC ETC</h5>
                
                <h5 class="hero-grid-title effect-text  effect-target">HORARIO:10:00 9:00pm</h5>
                <p class="hero-grid-text effect-target effect-text" >Impulsamos actividades culturales con el objetivo de posicionarnos críticamente ante la realidad de nuestros días, siendo parte de las distintas</p>
                <a class="hero-grid-link"  data-toggle="modal" data-target="#myModal" href="#">INFO</a>
              </figcaption>
           </figure>

        </div>
        <div class="col-md-4 pub_c f">
            <figure class="hero-grid effect-move">
               <img class="hero-grid-image effect-image" src="static/imagenes/notas1.3.1.jpg" alt="" />    
              <figcaption class="hero-grid-content">
                <span class="hero-tag effect-target titulos">Centro</span>
                <h2 class="hero-grid-title effect-text effect-target titulos"> <strong>CENTRO BOLUDO</strong> <br><strong>CENTRO BOLUDO</strong></h2>
                <h5 class="hero-grid-title effect-text effect-target"> DIRECCION: ETC ETC ETC ETC <br>DIRECCION: ETC ETC ETC ETC</h5>
                
                <h5 class="hero-grid-title effect-text  effect-target">HORARIO:10:00 9:00pm</h5>
                <p class="hero-grid-text effect-target effect-text" >Impulsamos actividades culturales con el objetivo de posicionarnos críticamente ante la realidad de nuestros días, siendo parte de las distintas</p>
                <a class="hero-grid-link"  data-toggle="modal" data-target="#myModal" href="#">INFO</a>
              </figcaption>
           </figure>

        </div>>

      </div>
        <div class="row">
        <div class="col-md-4 pub_c f">
            <figure class="hero-grid effect-move">
               <img class="hero-grid-image effect-image" src="static/imagenes/notas1.3.1.jpg" alt="" />    
              <figcaption class="hero-grid-content">
                <span class="hero-tag effect-target titulos">Centro</span>
                <h2 class="hero-grid-title effect-text effect-target titulos"> <strong>CENTRO BOLUDO</strong> <br><strong>CENTRO BOLUDO</strong></h2>
                <h5 class="hero-grid-title effect-text effect-target"> DIRECCION: ETC ETC ETC ETC <br>DIRECCION: ETC ETC ETC ETC</h5>
                
                <h5 class="hero-grid-title effect-text  effect-target">HORARIO:10:00 9:00pm</h5>
                <p class="hero-grid-text effect-target effect-text" >Impulsamos actividades culturales con el objetivo de posicionarnos críticamente ante la realidad de nuestros días, siendo parte de las distintas</p>
                <a class="hero-grid-link"  data-toggle="modal" data-target="#myModal" href="#">INFO</a>
              </figcaption>
           </figure>

        </div>
        <div class="col-md-4 pub_c f">
            <figure class="hero-grid effect-move">
               <img class="hero-grid-image effect-image" src="static/imagenes/notas1.3.1.jpg" alt="" />    
              <figcaption class="hero-grid-content">
                <span class="hero-tag effect-target titulos">Centro</span>
                <h2 class="hero-grid-title effect-text effect-target titulos"> <strong>CENTRO BOLUDO</strong> <br><strong>CENTRO BOLUDO</strong></h2>
                <h5 class="hero-grid-title effect-text effect-target"> DIRECCION: ETC ETC ETC ETC <br>DIRECCION: ETC ETC ETC ETC</h5>
                
                <h5 class="hero-grid-title effect-text  effect-target">HORARIO:10:00 9:00pm</h5>
                <p class="hero-grid-text effect-target effect-text" >Impulsamos actividades culturales con el objetivo de posicionarnos críticamente ante la realidad de nuestros días, siendo parte de las distintas</p>
                <a class="hero-grid-link"  data-toggle="modal" data-target="#myModal" href="#">INFO</a>
              </figcaption>
           </figure>

        </div>
        <div class="col-md-4 pub_c f">
            <figure class="hero-grid effect-move">
               <img class="hero-grid-image effect-image" src="static/imagenes/notas1.3.1.jpg" alt="" />    
              <figcaption class="hero-grid-content">
                <span class="hero-tag effect-target titulos">Centro</span>
                <h2 class="hero-grid-title effect-text effect-target titulos"> <strong>CENTRO BOLUDO</strong> <br><strong>CENTRO BOLUDO</strong></h2>
                <h5 class="hero-grid-title effect-text effect-target"> DIRECCION: ETC ETC ETC ETC <br>DIRECCION: ETC ETC ETC ETC</h5>
                
                <h5 class="hero-grid-title effect-text  effect-target">HORARIO:10:00 9:00pm</h5>
                <p class="hero-grid-text effect-target effect-text" >Impulsamos actividades culturales con el objetivo de posicionarnos críticamente ante la realidad de nuestros días, siendo parte de las distintas</p>
                <a class="hero-grid-link"  data-toggle="modal" data-target="#myModal" href="#">INFO</a>
              </figcaption>
           </figure>

        </div>
        <div class="col-md-4 pub_c f">
            <figure class="hero-grid effect-move">
               <img class="hero-grid-image effect-image" src="static/imagenes/notas1.3.1.jpg" alt="" />    
              <figcaption class="hero-grid-content">
                <span class="hero-tag effect-target titulos">Centro</span>
                <h2 class="hero-grid-title effect-text effect-target titulos"> <strong>CENTRO BOLUDO</strong> <br><strong>CENTRO BOLUDO</strong></h2>
                <h5 class="hero-grid-title effect-text effect-target"> DIRECCION: ETC ETC ETC ETC <br>DIRECCION: ETC ETC ETC ETC</h5>
                
                <h5 class="hero-grid-title effect-text  effect-target">HORARIO:10:00 9:00pm</h5>
                <p class="hero-grid-text effect-target effect-text" >Impulsamos actividades culturales con el objetivo de posicionarnos críticamente ante la realidad de nuestros días, siendo parte de las distintas</p>
                <a class="hero-grid-link"  data-toggle="modal" data-target="#myModal" href="#">INFO</a>
              </figcaption>
           </figure>

        </div>

      </div>
      <div class="row"> 
        <h1 class="titulos" style="text-align: center;">aqui va la paginacion con vue is izi pizi</h1>
      </div>
      </div>
      <!--notas-->

      <!--publicidad notas-->
      <div class="row">
        <div class="col-md-4 pub_not"></div>
        <div class="col-md-4 pub_not "></div>
        <div class="col-md-4 pub_not"></div>
      </div>
      <!--publicidad notas-->   



      
</div>
  </div>
</template>
<script>
  import notas from './assets/notas-notas.vue'
  import VideoFondo from './assets/VideoFondo.vue'
  export default{
    components: {
      notas: notas,
      videoFondo: VideoFondo
    }
  }
</script>
<style>
#logo-right{
  position: absolute;
  top: 8%;
  margin-right:  -2% !important;
}
#filtro_notas{
  width: 50% !important;
}
</style>