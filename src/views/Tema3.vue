<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="zoom-in")
      .titulo-principal__numero
        span 3
      h1 Creación de valor compartido

    figure
      img.img-a(src='@/assets/curso/tema_3/img_1.png', alt='')(data-aos="zoom-in-down")

    .row.p-5.justify-content-center.mb-5(data-aos="zoom-in-down")
      .col-lg-10.bg10.p-4
        p.mb-0 En la actualidad, algunas empresas no son consideradas como una oportunidad para la sociedad, por el contrario, se han catalogado como amenazas por los diferentes impactos ambientales y sociales que sus actividades económicas producen al entorno en el cual se encuentran. 

    p(data-aos="fade-down-right") Es muy común escuchar “el petróleo y la minería son el cáncer del medio ambiente” y aunque sus actividades si producen impactos negativos al mismo, las empresas se han enfocado en la creación de estrategias para mitigar el impacto y crear valor compartido. Pero ¿qué es el valor compartido?  Porter y Kramer (2011) lo definen como “las políticas y prácticas operacionales que mejoran la competitividad de una empresa, a la vez que ayudan a mejorar las condiciones económicas y sociales de las comunidades donde opera. La creación de valor compartido se enfoca en identificar y expandir las conexiones entre los progresos económico y social. El concepto de valor compartido reconoce que las necesidades sociales, y no solo las necesidades económicas convencionales, son las que definen los mercados”. (Porter & Kramer, 2011)

    p.mb-5(data-aos="fade-down-left") Para crear valor compartido Porter y Kramer (2011) señalan que hay tres formas distintas de proporcionar simultáneamente valor para la empresa y valor para la sociedad, que se complementan, construyendo un círculo positivo.  Estas tres formas complementarias son: 

    figure.mb-5
      img.img-a(src='@/assets/curso/tema_3/img_2.png', alt='')(data-aos="zoom-in-down")

    .row.mb-5
      .col-lg-4.mb-4.mb-lg-0.d-flex(data-aos="fade-up")
        .cajon.color-primario.p-4
          h5 Nuevos mercados y productos
          p Se hace un llamado a las empresas para que logren innovar y rediseñar sus productos o métodos de distribución, para descubrir nuevas oportunidades para diferenciarse de la competencia.
      .col-lg-4.mb-4.mb-lg-0.d-flex(data-aos="fade-down")
        .cajon.color-acento-contenido.p-4
          h5 Redefiniendo la productividad en la cadena de valor
          p Maximizar la creación de valor mientras se minimizan los costos. De lo que se trata es de crear valor para la empresa cliente, lo que se traduce en un margen entre lo que se acepta pagar y los costos incurridos por adquirir la oferta. 
      .col-lg-4.mb-4.mb-lg-0.d-flex(data-aos="fade-up")
        .cajon.color-secundario.p-4
          h5 Creando grupos locales de apoyo a la empresa, lo que también se conoce con la palabra clúster
          p Un clúster es una concentración geográfica de empresas, proveedores especializados, instituciones como universidades y asociaciones de empresarios interconectados. Empresas que compiten, pero que también colaboran entre ellas y crean una masa crítica que facilita la competitividad de cada una de las organizaciones que forman parte del clúster. 

    
    figure.mb-5(data-aos="zoom-in")
      img.img-a.mb-3(src='@/assets/curso/tema_3/img_3.png', alt='')
      figcaption Fuente: (Vidal, 2011)
      

    p(data-aos="fade-up-left") Cada una de estas tres vías forma parte del círculo virtuoso de valor compartido; al aportar cada una de ellas valor en un área determinada, facilita el surgimiento de nuevas oportunidades en las otras áreas. 

    p(data-aos="fade-down-right") Finalmente, la habilidad del directivo de la empresa para crear valor compartido es aplicable tanto a las economías avanzadas como a los países en desarrollo, aunque las oportunidades específicas y los modelos de negocio diferirán. Las oportunidades van a ser distintas para cada industria y para cada empresa, pero cada empresa tiene posibilidades.


</template>

<script>
export default {
  name: 'Tema3',
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
