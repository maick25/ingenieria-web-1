/* ==========================================================================
    MÓDULO: DATOS
    Catálogo de cursos, instructores, rutas de aprendizaje y testimonios.
    Datos estáticos de la aplicación + estado compartido de favoritos.
    Se cuelga de App.datos para que el resto de módulos pueda leerlo/escribirlo.
   ========================================================================== */
window.App = window.App || {};

App.datos = {
misCursos: [
    {
        id: 1,
        categoria: "Competencias Fundamentales",
        titulo: "Habilidades Digitales para el Futuro",
        instructor: "Instructor: Ing. Miguel Ángel",
        duracion: "40h de contenido",
        precio: "Gratuito",
        imagen: "images/tecnologia_educativa.svg",
        icono: `<i class="fa-solid fa-code app-icon" aria-hidden="true"></i>`,
        nivel: "Básico",
        modulos: "12 módulos",
        resumen: "Desarrolla competencias digitales esenciales para estudiar, trabajar y emprender con herramientas tecnológicas."
    },
    {
        id: 2,
        categoria: "Competencias Fundamentales",
        titulo: "Desarrollo Web con HTML y CSS",
        instructor: "Instructora: Ing. Mariana Ríos",
        duracion: "60h de contenido",
        precio: "Gratuito",
        imagen: "images/tecnologia_educativa.svg",
        icono: `<i class="fa-solid fa-window-maximize app-icon" aria-hidden="true"></i>`,
        nivel: "Básico",
        modulos: "24 módulos",
        resumen: "Construye páginas web modernas, responsivas y semánticas desde cero usando HTML5 y CSS3."
    },
    {
        id: 3,
        categoria: "Competencias Fundamentales",
        titulo: "Introducción a JavaScript",
        instructor: "Instructor: Lic. Andrés Mora",
        duracion: "50h de contenido",
        precio: "Gratuito",
        imagen: "images/tecnologia_educativa.svg",
        icono: `<i class="fa-solid fa-bolt app-icon" aria-hidden="true"></i>`,
        nivel: "Intermedio",
        modulos: "18 módulos",
        resumen: "Aprende lógica de programación, eventos, funciones y manipulación del DOM con JavaScript Vanilla."
    },
    {
        id: 4,
        categoria: "Competencias Fundamentales",
        titulo: "Fundamentos de Bases de Datos",
        instructor: "Instructora: Dra. Natalia Ríos",
        duracion: "42h de contenido",
        precio: "Gratuito",
        imagen: "images/tecnologia_educativa.svg",
        icono: `<i class="fa-solid fa-database app-icon" aria-hidden="true"></i>`,
        nivel: "Básico",
        modulos: "14 módulos",
        resumen: "Comprende tablas, relaciones, consultas básicas y organización de información para proyectos digitales."
    },
    {
        id: 5,
        categoria: "Innovación Tecnológica",
        titulo: "Introducción a Tecnologías Emergentes",
        instructor: "Instructora: Dra. Elena Rostova",
        duracion: "35h de contenido",
        precio: "Gratuito",
        imagen: "images/innovacion.svg",
        icono: `<i class="fa-solid fa-microchip app-icon" aria-hidden="true"></i>`,
        nivel: "Intermedio",
        modulos: "10 módulos",
        resumen: "Conoce tendencias como inteligencia artificial, automatización y tecnologías emergentes aplicadas al aprendizaje."
    },
    {
        id: 6,
        categoria: "Innovación Tecnológica",
        titulo: "Inteligencia Artificial para Principiantes",
        instructor: "Instructor: Mg. Daniel Torres",
        duracion: "38h de contenido",
        precio: "Gratuito",
        imagen: "images/innovacion.svg",
        icono: `<i class="fa-solid fa-brain app-icon" aria-hidden="true"></i>`,
        nivel: "Básico",
        modulos: "11 módulos",
        resumen: "Explora conceptos iniciales de IA, automatización y uso responsable de herramientas inteligentes."
    },
    {
        id: 7,
        categoria: "Innovación Tecnológica",
        titulo: "Computación en la Nube",
        instructor: "Instructora: Ing. Camila Pérez",
        duracion: "44h de contenido",
        precio: "Gratuito",
        imagen: "images/innovacion.svg",
        icono: `<i class="fa-solid fa-cloud app-icon" aria-hidden="true"></i>`,
        nivel: "Intermedio",
        modulos: "16 módulos",
        resumen: "Aprende los fundamentos de servicios cloud, almacenamiento, despliegue y escalabilidad de aplicaciones."
    },
    {
        id: 8,
        categoria: "Innovación Tecnológica",
        titulo: "Ciberseguridad Básica",
        instructor: "Instructor: Esp. Julián Castro",
        duracion: "36h de contenido",
        precio: "Gratuito",
        imagen: "images/innovacion.svg",
        icono: `<i class="fa-solid fa-shield-halved app-icon" aria-hidden="true"></i>`,
        nivel: "Básico",
        modulos: "13 módulos",
        resumen: "Identifica riesgos digitales, buenas prácticas de seguridad y protección de datos personales."
    },
    {
        id: 9,
        categoria: "Emprendimiento Digital",
        titulo: "Modelos de Negocio",
        instructor: "Instructora: Dra. Angelina Ruso",
        duracion: "45h de contenido",
        precio: "Gratuito",
        imagen: "images/negocios.svg",
        icono: `<i class="fa-solid fa-chart-line app-icon" aria-hidden="true"></i>`,
        nivel: "Intermedio",
        modulos: "8 módulos",
        resumen: "Aprende a crear, estructurar y evaluar modelos de negocio digitales sostenibles y con impacto."
    },
    {
        id: 10,
        categoria: "Emprendimiento Digital",
        titulo: "Marketing Digital para Emprendedores",
        instructor: "Instructora: Lic. Carolina Méndez",
        duracion: "35h de contenido",
        precio: "Gratuito",
        imagen: "images/negocios.svg",
        icono: `<i class="fa-solid fa-bullhorn app-icon" aria-hidden="true"></i>`,
        nivel: "Intermedio",
        modulos: "16 módulos",
        resumen: "Diseña estrategias de marketing digital para comunicar, vender y hacer crecer un proyecto o negocio."
    },
    {
        id: 11,
        categoria: "Emprendimiento Digital",
        titulo: "Gestión de Proyectos Ágiles",
        instructor: "Instructor: Scrum Master Felipe Luna",
        duracion: "48h de contenido",
        precio: "Gratuito",
        imagen: "images/negocios.svg",
        icono: `<i class="fa-solid fa-diagram-project app-icon" aria-hidden="true"></i>`,
        nivel: "Intermedio",
        modulos: "20 módulos",
        resumen: "Organiza proyectos digitales usando principios ágiles, tableros, sprints y trabajo colaborativo."
    },
    {
        id: 12,
        categoria: "Emprendimiento Digital",
        titulo: "Finanzas para Emprendedores",
        instructor: "Instructora: C.P. Laura Sánchez",
        duracion: "32h de contenido",
        precio: "Gratuito",
        imagen: "images/negocios.svg",
        icono: `<i class="fa-solid fa-chart-simple app-icon" aria-hidden="true"></i>`,
        nivel: "Básico",
        modulos: "12 módulos",
        resumen: "Aprende presupuesto, costos, ingresos y decisiones financieras básicas para iniciar un emprendimiento."
    }
],

/* ==========================================================================
DATOS DE INSTRUCTORES — perfiles ficticios para la plataforma educativa
   ========================================================================== */
misInstructores: [
    {
        id: 1,
        nombre: "Miguel Ángel Torres",
        nombreCorto: "Miguel Ángel",
        rol: "Desarrollo Web",
        especialidad: "HTML, CSS, JavaScript y UX/UI",
        experiencia: "8 años",
        bio: "Ingeniero de Software con experiencia en desarrollo frontend, accesibilidad y construcción de interfaces web responsivas.",
        cursos: ["Habilidades Digitales para el Futuro"],
        avatar: "miguel_angel_torres.png",
        gender: "m",
        color: (37, 99, 235)
    },
    {
        id: 2,
        nombre: "Mariana Ríos Fernández",
        nombreCorto: "Mariana Ríos",
        rol: "HTML5 y CSS3",
        especialidad: "Maquetación semántica y estándares W3C",
        experiencia: "9 años",
        bio: "Docente y desarrolladora frontend enfocada en buenas prácticas, diseño responsive y estructura HTML semántica.",
        cursos: ["Desarrollo Web con HTML y CSS"],
        avatar: "mariana_rios.png",
        gender: "f",
        color: (14, 165, 233)
    },
    {
        id: 3,
        nombre: "Andrés Mora",
        nombreCorto: "Andrés Mora",
        rol: "JavaScript Vanilla",
        especialidad: "DOM, eventos y lógica de programación",
        experiencia: "6 años",
        bio: "Instructor especializado en programación web, interactividad con JavaScript y desarrollo de componentes funcionales.",
        cursos: ["Introducción a JavaScript"],
        avatar: "andres_mora.png",
        gender: "m",
        color: (245, 158, 11)
    },
    {
        id: 4,
        nombre: "Natalia Ríos",
        nombreCorto: "Natalia Ríos",
        rol: "Bases de Datos",
        especialidad: "Modelado, tablas y consultas básicas",
        experiencia: "7 años",
        bio: "Profesional en ingeniería de datos con experiencia en organización de información y fundamentos de bases de datos.",
        cursos: ["Fundamentos de Bases de Datos"],
        avatar: "natalia_rios.png",
        gender: "f",
        color: (16, 185, 129)
    },
    {
        id: 5,
        nombre: "Elena Rodríguez",
        nombreCorto: "Elena Rodríguez",
        rol: "Tecnologías Emergentes",
        especialidad: "IA, automatización y tendencias digitales",
        experiencia: "10 años",
        bio: "Magíster en Ciencia de Datos con enfoque en inteligencia artificial, automatización y transformación digital.",
        cursos: ["Introducción a Tecnologías Emergentes"],
        avatar: "elena_rodriguez.png",
        gender: "f",
        color: (124, 58, 237)
    },
    {
        id: 6,
        nombre: "Daniel Torres",
        nombreCorto: "Daniel Torres",
        rol: "Inteligencia Artificial",
        especialidad: "IA aplicada y pensamiento computacional",
        experiencia: "8 años",
        bio: "Investigador y formador en inteligencia artificial aplicada, aprendizaje automático y herramientas digitales para principiantes.",
        cursos: ["Inteligencia Artificial para Principiantes"],
        avatar: "daniel_torres.png",
        gender: "m",
        color: (99, 102, 241)
    },
    {
        id: 7,
        nombre: "Camila Pérez",
        nombreCorto: "Camila Pérez",
        rol: "Cloud Computing",
        especialidad: "Servicios cloud y despliegue web",
        experiencia: "7 años",
        bio: "Ingeniera cloud con experiencia en infraestructura digital, almacenamiento, servicios escalables y despliegue de aplicaciones.",
        cursos: ["Computación en la Nube"],
        avatar: "camila_perez.png",
        gender: "f",
        color: (6, 182, 212)
    },
    {
        id: 8,
        nombre: "Julián Castro",
        nombreCorto: "Julián Castro",
        rol: "Ciberseguridad",
        especialidad: "Protección de datos y seguridad básica",
        experiencia: "9 años",
        bio: "Especialista en seguridad digital, buenas prácticas de navegación, prevención de riesgos y protección de información.",
        cursos: ["Ciberseguridad Básica"],
        avatar: "julian_castro.png",
        gender: "m",
        color: (20, 184, 166)
    },
    {
        id: 9,
        nombre: "Angelina Russo",
        nombreCorto: "Angelina Russo",
        rol: "Emprendimiento Digital",
        especialidad: "Modelos de negocio e innovación",
        experiencia: "7 años",
        bio: "MBA en Innovación y Marketing Digital, enfocada en creación de modelos de negocio sostenibles y validación de ideas.",
        cursos: ["Modelos de Negocio"],
        avatar: "angelina_russo.png",
        gender: "f",
        color: (22, 163, 74)
    },
    {
        id: 10,
        nombre: "Carolina Méndez",
        nombreCorto: "Carolina Méndez",
        rol: "Marketing Digital",
        especialidad: "Estrategia, contenido y crecimiento",
        experiencia: "6 años",
        bio: "Profesional en marketing digital con experiencia en comunicación, posicionamiento de marca y estrategias para emprendedores.",
        cursos: ["Marketing Digital para Emprendedores"],
        avatar: "carolina_mendez.png",
        gender: "f",
        color: (236, 72, 153)
    },
    {
        id: 11,
        nombre: "Felipe Luna",
        nombreCorto: "Felipe Luna",
        rol: "Gestión Ágil",
        especialidad: "Scrum, tableros y trabajo colaborativo",
        experiencia: "8 años",
        bio: "Scrum Master con experiencia liderando equipos digitales, planificación por sprints y gestión de proyectos ágiles.",
        cursos: ["Gestión de Proyectos Ágiles"],
        avatar: "felipe_luna.png",
        gender: "m",
        color: (249, 115, 22)
    },
    {
        id: 12,
        nombre: "Laura Sánchez",
        nombreCorto: "Laura Sánchez",
        rol: "Finanzas para Emprendedores",
        especialidad: "Costos, presupuesto y finanzas básicas",
        experiencia: "7 años",
        bio: "Contadora pública enfocada en educación financiera, presupuestos, costos y decisiones económicas para emprendedores.",
        cursos: ["Finanzas para Emprendedores"],
        avatar: "laura_sanchez.png",
        gender: "f",
        color: (34, 197, 94)
    }
],

rutasAprendizaje: [
    { id: 'web', icono: `<i class="fa-solid fa-window-maximize app-icon" aria-hidden="true"></i>`, titulo: 'Desarrollo Web', descripcion: 'Aprende a crear sitios modernos desde cero con HTML, CSS y JavaScript.', cursos: 4, horas: 192, categoria: 'Competencias Fundamentales' },
    { id: 'ia', icono: `<i class="fa-solid fa-microchip app-icon" aria-hidden="true"></i>`, titulo: 'Innovación Tecnológica', descripcion: 'Explora IA, nube, ciberseguridad y tendencias que transforman el futuro.', cursos: 4, horas: 153, categoria: 'Innovación Tecnológica' },
    { id: 'emprende', icono: `<i class="fa-solid fa-bullhorn app-icon" aria-hidden="true"></i>`, titulo: 'Emprendimiento Digital', descripcion: 'Convierte ideas en proyectos sostenibles con marketing, finanzas y gestión ágil.', cursos: 4, horas: 160, categoria: 'Emprendimiento Digital' }
],

/* Testimonios de referencia usados para presentar la experiencia de estudiantes. */
misTestimonios: [
    {
        comment: "Los cursos de Educ_Technology me ayudaron a entender desarrollo web desde cero. Ahora puedo crear mis propios proyectos y me siento mucho más segura.",
        student: "Ana Sofía Gómez",
        role: "Estudiante de Diseño Gráfico",
        location: "Bogotá, Colombia",
        rating: 5,
        avatar: "ana_sofia_gomez.png",
        accent: "#7c3aed"
    },
    {
        comment: "Gracias a los recursos y ejercicios prácticos, aprendí JavaScript de verdad. Hoy trabajo como freelancer realizando páginas web para diferentes clientes.",
        student: "Diego Ramírez",
        role: "Desarrollador Frontend",
        location: "Medellín, Colombia",
        rating: 5,
        avatar: "diego_ramirez.png",
        accent: "#2563eb"
    },
    {
        comment: "El curso de Marketing Digital me dio las herramientas que necesitaba para lanzar mi emprendimiento. Totalmente recomendado.",
        student: "Laura Guatibonza",
        role: "Emprendedora Digital",
        location: "Cali, Colombia",
        rating: 5,
        avatar: "laura_guatibonza.png",
        accent: "#16a34a"
    },
    {
        comment: "El enfoque práctico y los docentes hacen que aprender sea fácil y motivador. Educ_Technology es mi primera opción para seguir creciendo profesionalmente.",
        student: "Carlos Mendoza",
        role: "Estudiante de Ing. de Sistemas",
        location: "Lima, Perú",
        rating: 5,
        avatar: "carlos_mendoza.png",
        accent: "#f59e0b"
    }
]
};

// Estado compartido de favoritos (mutable, separado de los datos estáticos).
App.estado = {
    favoritosCursos: new Set(),
    filtroFavoritosActivo: false
};
