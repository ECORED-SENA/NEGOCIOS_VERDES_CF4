export default {
  global: {
    componenteFormativo:
      'Negocios verdes, oportunidades y tendencias del mercado',
    descripcionCurso:
      'Los negocios verdes se han convertido en un tópico con gran relevancia a nivel mundial, razón por la cual, los países continúan enfocando sus esfuerzos en desarrollar productos y servicios sostenibles que generen aportes significativos a la conservación del medio ambiente.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'DOFA dirigido a negocios verdes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Objetivo',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Ventajas y desventajas',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Elaboración',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Ejemplo DOFA enfocado a Negocios verdes  ',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Consumidor ecológico',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Creación de valor compartido',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Comercio justo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Los diez principios del comercio justo',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Organización internacional de comercio justo',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Certificación de comercio justo (FLO)',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Ejemplo DOFA enfocado a Negocios verdes  ',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Compras públicas sostenibles',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Plan nacional de compras públicas sostenibles ',
            hash: 't_5_1',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Tendencias del mercado',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Economía circular',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Economía lineal',
            hash: 't_6_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.3',
            titulo: 'Economía circular vs economía lineal',
            hash: 't_6_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.4',
            titulo: 'Ventajas de la economía circular',
            hash: 't_6_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.5',
            titulo: 'Economía solidaria',
            hash: 't_6_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.6',
            titulo: 'Economía colaborativa',
            hash: 't_6_6',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Emprendimiento en negocios verdes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '7.1',
            titulo: 'Marketing verde',
            hash: 't_7_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.2',
            titulo: 'Mezcla del marketing verde',
            hash: 't_7_2',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Sistema de producción orgánicos, biológicos o ecológicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '8.1',
            titulo:
              'Diferencias entre productos ecológicos, biológicos y orgánicos',
            hash: 't_8_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '8.2',
            titulo: 'Normativa',
            hash: 't_8_2',
          },
        ],
      },
      {
        nombreRuta: 'tema9',
        icono: 'far fa-file-alt',
        numero: '9',
        titulo: 'Biodiversidad en Colombia',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Aguirre García, M. S., Gonzalez de Durana, C., Charterina Abando , J., & Vicente Molina, A. (2003). El consumidor ecológico. ',
      link:
        'https://www.researchgate.net/publication/28061197_El_consumidor_ecologico',
    },

    {
      referencia: 'Connect Americas . (2020). Connect Americas.',
      link:
        'https://connectamericas.com/es/content/%C2%BFqu%C3%A9-es-la-certificaci%C3%B3n-de-comercio-justo-y-c%C3%B3mo-funciona',
    },

    {
      referencia:
        'FAIRTRADE INTERNATIONAL. (s.f.). Las marcas de comercio justo.',
      link: 'https://www.fairtrade.net/about/fairtrade-marks',
    },

    {
      referencia: 'Farah, A. Z. (2018). ONU.',
      link: 'https://news.un.org/es/interview/2018/12/1447801',
    },

    { referencia: 'Grant, J. (2007). The Green Marketing Manifiesto.' },

    {
      referencia:
        'Marcet, X., Marcet, M., & Vergés, F. (2018). Papeles del Pacto Industrial, número 4. ',
      link: 'https://www.pacteindustrial.org/ca/',
    },

    {
      referencia:
        'Martinez Turrubiates, A., & Prieto, F. (2016). Consumidor ecogológico.',
    },

    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2015). Plan de Acción Nacional de Compras Públicas Sostenibles 2016 - 2020 .',
    },

    {
      referencia: 'ONU Medio Ambiente. (2018). ONU.',
      link: 'https://news.un.org/es/interview/2018/12/1447801',
    },

    { referencia: 'Porter, M., & Kramer, M. (2011). Estrategia y Sociedad.' },

    {
      referencia: 'Proargentina . (2005). Productos Orgánicos. EL Cid Editor.',
    },

    {
      referencia: 'Sancha, C. (2018). Mundo Empresarial .',
      link:
        'https://www.monempresarial.com/es/2018/06/18/economia-verde-y-circular-dafo/',
    },

    {
      referencia: 'Ventura. (s.f.). Serie Qué ver. ',
      link: 'https://vaventura.com/que-ver/',
    },

    {
      referencia:
        'Vidal, I. (2011). El principio de valor compartido de Porter y Kramer. CIES Centro de Investigación de Economía y Sociedad.',
    },

    {
      referencia:
        'WFTO-LA. (2020). World Fair Trade Organization Latin America.',
      link: 'http://www.wfto-la.org/comerciojusto/',
    },
  ],
  glosario: [
    {
      termino: 'Biodiversidad',
      significado: 'Es la variedad de seres vivos sobre la tierra.',
    },
    {
      termino: 'Comercio justo',
      significado:
        'Es una forma alternativa de comercio, promovida por varias ONG, por la Organización de las Naciones Unidas (ONU) y por los movimientos sociales y políticos que promueven una relación comercial voluntaria y justa entre productores y consumidores.',
    },
    {
      termino: 'Compras públicas sostenibles',
      significado:
        'Una compra es considerada sostenible cuando satisface la necesidad y contribuye a la protección del medio ambiente, la reducción en el consumo de recursos, o la inclusión y la justicia social durante el desarrollo de un proceso de compra pública. Con base en lo anterior, las entidades Estatales deben considerar los impactos ambientales, sociales y económicos de sus adquisiciones para desarrollar un programa de Compras Públicas Sostenibles.',
    },
    {
      termino: 'DOFA',
      significado:
        'El análisis FODA, también conocido como análisis DAFO, es una herramienta de estudio de la situación de una empresa, institución, proyecto o persona, analizando sus características internas y su situación externa en una matriz cuadrada.',
    },
    {
      termino: 'Emprendimiento',
      significado:
        'Suele ser un proyecto que se desarrolla con esfuerzo y haciendo frente a diversas dificultades, inicia como una pequeña empresa con la resolución de llegar a un determinado punto.',
    },
    {
      termino: 'Marketing',
      terminoHtml: '<em>Marketing</em>',
      significado:
        'Disciplina dedicada al análisis del comportamiento de los mercados y de los consumidores. El <em>marketing</em> analiza la gestión comercial de las empresas, con el objetivo de captar, retener y fidelizar a los clientes a través de la satisfacción de sus necesidades.',
    },
  ],
  complementario: [
    {
      texto: 'Fairtrade International (s.f.) Las marcas de comercio justo. ',
      tipo: 'Sitio web',
      link: 'https://www.fairtrade.net/about/fairtrade-marks',
    },
    {
      texto:
        'Ministerio de Ambiente y Desarrollo Sostenible (2017). Compras Públicas Sostenibles Guía Conceptual y Metodológica.',
      tipo: 'Guía Conceptual y Metodológica Compras Públicas Sostenibles',
      descarga:
        '/downloads/Guia_Conceptual_y_Metodologica_Compras_Publicas_Sostenibles_1.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Kateryn Valderrama Varón',
        cargo: 'Experto temático',
        centro: 'Centro de Comercio y servicios Regional Tolima',
      },
      {
        nombre: 'José Gregorio Ramírez ',
        cargo: 'Experto temático',
        centro: 'Centro de Comercio y servicios Regional Tolima ',
      },
      {
        nombre: 'Vilma Lucía Perilla Méndez',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Gestión Industrial Regional Bogotá ',
      },
      {
        nombre: 'Adriana Lozano Zapata',
        cargo: 'Correctora de estilo',
        centro:
          'Centro para la Industria y la Comunicación Gráfica Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Oscar Marquez Sanabria',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ricardo Alfonso Gonzaléz Vargas',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Magdi Khalifah Gamboa',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
