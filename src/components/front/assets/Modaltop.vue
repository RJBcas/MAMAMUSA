<template>
  <div>
                <div id="top-modal" class="modal-dialog top-modal-top" role="document">
                  <div class="modal-content">
                        
                      <div class="col-md-12 nhola hola" id="bmodal" >
                      <h1 class=" azul titulos"> Dejanos Tu mensaje</h1>
                        <h2 class="subtitulos">NOMBRE</h2>
                        <input type="text" class="form-control" placeholder="Nombre">
                        <h2 class="subtitulos">EMAIL</h2>
                        <input type="text" class="form-control" placeholder="Email">
                        <h2 class="subtitulos">TELEFONO:</h2>
                        <input type="text" class="form-control" placeholder="Telefono">
                        <h2 class="subtitulos">MENSAJE</h2>
                        <textarea class="form-control" rows="3"></textarea>
                        <button type="button" class="btn btn-default bt_hola titulos">TOUCHE!</button>
                      </div>  

                    </div>    
              </div>
          
  <div class="full-height" @click="closeModal()"></div>
  </div>
</template>
<script>
  export default{
    data () {
      return {
      }
    },
    methods: {
      closeModal () {
        this.$emit('closeModal', this.cModal)
      }
    }
  }
</script>
<style>
.full-height{
  position: fixed;
    min-height: 200vh;
    min-width: 150vw;
    background: rgba(125,125,125,.33);
    z-index: 98;
    left: -100vh;
    top: -50%;
}

.nhola{
    /* left: -310px; */
    /* margin-top: 150px; */
    background: black;
    color: white;
    text-align: justify;
    font-size: 12px;
    height: 0px;
    width: 650px;
    margin: 0 auro;
    position: absolute;
    margin: 0 auto;
    margin-left: 20vh;
    padding-bottom: 25px;
}

.top-modal-top{
  position: absolute;
  z-index: 100;
}
</style>