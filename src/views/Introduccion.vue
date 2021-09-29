<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal(data-aos="zoom-in")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p(data-aos="slide-left") No obstante, el esfuerzo por mejorar las condiciones ambientales no debe ser exclusivamente de los productores, también de los consumidores, quienes deberían ser más conscientes de la importancia de consumir y usar este tipo productos y servicios. 

    p(data-aos="slide-right") Por medio del presente material, el aprendiz logrará identificar las oportunidades de negocios existentes, el perfil del consumidor ecológico, matriz DOFA, comercio justo, marketing verde y finalmente, la biodiversidad colombiana.    

    
    figure.mb-5(data-aos="zoom-in")
      img.img-a(src='@/assets/curso/tema_1/img_1.png', alt='')

    p(data-aos="slide-left") A nivel mundial, los negocios verdes se han convertido en la mejor estrategia para lograr desarrollar productos y servicios, utilizando de manera sostenible los recursos naturales existentes, que satisfagan los gustos y necesidades de los clientes y paralelamente, contribuyan al desarrollo económico y social de los países, permitiendo conservar el medio ambiente en óptimas condiciones para generaciones futuras, y por supuesto, para las actuales. 

    p(data-aos="slide-right") Para iniciar, es importante recordar que los negocios y servicios sostenibles se han definido como todos aquellos, que en su proceso de fabricación, almacenamiento, manejo, distribución y comercialización, han incorporado las mejores prácticas ambientales, garantizando la conservación del medio ambiente de donde fueron extraídos y su sostenibilidad. 

    p(data-aos="slide-left") Colombia se caracteriza por contar con una oferta extensa de estos bienes y servicios, gracias a su diversidad ambiental y ecológica. Es por esto que se hace necesario el estudio de cada región del país, con el fin de identificar su perfil económico y natural, conocer las oportunidades existentes, y por ende, los posibles bienes y servicios a comercializar por cada región.

    p(data-aos="slide-right") Finalmente, se hace necesario también, conocer las debilidades y posibles amenazas del sector, así como también, los clientes potenciales y la dinámica del mercado en el cual se desarrollarán y comercializarán los bienes y servicios. 


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
