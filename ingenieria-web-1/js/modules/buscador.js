/* ==========================================================================
    MÓDULO: BUSCADOR
    Buscador con filtros de categoría y texto. Permite filtrar cursos por
    texto, categoría y favoritos. Depende de App.contenidoHome para
    reconectar los botones de favoritos/acceder en los resultados.
   ========================================================================== */
window.App = window.App || {};

App.buscador = {
    inicializarBuscadorCursos() {
        const btnBuscar = document.getElementById('btn-buscar');
        const inputBusqueda = document.getElementById('input-busqueda');
        const contenedorResultados = document.getElementById('resultados-api');
        const botonesFiltro = document.querySelectorAll('.btn-filtro');

        if (!btnBuscar || !inputBusqueda || !contenedorResultados) return;

        let categoriaActiva = 'todos';

        // Función central de búsqueda y filtrado.
        function buscarYFiltrar() {
            const termino = inputBusqueda.value.toLowerCase().trim();

            let encontrados = App.datos.misCursos.filter(c => {
                const coincideTexto = termino === '' ||
                    c.titulo.toLowerCase().includes(termino) ||
                    c.categoria.toLowerCase().includes(termino) ||
                    c.resumen.toLowerCase().includes(termino) ||
                    c.nivel.toLowerCase().includes(termino) ||
                    c.instructor.toLowerCase().includes(termino);
                const coincideCategoria = categoriaActiva === 'todos' ||
                    (categoriaActiva === 'favoritos' && App.estado.favoritosCursos.has(c.id)) ||
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
                            <button type="button" class="btn-favorito btn-favorito-panel ${App.estado.favoritosCursos.has(curso.id) ? 'favorito-activo' : ''}" data-id="${curso.id}" data-curso="${curso.titulo}">${App.estado.favoritosCursos.has(curso.id) ? 'Guardado' : 'Guardar'}</button>
                            <button type="button" class="btn-acceder">Acceder</button>
                        </div>
                    </article>
                `;
            });

            document.querySelectorAll('.btn-detalle').forEach(btn => {
                btn.addEventListener('click', () => {
                    App.utils.mostrarToast(`Detalle rápido: ${btn.dataset.curso}`);
                });
            });

            // Reactiva los eventos de los botones en los resultados renderizados.
            App.contenidoHome.conectarEventosBotonesAcceder();
            App.contenidoHome.conectarEventosFavoritos();
            App.contenidoHome.sincronizarBotonesFavoritos();
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
};
