export const es = {
  meta: {
    title: "Korigio — Gestor de taller offline",
    description:
      "Korigio es una app de escritorio offline para talleres: clientes, dispositivos, reparaciones, diagnóstico, impresión y sincronización Wi-Fi local. Sin nube.",
  },
  nav: {
    features: "Funciones",
    download: "Descargar",
    about: "Acerca de",
    feedback: "Comentarios",
    getFree: "Descárgalo gratis",
    menu: "Menú",
  },
  hero: {
    kicker: "Gratis · para talleres independientes",
    title: "El taller, funcionando sin red.",
    subtitle:
      "Clientes, dispositivos, reparaciones, diagnóstico, impresión y sync por Wi-Fi — en el PC del mostrador. Gratis, con tus datos en local. Sin cuenta, sin nube y sin suscripción.",
    primary: "Descargar gratis para Windows",
    secondary: "Ver funciones",
    languages: "English, Español, Deutsch",
    os: "Windows 10 / 11 · x64 · instalador offline",
  },
  stats: [
    { value: "Gratis", label: "Sin suscripción" },
    { value: "0", label: "Cuentas necesarias" },
    { value: "Local", label: "Tus datos se quedan" },
  ],
  features: {
    kicker: "Hecho para el mostrador",
    title: "Lo que un taller pequeño necesita. Nada más.",
    subtitle:
      "Korigio es una app de escritorio para Windows. Los datos se quedan en el PC — SQLite, fotos, copias — para que el taller siga si se cae internet.",
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
    body: "El instalador de Windows incluye WebView2 offline, así un PC de taller sin internet también puede instalar. Los datos viven en AppData — nunca en la nube.",
    points: [
      "Gratis — sin cuenta ni suscripción",
      "Sin fuentes ni APIs CDN para lo esencial",
      "SQLite en la máquina local",
      "Sync de equipo solo en el Wi-Fi local",
    ],
  },
  download: {
    kicker: "Instaladores",
    title: "Descargar Korigio",
    subtitle:
      "Windows es el destino soportado para talleres. macOS y Linux son descargas de conveniencia sin firmar.",
    windows: "Windows",
    windowsHint: "10 / 11 · instalador x64",
    macos: "macOS",
    macosHint: "Imagen de disco (.dmg)",
    linux: "Linux",
    linuxHint: "AppImage",
    cta: "Descargar",
    pending: "Disponible tras la próxima versión pública",
    statusEmpty:
      "Los instaladores aparecen aquí desde la release pública de GitHub. Windows sigue siendo el instalador de taller.",
    statusReady: "Última versión {version}. Elige el sistema operativo.",
    freeNote:
      "Korigio es gratis de descargar y usar. Sin cuenta ni suscripción — instálalo y los datos del taller se quedan en el PC.",
  },
  about: {
    kicker: "Acerca de",
    title: "Hecho para el banco, no para un panel en la nube.",
    body: "Korigio es una app de escritorio Windows para talleres pequeños. Mantiene clientes, dispositivos e historial en el PC del mostrador.",
    author: "Creado por Moritz Alexander Wright.",
    points: [
      {
        title: "Offline primero",
        body: "Las funciones principales no dependen de un servidor. Si cae la WAN, la recepción sigue.",
      },
      {
        title: "Tamaño de taller",
        body: "Pensado para PCs Windows 10/11 x64 con RAM modesta — el equipo del mostrador, no una workstation.",
      },
      {
        title: "Privado por defecto",
        body: "Sin sync en la nube de fichas de clientes. Copias locales que controlas. El equipo se sincroniza en tu Wi-Fi.",
      },
    ],
  },
  feedback: {
    kicker: "Comentarios",
    title: "Informa de un error, pide una función o haz una pregunta.",
    subtitle:
      "Korigio es gratis y está hecho para talleres reales. Cuéntanos qué falla, qué falta o qué quieres saber — leemos cada mensaje.",
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
    submit: "Enviar comentarios",
    sending: "Enviando…",
    success: "Gracias — hemos recibido tus comentarios.",
    error: "No se pudo enviar. Inténtalo de nuevo.",
  },
  footer: {
    product: "Producto",
    company: "Empresa",
    legal: "Todos los derechos reservados.",
    tagline: "Gestor de taller offline.",
  },
  preview: {
    title: "Korigio",
    home: "Inicio",
    customers: "Clientes",
    devices: "Dispositivos",
    repairs: "Reparaciones",
    diagnosis: "Diagnóstico",
    team: "Equipo",
    settings: "Ajustes",
    today: "Estimaciones cobradas hoy",
    week: "Estimaciones cobradas esta semana",
    open: "Estimaciones abiertas",
    status: "Abiertas por estado",
  },
  notFound: {
    title: "Página no encontrada",
    body: "Esa URL no forma parte del sitio de Korigio.",
    cta: "Volver al inicio",
  },
} as const;
