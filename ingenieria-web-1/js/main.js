/* ==========================================================================
    MÓDULO: MAIN
    Punto de entrada de la aplicación. Espera a que el DOM esté listo y
    arranca cada módulo en orden. Este archivo debe cargarse al final,
    después de todos los demás módulos en js/modules/.
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    App.contenidoHome.inicializarContenidoHome();
    App.formularios.configurarFormularios();
    App.buscador.inicializarBuscadorCursos();
    App.accesibilidad.inicializarAccesibilidad();
    App.navegacion.inicializarMenuResponsive();
    App.authIdioma.inicializarAutenticacionIdioma();
});
