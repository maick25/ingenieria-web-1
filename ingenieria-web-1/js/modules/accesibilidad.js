/* ==========================================================================
    MÓDULO: ACCESIBILIDAD
    Conecta los botones flotantes de contraste, modo oscuro y tamaño de
    fuente, visibles en todas las secciones de la SPA.
   ========================================================================== */
window.App = window.App || {};

App.accesibilidad = {
    inicializarAccesibilidad() {
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
            App.utils.mostrarToast(document.body.classList.contains('modo-oscuro') ? 'Modo oscuro activado.' : 'Modo oscuro desactivado.');
        }

        // Botones de accesibilidad
        const btnFlotanteMas    = document.getElementById('btn-fuente-mas-flotante');
        const btnFlotanteContr  = document.getElementById('btn-contraste-flotante');
        const btnFlotanteOscuro = document.getElementById('btn-modo-oscuro-flotante');
        const btnFlotanteMenos  = document.getElementById('btn-fuente-menos-flotante');

        if (btnFlotanteMas)    btnFlotanteMas.addEventListener('click', aumentarFuente);
        if (btnFlotanteContr)  btnFlotanteContr.addEventListener('click', toggleContraste);
        if (btnFlotanteOscuro) btnFlotanteOscuro.addEventListener('click', alternarModoOscuro);
        if (btnFlotanteMenos)  btnFlotanteMenos.addEventListener('click', reducirFuente);
    }
};
