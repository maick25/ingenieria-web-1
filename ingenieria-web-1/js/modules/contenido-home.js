/* ==========================================================================
    MÓDULO: CONTENIDO HOME
    Inyección dinámica de tarjetas de cursos, rutas, instructores,
    testimonios y curso destacado en la sección de inicio. También maneja
    favoritos y los modales de inscripción / perfil de instructor.
   ========================================================================== */
window.App = window.App || {};

App.contenidoHome = {
    obtenerVisualCurso(curso) {
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
    },

    inicializarContenidoHome() {
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
            App.datos.rutasAprendizaje.forEach(ruta => {
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
        if (contenedorCursos && App.datos.misCursos.length > 0) {
            contenedorCursos.innerHTML = '';
            App.datos.misCursos.slice(0, 6).forEach(curso => {
                const estaGuardado = App.estado.favoritosCursos.has(curso.id);
                const visual = this.obtenerVisualCurso(curso);
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
            App.datos.misInstructores.forEach(instructor => {
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
            const destacados = App.datos.misCursos.filter(c => ['Ciberseguridad Básica', 'Introducción a JavaScript', 'Marketing Digital para Emprendedores'].includes(c.titulo));
            const curso = destacados[Math.floor(Math.random() * destacados.length)] || App.datos.misCursos[0];
            contenedorDestacado.innerHTML = `
                <div class="destacado-icono">${curso.icono}</div>
                <div class="destacado-info">
                    <span>Curso destacado</span>
                    <h3>${curso.titulo}</h3>
                    <p>${curso.resumen}</p>
                    <small>${curso.duracion} · ${curso.nivel}</small>
                </div>
                <button type="button" class="btn-hero btn-hero-primary" onclick="App.navegacion.navegarSPA('buscador', event)">Ver curso</button>
            `;
        }

        // Pinto testimonios más completos: calificación, avatar, ubicación y línea de color por perfil
        if (contenedorTestimonios && App.datos.misTestimonios.length > 0) {
            contenedorTestimonios.innerHTML = '';
            App.datos.misTestimonios.forEach(item => {
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

        this.conectarEventosBotonesAcceder();
        this.conectarEventosFavoritos();
        this.conectarEventosInstructores();
        this.conectarEventosRutas();
        this.animarEstadisticasHome();
    },

    animarEstadisticasHome() {
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
    },

    conectarEventosRutas() {
        document.querySelectorAll('.btn-ruta').forEach(boton => {
            if (boton.dataset.listener === 'ok') return;
            boton.dataset.listener = 'ok';
            boton.addEventListener('click', (e) => {
                const categoria = e.currentTarget.dataset.categoria;
                App.navegacion.navegarSPA('buscador', e);
                setTimeout(() => {
                    const filtro = document.querySelector(`.btn-filtro[data-categoria="${categoria}"]`);
                    if (filtro) filtro.click();
                }, 250);
            });
        });
    },

    conectarEventosInstructores() {
        const modal = document.getElementById('modal-instructor');
        const contenido = document.getElementById('modal-instructor-contenido');
        const cerrar = document.getElementById('btn-cerrar-modal-instructor');
        if (!modal || !contenido) return;

        document.querySelectorAll('.btn-perfil-instructor').forEach(boton => {
            if (boton.dataset.listener === 'ok') return;
            boton.dataset.listener = 'ok';
            boton.addEventListener('click', () => {
                const instructor = App.datos.misInstructores.find(i => i.id === Number(boton.dataset.id));
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
    },


    conectarEventosBotonesAcceder() {
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
                this.limpiarErroresModal();
            });
        }

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('oculto');
                this.limpiarErroresModal();
            }
        });

        this.conectarEventosFavoritos();
    },

    conectarEventosFavoritos() {
        document.querySelectorAll('.btn-favorito').forEach(boton => {
            if (boton.dataset.listener === 'ok') return;
            boton.dataset.listener = 'ok';
            boton.addEventListener('click', () => {
                const idCurso = Number(boton.dataset.id);
                const curso = boton.dataset.curso || 'curso seleccionado';
                if (App.estado.favoritosCursos.has(idCurso)) {
                    App.estado.favoritosCursos.delete(idCurso);
                } else {
                    App.estado.favoritosCursos.add(idCurso);
                }
                this.sincronizarBotonesFavoritos();
                App.utils.mostrarToast(App.estado.favoritosCursos.has(idCurso) ? `Curso guardado en favoritos: ${curso}` : `Curso retirado de favoritos: ${curso}`);
            });
        });
    },

    sincronizarBotonesFavoritos() {
        document.querySelectorAll('.btn-favorito').forEach(boton => {
            const idCurso = Number(boton.dataset.id);
            const guardado = App.estado.favoritosCursos.has(idCurso);
            boton.classList.toggle('favorito-activo', guardado);
            if (boton.classList.contains('btn-favorito-panel')) {
                boton.textContent = guardado ? 'Guardado' : 'Guardar';
            } else {
                boton.textContent = guardado ? 'Guardado' : 'Guardar';
            }
        });

        const btnMisFavoritos = document.querySelector('.btn-filtro[data-categoria="favoritos"]');
        if (btnMisFavoritos) {
            btnMisFavoritos.textContent = App.estado.favoritosCursos.size > 0 ? `Mis favoritos (${App.estado.favoritosCursos.size})` : 'Mis favoritos';
        }
    },


    limpiarErroresModal() {
        document.getElementById('modal-nombre').style.borderColor = '#cbd5e1';
        document.getElementById('modal-correo').style.borderColor = '#cbd5e1';
        document.getElementById('error-modal-nombre').classList.add('oculto');
        document.getElementById('error-modal-correo').classList.add('oculto');
        document.getElementById('form-modal-curso').reset();
    }

};
