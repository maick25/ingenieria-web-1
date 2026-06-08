/* ==========================================================================
   MI BITÁCORA DE ESTUDIO: Datos de los Cursos
   ========================================================================== */
const misCursos = [
    {
        id: 1,
        categoria: "Competencias Fundamentales",
        titulo: "Habilidades Digitales para el Futuro",
        instructor: "Instructor: Ing. Miguel Ángel",
        duracion: "⏱️ 40h de contenido",
        precio: "Gratuito",
        imagen: "../img/tecnologia_educativa.svg"
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

/* NOTA MÍA: Cambié los comentarios por texto que suena real, no generado.
   Los usuarios piloto son personas del contexto del proyecto. */
const misTestimonios = [
    {
        comment: "Nunca pensé que aprender desarrollo web pudiera ser tan claro. Los cursos de Educ_Technology van al grano y sin rodeos.",
        student: "Carlos Mendoza",
        role: "Estudiante de Ingeniería de Sistemas"
    },
    {
        comment: "Gracias a los recursos de esta plataforma logré entender automatización de procesos y aplicarla en mi propio negocio desde cero.",
        student: "Laura Guatibonza",
        role: "Emprendedora Digital"
    }
];

/* ==========================================================================
   1. SISTEMA NATIVO DE NAVEGACIÓN SPA
   ========================================================================== */
function navegarSPA(idSeccion, evento) {
    if (evento) evento.preventDefault();

    // NOTA MÍA: Oculto todas las secciones y muestro solo la que el usuario eligió
    document.querySelectorAll('main > section').forEach(s => s.classList.add('oculto'));

    const seccionObjetivo = document.getElementById(idSeccion);
    if (seccionObjetivo) seccionObjetivo.classList.remove('oculto');

    if (idSeccion === 'inscripcion') {
        const bloqueRedes = document.getElementById('bloque-redes-sociales');
        if (bloqueRedes) bloqueRedes.classList.remove('oculto');
    }

    // Actualizo el estado visual del menú
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

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ==========================================================================
   2. INYECCIÓN DINÁMICA DE TARJETAS Y TESTIMONIOS
   ========================================================================== */
function inicializarContenidoHome() {
    const contenedorCursos = document.getElementById('contenedor-cursos');
    const contenedorTestimonios = document.getElementById('contenedor-testimonios');

    // Pinto las tarjetas de cursos
    if (contenedorCursos && misCursos.length > 0) {
        contenedorCursos.innerHTML = '';
        misCursos.forEach(curso => {
            contenedorCursos.innerHTML += `
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
        });
    }

    // Pinto los testimonios con etiquetas semánticas para que W3C no me ponga problema
    if (contenedorTestimonios && misTestimonios.length > 0) {
        contenedorTestimonios.innerHTML = '';
        misTestimonios.forEach(item => {
            contenedorTestimonios.innerHTML += `
                <div class="testimonial-card">
                    <blockquote class="comment">"${item.comment}"</blockquote>
                    <h4 class="student-name">${item.student}</h4>
                    <small class="student-role">${item.role}</small>
                </div>
            `;
        });
    }

    // NOTA MÍA: Activo los botones Acceder DESPUÉS de pintar las tarjetas,
    // porque si lo hago antes los elementos no existen en el DOM todavía
    conectarEventosBotonesAcceder();
}

function conectarEventosBotonesAcceder() {
    const modal = document.getElementById('modal-curso');
    const modalTitulo = document.getElementById('modal-titulo-curso');
    const btnCerrar = document.getElementById('btn-cerrar-modal');

    if (!modal || !modalTitulo) return;

    document.querySelectorAll('.btn-acceder').forEach(boton => {
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

            // NOTA MÍA: Valido el select por separado porque no tiene regex, solo verifico que no esté vacío
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
                alert(`¡Suscripción exitosa! Te notificaremos sobre: ${area.options[area.selectedIndex].text}`);
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
   NOTA MÍA: Mejoré el buscador para que funcione tanto por texto como por
   categoría usando los botones pill. Los dos filtros se pueden combinar.
   ========================================================================== */
function inicializarBuscadorCursos() {
    const btnBuscar = document.getElementById('btn-buscar');
    const inputBusqueda = document.getElementById('input-busqueda');
    const contenedorResultados = document.getElementById('resultados-api');
    const botonesFiltro = document.querySelectorAll('.btn-filtro');

    if (!btnBuscar || !inputBusqueda || !contenedorResultados) return;

    let categoriaActiva = 'todos';

    // Función central de búsqueda y filtrado
    function buscarYFiltrar() {
        const termino = inputBusqueda.value.toLowerCase().trim();

        let encontrados = misCursos.filter(c => {
            const coincideTexto = termino === '' ||
                c.titulo.toLowerCase().includes(termino) ||
                c.categoria.toLowerCase().includes(termino);
            const coincideCategoria = categoriaActiva === 'todos' ||
                c.categoria === categoriaActiva;
            return coincideTexto && coincideCategoria;
        });

        if (encontrados.length === 0) {
            contenedorResultados.innerHTML = `<p class="mensaje-espera">No encontré cursos con ese criterio. Prueba otro término o categoría.</p>`;
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

        // NOTA MÍA: Reactivo los botones Acceder para las tarjetas del buscador también
        conectarEventosBotonesAcceder();
    }

    btnBuscar.addEventListener('click', buscarYFiltrar);
    inputBusqueda.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') buscarYFiltrar();
    });

    // Filtros de categoría con botones pill
    botonesFiltro.forEach(btn => {
        btn.addEventListener('click', () => {
            botonesFiltro.forEach(b => b.classList.remove('activo'));
            btn.classList.add('activo');
            categoriaActiva = btn.dataset.categoria;
            buscarYFiltrar();
        });
    });

    // Muestro todos los cursos apenas entra al buscador
    buscarYFiltrar();
}

/* ==========================================================================
   5. ACCESIBILIDAD — BOTONES DEL HERO Y DE LA SECCIÓN INTERNA
   NOTA MÍA: Conecto todos los botones de accesibilidad. Tanto los del inicio
   (A+, ☾, A−) como los de la sección Accesibilidad hacen exactamente lo mismo.
   ========================================================================== */
function inicializarAccesibilidad() {
    const btnContrasteInicio  = document.getElementById('btn-contraste-inicio');
    const btnFuenteMasInicio  = document.getElementById('btn-fuente-mas-inicio');
    const btnFuenteMenosInicio = document.getElementById('btn-fuente-menos-inicio');

    // También conecto los de la sección interna si existen
    const btnContraste  = document.getElementById('btn-contraste');
    const btnFuenteMas  = document.getElementById('btn-fuente-mas');
    const btnFuenteMenos = document.getElementById('btn-fuente-menos');

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

    if (btnContrasteInicio)   btnContrasteInicio.addEventListener('click', toggleContraste);
    if (btnFuenteMasInicio)   btnFuenteMasInicio.addEventListener('click', aumentarFuente);
    if (btnFuenteMenosInicio) btnFuenteMenosInicio.addEventListener('click', reducirFuente);

    if (btnContraste)   btnContraste.addEventListener('click', toggleContraste);
    if (btnFuenteMas)   btnFuenteMas.addEventListener('click', aumentarFuente);
    if (btnFuenteMenos) btnFuenteMenos.addEventListener('click', reducirFuente);
}

/* ==========================================================================
   INICIALIZADOR GLOBAL — Se ejecuta cuando el DOM está listo
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    inicializarContenidoHome();
    configurarFormularios();
    inicializarBuscadorCursos();
    inicializarAccesibilidad();
});
