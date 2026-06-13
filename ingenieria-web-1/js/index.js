/* ==========================================================================
   UTILIDAD VISUAL: Mensajes de confirmación sin usar alertas del navegador
   ========================================================================== */
function mostrarToast(mensaje) {
    const toast = document.getElementById('toast-feedback');
    if (!toast) return;
    toast.textContent = mensaje;
    toast.classList.remove('oculto');
    clearTimeout(window.toastTimerEduc);
    window.toastTimerEduc = setTimeout(() => toast.classList.add('oculto'), 3200);
}

/* ==========================================================================
   DATOS DE CURSOS
   ========================================================================== */
const misCursos = [
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
];

/* ==========================================================================
   DATOS DE INSTRUCTORES — perfiles ficticios para la plataforma educativa
   ========================================================================== */
const misInstructores = [
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
];

const rutasAprendizaje = [
    { id: 'web', icono: `<i class="fa-solid fa-window-maximize app-icon" aria-hidden="true"></i>`, titulo: 'Desarrollo Web', descripcion: 'Aprende a crear sitios modernos desde cero con HTML, CSS y JavaScript.', cursos: 4, horas: 192, categoria: 'Competencias Fundamentales' },
    { id: 'ia', icono: `<i class="fa-solid fa-microchip app-icon" aria-hidden="true"></i>`, titulo: 'Innovación Tecnológica', descripcion: 'Explora IA, nube, ciberseguridad y tendencias que transforman el futuro.', cursos: 4, horas: 153, categoria: 'Innovación Tecnológica' },
    { id: 'emprende', icono: `<i class="fa-solid fa-bullhorn app-icon" aria-hidden="true"></i>`, titulo: 'Emprendimiento Digital', descripcion: 'Convierte ideas en proyectos sostenibles con marketing, finanzas y gestión ágil.', cursos: 4, horas: 160, categoria: 'Emprendimiento Digital' }
];

/* Testimonios de referencia usados para presentar la experiencia de estudiantes. */
const misTestimonios = [
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
];

const favoritosCursos = new Set();
let filtroFavoritosActivo = false;

/* ==========================================================================
   1. SISTEMA NATIVO DE NAVEGACIÓN SPA
   ========================================================================== */
function navegarSPA(idSeccion, evento) {
    if (evento) evento.preventDefault();

    // Oculta todas las secciones y muestra la sección seleccionada.
    document.querySelectorAll('main > section').forEach(s => s.classList.add('oculto'));

    const seccionObjetivo = document.getElementById(idSeccion);
    if (seccionObjetivo) seccionObjetivo.classList.remove('oculto');

    if (idSeccion === 'inscripcion') {
        const bloqueRedes = document.getElementById('bloque-redes-sociales');
        if (bloqueRedes) bloqueRedes.classList.remove('oculto');
    }

    // Actualiza el estado visual del menú.
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    if (evento && evento.currentTarget) {
        evento.currentTarget.classList.add('active');
    } else {
        document.querySelectorAll('.nav-btn').forEach(btn => {
            if (btn.getAttribute('onclick')?.includes(`'${idSeccion}'`)) {
                btn.classList.add('active');
            }
        });
    }

    const menu = document.getElementById('nav-links');
    const menuToggle = document.getElementById('menu-toggle');
    if (menu) menu.classList.remove('menu-abierto');
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ==========================================================================
   2. INYECCIÓN DINÁMICA DE TARJETAS Y TESTIMONIOS
   ========================================================================== */

function obtenerVisualCurso(curso) {
    const visuales = {
        1: { a: '#1d4ed8', b: '#111827', patron: '#60a5fa' },
        2: { a: '#0f766e', b: '#2563eb', patron: '#5eead4' },
        3: { a: '#facc15', b: '#16a34a', patron: '#fde68a' },
        4: { a: '#7c3aed', b: '#312e81', patron: '#c4b5fd' },
        5: { a: '#6d28d9', b: '#9333ea', patron: '#c084fc' },
        6: { a: '#f97316', b: '#7f1d1d', patron: '#fdba74' },
        7: { a: '#0284c7', b: '#0f172a', patron: '#7dd3fc' },
        8: { a: '#be123c', b: '#7f1d1d', patron: '#fda4af' },
        9: { a: '#16a34a', b: '#064e3b', patron: '#86efac' },
        10:{ a: '#db2777', b: '#581c87', patron: '#f9a8d4' },
        11:{ a: '#0891b2', b: '#1d4ed8', patron: '#67e8f9' },
        12:{ a: '#334155', b: '#0f172a', patron: '#94a3b8' }
    };
    return visuales[curso.id] || { a: '#2563eb', b: '#1e293b', patron: '#93c5fd' };
}

function inicializarContenidoHome() {
    const contenedorCursos = document.getElementById('contenedor-cursos');
    const contenedorTestimonios = document.getElementById('contenedor-testimonios');
    const contenedorStats = document.getElementById('home-stats');
    const contenedorRutas = document.getElementById('contenedor-rutas');
    const contenedorInstructores = document.getElementById('contenedor-instructores');
    const contenedorDestacado = document.getElementById('curso-destacado-home');

    if (contenedorStats) {
        contenedorStats.innerHTML = `
            <article class="stat-home-card"><span><i class="fa-solid fa-book-open app-icon" aria-hidden="true"></i></span><strong data-count="12">0</strong><small>Cursos disponibles</small></article>
            <article class="stat-home-card"><span><i class="fa-solid fa-users app-icon" aria-hidden="true"></i></span><strong data-count="350">0</strong><small>Estudiantes proyectados</small></article>
            <article class="stat-home-card"><span><i class="fa-regular fa-clock app-icon" aria-hidden="true"></i></span><strong data-count="505">0</strong><small>Horas de formación</small></article>
            <article class="stat-home-card"><span><i class="fa-solid fa-unlock app-icon" aria-hidden="true"></i></span><strong data-count="100">0</strong><small>Acceso gratuito</small></article>
        `;
    }

    if (contenedorRutas) {
        contenedorRutas.innerHTML = '';
        rutasAprendizaje.forEach(ruta => {
            contenedorRutas.innerHTML += `
                <article class="ruta-card" data-categoria="${ruta.categoria}">
                    <div class="ruta-icono">${ruta.icono}</div>
                    <div>
                        <h3>${ruta.titulo}</h3>
                        <p>${ruta.descripcion}</p>
                        <span>${ruta.cursos} cursos · ${ruta.horas} horas</span>
                    </div>
                    <button type="button" class="btn-ruta" data-categoria="${ruta.categoria}">Ver ruta</button>
                </article>
            `;
        });
    }

    // Pinto las tarjetas de cursos principales del Home
    if (contenedorCursos && misCursos.length > 0) {
        contenedorCursos.innerHTML = '';
        misCursos.slice(0, 6).forEach(curso => {
            const estaGuardado = favoritosCursos.has(curso.id);
            const visual = obtenerVisualCurso(curso);
            contenedorCursos.innerHTML += `
                <article class="tarjeta-curso" data-titulo="${curso.titulo}" data-id="${curso.id}">
                    <div class="contenedor-imagen-tarjeta curso-cover" style="--cover-a:${visual.a}; --cover-b:${visual.b}; --cover-patron:${visual.patron};">
                        <span class="categoria-curso">${curso.categoria}</span>
                        <div class="curso-cover-layout">
                            <div class="curso-cover-icono" aria-hidden="true">${curso.icono}</div>
                            <div class="curso-cover-copy">
                                <small>Educ_Technology</small>
                            </div>
                        </div>
                        <span class="cover-shape cover-shape-a"></span>
                        <span class="cover-shape cover-shape-b"></span>
                        <span class="cover-dots" aria-hidden="true"></span>
                    </div>
                    <div class="contenido-tarjeta">
                        <h3>${curso.titulo}</h3>
                        <p class="instructor">${curso.instructor}</p>
                        <p class="duracion">${curso.duracion}</p>
                        <div class="fila-inferior">
                            <span class="precio-curso">${curso.precio}</span>
                            <div class="acciones-curso">
                                <button type="button" class="btn-favorito ${estaGuardado ? 'favorito-activo' : ''}" data-id="${curso.id}" data-curso="${curso.titulo}" aria-label="Guardar curso ${curso.titulo}">${estaGuardado ? 'Guardado' : 'Guardar'}</button>
                                <button type="button" class="btn-acceder">Acceder</button>
                            </div>
                        </div>
                    </div>
                </article>
            `;
        });
    }

    if (contenedorInstructores) {
        contenedorInstructores.innerHTML = '';
        misInstructores.forEach(instructor => {
            contenedorInstructores.innerHTML += `
                <article class="instructor-card" data-id="${instructor.id}">
                    <img src="images/instructores/${instructor.avatar}" alt="Foto ilustrativa de ${instructor.nombre}">
                    <div class="instructor-card-body">
                        <span>${instructor.rol}</span>
                        <h3>${instructor.nombre}</h3>
                        <p>${instructor.bio}</p>
                        <small>${instructor.experiencia} de experiencia</small>
                        <button type="button" class="btn-perfil-instructor" data-id="${instructor.id}">Ver perfil</button>
                    </div>
                </article>
            `;
        });
    }

    if (contenedorDestacado) {
        const destacados = misCursos.filter(c => ['Ciberseguridad Básica', 'Introducción a JavaScript', 'Marketing Digital para Emprendedores'].includes(c.titulo));
        const curso = destacados[Math.floor(Math.random() * destacados.length)] || misCursos[0];
        contenedorDestacado.innerHTML = `
            <div class="destacado-icono">${curso.icono}</div>
            <div class="destacado-info">
                <span>Curso destacado</span>
                <h3>${curso.titulo}</h3>
                <p>${curso.resumen}</p>
                <small>${curso.duracion} · ${curso.nivel}</small>
            </div>
            <button type="button" class="btn-hero btn-hero-primary" onclick="navegarSPA('buscador', event)">Ver curso</button>
        `;
    }

    // Pinto testimonios más completos: calificación, avatar, ubicación y línea de color por perfil
    if (contenedorTestimonios && misTestimonios.length > 0) {
        contenedorTestimonios.innerHTML = '';
        misTestimonios.forEach(item => {
            const estrellas = '<i class="fa-solid fa-star" aria-hidden="true"></i>'.repeat(item.rating || 5);
            contenedorTestimonios.innerHTML += `
                <article class="testimonial-card testimonial-card-pro" style="--accent:${item.accent};">
                    <div class="testimonial-stars" aria-label="Calificación ${item.rating || 5} de 5">${estrellas}</div>
                    <blockquote class="comment">${item.comment}</blockquote>
                    <div class="testimonial-user">
                        <img src="images/testimonios/${item.avatar}" alt="Foto ilustrativa de ${item.student}">
                        <div>
                            <h4 class="student-name">${item.student}</h4>
                            <small class="student-role">${item.role}</small>
                            <small class="student-location">${item.location}</small>
                        </div>
                    </div>
                </article>
            `;
        });
    }

    const testimoniosStats = document.getElementById('testimonios-stats');
    if (testimoniosStats) {
        testimoniosStats.innerHTML = `
            <article><span><i class="fa-solid fa-users app-icon" aria-hidden="true"></i></span><strong>+1.200</strong><small>Estudiantes satisfechos</small></article>
            <article><span><i class="fa-solid fa-award app-icon" aria-hidden="true"></i></span><strong>4.9/5</strong><small>Calificación promedio</small></article>
            <article><span><i class="fa-regular fa-comments app-icon" aria-hidden="true"></i></span><strong>+850</strong><small>Testimonios positivos</small></article>
            <article><span><i class="fa-solid fa-globe app-icon" aria-hidden="true"></i></span><strong>28</strong><small>Países alcanzados</small></article>
        `;
    }

    conectarEventosBotonesAcceder();
    conectarEventosFavoritos();
    conectarEventosInstructores();
    conectarEventosRutas();
    animarEstadisticasHome();
}

function animarEstadisticasHome() {
    document.querySelectorAll('[data-count]').forEach(item => {
        const objetivo = Number(item.dataset.count);
        let valor = 0;
        const paso = Math.max(1, Math.ceil(objetivo / 45));
        const timer = setInterval(() => {
            valor += paso;
            if (valor >= objetivo) {
                valor = objetivo;
                clearInterval(timer);
            }
            item.textContent = objetivo === 100 ? `${valor}%` : valor;
        }, 28);
    });
}

function conectarEventosRutas() {
    document.querySelectorAll('.btn-ruta').forEach(boton => {
        if (boton.dataset.listener === 'ok') return;
        boton.dataset.listener = 'ok';
        boton.addEventListener('click', (e) => {
            const categoria = e.currentTarget.dataset.categoria;
            navegarSPA('buscador', e);
            setTimeout(() => {
                const filtro = document.querySelector(`.btn-filtro[data-categoria="${categoria}"]`);
                if (filtro) filtro.click();
            }, 250);
        });
    });
}

function conectarEventosInstructores() {
    const modal = document.getElementById('modal-instructor');
    const contenido = document.getElementById('modal-instructor-contenido');
    const cerrar = document.getElementById('btn-cerrar-modal-instructor');
    if (!modal || !contenido) return;

    document.querySelectorAll('.btn-perfil-instructor').forEach(boton => {
        if (boton.dataset.listener === 'ok') return;
        boton.dataset.listener = 'ok';
        boton.addEventListener('click', () => {
            const instructor = misInstructores.find(i => i.id === Number(boton.dataset.id));
            if (!instructor) return;
            contenido.innerHTML = `
                <div class="perfil-instructor-modal">
                    <img src="images/instructores/${instructor.avatar}" alt="Foto ilustrativa de ${instructor.nombre}">
                    <div>
                        <span>${instructor.rol}</span>
                        <h2>${instructor.nombre}</h2>
                        <p>${instructor.bio}</p>
                        <ul>
                            <li><strong>Especialidad:</strong> ${instructor.especialidad}</li>
                            <li><strong>Experiencia:</strong> ${instructor.experiencia}</li>
                            <li><strong>Cursos:</strong> ${instructor.cursos.join(', ')}</li>
                        </ul>
                    </div>
                </div>
            `;
            modal.classList.remove('oculto');
        });
    });

    if (cerrar && cerrar.dataset.listener !== 'ok') {
        cerrar.dataset.listener = 'ok';
        cerrar.addEventListener('click', () => modal.classList.add('oculto'));
    }

    if (modal.dataset.listener !== 'ok') {
        modal.dataset.listener = 'ok';
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.add('oculto');
        });
    }
}


function conectarEventosBotonesAcceder() {
    const modal = document.getElementById('modal-curso');
    const modalTitulo = document.getElementById('modal-titulo-curso');
    const btnCerrar = document.getElementById('btn-cerrar-modal');

    if (!modal || !modalTitulo) return;

    document.querySelectorAll('.btn-acceder').forEach(boton => {
        boton.addEventListener('click', (e) => {
            const tarjeta = e.target.closest('.tarjeta-curso, .resultado-card');
            if (!tarjeta) return;
            const tituloCurso = tarjeta.dataset.titulo || tarjeta.querySelector('h3').innerText;
            modalTitulo.innerText = `Inscripción a: ${tituloCurso}`;
            modal.classList.remove('oculto');
        });
    });

    if (btnCerrar) {
        btnCerrar.addEventListener('click', () => {
            modal.classList.add('oculto');
            limpiarErroresModal();
        });
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('oculto');
            limpiarErroresModal();
        }
    });

    conectarEventosFavoritos();
}

function conectarEventosFavoritos() {
    document.querySelectorAll('.btn-favorito').forEach(boton => {
        if (boton.dataset.listener === 'ok') return;
        boton.dataset.listener = 'ok';
        boton.addEventListener('click', () => {
            const idCurso = Number(boton.dataset.id);
            const curso = boton.dataset.curso || 'curso seleccionado';
            if (favoritosCursos.has(idCurso)) {
                favoritosCursos.delete(idCurso);
            } else {
                favoritosCursos.add(idCurso);
            }
            sincronizarBotonesFavoritos();
            mostrarToast(favoritosCursos.has(idCurso) ? `Curso guardado en favoritos: ${curso}` : `Curso retirado de favoritos: ${curso}`);
        });
    });
}

function sincronizarBotonesFavoritos() {
    document.querySelectorAll('.btn-favorito').forEach(boton => {
        const idCurso = Number(boton.dataset.id);
        const guardado = favoritosCursos.has(idCurso);
        boton.classList.toggle('favorito-activo', guardado);
        if (boton.classList.contains('btn-favorito-panel')) {
            boton.textContent = guardado ? 'Guardado' : 'Guardar';
        } else {
            boton.textContent = guardado ? 'Guardado' : 'Guardar';
        }
    });

    const btnMisFavoritos = document.querySelector('.btn-filtro[data-categoria="favoritos"]');
    if (btnMisFavoritos) {
        btnMisFavoritos.textContent = favoritosCursos.size > 0 ? `Mis favoritos (${favoritosCursos.size})` : 'Mis favoritos';
    }
}


function limpiarErroresModal() {
    document.getElementById('modal-nombre').style.borderColor = '#cbd5e1';
    document.getElementById('modal-correo').style.borderColor = '#cbd5e1';
    document.getElementById('error-modal-nombre').classList.add('oculto');
    document.getElementById('error-modal-correo').classList.add('oculto');
    document.getElementById('form-modal-curso').reset();
}

/* ==========================================================================
   3. VALIDACIÓN CON REGEX — FORMULARIO DE ALERTAS Y MODAL
   ========================================================================== */
function configurarFormularios() {
    const formNotificaciones = document.getElementById('form-registro-nativo');
    const formModalCurso = document.getElementById('form-modal-curso');

    const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,50}$/;
    const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const regexTelefono = /^\d{7,10}$/;

    if (formNotificaciones) {
        formNotificaciones.addEventListener('submit', function(e) {
            e.preventDefault();
            const nombre = document.getElementById('nombre');
            const correo = document.getElementById('correo');
            const telefono = document.getElementById('telefono');
            const area = document.getElementById('area-interes');
            let valido = true;

            const validar = (input, regex, errorId) => {
                const error = document.getElementById(errorId);
                if (!regex.test(input.value.trim())) {
                    error.classList.remove('oculto');
                    input.style.borderColor = '#ef4444';
                    valido = false;
                } else {
                    error.classList.add('oculto');
                    input.style.borderColor = '#e2e8f0';
                }
            };

            validar(nombre, regexNombre, 'error-nombre');
            validar(correo, regexCorreo, 'error-correo');
            validar(telefono, regexTelefono, 'error-telefono');

            // Valida el campo de selección verificando que tenga una opción asignada.
            const errorArea = document.getElementById('error-area');
            if (area.value === '') {
                errorArea.classList.remove('oculto');
                area.style.borderColor = '#ef4444';
                valido = false;
            } else {
                errorArea.classList.add('oculto');
                area.style.borderColor = '#cbd5e1';
            }

            if (valido) {
                mostrarToast(`Registro exitoso. Te notificaremos sobre: ${area.options[area.selectedIndex].text}`);
                formNotificaciones.reset();
            }
        });
    }

    if (formModalCurso) {
        formModalCurso.addEventListener('submit', function(e) {
            e.preventDefault();
            const nombre = document.getElementById('modal-nombre');
            const correo = document.getElementById('modal-correo');
            let valido = true;

            const chk = (input, regex, errorId) => {
                const err = document.getElementById(errorId);
                if (!regex.test(input.value.trim())) {
                    err.classList.remove('oculto');
                    input.style.borderColor = '#ef4444';
                    valido = false;
                } else {
                    err.classList.add('oculto');
                    input.style.borderColor = '#cbd5e1';
                }
            };

            chk(nombre, regexNombre, 'error-modal-nombre');
            chk(correo, regexCorreo, 'error-modal-correo');

            if (valido) {
                alert('¡Inscripción exitosa! Se habilitó tu acceso al aula digital de Educ_Technology.');
                document.getElementById('modal-curso').classList.add('oculto');
                formModalCurso.reset();
            }
        });
    }
}

/* ==========================================================================
   4. BUSCADOR CON FILTROS DE CATEGORÍA
   Permite filtrar cursos por texto, categoría y favoritos.
   ========================================================================== */
function inicializarBuscadorCursos() {
    const btnBuscar = document.getElementById('btn-buscar');
    const inputBusqueda = document.getElementById('input-busqueda');
    const contenedorResultados = document.getElementById('resultados-api');
    const botonesFiltro = document.querySelectorAll('.btn-filtro');

    if (!btnBuscar || !inputBusqueda || !contenedorResultados) return;

    let categoriaActiva = 'todos';

    // Función central de búsqueda y filtrado.
    function buscarYFiltrar() {
        const termino = inputBusqueda.value.toLowerCase().trim();

        let encontrados = misCursos.filter(c => {
            const coincideTexto = termino === '' ||
                c.titulo.toLowerCase().includes(termino) ||
                c.categoria.toLowerCase().includes(termino) ||
                c.resumen.toLowerCase().includes(termino) ||
                c.nivel.toLowerCase().includes(termino) ||
                c.instructor.toLowerCase().includes(termino);
            const coincideCategoria = categoriaActiva === 'todos' ||
                (categoriaActiva === 'favoritos' && favoritosCursos.has(c.id)) ||
                c.categoria === categoriaActiva;
            return coincideTexto && coincideCategoria;
        });

        if (encontrados.length === 0) {
            contenedorResultados.innerHTML = `
                <div class="mensaje-vacio-bonito resultado-vacio">
                    <strong>No encontramos cursos con ese criterio</strong>
                    <span>Prueba con palabras como JavaScript, CSS, innovación o emprendimiento.</span>
                    <button type="button" class="btn-limpiar-busqueda" id="btn-limpiar-busqueda">Limpiar búsqueda</button>
                </div>`;
            const limpiar = document.getElementById('btn-limpiar-busqueda');
            if (limpiar) {
                limpiar.addEventListener('click', () => {
                    inputBusqueda.value = '';
                    categoriaActiva = 'todos';
                    botonesFiltro.forEach(b => b.classList.remove('activo'));
                    const btnTodos = document.querySelector('.btn-filtro[data-categoria="todos"]');
                    if (btnTodos) btnTodos.classList.add('activo');
                    buscarYFiltrar();
                });
            }
            return;
        }

        const textoResultado = encontrados.length === 1 ? '1 resultado encontrado' : `${encontrados.length} resultados encontrados`;
        contenedorResultados.innerHTML = `
            <div class="resultados-header">
                <span class="resultado-dot"></span>
                <strong>${textoResultado}</strong>
                <small>Listado académico compacto</small>
            </div>
        `;

        encontrados.forEach(curso => {
            contenedorResultados.innerHTML += `
                <article class="resultado-card" data-titulo="${curso.titulo}" data-id="${curso.id}">
                    <div class="resultado-icono" aria-hidden="true">${curso.icono}</div>

                    <div class="resultado-info">
                        <span class="resultado-categoria">${curso.categoria}</span>
                        <h3>${curso.titulo}</h3>
                        <p>${curso.resumen}</p>
                    </div>

                    <div class="resultado-detalles">
                        <p><strong>Duración</strong><span>${curso.duracion}</span></p>
                        <p><strong>Instructor</strong><span>${curso.instructor.replace('Instructor: ', '').replace('Instructora: ', '')}</span></p>
                    </div>

                    <div class="resultado-extra">
                        <span class="resultado-precio">${curso.precio}</span>
                        <small>Nivel: ${curso.nivel}</small>
                        <small>${curso.modulos}</small>
                    </div>

                    <div class="resultado-acciones">
                        <button type="button" class="btn-detalle" data-curso="${curso.titulo}">Ver detalle</button>
                        <button type="button" class="btn-favorito btn-favorito-panel ${favoritosCursos.has(curso.id) ? 'favorito-activo' : ''}" data-id="${curso.id}" data-curso="${curso.titulo}">${favoritosCursos.has(curso.id) ? 'Guardado' : 'Guardar'}</button>
                        <button type="button" class="btn-acceder">Acceder</button>
                    </div>
                </article>
            `;
        });

        document.querySelectorAll('.btn-detalle').forEach(btn => {
            btn.addEventListener('click', () => {
                mostrarToast(`Detalle rápido: ${btn.dataset.curso}`);
            });
        });

        // Reactiva los eventos de los botones en los resultados renderizados.
        conectarEventosBotonesAcceder();
        conectarEventosFavoritos();
        sincronizarBotonesFavoritos();
    }

    btnBuscar.addEventListener('click', buscarYFiltrar);
    inputBusqueda.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') buscarYFiltrar();
    });

    // Filtros de categoría mediante botones.
    botonesFiltro.forEach(btn => {
        btn.addEventListener('click', () => {
            botonesFiltro.forEach(b => b.classList.remove('activo'));
            btn.classList.add('activo');
            categoriaActiva = btn.dataset.categoria;
            buscarYFiltrar();
        });
    });

    // Muestra todos los cursos al ingresar al buscador.
    buscarYFiltrar();
}

/* ==========================================================================
   5. ACCESIBILIDAD — CONTROLES VISUALES
   Conecta los botones de contraste, modo oscuro y tamaño de fuente.
   ========================================================================== */
function inicializarAccesibilidad() {
    const btnContrasteInicio  = document.getElementById('btn-contraste-inicio');
    const btnFuenteMasInicio  = document.getElementById('btn-fuente-mas-inicio');
    const btnFuenteMenosInicio = document.getElementById('btn-fuente-menos-inicio');

    // Conecta también los controles disponibles en la sección interna.
    const btnContraste  = document.getElementById('btn-contraste');
    const btnFuenteMas  = document.getElementById('btn-fuente-mas');
    const btnFuenteMenos = document.getElementById('btn-fuente-menos');
    const btnModoOscuro = document.getElementById('btn-modo-oscuro');

    function toggleContraste() {
        document.body.classList.toggle('alto-contraste');
    }

    function aumentarFuente() {
        document.body.classList.remove('fuente-pequena');
        document.body.classList.add('fuente-grande');
    }

    function reducirFuente() {
        document.body.classList.remove('fuente-grande');
        document.body.classList.add('fuente-pequena');
    }

    function alternarModoOscuro() {
        document.body.classList.toggle('modo-oscuro');
        mostrarToast(document.body.classList.contains('modo-oscuro') ? 'Modo oscuro activado.' : 'Modo oscuro desactivado.');
    }

    if (btnContrasteInicio)   btnContrasteInicio.addEventListener('click', toggleContraste);
    if (btnFuenteMasInicio)   btnFuenteMasInicio.addEventListener('click', aumentarFuente);
    if (btnFuenteMenosInicio) btnFuenteMenosInicio.addEventListener('click', reducirFuente);

    if (btnContraste)   btnContraste.addEventListener('click', toggleContraste);
    if (btnFuenteMas)   btnFuenteMas.addEventListener('click', aumentarFuente);
    if (btnFuenteMenos) btnFuenteMenos.addEventListener('click', reducirFuente);
    if (btnModoOscuro) btnModoOscuro.addEventListener('click', alternarModoOscuro);
}

/* ==========================================================================
   MENÚ RESPONSIVE TIPO HAMBURGUESA
   ========================================================================== */
function inicializarMenuResponsive() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    if (!menuToggle || !navLinks) return;

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('menu-abierto');
        const abierto = navLinks.classList.contains('menu-abierto');
        menuToggle.setAttribute('aria-expanded', abierto ? 'true' : 'false');
        menuToggle.textContent = abierto ? 'Cerrar' : 'Menú';
    });
}

/* ==========================================================================
   INICIALIZADOR GLOBAL — ejecución cuando el DOM está listo
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    inicializarContenidoHome();
    configurarFormularios();
    inicializarBuscadorCursos();
    inicializarAccesibilidad();
    inicializarMenuResponsive();
});
