<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="zoom-in")
      .titulo-principal__numero
        span 8
      h1 Sistema de producción orgánicos, bilógicos o ecológicos  

    figure
      img.img-a(src='@/assets/curso/tema_9/img_1.png', alt='')(data-aos="zoom-in-down")

    .row.p-5.justify-content-center.mb-5(data-aos="zoom-in-down")
      .col-lg-7.bg08.p-4
        p.mb-0 Colombia, junto con Bolivia, Brasil, China, Costa Rica, Ecuador, India, Indonesia, Kenia, México, Perú, Sudáfrica y Venezuela, forma parte del denominado grupo de países megadiversos, los cuales albergan el mayor índice de biodiversidad en el planeta. 

    p(data-aos="slide-right") Ahora, el marco más importante que a nivel internacional aborda la comprensión y gestión de la biodiversidad es el Convenio sobre la Diversidad Biológica (CDB), el cual fue ratificado por Colombia en 1995. Este acuerdo global ha marcado la pauta para el diseño de las políticas, iniciativas y esfuerzos que comprenden la gestión de la biodiversidad en Colombia y en el mundo.

    p(data-aos="slide-left") De acuerdo con el Convenio de la Diversidad Biológica (CDB), la biodiversidad se define como “La variabilidad de organismos vivos de cualquier fuente, incluidos, entre otras cosas, los ecosistemas terrestres y marinos y otros ecosistemas acuáticos y los complejos ecológicos de los que forman parte; comprende la diversidad dentro de cada especie, entre las especies y de los ecosistemas”.

    p.mb-5(data-aos="slide-right") Es importante resaltar que Colombia se divide en cinco (5) regiones geográficas, cada una con costumbres, climas y relieves muy diferentes entre sí y por supuesto, una gran variedad de biodiversidad, como se puede evidenciar en el siguiente mapa de biodiversidad colombiana:

    figure.mb-5
      img.img-a(src='@/assets/curso/tema_9/img_2.png', alt='')(data-aos="zoom-in-down")

    .head1.p-4
      h4.mb-0.text-center Datos curiosos de la biodiversidad colombiana
    figure.mb-5
      img.img-a(src='@/assets/curso/tema_7/img_3.png', alt='') 

    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0(data-aos="slide-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema_9/img_3.svg' alt='AvatarTop')
          
          .tarjeta.bg01
            .p-4
              p.text-center.mb-0 Colombia  cuenta con el mayor número de especies de mariposas diurnas (más de 3.500).

      .col-md-6.col-lg.mb-5.mb-lg-0(data-aos="fade-down")
        .tarjeta-avatar
          img(src='@/assets/curso/tema_9/img_4.svg' alt='AvatarTop')
          
          .tarjeta.bg01
            .p-4
              p.text-center Es el país más rico del mundo en aves, con 1.870 especies reportadas hasta la fecha. 

      .col-md-6.col-lg.mb-5.mb-lg-0(data-aos="fade-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema_9/img_5.svg' alt='AvatarTop')
          
          .tarjeta.bg01
            .p-4
              p.text-center Es el lugar del mundo con mayor cantidad de especies de anfibios.

      .col-md-6.col-lg.mb-5.mb-lg-0(data-aos="slide-left")
        .tarjeta-avatar
          img(src='@/assets/curso/tema_9/img_6.svg' alt='AvatarTop')
          
          .tarjeta.bg01
            .p-4
              p.text-center Es el país del mundo con mayor número de vertebrados terrestres. 

    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0(data-aos="slide-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema_9/img_7.svg' alt='AvatarTop')
          
          .tarjeta.bg01
            .p-4
              p.text-center.mb-0 Cuenta con 456 especies de mamíferos.

      .col-md-6.col-lg.mb-5.mb-lg-0(data-aos="fade-down")
        .tarjeta-avatar
          img(src='@/assets/curso/tema_9/img_8.svg' alt='AvatarTop')
          
          .tarjeta.bg01
            .p-4
              p.text-center Es el segundo país en el mundo con mayor cantidad de peces en agua dulce.

      .col-md-6.col-lg.mb-5.mb-lg-0(data-aos="fade-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema_9/img_9.svg' alt='AvatarTop')
          
          .tarjeta.bg01
            .p-4
              p.text-center Es el tercer país con mayor cantidad de especies de reptiles.

      .col-md-6.col-lg.mb-5.mb-lg-0(data-aos="slide-left")
        .tarjeta-avatar
          img(src='@/assets/curso/tema_9/img_10.svg' alt='AvatarTop')
          
          .tarjeta.bg01
            .p-4
              p.text-center Colombia es el país más rico del mundo en palmas.

    .row.mb-5.justify-content-center
      .col-md-6.col-lg.mb-5.mb-lg-0
      .col-md-6.col-lg.mb-5.mb-lg-0(data-aos="slide-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema_9/img_11.svg' alt='AvatarTop')
          
          .tarjeta.bg01
            .p-4
              p.text-center.mb-0 Colombia tiene el mayor número de especies de anturios del planeta.

      .col-md-6.col-lg.mb-5.mb-lg-0(data-aos="slide-left")
        .tarjeta-avatar
          img(src='@/assets/curso/tema_9/img_12.svg' alt='AvatarTop')
          
          .tarjeta.bg01
            .p-4
              p.text-center Cuenta con más de 55.000 especies de plantas, la tercera parte de ellas son endémicas.
      .col-md-6.col-lg.mb-5.mb-lg-0

    
    



</template>

<script>
export default {
  name: 'Tema9',
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
