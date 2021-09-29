<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="zoom-in")
      .titulo-principal__numero
        span 5
      h1 Compras públicas sostenibles

    figure
      img.img-a(src='@/assets/curso/tema_5/img_1.png', alt='')(data-aos="zoom-in-down")

    .row.p-5.justify-content-center.mb-5(data-aos="zoom-in-down")
      .col-lg-9.bg08.p-4
        p.mb-0 Para Colombia, la compra sostenible es la “satisfacción de las necesidades mediante la adquisición de bienes y servicios amigables con el ambiente a través de la utilización eficiente de recursos a lo largo de su vida útil, que se ajustan a los principios de economía, eficacia, eficiencia, oportunidad y transparencia; y que en su producción o suministro se han apegado a normas sociales establecidas” (Ministerio de Ambiente y Desarrollo Sostenible, 2015)

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in-down")
        .head.p-4
          h4.mb-0.text-center Las compras sostenibles permiten diferentes beneficios, entre los cuales se encuentran: 
        figure
          img.img-a(src='@/assets/curso/tema_5/img_2.png', alt='')

    .row.justify-content-center.mb-5
      .col-lg-8
        .bg03.p-4.mb-3(data-aos="slide-left")
          .list
            .list__item
                .list__item__bulletNumber 
            .list__txt    
              p.m-top.mb-0 Reducción del consumo de recursos y la contaminación ambiental.
        .bg03.p-4.mb-3(data-aos="slide-right")
          .list
            .list__item
                .list__item__bulletNumber 
            .list__txt    
              p.m-top.mb-0 Promoción de las condiciones de trabajo justas. 
        .bg03.p-4.mb-3(data-aos="slide-left")
          .list
            .list__item
                .list__item__bulletNumber 
            .list__txt    
              p.m-top.mb-0 Generar ejemplos a otras organizaciones (públicas y privadas) para que se motiven a la compra de bienes y servicios sostenibles. 
        .bg03.p-4.mb-3(data-aos="slide-right")
          .list
            .list__item
                .list__item__bulletNumber 
            .list__txt    
              p.m-top.mb-0 Ahorro de costos a mediano y largo plazo. 
        .bg03.p-4.mb-3(data-aos="slide-left")
          .list
            .list__item
                .list__item__bulletNumber 
            .list__txt    
              p.m-top.mb-0 Una imagen beneficiosa del gobierno en el contexto nacional e internacional.
        .bg03.p-4.mb-3(data-aos="slide-right")
          .list
            .list__item
                .list__item__bulletNumber 
            .list__txt    
              p.m-top.mb-0 Mejoramiento de la calidad de productos y servicios. 
        .bg03.p-4.mb-3(data-aos="slide-left")
          .list
            .list__item
                .list__item__bulletNumber 
            .list__txt    
              p.m-top.mb-0 Ganancia de ventaja competitiva por parte de los proveedores de bienes y servicios sostenibles, frente a su competencia. 
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in-down")        
        p Teniendo en cuenta la importancia de las compras sostenibles a nivel mundial, Colombia ha enfocado sus esfuerzos en desarrollar estrategias y herramientas que le permitan a productores y consumidores desarrollar actividades que aporten al desarrollo sostenible, entre estas herramientas se encuentra el Plan de Acción Nacional de Compras Públicas Sostenibles.

    separador
    .titulo-segundo(data-aos="zoom-in")
      #t_5_1.h2 5.1 Plan nacional de compras públicas sostenibles 

    p(data-aos="slide-left") El Plan Nacional de Compras Públicas Sostenibles (PAN CPS), es el instrumento dispuesto por el Ministerio de Ambiente y Desarrollo Sostenible, en el que establece los principios y criterios a tener en cuenta por parte de productores y consumidores para lograr compras sostenibles a nivel nacional. 

    p.mb-5(data-aos="slide-right") Este plan cuenta con cuatro (4) principios, los cuales se estudiarán a continuación. 

    h4 Principios y valores de las compras públicas sostenibles

    p.mb-5 “Teniendo como marco la política nacional de Producción y Consumo Sostenible y los Objetivos de Desarrollo Sostenible de la ONU, el PAN CPS reconoce los siguientes principios y valores rectores de las CPS en Colombia:

    .row.justify-content-center.mb-5
      .col-lg-5.mb-4.mb-lg-0
        figure(data-aos="fade-down-left")
          img.img-a(src='@/assets/curso/tema_5/img_3.png', alt='')
      .col-lg-5.mb-4.mb-lg-0
        .list(data-aos="fade-down-right")
          .list__item
              .list__item__bulletNumber1 
          .list__txt    
            p.m-top.mb-0 Adquisición de bienes y servicios ambientalmente sostenibles.
        .ln.mb-4(data-aos="zoom-in")
        .list(data-aos="fade-down-left")
          .list__item
              .list__item__bulletNumber1 
          .list__txt    
            p.m-top.mb-0 Adquisición de bienes y servicios con estándares sociales.
        .ln.mb-4(data-aos="zoom-in")
        .list(data-aos="fade-down-right")
          .list__item
              .list__item__bulletNumber1 
          .list__txt    
            p.m-top.mb-0 Adquisición de bienes y servicios con criterios de economía y conveniencia. 
        .ln.mb-4(data-aos="zoom-in")
        .list(data-aos="fade-down-left")
          .list__item
              .list__item__bulletNumber1 
          .list__txt    
            p.m-top.mb-0 Innovación, gestión y soluciones creativas para las compras públicas.” (Ministerio de Ambiente y Desarrollo Sostenible, 2015). 
        .ln.mb-5(data-aos="zoom-in")

        .cajon.color-acento-contenido.p-4(data-aos="zoom-in")

          p Para profundizar en lo que cada uno de estos principios y valores significa, consulte en el material complementario: 

          a.anexo(:href="obtenerLink('/downloads/Guia_Conceptual_y_Metodologica_Compras_Publicas_Sostenibles_1.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p Guía conceptual y metodológica compras públicas sostenibles. 

    h4 Objetivos del Plan de Acción Nacional de Compras Públicas Sostenibles

    p.mb-5 “Este Plan de Acción Nacional de Compras Públicas Sostenibles (PAN CPS), conforme al marco jurídico y político nacional e internacional vigente, establece los siguientes objetivos al 2020:

    .row.justify-content-center.mb-5
      
      .col-lg-5.mb-4.mb-lg-0
        .list(data-aos="fade-down-right")
          .list__item
              .list__item__bulletNumber1 
          .list__txt    
            p.m-top.mb-0 Incentivar el uso de compras públicas sostenibles en todas las entidades estatales.
        .ln.mb-4(data-aos="zoom-in")
        .list(data-aos="fade-down-right")
          .list__item
              .list__item__bulletNumber1 
          .list__txt    
            p.m-top.mb-0 Desarrollar herramientas que permitan aumentar el uso de las compras públicas sostenibles.
        .ln.mb-4(data-aos="zoom-in")
        .list(data-aos="fade-down-right")
          .list__item
              .list__item__bulletNumber1 
          .list__txt    
            p.m-top.mb-0 Afianzar y asegurar el rol de avanzada en compras públicas sostenibles en el escenario internacional y en la Organización para la Cooperación y el Desarrollo Económico (OCDE)
        .ln.mb-4(data-aos="zoom-in")
        .list(data-aos="fade-down-right")
          .list__item
              .list__item__bulletNumber1 
          .list__txt    
            p.m-top.mb-0 Aumentar incentivos, eliminar/reducir barreras y generar alianzas - sinergias con sectores e instrumentos (ecoinnovación, economía verde, entre otras) para la implementación de las compras públicas sostenibles”. (Ministerio de Ambiente y Desarrollo Sostenible, 2015).
        .ln.mb-4(data-aos="zoom-in")
      .col-lg-5.mb-4.mb-lg-0
        figure(data-aos="fade-down-left")
          img.img-a(src='@/assets/curso/tema_5/img_4.png', alt='')



</template>

<script>
export default {
  name: 'Tema5',
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
