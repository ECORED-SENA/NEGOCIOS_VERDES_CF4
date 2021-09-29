<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="zoom-in")
      .titulo-principal__numero
        span 1
      h1 DOFA dirigido a negocios verdes

    figure
      img.img-a(src='@/assets/curso/tema_1/img_2.png', alt='')(data-aos="zoom-in-down")

    .row.p-5.justify-content-center.mb-5(data-aos="zoom-in-down")
      .col-lg-9.bg02.p-4
        p.mb-0 El análisis DOFA es considerado uno de los métodos más utilizados por las empresas para la realización de diagnósticos y toma de decisiones. Este análisis permite identificar las Debilidades, Oportunidades, Fortalezas y Amenazas del ambiente interno y externo de la organización, que giran en torno al problema que se quiere solucionar.

    .row.justify-content-center.mb-5(data-aos="zoom-in-down")
      .col-lg-10
        p Para la realización de este análisis es necesario contar con lo siguiente: 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-4.mb-lg-0
        figure
          img.img-a(src='@/assets/curso/tema_1/img_3.png', alt='')(data-aos="zoom-in-down")
      .col-lg-6.mb-4.mb-lg-0
        .row.justify-content-center.mb-0(data-aos="slide-left")
          .col-lg-7.mb-4.mb-lg-0
            p.mb-0 Cuadro o tabla para recopilar la información. 
        img.img-a(src='@/assets/curso/tema_1/img_4.png', alt='')(data-aos="slide-right")
        .row.justify-content-center.mb-0(data-aos="slide-left")
          .col-lg-7.mb-4.mb-lg-0
            p.mb-0 Claridad en los conceptos objeto de análisis. 
        img.img-a(src='@/assets/curso/tema_1/img_4.png', alt='')(data-aos="slide-right")
        .row.justify-content-center.mb-0(data-aos="slide-left")
          .col-lg-7.mb-4.mb-lg-0
            p.mb-0 Lluvia de ideas acerca de la situación problema.
        img.img-a(src='@/assets/curso/tema_1/img_4.png', alt='')(data-aos="slide-right")

    separador

    .titulo-segundo(data-aos="zoom-in")
      #t_1_1.h2 1.1 Objetivo

    .row.bg01.p-4.align-items-center
      .col-lg-8.mb-4.mb-lg-0(data-aos="slide-left")
        p El principal objetivo de la realización del análisis es maximizar las fortalezas con que cuenta la organización y minimizar sus debilidades, para así aprovechar las oportunidades y al mismo tiempo superar las amenazas del entorno.
    .row.justify-content-center
      .col-lg-4.mb-4.mb-lg-0
        img.m-img.img-a(src='@/assets/curso/tema_1/img_5.png', alt='')(data-aos="slide-right")

    separador

    .titulo-segundo(data-aos="zoom-in")
      #t_1_2.h2 1.2 Ventajas y desventajas

    .row.bg01.p-4.align-items-center
      .col-lg-8.mb-4.mb-lg-0(data-aos="slide-left")
        p Dentro de las ventajas que tiene este modelo de análisis es que puede ser elaborado por cualquier miembro de la organización y en cualquier unidad estratégica de negocio y es un método rentable para la organización. En cuanto a las desventajas que presenta es que es un método simple y su resultado no es lo suficientemente crítico, por lo cual requiere de un método adicional que complemente sus resultados. 
    .row.justify-content-center
      .col-lg-4.mb-4.mb-lg-0
        img.m-img.img-a(src='@/assets/curso/tema_1/img_6.png', alt='')(data-aos="slide-right")

    separador

    .titulo-segundo(data-aos="zoom-in")
      #t_1_3.h2 1.3 Elaboración 

    p.mb-5(data-aos="slide-down") Para la correcta aplicación del método, es necesario analizar el entorno en el cual se encuentran las compañías, entendiendo como entorno, a todas y cada una de las variables que intervienen directa o indirectamente en la misma, con el in de generar estrategias alternativas. Este análisis organizacional se debe realizar teniendo en cuenta lo siguiente: 

    .row.justify-content-center.mb-5
      .col-lg-7.mb-4.mb-lg-0.bg03.p-4
        .list(data-aos="slide-left")
          .list__item
              .list__item__bulletNumber 
          .list__txt    
            p.m-top.text-center  #[strong Diagnóstico externo:] analiza las oportunidades y amenazas del macroentorno.
        .list(data-aos="slide-right")
          .list__item
              .list__item__bulletNumber 
          .list__txt    
            p.m-top.text-center.mb-0 #[strong Diagnóstico interno:] analiza las fortalezas y debilidades del microentorno.
      
    .row.justify-content-center.mb-5
      .col-lg-9.mb-4.mb-lg-0
        p En la figura que se muestra a continuación se observa la disposición de la información dentro de la matriz y los aspectos generales que cada uno analiza. 
    figure
      img.img-a(src='@/assets/curso/tema_1/img_7.svg', alt='')(data-aos="slide-right")

    separador

    .titulo-segundo(data-aos="zoom-in")
      #t_1_4.h2 1.4 Ejemplo DOFA enfocado a negocios verdes  

    p.mb-5 A continuación se presenta un ejemplo de matriz DOFA aplicada a los negocios verdes,  propuesto por Cristina Sancha, PhD i directora académica del área de sistemas y operaciones de OBS business school, 

    .row.justify-content-center
      .col-lg-10.mb-4.mb-lg-0
        .row.bg04.p-4.align-items-center.mb-5
          .col-lg-3.mb-4.mb-lg-0
            img.img-a(src='@/assets/curso/tema_1/img_8.png', alt='')(data-aos="slide-right")
          .col-lg-9.mb-4.mb-lg-0.vr1
            h5 Debilidades 
            .list(data-aos="slide-left")
              .list__item
                  .list__item__bulletNumber 
              .list__txt    
                p.m-top #[strong Rediseño de productos.] Los productos deben ser diseñados y programados para su reutilización en todos sus componentes desde el inicio. Por lo tanto, este cambio de paradigma es aplicable a nuevos productos que se diseñen con esta idea, pero más difícil de implementar en productos ya existentes. 
            .list(data-aos="slide-left")
              .list__item
                  .list__item__bulletNumber 
              .list__txt    
                p.m-top #[strong Costes de entrada.] Los costes de administrar todo el ciclo de vida del producto pueden resultar demasiado altos para pequeñas y medianas empresas, así como para emprendedores.
            .list(data-aos="slide-left")
              .list__item
                  .list__item__bulletNumber 
              .list__txt    
                p.m-top.mb-0 #[strong Incremento de la complejidad.] El principio de reutilización de productos o componentes permitiría vincular diferentes cadenas de suministro. Es decir, los residuos o componentes de una industria pueden servir de recursos o materias primas de otras. Esto genera una red compleja de interdependencias que aumenta el riesgo de vulnerabilidades. La interrupción en una cadena se traspasa a la que está directamente vinculada.
        .row.bg05.p-4.align-items-center.mb-5
          .col-lg-3.mb-4.mb-lg-0
            img.img-a(src='@/assets/curso/tema_1/img_9.png', alt='')(data-aos="slide-right")
          .col-lg-9.mb-4.mb-lg-0.vr1
            h5 Oportunidades
            .list(data-aos="slide-left")
              .list__item
                  .list__item__bulletNumber 
              .list__txt    
                p.m-top #[strong Marco normativo y de referencia.] Colombia ya cuenta con una hoja de ruta sobre negocios verdes. 
            .list(data-aos="slide-right")
              .list__item
                  .list__item__bulletNumber 
              .list__txt    
                p.m-top #[strong Ámbito de aplicación.] La economía circular es aplicable a todos los sectores y actividades productivas actuales (por ejemplo, producción, construcción, innovación, movilidad o gestión del agua). 
            .list(data-aos="slide-left")
              .list__item
                  .list__item__bulletNumber 
              .list__txt    
                p.m-top #[strong Mercado laboral.] Se ha remarcado el rol de la economía verde en la generación de nuevos puestos de trabajo en sectores relacionados con el medioambiente o en la mejora de procesos ambientales. 

        .row.bg06.p-4.align-items-center.mb-5
          .col-lg-3.mb-4.mb-lg-0
            img.img-a(src='@/assets/curso/tema_1/img_10.png', alt='')(data-aos="slide-right")
          .col-lg-9.mb-4.mb-lg-0.vr1
            h5 Fortalezas
            .list(data-aos="slide-left")
              .list__item
                  .list__item__bulletNumber 
              .list__txt    
                p.m-top #[strong Gestión de recursos.] Permite la reducción del consumo (y desperdicio) de recursos en procesos de producción. La economía verde y circular permite una mejor gestión de recursos naturales, evitando así su agotamiento. 
            .list(data-aos="slide-right")
              .list__item
                  .list__item__bulletNumber 
              .list__txt    
                p.m-top #[strong Uso de materiales y eliminación de residuos.] La economía verde y circular permite una mejor utilización y optimización, tanto de los materiales como de los residuos. Por un lado, permite una segunda vida de los diferentes productos o componentes, alargando así su vida útil. Por otro lado, garantiza una adecuada eliminación de residuos, evitando toxicidades. 
            .list(data-aos="slide-left")
              .list__item
                  .list__item__bulletNumber 
              .list__txt    
                p.m-top #[strong Consumo de energía.] La economía circular tiene como objetivo limitar el consumo de energía, favoreciendo así el impacto en el medioambiente.
        .row.bg07.p-4.align-items-center.mb-5
          .col-lg-3.mb-4.mb-lg-0
            img.img-a(src='@/assets/curso/tema_1/img_11.png', alt='')(data-aos="slide-right")
          .col-lg-9.mb-4.mb-lg-0.vr1
            h5 Amenazas
            .list(data-aos="slide-left")
              .list__item
                  .list__item__bulletNumber 
              .list__txt    
                p.m-top #[strong Falta de armonización de estándares.] Actualmente, debido a la novedad del concepto, existe una falta de definición de estándares para garantizar un desarrollo de las estrategias de economía circular. Esto es clave para homogeneizar las acciones y mediciones en el avance de la economía circular para todo tipo de industrias. 
            .list(data-aos="slide-right")
              .list__item
                  .list__item__bulletNumber 
              .list__txt    
                p.m-top #[strong Cambio de mentalidad.] La ausencia de una conciencia medioambiental en los diferentes entes de nuestro sistema frena la implementación y extensión del concepto de economía circular. Por ejemplo, que los productos sean remanufacturados puede ser signo de peor calidad para algunos consumidores. 
            .list(data-aos="slide-left")
              .list__item
                  .list__item__bulletNumber 
              .list__txt    
                p.m-top #[strong Periodo de transición.] El cambio de mentalidad de un modelo lineal a uno circular desencadenará en fricciones entre aquellos actores que se sientan amenazados por la desaparición del modelo lineal y/o entre aquellos que carezcan de la base de conocimientos necesarios para entender el modelo de economía circular.

    figure
      img.img-a(src='@/assets/curso/tema_1/img_12.svg', alt='')(data-aos="slide-right")

  
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
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
