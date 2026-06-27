/* ==========================================================================
    MÓDULO: FORMULARIOS
    Validación con RegEx del formulario de alertas de nuevos cursos y del
    modal de inscripción a un curso.
   ========================================================================== */
window.App = window.App || {};

App.formularios = {
    configurarFormularios() {
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
                    App.utils.mostrarToast(`Registro exitoso. Te notificaremos sobre: ${area.options[area.selectedIndex].text}`);
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
};
