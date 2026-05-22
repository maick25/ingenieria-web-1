/* ==========================================================================
   MI BITÁCORA DE ESTUDIO: Datos de los Cursos (Clonados de mi base de datos)
   ========================================================================== */
const misCursos = [
    {
        id: 1,
        categoria: "Competencias Fundamentales",
        titulo: "Habilidades Digitales para el Futuro",
        instructor: "Instructor: Ing. Miguel Ángel",
        duracion: "⏱️ 40h de contenido",
        precio: "Gratuito",
        imagen: "../img/tecnologia_educativa.svg" // NOTA PARA MÍ: Verificar si en mi PC lleva '../img/' para que cargue
    },
    {
        id: 2,
        categoria: "Innovación Tecnológica",
        titulo: "Introducción a Tecnologías Emergentes",
        instructor: "Instructora: Dra. Elena Rostova",
        duracion: "⏱️ 35h de contenido",
        precio: "Gratuito",
        imagen: "../img/innovacion.svg"
    },
    {
        id: 3,
        categoria: "Emprendimiento Digital",
        titulo: "Modelos de Negocio",
        instructor: "Instructora: Dra. Angelina Ruso",
        duracion: "⏱️ 45h de contenido",
        precio: "Gratuito",
        imagen: "../img/negocios.svg"
    }
];

const misTestimonios = [
    {
        comment: "La flexibilidad de los cursos de Educ_Technology me permitió aprender desarrollo frontend a mi propio ritmo.",
        student: "Carlos Mendoza",
        role: "Estudiante de Ingeniería"
    },
    {
        comment: "El enfoque en tecnologías emergentes me dio las bases para automatizar los procesos de mi negocio.",
        student: "Laura Guatibonza",
        role: "Emprendedora Digital"
    }
];

/* ==========================================================================
   1. SISTEMA NATIVO DE NAVEGACIÓN SPA (Control de pestañas y bloques dinámicos)
   ========================================================================== */
function navegarSPA(idSeccion, evento) {
    if (evento) {
        evento.preventDefault(); 
    }

    // NOTA PARA MÍ: Oculto todas las secciones principales
    const todasLasSecciones = document.querySelectorAll('main > section, main > div > section');
    todasLasSecciones.forEach(seccion => {
        seccion.classList.add('oculto');
    });

    // Muestro la pestaña seleccionada
    const seccionObjetivo = document.getElementById(idSeccion);
    if (seccionObjetivo) {
        seccionObjetivo.classList.remove('oculto');
    }

    // NOTA PARA MÍ: Si el usuario entra normal por el menú de arriba, SÍ muestro las redes
    if (idSeccion === 'inscripcion') {
        const bloqueRedes = document.getElementById('bloque-redes-sociales');
        if (bloqueRedes) bloqueRedes.classList.remove('oculto');
    }

    // Actualizo el estado del menú de navegación superior
    const todosLosBotones = document.querySelectorAll('.nav-btn');
    todosLosBotones.forEach(btn => btn.classList.remove('active'));

    if (evento && evento.currentTarget) {
        evento.currentTarget.classList.add('active');
    } else {
        todosLosBotones.forEach(btn => {
            if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(`'${idSeccion}'`)) {
                btn.classList.add('active');
            }
        });
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ==========================================================================
   2. INYECCIÓN DINÁMICA DE MIS TARJETAS (Clon idéntico de Angular)
   ========================================================================== */
function inicializarContenidoHome() {
    const contenedorCursos = document.getElementById('contenedor-cursos');
    const contenedorTestimonios = document.getElementById('contenedor-testimonios');

    // Renderizo mi catálogo de cursos
    if (contenedorCursos && misCursos.length > 0) {
        contenedorCursos.innerHTML = '';
        
        misCursos.forEach(curso => {
            const estructuraTarjeta = `
                <article class="tarjeta-curso">
                    <div class="contenedor-imagen-tarjeta">
                        <span class="categoria-curso">${curso.categoria}</span>
                        <img src="${curso.imagen}" alt="Portada del curso ${curso.titulo}">
                    </div>
                    <div class="contenido-tarjeta">
                        <h3>${curso.titulo}</h3>
                        <p class="instructor">${curso.instructor}</p>
                        <p class="duracion">${curso.duracion}</p>
                        <div class="fila-inferior">
                            <span class="precio-curso">${curso.precio}</span>
                            <button type="button" class="btn-acceder">Acceder</button>
                        </div>
                    </div>
                </article>
            `;
            contenedorCursos.innerHTML += estructuraTarjeta;
        });
    }

    // Renderizo mi bloque de testimonios de usuarios piloto
    if (contenedorTestimonios && misTestimonios.length > 0) {
        contenedorTestimonios.innerHTML = '';
        
        misTestimonios.forEach(item => {
            const estructuraTestimonio = `
                <div class="testimonial-card">
                    <blockquote class="comment">"${item.comment}"</blockquote>
                    <h4 class="student-name">${item.student}</h4>
                    <small class="student-role">${item.role}</small>
                </div>
            `;
            contenedorTestimonios.innerHTML += estructuraTestimonio;
        });
    }

    // NOTA PARA MÍ: Activo los clics en 'Acceder' justo AQUÍ, cuando las tarjetas ya se pintaron
    conectarEventosBotonesAcceder();
}

// NOTA PARA MÍ: Lógica para la ventana modal flotante al dar clic en acceder
function conectarEventosBotonesAcceder() {
    const botonesAcceder = document.querySelectorAll('.btn-acceder');
    const modal = document.getElementById('modal-curso');
    const modalTitulo = document.getElementById('modal-titulo-curso');
    const btnCerrar = document.getElementById('btn-cerrar-modal');

    if (!modal || !modalTitulo) return;

    botonesAcceder.forEach(boton => {
        boton.addEventListener('click', (e) => {
            const tarjeta = e.target.closest('.tarjeta-curso');
            const tituloCurso = tarjeta.querySelector('h3').innerText;
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
}

function limpiarErroresModal() {
    document.getElementById('modal-nombre').style.borderColor = '#cbd5e1';
    document.getElementById('modal-correo').style.borderColor = '#cbd5e1';
    document.getElementById('error-modal-nombre').classList.add('oculto');
    document.getElementById('error-modal-correo').classList.add('oculto');
    document.getElementById('form-modal-curso').reset();
}

/* ==========================================================================
   3. VALIDACIÓN DE LOS FORMULARIOS CON EXPRESIONES REGULARES (RegEx Nativo)
   ========================================================================== */
function configurarFormularios() {
    const formNotificaciones = document.getElementById('form-registro-nativo');
    const formModalCurso = document.getElementById('form-modal-curso');
    
    const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,50}$/;
    const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const regexTelefono = /^\d{7,10}$/;

    // A) VALIDACIÓN: Formulario General de Alertas (Pestaña "Avisos" del Menú Superior)
    if (formNotificaciones) {
        formNotificaciones.addEventListener('submit', function(evento) {
            evento.preventDefault(); 

            const inputNombre = document.getElementById('nombre');
            const inputCorreo = document.getElementById('correo');
            const inputTelefono = document.getElementById('telefono');
            const inputArea = document.getElementById('area-interes'); // Capturo el select nativo

            const errorNombre = document.getElementById('error-nombre');
            const errorCorreo = document.getElementById('error-correo');
            const errorTelefono = document.getElementById('error-telefono');
            const errorArea = document.getElementById('error-area'); // Capturo el error del select

            let valido = true;

            if (!regexNombre.test(inputNombre.value.trim())) {
                errorNombre.classList.remove('oculto');
                inputNombre.style.borderColor = '#ef4444';
                valido = false;
            } else {
                errorNombre.classList.add('oculto');
                inputNombre.style.borderColor = '#e2e8f0';
            }

            if (!regexCorreo.test(inputCorreo.value.trim())) {
                errorCorreo.classList.remove('oculto');
                inputCorreo.style.borderColor = '#ef4444';
                valido = false;
            } else {
                errorCorreo.classList.add('oculto');
                inputCorreo.style.borderColor = '#e2e8f0';
            }

            if (!regexTelefono.test(inputTelefono.value.trim())) {
                errorTelefono.classList.remove('oculto');
                inputTelefono.style.borderColor = '#ef4444';
                valido = false;
            } else {
                errorTelefono.classList.add('oculto');
                inputTelefono.style.borderColor = '#e2e8f0';
            }

            // NOTA PARA MÍ: Valido que el usuario no haya dejado el desplegable sin seleccionar
            if (inputArea.value === "") {
                errorArea.classList.remove('oculto');
                inputArea.style.borderColor = '#ef4444';
                valido = false;
            } else {
                errorArea.classList.add('oculto');
                inputArea.style.borderColor = '#cbd5e1';
            }

            if (valido) {
                alert(`¡Suscripción exitosa! Te notificaremos de lanzamientos sobre el área de: ${inputArea.options[inputArea.selectedIndex].text}`);
                formNotificaciones.reset(); 
            }
        });
    }

    // B) VALIDACIÓN: Formulario Flotante de la Modal (Acceso Directo al Curso)
    if (formModalCurso) {
        formModalCurso.addEventListener('submit', function(evento) {
            evento.preventDefault();

            const inputNombre = document.getElementById('modal-nombre');
            const inputCorreo = document.getElementById('modal-correo');
            const errorNombre = document.getElementById('error-modal-nombre');
            const errorCorreo = document.getElementById('error-modal-correo');

            let valido = true;

            if (!regexNombre.test(inputNombre.value.trim())) {
                errorNombre.classList.remove('oculto');
                inputNombre.style.borderColor = '#ef4444';
                valido = false;
            } else {
                errorNombre.classList.add('oculto');
                inputNombre.style.borderColor = '#cbd5e1';
            }

            if (!regexCorreo.test(inputCorreo.value.trim())) {
                errorCorreo.classList.remove('oculto');
                inputCorreo.style.borderColor = '#ef4444';
                valido = false;
            } else {
                errorCorreo.classList.add('oculto');
                inputCorreo.style.borderColor = '#cbd5e1';
            }

            if (valido) {
                alert('¡Inscripción exitosa! Se ha habilitado tu acceso al aula digital de Educ_Technology.');
                document.getElementById('modal-curso').classList.add('oculto');
                formModalCurso.reset();
            }
        });
    }
}

/* ==========================================================================
   4. SISTEMA DE BÚSQUEDA DE CURSOS INTERNOS (Filtro en tiempo real)
   ========================================================================== */
function inicializarBuscadorCursos() {
    const btnBuscar = document.getElementById('btn-buscar');
    const inputBusqueda = document.getElementById('input-busqueda');
    const contenedorResultados = document.getElementById('resultados-api');

    if (!btnBuscar || !inputBusqueda || !contenedorResultados) return;

    btnBuscar.addEventListener('click', () => {
        const termino = inputBusqueda.value.toLowerCase().trim();
        
        if (termino === '') {
            contenedorResultados.innerHTML = `<p class="mensaje-espera">Por favor, escribe el nombre de un curso.</p>`;
            return;
        }

        const encontrados = misCursos.filter(c => 
            c.titulo.toLowerCase().includes(termino) || 
            c.categoria.toLowerCase().includes(termino)
        );

        if (encontrados.length === 0) {
            contenedorResultados.innerHTML = `<p class="mensaje-espera">No encontré cursos con ese nombre.</p>`;
            return;
        }

        contenedorResultados.innerHTML = ''; 
        
        encontrados.forEach(curso => {
            contenedorResultados.innerHTML += `
                <article class="tarjeta-curso">
                    <div class="contenedor-imagen-tarjeta">
                        <span class="categoria-curso">${curso.categoria}</span>
                        <img src="${curso.imagen}" alt="${curso.titulo}">
                    </div>
                    <div class="contenido-tarjeta">
                        <h3>${curso.titulo}</h3>
                        <p class="instructor">${curso.instructor}</p>
                        <p class="duracion">${curso.duracion}</p>
                        <div class="fila-inferior">
                            <span class="precio-curso">${curso.precio}</span>
                            <button type="button" class="btn-acceder">Acceder</button>
                        </div>
                    </div>
                </article>
            `;
        });

        // NOTA PARA MÍ: Activo los clics en 'Acceder' también para las tarjetas filtradas en el buscador
        conectarEventosBotonesAcceder();
    });
}

/* ==========================================================================
   5. HERRAMIENTAS DE ACCESIBILIDAD (Alto Contraste y Control de Fuente)
   ========================================================================== */
function inicializarAccesibilidad() {
    const btnContraste = document.getElementById('btn-contraste');
    const btnFuenteMas = document.getElementById('btn-fuente-mas');
    const btnFuenteMenos = document.getElementById('btn-fuente-menos');

    if (btnContraste) {
        btnContraste.addEventListener('click', () => {
            document.body.classList.toggle('alto-contraste');
        });
    }

    if (btnFuenteMas) {
        btnFuenteMas.addEventListener('click', () => {
            document.body.classList.add('fuente-grande');
        });
    }

    if (btnFuenteMenos) {
        btnFuenteMenos.addEventListener('click', () => {
            document.body.classList.remove('fuente-grande');
        });
    }
}

/* ==========================================================================
   DISPARADOR INICIALIZADOR GLOBAL
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    inicializarContenidoHome();
    configurarFormularios(); // Activa las validaciones RegEx de ambos formularios
    inicializarBuscadorCursos();
    inicializarAccesibilidad(); 
});
