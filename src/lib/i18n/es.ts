export const es = {
  meta: {
    title: "Korigio — Gestor de reparaciones de código abierto",
    description:
      "Korigio es software de escritorio libre y de código abierto para talleres: clientes, dispositivos, reparaciones, diagnóstico, impresión y sincronización Wi-Fi local. En el PC del mostrador — sin nube.",
  },
  nav: {
    features: "Funciones",
    download: "Descargar",
    feedback: "Comentarios",
    getFree: "Descárgalo gratis",
    menu: "Menú",
    themeToLight: "Mostrar modo claro",
    themeToDark: "Mostrar modo oscuro",
  },
  hero: {
    kicker: "Código abierto · para talleres independientes",
    title: "El taller, de código abierto.",
    subtitle:
      "Clientes, dispositivos, reparaciones, diagnóstico, impresión y sync por Wi-Fi — en el PC del mostrador. Libre y de código abierto. Tus datos se quedan en local. Sin cuenta, sin nube y sin suscripción.",
    primary: "Descargar gratis para {os}",
    secondary: "Ver funciones",
    languages: "English, Español, Deutsch",
    osHint: {
      windows: "Windows 10 / 11 · x64 · instalador offline",
      macos: "macOS · Apple Silicon · imagen de disco",
      linux: "Linux · x64 · AppImage",
    },
  },
  stats: [
    { value: "OSS", label: "Libre y código abierto" },
    { value: "0", label: "Cuentas necesarias" },
    { value: "Local", label: "Lo ejecutas tú" },
  ],
  features: {
    kicker: "Hecho para el mostrador",
    title: "Lo que un taller de reparación necesita. Nada más.",
    subtitle:
      "Korigio es software de escritorio de código abierto para Windows. Los datos se quedan en el PC — SQLite, fotos, copias — para que el taller siga si se cae internet.",
    items: [
      {
        title: "Clientes y empresas",
        body: "Busca, crea y archiva clientes. Perfiles de empresa para trabajos B2B e impresos de entrada.",
      },
      {
        title: "Dispositivos",
        body: "Vincula equipos a personas. Encuentra una unidad por serie, marca o modelo antes de abrir la reparación.",
      },
      {
        title: "Recepción",
        body: "Entrada rápida con teclado en el mostrador. Guarda y pasa al siguiente trabajo.",
      },
      {
        title: "Plantillas de diagnóstico",
        body: "Listas reutilizables aplicadas a cada reparación — las mismas preguntas y el mismo presupuesto.",
      },
      {
        title: "Fotos y documentos",
        body: "Fotos de entrada y papeles firmados junto al trabajo. Miniaturas ligeras para PCs de taller.",
      },
      {
        title: "Impresión",
        body: "Recibos A4 de entrada, diagnóstico para aprobación del cliente y resumen al recoger.",
      },
      {
        title: "Copia y restauración",
        body: "Copias manuales y programadas a la carpeta que elijas. La restauración se valida antes de sustituir datos.",
      },
      {
        title: "Sync Wi-Fi del equipo",
        body: "Varios PCs en la misma red del taller se mantienen al día. PIN para unirse. Sin cuenta en la nube.",
      },
    ],
  },
  workflow: {
    kicker: "Cómo avanza un trabajo",
    title: "Recibir. Diagnosticar. Aprobar. Reparar. Entregar.",
    steps: [
      {
        n: "01",
        title: "Recepción",
        body: "Cliente, dispositivo y avería en el mostrador. Imprime un recibo de entrada si hace falta firma.",
      },
      {
        n: "02",
        title: "Diagnóstico",
        body: "Aplica una plantilla, registra hallazgos y presupuesto, e imprime para la aprobación del cliente.",
      },
      {
        n: "03",
        title: "Reparación",
        body: "Sigue el estado, las piezas y quién tiene el trabajo. El panel muestra lo que sigue abierto.",
      },
      {
        n: "04",
        title: "Entrega",
        body: "Imprime un resumen, marca el trabajo como recogido y conserva el historial en el dispositivo.",
      },
    ],
  },
  offline: {
    title: "Pensado para funcionar con el cable desconectado.",
    body: {
      windows:
        "El instalador de Windows incluye WebView2 offline, así un PC de taller sin internet también puede instalar. Aún no está firmado, así que SmartScreen avisará — es lo esperado. Los datos viven en AppData — nunca en la nube.",
      macos:
        "La imagen de disco de macOS está firmada con un Apple Developer ID. Ábrela, arrastra Korigio a Aplicaciones e iníciala. Los datos del taller se quedan en este Mac, nunca en la nube.",
      linux:
        "El AppImage de Linux es una build oficial. Márcalo como ejecutable y ábrelo. Los datos del taller se quedan en esta máquina — nunca en la nube.",
    },
    points: [
      "Libre y de código abierto — sin cuenta ni suscripción",
      "Sin fuentes ni APIs CDN para lo esencial",
      "SQLite en la máquina local",
      "Sync de equipo solo en el Wi-Fi local",
    ],
  },
  download: {
    kicker: "Instaladores",
    title: "Descargar Korigio",
    subtitle:
      "Windows es el destino soportado para talleres. Descarga tu sistema y abre Cómo instalar en esa tarjeta — Windows mostrará una advertencia de SmartScreen porque el instalador aún no está firmado.",
    guide: "Guía de instalación",
    howToInstall: "Cómo instalar",
    windowsCallout:
      "Windows dirá que ha protegido el PC. Abre Cómo instalar en la tarjeta de Windows — pulsa Más información y luego Ejecutar de todas formas.",
    windows: "Windows",
    windowsHint: "10 / 11 · instalador x64",
    macos: "macOS",
    macosHint: "Imagen de disco (.dmg)",
    linux: "Linux",
    linuxHint: "AppImage",
    recommended: "Para este equipo",
    cta: "Descargar",
    pending: "Disponible tras la próxima versión pública",
    statusEmpty:
      "Los instaladores aparecen aquí desde la release pública de GitHub. Windows sigue siendo el instalador de taller.",
    statusReady: "Última versión {version}. Elige el sistema operativo.",
    freeNote:
      "Korigio es libre y de código abierto. Sin cuenta ni suscripción — instálalo y los datos del taller se quedan en el PC.",
    requirements: {
      kicker: "Hardware",
      title: "Requisitos mínimos",
      subtitle:
        "Un PC de mostrador habitual basta. Windows es el destino soportado para talleres; macOS y Linux son builds adicionales.",
      note: "Pantalla 1024×768 o superior. Sin internet — Wi-Fi del taller opcional solo para el sync de equipo.",
      labels: {
        os: "Sistema",
        cpu: "Procesador",
        ram: "Memoria",
        disk: "Disco libre",
        webview: "Vista web",
      },
      windows: {
        title: "Windows",
        badge: "Destino de taller",
        os: "Windows 10 x64 (21H2 o posterior) o Windows 11",
        cpu: "x86-64 de doble núcleo, unos 1,5 GHz",
        ram: "4 GB (2 GB mínimo absoluto)",
        disk: "Unos 500 MB, más espacio para fotos y copias",
        webview: "WebView2 va incluido — se instala sin internet",
      },
      macos: {
        title: "macOS",
        badge: "También disponible",
        os: "macOS 11 Big Sur o posterior",
        cpu: "Apple Silicon o Intel x86-64",
        ram: "4 GB",
        disk: "Unos 400 MB, más espacio para fotos y copias",
        webview: "Usa la WebView integrada en macOS",
      },
      linux: {
        title: "Linux",
        badge: "También disponible",
        os: "Ubuntu 22.04+, Debian 12+ o Fedora 39+",
        cpu: "x86-64 de doble núcleo",
        ram: "4 GB",
        disk: "Unos 400 MB, más espacio para fotos y copias",
        webview: "El AppImage incluye su propio runtime",
      },
    },
  },
  install: {
    recommended: "Para este equipo",
    windows: {
      title: "Windows 10 / 11",
      intro:
        "Descarga el instalador x64 y permite que Windows lo ejecute. Como Korigio aún no está firmado con un certificado de editor, Windows lo trata como no reconocido. Es lo esperado.",
      warningTitle: "La advertencia de Windows es normal",
      warningBody:
        "Aún no tenemos licencia de firma de código para Windows. Microsoft Defender SmartScreen bloqueará el primer arranque hasta que ejecutes el instalador que descargaste de este sitio.",
      clicks: [
        {
          label: "Windows ha protegido el PC",
          buttons: ["Más información", "Ejecutar de todas formas"],
        },
        {
          label: "¿Permitir que esta app haga cambios?",
          buttons: ["Sí"],
        },
      ],
      steps: [
        {
          title: "Descarga el instalador",
          body: "Usa el botón Descargar de arriba y guarda el archivo en este PC.",
        },
        {
          title: "Abre el instalador",
          body: "Haz doble clic en el archivo descargado en la carpeta Descargas.",
        },
        {
          title: "Pasa SmartScreen",
          body: "Cuando aparezca Windows ha protegido el PC, pulsa Más información y luego Ejecutar de todas formas.",
        },
        {
          title: "Permite los cambios",
          body: "Si Control de cuentas de usuario pregunta si permites que la app haga cambios en el dispositivo, pulsa Sí.",
        },
        {
          title: "Termina la instalación",
          body: "Sigue el instalador y abre Korigio desde el menú Inicio.",
        },
      ],
    },
    macos: {
      title: "macOS",
      intro:
        "La imagen de disco de macOS está firmada con un Apple Developer ID. Ábrela, pon Korigio en Aplicaciones e iníciala.",
      steps: [
        {
          title: "Descarga la imagen de disco",
          body: "Usa el botón Descargar de arriba para obtener el .dmg.",
        },
        {
          title: "Abre la imagen",
          body: "Haz doble clic en el archivo .dmg descargado.",
        },
        {
          title: "Instala",
          body: "Arrastra Korigio a la carpeta Aplicaciones y luego expulsa la imagen de disco.",
        },
        {
          title: "Abre Korigio",
          body: "Iníciala desde Aplicaciones. Si macOS pide confirmar una app descargada de internet, pulsa Abrir.",
        },
      ],
    },
    linux: {
      title: "Linux",
      intro:
        "La build de Linux es un AppImage oficial. Márcalo como ejecutable y ábrelo — no hace falta un asistente de instalación.",
      steps: [
        {
          title: "Descarga el AppImage",
          body: "Usa el botón Descargar de arriba.",
        },
        {
          title: "Hazlo ejecutable",
          body: "Clic derecho en el archivo, Propiedades, y permite ejecutar como programa. En una terminal: chmod +x Korigio*.AppImage",
        },
        {
          title: "Ejecuta Korigio",
          body: "Haz doble clic en el AppImage o inícialo desde la terminal. Los datos del taller se quedan en esta máquina.",
        },
      ],
    },
  },
  feedback: {
    kicker: "Comentarios",
    title: "Informa de un error, pide una función o haz una pregunta.",
    subtitle:
      "Korigio es libre, de código abierto y está hecho para talleres reales. Cuéntanos qué falla, qué falta o qué quieres saber — leemos cada mensaje.",
    typeLabel: "¿De qué se trata?",
    types: {
      bug: "Informar de un error",
      feature: "Pedir una función",
      question: "Hacer una pregunta",
    },
    name: "Nombre",
    email: "Email",
    message: "Mensaje",
    messagePlaceholder: "Cuéntanos qué pasó, qué necesitas o qué quieres preguntar.",
    confirm: "Confirmo que soy una persona y que quiero enviar este mensaje.",
    submit: "Enviar comentarios",
    sending: "Enviando…",
    success: "Gracias — hemos recibido tus comentarios.",
    error: "No se pudo enviar. Inténtalo de nuevo.",
    confirmError: "Confirma que quieres enviar este mensaje.",
  },
  footer: {
    product: "Producto",
    company: "Empresa",
    legal: "Todos los derechos reservados.",
    tagline: "Gestor de reparaciones de código abierto.",
    privacy: "Política de privacidad",
    terms: "Términos y condiciones",
  },
  preview: {
    alt: "Panel de taller de Korigio",
  },
  notFound: {
    title: "Página no encontrada",
    body: "Esa URL no forma parte del sitio de Korigio.",
    cta: "Volver al inicio",
  },
} as const;
