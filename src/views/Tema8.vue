<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="zoom-in")
      .titulo-principal__numero
        span 8
      h1 Sistema de producción orgánicos, biológicos o ecológicos  

    figure
      img.img-a(src='@/assets/curso/tema_8/img_1.png', alt='')(data-aos="zoom-in-down")

    .row.p-5.justify-content-center.mb-5(data-aos="zoom-in-down")
      .col-lg-9.bg10.p-4
        p.mb-0 Se denomina orgánicos, biológicos o ecológicos a sistemas de producción sustentables que mediante el manejo racional de los recursos naturales, sin aplicación de productos de síntesis química, brinden alimentos sanos y abundantes, mantengan la fertilidad del suelo, la diversidad ecológica y que asimismo permitan a los consumidores identificarlos a través de un sistema de certificación que lo garantice. Se refiere a un proceso, más que a un producto, comprendiendo las etapas de producción, elaboración, envase, embalaje, transporte y comercialización (Proargentina, 2005)

    p(data-aos="zoom-in") Este sistema consiste en un modelo de gestión aplicable a la producción agropecuaria, acuícola, forestal y pesquera, el cual promueve la conservación de la biodiversidad. Del mismo modo, promueve el cuidado del suelo, el agua, el reciclaje de nutrientes y el balance energético del sistema. 
 
    p(data-aos="zoom-in") Finalmente, este modelo se basa en la reducción de insumos externos, la exclusión de agroinsumos, síntesis química y organismos genéticamente modificados.

        
    separador
    .titulo-segundo(data-aos="zoom-in")
      #t_8_1.h2 8.1. Diferencias entre productos ecológicos, biológicos y orgánicos 

    p.mb-5(data-aos="zoom-in") Es necesario identificar correctamente las características de los productos ecológicos, biológicos y orgánicos, con el fin de evitar interpretaciones erróneas o confusión entre sus interpretaciones: 

    .tarjeta-avatar-b.mb-5(data-aos="slide-right")
      .tarjeta-avatar-b__img
        img.img-a(src='@/assets/curso/tema_8/img_2.svg' alt='AvatarTop')
      .tarjeta.bg01
        .p-4
          strong Productos ecológicos: 
          p.mb-0 son todos los productos que no permiten el uso de pesticidas ni fertilizantes químicos en su producción. Tampoco tienen cabida las semillas transgénicas, es decir, los organismos modificados genéticamente. El cultivo y cuidado de los animales utiliza recursos renovables que favorecen y respetan el medioambiente. Además, estos últimos son criados en libertad y reciben una alimentación natural.  

    .tarjeta-avatar-b.mb-5(data-aos="slide-left")
      .tarjeta-avatar-b__img
        img.img-a(src='@/assets/curso/tema_8/img_3.svg' alt='AvatarTop')
      .tarjeta.bg01
        .p-4
          strong Productos biológicos: 
          p.mb-0 son aquellos productos que no han sido alterados genéticamente, es decir, no han pasado por un laboratorio. Sin embargo, pueden contener pesticidas procedentes de su producción.

    .tarjeta-avatar-b.mb-5(data-aos="slide-right")
      .tarjeta-avatar-b__img
        img.img-a(src='@/assets/curso/tema_8/img_4.svg' alt='AvatarTop')
      .tarjeta.bg01
        .p-4
          strong Productos orgánicos: 
          p.mb-0 los productos etiquetados como orgánicos no permiten el uso de pesticidas, fertilizantes o sustancias químicas. De acuerdo con lo anterior, se puede pensar que orgánico y ecológico son sinónimos, pero la diferencia que hay entre unos productos y otros es que lo orgánico puede estar manipulado genéticamente. Estos productos ayudan a la fertilidad y calidad del suelo y llevan a cabo la rotación de cultivos en los terrenos.

    separador
    .titulo-segundo(data-aos="zoom-in")
      #t_8_2.h2 8.2. Normativa

    p.mb-5 A continuación se presentará la normativa relacionada con el sistema de producción orgánicos, biológicos o ecológicos:

    figure
      img.img-a(src='@/assets/curso/tema_8/img_5.png', alt='')(data-aos="zoom-in-down")



    
    



</template>

<script>
export default {
  name: 'Tema8',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
