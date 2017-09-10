<template>
  <div class="col-md-1" id="event">      
    <ul class="fan eve titulos">

        <li class="eve" v-for="event in events"> 
            <a href="#" data-toggle="modal" data-target=".modal-info" @click="alert(event)">{{event.shortDate}} </a>
        </li>
    </ul>
    <button class="E sinbor" onclick="eventos();"><img src="static/imagenes/AGENDA.png" alt=""></button>
    <div v-if="modal === true">
        <modal :event="modalevent"  @closeModal="modal = false"></modal>
    </div>
 
  </div>
</template>

<script>
  import LateralModal from './LateralModal'
  export default{
    components: {
      modal: LateralModal
    },
    data () {
      return {
        modal: false,
        modalevent: {},
        events: [
          {
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
          {
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
<style>
 #event{
    position: absolute;
    top: 64%;
 }
</style>