/* ==========================================================================
    MÓDULO: UTILS
    Utilidad visual: mensajes de confirmación sin usar alertas del navegador.
    Se cuelga de App.utils para que el resto de módulos pueda usarla
    (este archivo debe cargarse antes que los demás en el HTML).
   ========================================================================== */
window.App = window.App || {};

App.utils = {
    mostrarToast(mensaje) {
        const toast = document.getElementById('toast-feedback');
        if (!toast) return;
        toast.textContent = mensaje;
        toast.classList.remove('oculto');
        clearTimeout(window.toastTimerEduc);
        window.toastTimerEduc = setTimeout(() => toast.classList.add('oculto'), 3200);
    }
};
