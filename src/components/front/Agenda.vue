<template>
  <div class="Map">
  <gmap-map
    :center="center"
    :map-type-id="mapType"
    :options="options"
    :zoom="zoom"
    style="width: 100%; height: 100vh; "
  >
  <gmap-marker
      :key="id"
      v-for="m in markers"
      :position="m.position"
      :icon="m.icon"
      :clickable="true"
      :draggable="false"
      @click="alert(m.event)"
    >
      <gmap-info-window
      :opened.sync="m.event.fav"
      >
        ¡ Destacado ! 
      </gmap-info-window>
    </gmap-marker>
  </gmap-map>
  
  <div v-if="modal === true">
        <modal :event="modalevent"  @closeModal="modal = false"></modal>
    </div>

    <lateral></lateral>

    <div id="agenda-filters">
    <div class="row centro_filtro" style="width: 65% !important; margin-left: 2%;"> 
      <nav id="filtro_centro" class="navbar navbar-default sinbor1" role="navigation">
        <div class="collapse navbar-collapse navbar-ex1-collapse">
           <ul class="nav navbar-nav titulos">
              <li  ><a href="#" class="azul nav_2" style="font-size: 14px;">TODOS</a></li>
            <li ><a href="#" class="circo nav_2"style="font-size: 14px;">CIRCO</a></li>
              <li ><a href="#" class="musica nav_2" style="font-size: 14px;">MUSICA</a></li>
              <li ><a href="#" class="teatro nav_2" style="font-size: 14px;">TEATRO</a></li>
              <li ><a href="#" class="centros_cult nav_2"style="font-size: 14px;">CENTROS CULTURALES</a></li>
              <li ><a href="#" class=" nav_2">OTROS</a></li>            
          </ul>
      </div>
      </nav>
    </div>
    </div>




  </div>
</template>
<script>
  import LateralModal from './assets/LateralModal.vue'
  import LateralBar from './assets/Lateralbar.vue'
  export default{
    components: {
      modal: LateralModal,
      lateral: LateralBar
    },
    data () {
      return {
        modal: false,
        modalevent: {},
        center: {lat: -31.42, lng: -64.18},
        mapType: 'roadmap',
        zoom: 13,
        options: {
          zoomControl: false,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: false,
          rotateControl: false,
          fullscreenControl: false
        },
        markers: [
          {
            event: {
              date: '09/09/2017',
              shortDate: '09.09',
              hour: '23:50',
              filter: 'MUSICA',
              title: 'Ninfas junto a Chiquita Machado',
              place: '990 ARTE CLUB',
              direction: 'Bv. Los Andes 399',
              description: 'Chiquita Machado llega desde Rosario y se presenta por primera vez en Córdoba el próximo sábado 9 de Septiembre, en 990, junto a las Ninfas. Banda que se formó en el año 2012. Abarca la música popular latinoamericana con una fusión de cumbia, reggae, ska, música balcánica y más!',
              fav: false,
              price: 'A: $120'
            },
            id: 1,
            position: {
              lat: -31.42,
              lng: -64.18
            },
            icon: {
              url: 'static/img/PIN_NARANJA.png',
              size: {width: 30, height: 50, f: 'px', b: 'px'},
              scaledSize: {width: 25, height: 50, f: 'px', b: 'px'}
            },
            ifw: true,
            ifw2text: 'Element 1'
          },
          {
            event: {
              date: '06/09/2017',
              shortDate: '06.09',
              hour: '22:00',
              filter: 'MUSICA',
              title: 'Gran Gira Gitana',
              place: 'COCINA DE CULTURA',
              direction: 'Julio A. Roca 491/493 Bº Bella Vista',
              description: 'Sofía Viola y El Paisano (Chile) se embarcan en una gira que comienza en la docta, pasa por algunas localidades del interior cordobés y se extiende hasta Rosario, La Plata y C.A.B.A.',
              fav: true,
              price: 'A: $120 L: $150'
            },
            id: 2,
            position: {
              lat: -31.428079,
              lng: -64.197191
            },
            icon: {
              url: 'static/img/PIN_NARANJA.png',
              size: {width: 30, height: 50, f: 'px', b: 'px'},
              scaledSize: {width: 25, height: 50, f: 'px', b: 'px'}
            },
            ifw: true,
            ifw2text: 'Element 2'
          },
          {
            event: {
              date: '07/09/2017',
              shortDate: '07.09',
              hour: '22:00',
              filter: 'TEATRO',
              title: 'NOCHEGARBA “EL CUENTO QUE HABITA EN MÍ”',
              place: 'COCINA DE CULTURA',
              direction: 'Julio A. Roca 491/493 Bº Bella Vista',
              description: 'Garba, actriz, narradora y cantautora recorre  cuentos de autores argentinos y  canciones propias que,  dejándose habitar, van contando la otra historia que gravita dentro. Cortázar, María Teresa Andruetto, Iris Rivera, Graciela Bialet, Mempo Giardinelli, Juan Sasturain y otros aparecen mezclados entre la escena  y  la música.',
              fav: true,
              price: 'A: $100 L: $120'
            },
            id: 3,
            position: {
              lat: -31.428173,
              lng: -64.197258
            },
            icon: {
              url: 'static/img/PIN_NARANJA.png',
              size: {width: 30, height: 50, f: 'px', b: 'px'},
              scaledSize: {width: 25, height: 50, f: 'px', b: 'px'}
            },
            ifw: true,
            ifw2text: 'Element 3'
          },
          {
            event: {
              date: '08/09/2017',
              shortDate: '08.09',
              hour: '22:00',
              filter: 'MUSICA',
              title: 'BIEN DEBUTE SEXTETO',
              place: 'COCINA DE CULTURA',
              direction: 'Julio A. Roca 491/493 Bº Bella Vista',
              description: 'Bien Debute es un grupo de tango de nuestra ciudad, con una trayectoria de 5 años, con su primer disco, "Estación Tango" editado el año pasado. En su repertorio abordan algunos clásicos del género,  y también hacen fuerte hincapié en nuevas composiciones, tangos y milongas actuales, propias o de autores contemporáneos, con la clara intención de aportar nuevas obras a este género universal.',
              fav: false,
              price: 'A: $100 L: $120'
            },
            id: 4,
            position: {
              lat: -31.428194,
              lng: -64.197336
            },
            icon: {
              url: 'static/img/PIN_NARANJA.png',
              size: {width: 30, height: 50, f: 'px', b: 'px'},
              scaledSize: {width: 25, height: 50, f: 'px', b: 'px'}
            },
            ifw: true,
            ifw2text: 'Element 4'
          },
          {
            event: {
              date: '14/09/2017',
              shortDate: '14.09',
              hour: '19:00',
              filter: 'MUSICA',
              title: 'ARIEL PRAT PRESENTA SU DISCO LIBRO “DEL OTRO LADO DEL PLATA”',
              place: 'COCINA DE CULTURA',
              direction: 'Julio A. Roca 491/493 Bº Bella Vista',
              description: 'Un recorrido histórico sobre la murga, sus características y un reconocimiento de la misma dentro de nuestra cultura popular argentina. Acompaña la presentación el bombista y percusionista, Alejandro Caraballo, musicalizando la charla.',
              fav: false,
              price: 'Gratis'
            },
            id: 5,
            position: {
              lat: -31.428190,
              lng: -64.197184
            },
            icon: {
              url: 'static/img/PIN_NARANJA.png',
              size: {width: 30, height: 50, f: 'px', b: 'px'},
              scaledSize: {width: 25, height: 50, f: 'px', b: 'px'}
            },
            ifw: true,
            ifw2text: 'Element 5'
          },
          {
            event: {
              date: '14/09/2017',
              shortDate: '14.09',
              hour: '22:00',
              filter: 'MUSICA',
              title: 'ARIEL PRAT Y LOS PERDIDOS',
              place: 'COCINA DE CULTURA',
              direction: 'Julio A. Roca 491/493 Bº Bella Vista',
              description: 'Ariel Prat y sus muchachos comparten lo mejor de la canción murguera argentina. Promo entrada + disco libro $250.',
              fav: false,
              price: 'A: $180'
            },
            id: 6,
            position: {
              lat: -31.428185,
              lng: -64.197336
            },
            icon: {
              url: 'static/img/PIN_NARANJA.png',
              size: {width: 30, height: 50, f: 'px', b: 'px'},
              scaledSize: {width: 25, height: 50, f: 'px', b: 'px'}
            },
            ifw: true,
            ifw2text: 'Element 6'
          },
          {
            event: {
              date: '15/09/2017',
              shortDate: '15.09',
              hour: '22:00',
              filter: 'MUSICA',
              title: 'CICLO MÚSICA MIXTA',
              place: 'COCINA DE CULTURA',
              direction: 'Julio A. Roca 491/493 Bº Bella Vista',
              description: 'La cantante y pianista, María Elía, presenta el Ciclo Música Mixta en Córdoba junto al pianista, compositor y arreglador Emmanuel Álvarez de Resistencia, Chaco. Un exquisito concierto de música popular contemporánea argentina, con la participación del músico cordobés Lucas Heredia.',
              fav: false,
              price: 'A: $130 L: $150'
            },
            id: 7,
            position: {
              lat: -31.428219,
              lng: -64.197401
            },
            icon: {
              url: 'static/img/PIN_NARANJA.png',
              size: {width: 30, height: 50, f: 'px', b: 'px'},
              scaledSize: {width: 25, height: 50, f: 'px', b: 'px'}
            },
            ifw: true,
            ifw2text: 'Element 7'
          },
          {
            event: {
              date: '16/09/2017',
              shortDate: '16.09',
              hour: '22:00',
              filter: 'OTROS',
              title: 'CARNAVAL PRIMAVERAL DE UNIÃO DA SERRA',
              place: 'COCINA DE CULTURA',
              direction: 'Julio A. Roca 491/493 Bº Bella Vista',
              description: 'União Da Serra, la primera Escola do Samba de Córdoba anticipa la primavera y busca brindar al público una típica expresión de los tradicionales carnavales de Brasil, invitando al espectador a participar espontáneamente, contagiándolo con arte y alegría.',
              fav: false,
              price: 'L: $100 '
            },
            id: 8,
            position: {
              lat: -31.428102,
              lng: -64.197031
            },
            icon: {
              url: 'static/img/PIN_NARANJA.png',
              size: {width: 30, height: 50, f: 'px', b: 'px'},
              scaledSize: {width: 25, height: 50, f: 'px', b: 'px'}
            },
            ifw: true,
            ifw2text: 'Element 8'
          }
        ]
      }
    },
    methods: {
      alert (event) {
        this.modal = true
        this.modalevent = event
      }
    }
  }
</script>
<style scoped>
 .Map{
  background: silver;
  max-height: 100vh !important;

 }
 #Mfooter{
  display: none;
 }
 #agenda-filters{
  position: absolute;
  z-index: 99;
  bottom: 10%;
  width: 100%;
 }
</style>

