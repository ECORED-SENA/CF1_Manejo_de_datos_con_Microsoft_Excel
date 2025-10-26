export default {
  global: {
    Name: 'Conceptos básicos de Excel',
    Description:
      'Este componente formativo enseña el manejo esencial de Microsoft Excel, orientado a estructurar y transformar datos en información útil. A través de la práctica, el aprendiz desarrolla habilidades para usar operadores, referencias de celda y funciones básicas, logrando organizar información, automatizar cálculos y preparar datos para la toma de decisiones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        titulo: 'Interfaz y estructura de Excel',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Conceptos fundamentales ',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Interfaz de usuario',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Gestión de datos en Excel',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos de datos ',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Principios de formato de celda',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Referencias de celda',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto y utilidad de las referencias',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Tipos de referencias',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Procedimiento de creación y modificación',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Operadores para la creación de fórmulas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto y tipos de operadores',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Jerarquía de operadores ',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Fórmulas y funciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: '¿Fórmula o función?',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Sintaxis y proceso de creación',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Catálogo de funciones predeterminadas esenciales',
            hash: 't_5_3',
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
      tema: 'Funciones y fórmulas',
      referencia:
        'Held, B., Moriarty, B., & Richardson, T. (2019). Microsoft excel functions and fórmulas with excel 2019/office 365. Walter de Gruyter GmbH & Co KG.',
      tipo: 'Libro',
      link: 'https://n9.cl/6vclx',
    },
    {
      tema: 'Funciones y fórmulas',
      referencia:
        'Alexander, M., Kusleika, R., & Walkenbach, J. (2018). Excel 2019 bible. John Wiley & Sons.',
      tipo: 'Libro',
      link: 'https://n9.cl/xdysv',
    },
    {
      tema: 'Funciones y fórmulas',
      referencia: 'Microsoft 365. (2025). Microsoft Excel.',
      tipo: 'Página web',
      link: 'https://www.microsoft.com/es-co/microsoft-365/excel',
    },
    {
      tema: 'Catálogo de funciones predeterminadas esenciales',
      referencia:
        'LearnFree en Español. (2021). Funciones ⎪Curso de Excel 365. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=cn0E6zjfD0U',
    },
  ],
  glosario: [
    {
      termino: 'Celda',
      significado:
        'Unidad básica de una hoja de cálculo, formada por la intersección de una fila y una columna. Cada celda tiene una dirección única, o referencia (ej. A1), y es donde se almacenan los datos individuales.',
    },
    {
      termino: 'Cinta de opciones',
      significado:
        'Es la barra de herramientas principal en la interfaz de Excel, ubicada en la parte superior. Organiza todos los comandos y funcionalidades en pestañas y grupos lógicos (ej. Inicio, Insertar, Fórmulas) para facilitar su acceso.',
    },
    {
      termino: 'Fórmula',
      significado:
        'Expresión creada por el usuario que realiza un cálculo y devuelve un resultado. Siempre comienza con un signo igual (=) y puede contener valores, referencias de celda, operadores y funciones.',
    },
    {
      termino: 'Función',
      significado:
        'Una fórmula predefinida y nombrada por Excel que realiza una operación específica. Las funciones simplifican la creación de fórmulas complejas y siguen una sintaxis particular (ej. =SUMA(A1:A10)).',
    },
    {
      termino: 'Jerarquía de operadores',
      significado:
        'Es el orden específico en que Excel ejecuta las operaciones matemáticas y lógicas dentro de una fórmula. Por ejemplo, la multiplicación y división se realizan antes que la suma y la resta, a menos que se usen paréntesis.',
    },
    {
      termino: 'Libro de trabajo',
      significado:
        'El archivo principal de Excel, con extensión .xlsx. Actúa como un contenedor que puede incluir una o varias hojas de cálculo relacionadas.',
    },
    {
      termino: 'Operador',
      significado:
        'Símbolo que especifica el tipo de cálculo a realizar en una fórmula. Los tipos principales son aritméticos (+, *), de comparación (>, <) y de concatenación (&).',
    },
    {
      termino: 'Rango',
      significado:
        'Una selección rectangular de una o más celdas. Se define por las referencias de las celdas de las esquinas opuestas, separadas por dos puntos (ej. A1:C5).',
    },
    {
      termino: 'Referencia absoluta',
      significado:
        'Tipo de referencia de celda (ej. $A$1) que permanece fija y no cambia al copiar una fórmula a otra ubicación. Es crucial para hacer referencia a valores constantes.',
    },
    {
      termino: 'Referencia relativa',
      significado:
        'El tipo de referencia de celda por defecto (ej. A1) que se ajusta automáticamente en relación con la nueva posición al copiar y pegar una fórmula.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alexander, M., Kusleika, R., & Walkenbach, J. (2019). Excel 2019 bible. John Wiley & Sons.',
      link: '',
    },
    {
      referencia:
        'Frye, C. (2013). Microsoft Excel 2013 step by step. Pearson Education.',
      link: '',
    },
    {
      referencia:
        'McFedries, P. (2019). Microsoft Excel 2019 fórmulas and functions. Microsoft Press.',
      link: '',
    },
    {
      referencia:
        'Microsoft Corporation. (2021). Microsoft Excel documentation and specifications. Microsoft Support.',
      link: 'https://support.microsoft.com/excel',
    },
    {
      referencia: 'Walkenbach, J. (2013). Excel 2013 bible. John Wiley & Sons.',
      link: '',
    },
    {
      referencia:
        'Winston, W. (2019). Microsoft Excel 2019 Data analysis and business modeling. Microsoft Press.',
      link: '',
    },
    {
      referencia:
        'Winston, W. (2021). Microsoft Excel data analysis and business modeling (Office 2021 and Microsoft 365). Microsoft Press.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Lider del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Deya Maritza Cortes Enríquez',
          cargo: 'Experto Temático',
          centro: 'Centro de Comercio y Servicios – Regional Tolima',
        },

        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora Instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'xyz xyz',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cielo Damaris Angulo Rodríguez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete Lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete Lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },

        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
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
