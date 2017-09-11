<template>
  <div class="col-md-1" id="event">      
    <ul class="fan eve titulos">
        <li class="eve" v-for="event in events"> 
            <a href="#" data-toggle="modal" data-target=".modal-info" @click="alert(event)">{{event.shortDate}} </a>
        </li>
    </ul>
    <button class="E sinbor" @click="collpas();"><img src="static/imagenes/AGENDA.png" alt=""></button>
    <div v-if="modal === true">
        <modal :event="modalevent"  @closeModal="modal = false"></modal>
    </div>
  </div>      
</template>
<script>
  import LateralModal from './LateralModal.vue'
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
            price: 'A: $120',
            img: '01.jpg'
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
            price: 'A: $120 L: $150',
            img: '02.jpg'
          },
          {
            date: '07/09/2017',
            shortDate: '07.09',
            hour: '22:00',
            filter: 'TEATRO',
            title: 'NOCHEGARBA “EL CUENTO QUE HABITA EN MÍ”',
            place: 'COCINA DE CULTURA',
            direction: 'Julio A. Roca 491/493 Bº Bella Vista',
            description: 'Garba, actriz, narradora y cantautora recorre  cuentos de autores argentinos y  canciones propias que,  dejándose habitar, van contando la otra historia que gravita dentro. Cortázar, María Teresa Andruetto, Iris Rivera, Graciela Bialet, Mempo Giardinelli, Juan Sasturain y otros aparecen mezclados entre la escena  y  la música.',
            fav: true,
            price: 'A: $100 L: $120',
            img: '3.jpg'
          },
          {
            date: '08/09/2017',
            shortDate: '08.09',
            hour: '22:00',
            filter: 'MUSICA',
            title: 'BIEN DEBUTE SEXTETO',
            place: 'COCINA DE CULTURA',
            direction: 'Julio A. Roca 491/493 Bº Bella Vista',
            description: 'Bien Debute es un grupo de tango de nuestra ciudad, con una trayectoria de 5 años, con su primer disco, "Estación Tango" editado el año pasado. En su repertorio abordan algunos clásicos del género,  y también hacen fuerte hincapié en nuevas composiciones, tangos y milongas actuales, propias o de autores contemporáneos, con la clara intención de aportar nuevas obras a este género.',
            fav: false,
            price: 'A: $100 L: $120',
            img: '9.jpg'
          },
          {
            date: '14/09/2017',
            shortDate: '14.09',
            hour: '19:00',
            filter: 'MUSICA',
            title: 'ARIEL PRAT PRESENTA SU DISCO LIBRO “DEL OTRO LADO DEL PLATA”',
            place: 'COCINA DE CULTURA',
            direction: 'Julio A. Roca 491/493 Bº Bella Vista',
            description: 'Un recorrido histórico sobre la murga, sus características y un reconocimiento de la misma dentro de nuestra cultura popular argentina. Acompaña la presentación el bombista y percusionista, Alejandro Caraballo, musicalizando la charla.reconocimiento de la misma dentro de nuestra cultura popular argentina. Acompaña la presentación el bombista y percusionista, Alejandro Caraballo, musicalizando la charla.Alejandro Caraballo, musicalizando la charla.',
            fav: false,
            price: 'Gratis',
            img: '5.jpg'
          },
          {
            date: '14/09/2017',
            shortDate: '14.09',
            hour: '22:00',
            filter: 'MUSICA',
            title: 'ARIEL PRAT Y LOS PERDIDOS',
            place: 'COCINA DE CULTURA',
            direction: 'Julio A. Roca 491/493 Bº Bella Vista',
            description: 'Ariel Prat y sus muchachos comparten lo mejor de la canción murguera argentina. Promo entrada + disco libro $250.',
            fav: false,
            price: 'A: $180',
            img: '6.jpg'
          },
          {
            date: '15/09/2017',
            shortDate: '15.09',
            hour: '22:00',
            filter: 'MUSICA',
            title: 'CICLO MÚSICA MIXTA',
            place: 'COCINA DE CULTURA',
            direction: 'Julio A. Roca 491/493 Bº Bella Vista',
            description: 'La cantante y pianista, María Elía, presenta el Ciclo Música Mixta en Córdoba junto al pianista, compositor y arreglador Emmanuel Álvarez de Resistencia, Chaco. Un exquisito concierto de música popular contemporánea argentina, con la participación del músico cordobés Lucas Heredia.',
            fav: false,
            price: 'A: $130 L: $150',
            img: '7.jpg'
          },
          {
            date: '16/09/2017',
            shortDate: '16.09',
            hour: '22:00',
            filter: 'OTROS',
            title: 'CARNAVAL PRIMAVERAL DE UNIÃO DA SERRA',
            place: 'COCINA DE CULTURA',
            direction: 'Julio A. Roca 491/493 Bº Bella Vista',
            description: 'União Da Serra, la primera Escola do Samba de Córdoba anticipa la primavera y busca brindar al público una típica expresión de los tradicionales carnavales de Brasil, invitando al espectador a participar espontáneamente, contagiándolo con arte y alegría.',
            fav: false,
            price: 'L: $100 ',
            img: '8.jpg'
          }
        ]
      }
    },
    methods: {
      alert (event) {
        this.modal = true
        this.modalevent = event
      },
      collpas () {
        $('#event').toggleClass('collapsed')
      }
    }
  }

</script>
<style>
 #event{
    position: absolute;
    top: 62%;
    display: block;
 }
 a:link{
    text-decoration: none;
 }
</style>