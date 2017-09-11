<template>
  <div class="modal fade modal-info in" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" style="display: block;"  @click="closeModal()">
<div class="modal-dialog " role="document" style="display: block;">
<div class="modal-content">
<div class="col-md-12" id="bmodal">
<div class="col-md-7">
<img class="img-responsive mo" :src="modalImage(event.img)" alt="">
</div>
<div class="col-md-5 texm_m_e">
<h3 class="azul le titulos ti">{{event.title}}</h3>
    <h5 class="azul le su">{{event.date}}</h5>
    <h5 class="azul le su">{{event.place}}</h5>
    <h5 class=" le su1">DIRECCION: {{event.direction}}</h5>
    <p>{{event.description}}</p>
    <button class="share"><img class="bom" src="static/imagenes/SHARE.png" alt=""></button>
    <button class="fav"><img class="bom" src="static/imagenes/FAVORITOS DESMARCADO.png" alt=""></button>
</div>
</div>  
</div>      
 </div>
                        </div>
</template>

<script>
  export default{
    props: ['event'],
    data () {
      return {
        cModal: false,
        events: [
          {
            date: '09.09',
            hour: '11:50:00 PM',
            filter: 'MUSICA',
            title: 'Ninfas junto a Chiquita Machado',
            place: '990 ARTE CLUB',
            direction: 'Bv. Los Andes 399',
            description: 'Chiquita Machado llega desde Rosario y se presenta por primera vez en Córdoba el próximo sábado 9 de Septiembre, en 990, junto a las Ninfas. Banda que se formó en el año 2012. Abarca la música popular latinoamericana con una fusión de cumbia, reggae, ska, música balcánica y más!',
            fav: false,
            price: 'A: $120'
          }
        ]
      }
    },
    methods: {
      closeModal () {
        this.$emit('closeModal', this.cModal)
      },
      modalImage (img) {
        return 'static/imagenes/' + img
      }
    }
  }
</script>
<style>
</style>