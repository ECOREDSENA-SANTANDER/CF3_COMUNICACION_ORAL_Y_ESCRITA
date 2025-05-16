export default {
  global: {
    Name: 'Relacionando',
    Description:
      'Luego de tener claridad de los conceptos adquiridos y la forma en que los textos se estructuran, es fundamental para el proceso lectoescritor el arte del relacionamiento. En este componente formativo tendremos la oportunidad de relacionar los contenidos y presentarlos en un orden según la necesidad del fundamento tratando temas semióticos e interpretativos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Semiótica y semiología',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Los signos en la actualidad y su aplicabilidad: puntuación, interrogación y admiración',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Conectores lógicos como elementos de cohesión',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Diagramas, mapas, gráficos, esquemas y flujogramas',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'La interpretación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'De la lectura al discurso',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Discurso con ayudas audiovisuales',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Discurso leído',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Uso de preposiciones',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Técnicas de registro de información',
            hash: 't_2_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Uso de las preposiciones y su función.',
      referencia: 'EAFIT (s. F.). Las preposiciones y su función.',
      tipo: 'PDF',
      link:
        'https://zajuna.sena.edu.co/Repositorio/Titulada/institution/SENA/Transversales/OVA/Comunicacion_oral_y_escrita/CF3_Relacionando/media/documentos/Las_preposiciones_funci%C3%B3n_EAFIT.pdf',
    },
    {
      tema: 'Manejo de la información.',
      referencia:
        'Gallardo & Adonay (1987). Módulo 3. Recolección de la información.',
      tipo: 'PDF',
      link:
        'https://zajuna.sena.edu.co/Repositorio/Titulada/institution/SENA/Transversales/OVA/Comunicacion_oral_y_escrita/CF3_Relacionando/media/documentos/M%C3%B3dulo%203_Recoleccion_%20informacion%20_Gallardo_Moreno_1987.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Componente interpretativo',
      significado:
        'hace referencia a la capacidad de interpretar un texto más allá de su significado literal, permitiendo hacer inferencias, análisis crítico y reflexiones sobre su contenido.',
    },
    {
      termino: 'Componentente semiótico',
      significado:
        'se refiere al sistema de signos y símbolos que componen un texto, cuyo significado depende del contexto cultural y comunicativo en el que se utiliza.',
    },
    {
      termino: 'Coherencia',
      significado:
        'relación lógica entre las ideas dentro de un texto, que permite que el mensaje se entienda claramente y no haya contradicciones internas.',
    },
    {
      termino: 'Cohesión',
      significado:
        'conjunto de mecanismos lingüísticos que enlazan las partes de un texto, como conectores, pronombres, y otras estructuras que hacen que las ideas fluyan de manera unificada.',
    },
    {
      termino: 'Decodificación',
      significado:
        'el proceso de interpretar y entender los signos lingüísticos (letras, palabras) en un texto para darle sentido.',
    },
    {
      termino: 'Estructura textual',
      significado:
        'la organización interna de un texto, que incluye su introducción, desarrollo y conclusión, y cómo se relacionan las ideas dentro de cada sección.',
    },
    {
      termino: 'Función comunicativa',
      significado:
        'el propósito de un texto, que puede ser informar, argumentar, narrar o describir, entre otros. cada tipo de texto responde a una función específica dentro de la comunicación.',
    },
    {
      termino: 'Inferencia',
      significado:
        'proceso cognitivo que permite al lector o escritor deducir información no explícita en el texto a partir de lo que se ha dicho o se sabe.',
    },
    {
      termino: 'Relación',
      significado:
        'capacidad de conectar y articular distintas ideas y conceptos dentro de un texto, creando vínculos lógicos y fisiológicos entre ellos.',
    },
    {
      termino: 'Texto',
      significado:
        'conjunto de signos organizados de manera coherente que comunican un mensaje. puede ser oral, escrito o visual.',
    },
    {
      termino: 'Texto argumentativo',
      significado:
        'tipo de texto que tiene como objetivo convencer o persuadir a la audiencia de un punto de vista o idea mediante razonamientos lógicos y evidencias.',
    },
    {
      termino: 'Texto descriptivo',
      significado:
        'tipo de texto cuyo objetivo es detallar las características de un objeto, persona, lugar o situación, mediante la enumeración de atributos y cualidades.',
    },
    {
      termino: 'Texto narrativo',
      significado:
        'tipo de texto cuyo propósito es contar una historia o relato, con una estructura que suele incluir personajes, un conflicto y una resolución.',
    },
    {
      termino: 'Texto informativo',
      significado:
        'tipo de texto que tiene como objetivo transmitir datos, hechos o conocimientos de manera clara y precisa.',
    },
    {
      termino: 'Vinculaciones',
      significado:
        'relación entre los elementos lingüísticos y semánticos dentro de un texto, que permiten que las ideas se conecten de manera fluida y coherente.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bustamante (2009). Lógica y argumentación. De los argumentos inductivos a las álgebras de Boole.',
      link: '',
    },
    {
      referencia:
        'Campos, G. & Lule, N. (2012). La observación, un método para el estudio de la realidad.',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=3979972',
    },
    {
      referencia: 'Castro, J. (2009). Diagramas de flujo.',
      link:
        'https://electronicsdj.files.wordpress.com/2009/09/diagramas-de-flujo.pdf',
    },
    {
      referencia: 'Diccionario filosófico (1965). Semiótica.',
      link: 'https://www.filosofia.org/enc/ros/se4.htm',
    },
    {
      referencia:
        'Eco, H. (2016). Umberto Eco, el hombre que sabía todo. Una lista.',
      link:
        'https://hipermediaciones.com/2016/02/20/umberto-eco-el-hombre-que-sabia-todo-una-lista/',
    },
    {
      referencia:
        'Freire, P. & Faundez, A. (1985). Por una pedagogía de la pregunta.',
      link:
        'https://aprendizajesparalelos.files.wordpress.com/2016/08/paulo-freire-y-antonio-faudez-por-una-pedagogia-de-la-pregunta.pdf',
    },
    {
      referencia:
        'Gallardo & Moreno (1983). Serie aprender a investigar – módulo 3 recolección de información.',
      link: '',
    },
    {
      referencia:
        'Ortega, E. (2002). Cómo lograr que los demás se salgan con la nuestra. Técnicas de persuasión, negociación y oratoria.',
      link: '',
    },
    {
      referencia: 'Pearson (s.f.). Estrategias de enseñanza - aprendizaje.',
      link:
        'http://prepajocotepec.sems.udg.mx/sites/default/files/estrategias_pimiento_0.pdf',
    },
    {
      referencia: 'RAE (2025). Discuro.',
      link: 'https://dle.rae.es/discurso?m=form',
    },
    {
      referencia: 'RAE (2025). Información.',
      link: 'https://dle.rae.es/informaci%C3%B3n?m=form',
    },
    {
      referencia: 'RAE (2025). Interpretar.',
      link: 'https://dle.rae.es/interpretar?m=form',
    },
    {
      referencia: 'RAE (2025). Signo.',
      link: 'https://dle.rae.es/signo?m=form',
    },
    {
      referencia:
        'Real Academia de la Lengua Española (2005). Signos ortográficos.',
      link: 'https://www.rae.es/dpd/signos%20ortogr%C3%A1ficos',
    },
    {
      referencia:
        'Universidad EAFIT – Centro de Estudios de Lectura y Escritura – CELEE (s.f.). Las preposiciones y su función.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Elba Patricia Rodríguez',
          cargo: 'Experta técnica',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial ',
        },
        {
          nombre: 'Zvi Daniel Grosman',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lucenith Pinilla Moreno',
          cargo: 'Desarrolladora <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: ' ',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
