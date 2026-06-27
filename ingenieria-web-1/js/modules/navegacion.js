/* ==========================================================================
    MÓDULO: NAVEGACIÓN
    Sistema nativo de navegación SPA (cambio de secciones) y menú responsive
    tipo hamburguesa.
   ========================================================================== */
window.App = window.App || {};

App.navegacion = {
    navegarSPA(idSeccion, evento) {
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
    },

    inicializarMenuResponsive() {
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
};

// El HTML llama navegarSPA(...) directamente en atributos onclick,
// por eso se expone también como función global.
window.navegarSPA = App.navegacion.navegarSPA;
