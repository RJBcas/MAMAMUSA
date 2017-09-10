<template>
  <div class="Map">
  <gmap-map
    :center="center"
    :map-type-id="mapType"
    :options="options"
    :zoom="zoom"
    style="width: 100%; height: 700px"
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

  </div>
</template>
<script>
  import LateralModal from '../assets/LateralModal.vue'
  export default{
    components: {
      modal: LateralModal
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
              hour: '11:50:00 PM',
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
              hour: '10:00:00 PM',
              filter: 'MUSICA',
              title: 'Gran Gira Gitana',
              place: '9COCINA DE CULTURA',
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
 }
 #Mfooter{
  display: none;
 }
</style>

