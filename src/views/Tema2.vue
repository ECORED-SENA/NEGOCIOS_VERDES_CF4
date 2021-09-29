<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="zoom-in")
      .titulo-principal__numero
        span 2
      h1 Consumidor ecológico 

    figure
      img.img-a(src='@/assets/curso/tema_2/img_1.png', alt='')(data-aos="zoom-in-down")

    .row.p-5.justify-content-center.mb-5(data-aos="zoom-in-down")
      .col-lg-6.bg08.p-4
        p.mb-0 Continuando con el análisis de los factores que pueden afectar directa e indirectamente el desarrollo de las actividades de una organización, se iniciará con el estudio de uno de los más importantes: los consumidores. 

    p(data-aos="slide-left") El consumidor ecológico es un comprador consciente y sensible de las repercusiones que sus hábitos de consumo imponen sobre el desarrollo sostenible de la región en donde vive. Valora la calidad de vida en términos del respeto al medio ambiente, la utilización responsable de los recursos naturales, el cuidado de su salud y el bienestar general de su comunidad. Reconoce que esta actitud ante la vida puede tener costos económicos adicionales y está dispuesto a afrontarlos. (Martínez Turrubiates & Prieto, 2016)
    p(data-aos="slide-right") No obstante, aunque los consumidores no son el fin único de los Negocios verdes, son uno de los factores más importantes, teniendo en cuenta que son quienes finalmente dan la aprobación o negación de compra y por ende, realizan el aporte económico que necesitan las compañías para continuar ofreciendo sus productos. 
    p.mb-5(data-aos="slide-left") Actualmente, gran parte de la población es consciente de la necesidad de cuidar y proteger los recursos con los que se cuentan, al igual que de los daños y cambios ocasionados en el medio ambiente por el uso desmedido de los mismos, razones por las cuales, el número de consumidores ecológicos ha venido en ascenso gradualmente, por medio del cumplimiento de las siguientes etapas: 

    .row.justify-content-center
      .col-lg-2.mb-4.mb-lg-0.d-none.d-lg-block
        figure
          img.img-a.fle(src='@/assets/curso/tema_2/img_2.png', alt='')(data-aos="zoom-in-down")
      .col-lg-2.mb-4.mb-lg-0.d-none.d-lg-block
        figure
          img.img-a.fle(src='@/assets/curso/tema_2/img_3.png', alt='')(data-aos="zoom-in-down")
      .col-lg-2.mb-4.mb-lg-0.d-none.d-lg-block
        figure
          img.img-a.fle(src='@/assets/curso/tema_2/img_4.png', alt='')(data-aos="zoom-in-down")

    .row.justify-content-center.mb-5
      .col-lg-2.mb-4.mb-lg-0.bor1.p-2.d-flex(data-aos="fade-up")
        .p-2.bg09.text-center
          strong 1. 
          p.mb-0 Precocupación por el medio ambiente. 
      .col-lg-2.mb-4.mb-lg-0.bor1.p-2.d-flex(data-aos="fade-down")
        .p-2.bg09.text-center
          strong 2. 
          p.mb-0 Desarrollo de una actitud positiva hacia un problema medioambiental dado.
      .col-lg-2.mb-4.mb-lg-0.bor1.p-2.d-flex(data-aos="fade-up")
        .p-2.bg09.text-center
          strong 3.
          p.mb-0 Información, aumento del conocimiento sobre el medio ambiente, sus posibles riesgos y opciones para solucionarlos.
      .col-lg-2.mb-4.mb-lg-0.bor1.p-2.d-flex(data-aos="fade-down")
        .p-2.bg09.text-center
          strong 4. 
          p.mb-0 Comportamiento ecológico, compra de bienes y servicios que cumplan con los requerimientos ecológicos. 

    p(data-aos="fade-down-right") En adición, cada una de estas etapas se encuentran condicionadas por variables del entorno en el cual se desenvuelva cada persona, las cuales se pueden clasificar en: (i) factores del macroentorno, de los cuales hacen parte el entorno político, legal, cultural y económico, y (ii) factores del microentorno, como la familia, influencias interpersonales, clase social, entre otros. 

    p.mb-5(data-aos="fade-down-left") El comportamiento ecológico característico viene determinado por factores internos (perfil sociodemográfico y psicológico del consumidor), además de factores externos (influencias sociales y del entorno político, económico y legal, estímulos de marketing y factores situacionales). La siguiente imagen muestra el modelo de comportamiento del consumidor ecológico.

    figure
      img.img-a(src='@/assets/curso/tema_2/img_5.svg', alt='')(data-aos="zoom-in-down")


</template>

<script>
export default {
  name: 'Tema2',
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
