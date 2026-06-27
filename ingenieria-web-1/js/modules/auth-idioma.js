/* ==========================================================================
    MÓDULO: AUTENTICACIÓN E IDIOMA
    Modales de login/registro simulados (validados con RegEx) y selector
    de idioma (ES/EN/PT) que traduce los textos visibles del menú y el hero.
   ========================================================================== */
window.App = window.App || {};

App.authIdioma = {
    inicializarAutenticacionIdioma() {

        const btnLogin = document.getElementById('btn-login');
        const btnRegister = document.getElementById('btn-register');
        const btnLanguage = document.getElementById('btn-language');

        const modalLogin = document.getElementById('modal-login');
        const modalRegister = document.getElementById('modal-register');
        const modalLanguage = document.getElementById('modal-language');

        const btnCerrarLogin = document.getElementById('btn-cerrar-login');
        const btnCerrarRegister = document.getElementById('btn-cerrar-register');
        const btnCerrarLanguage = document.getElementById('btn-cerrar-language');

        const formLogin = document.getElementById('form-login');
        const formRegister = document.getElementById('form-register');

        const languageOptions = document.querySelectorAll('.language-option');

        const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        let idiomaActual = 'es';

        const traducciones = {
        es: {
            buscador: 'Buscador',
            alerta: 'Alerta nuevos cursos',
            impacto: 'Impacto',
            bitacora: 'Bitácora',
            login: 'Iniciar sesión',
            registro: 'Regístrate',
            heroTitulo: 'Desarrolla habilidades para el futuro digital',
            heroBoton1: 'Explorar cursos',
            heroBoton2: 'Recibir alertas'
        },

        en: {
            buscador: 'Search',
            alerta: 'New Course Alerts',
            impacto: 'Impact',
            bitacora: 'Development Log',
            login: 'Sign In',
            registro: 'Register',
            heroTitulo: 'Develop skills for the digital future',
            heroBoton1: 'Explore Courses',
            heroBoton2: 'Receive Alerts'
        },

        pt: {
            buscador: 'Pesquisar',
            alerta: 'Novos Cursos',
            impacto: 'Impacto',
            bitacora: 'Bitácora',
            login: 'Entrar',
            registro: 'Cadastrar',
            heroTitulo: 'Desenvolva habilidades para o futuro digital',
            heroBoton1: 'Explorar Cursos',
            heroBoton2: 'Receber Alertas'
        }
    };

        /* ----------------------------------------------------------------------
        Utilidades para modales
           ---------------------------------------------------------------------- */

        function abrirModal(modal) {
            if (modal) {
                modal.classList.remove('oculto');
            }
        }

        function cerrarModal(modal) {
            if (modal) {
                modal.classList.add('oculto');
            }
        }

        function mostrarError(idError, mostrar) {
            const error = document.getElementById(idError);

            if (error) {
                error.classList.toggle('oculto', !mostrar);
            }
        }

        function cambiarIdioma(idioma) {

        const textos = traducciones[idioma];

        const botonesMenu = document.querySelectorAll('.nav-btn');

        if (botonesMenu.length >= 4) {
            botonesMenu[0].textContent = textos.buscador;
            botonesMenu[1].textContent = textos.alerta;
            botonesMenu[2].textContent = textos.impacto;
            botonesMenu[3].textContent = textos.bitacora;
        }

        const btnLogin = document.getElementById('btn-login');
        const btnRegister = document.getElementById('btn-register');

        if (btnLogin) btnLogin.textContent = textos.login;
        if (btnRegister) btnRegister.textContent = textos.registro;

        const heroTitulo = document.querySelector('.hero-text h1');

        if (heroTitulo) {
            heroTitulo.textContent = textos.heroTitulo;
        }

        const btnHeroPrimary = document.querySelector('.btn-hero-primary');
        const btnHeroSecondary = document.querySelector('.btn-hero-secondary');

        if (btnHeroPrimary) {
            btnHeroPrimary.textContent = textos.heroBoton1;
        }

        if (btnHeroSecondary) {
            btnHeroSecondary.textContent = textos.heroBoton2;
        }
    }

        /* ----------------------------------------------------------------------
        Apertura de modales
           ---------------------------------------------------------------------- */

        if (btnLogin) {
            btnLogin.addEventListener('click', () => abrirModal(modalLogin));
        }

        if (btnRegister) {
            btnRegister.addEventListener('click', () => abrirModal(modalRegister));
        }

        if (btnLanguage) {
            btnLanguage.addEventListener('click', () => abrirModal(modalLanguage));
        }

        /* ----------------------------------------------------------------------
        Cierre de modales
           ---------------------------------------------------------------------- */

        if (btnCerrarLogin) {
            btnCerrarLogin.addEventListener('click', () => cerrarModal(modalLogin));
        }

        if (btnCerrarRegister) {
            btnCerrarRegister.addEventListener('click', () => cerrarModal(modalRegister));
        }

        if (btnCerrarLanguage) {
            btnCerrarLanguage.addEventListener('click', () => cerrarModal(modalLanguage));
        }

        /* ----------------------------------------------------------------------
        Cerrar modal al hacer clic fuera
           ---------------------------------------------------------------------- */

        if (modalLogin) {
            modalLogin.addEventListener('click', (event) => {
                if (event.target === modalLogin) {
                    cerrarModal(modalLogin);
                }
            });
        }

        if (modalRegister) {
            modalRegister.addEventListener('click', (event) => {
                if (event.target === modalRegister) {
                    cerrarModal(modalRegister);
                }
            });
        }

        if (modalLanguage) {
            modalLanguage.addEventListener('click', (event) => {
                if (event.target === modalLanguage) {
                    cerrarModal(modalLanguage);
                }
            });
        }

        /* ----------------------------------------------------------------------
        Formulario Login
           ---------------------------------------------------------------------- */

        if (formLogin) {

            formLogin.addEventListener('submit', (event) => {

                event.preventDefault();

                const correo = document.getElementById('login-correo').value.trim();
                const password = document.getElementById('login-password').value.trim();

                const correoValido = correoRegex.test(correo);
                const passwordValido = password.length >= 6;

                mostrarError('error-login-correo', !correoValido);
                mostrarError('error-login-password', !passwordValido);

                if (correoValido && passwordValido) {

                    cerrarModal(modalLogin);

                    formLogin.reset();

                    App.utils.mostrarToast(
                        idiomaActual === 'es'
                            ? 'Inicio de sesión simulado correctamente.'
                            : idiomaActual === 'en'
                                ? 'Login completed successfully.'
                                : 'Login realizado com sucesso.'
                    );
                }

            });

        }

        /* ----------------------------------------------------------------------
        Formulario Registro
           ---------------------------------------------------------------------- */

        if (formRegister) {

            formRegister.addEventListener('submit', (event) => {

                event.preventDefault();

                const nombre = document.getElementById('register-nombre').value.trim();
                const correo = document.getElementById('register-correo').value.trim();
                const password = document.getElementById('register-password').value.trim();

                const nombreValido = nombre.length >= 3;
                const correoValido = correoRegex.test(correo);
                const passwordValido = password.length >= 6;

                mostrarError('error-register-nombre', !nombreValido);
                mostrarError('error-register-correo', !correoValido);
                mostrarError('error-register-password', !passwordValido);

                if (nombreValido && correoValido && passwordValido) {

                    cerrarModal(modalRegister);

                    formRegister.reset();

                    App.utils.mostrarToast(
                        idiomaActual === 'es'
                            ? 'Registro simulado correctamente.'
                            : idiomaActual === 'en'
                                ? 'Registration completed successfully.'
                                : 'Cadastro realizado com sucesso.'
                    );
                }

            });

        }

        /* ----------------------------------------------------------------------
        Selección de idioma
           ---------------------------------------------------------------------- */

        languageOptions.forEach((option) => {

            option.addEventListener('click', () => {

                idiomaActual = option.dataset.lang;

                languageOptions.forEach((item) => {
                    item.classList.remove('active');
                });

                option.classList.add('active');

                let mensaje = '';

                switch (idiomaActual) {

                    case 'es':
                        mensaje = 'Idioma cambiado a Español.';
                        break;

                    case 'en':
                        mensaje = 'Language changed to English.';
                        break;

                    case 'pt':
                        mensaje = 'Idioma alterado para Português.';
                        break;

                    default:
                        mensaje = 'Idioma actualizado.';
                }

                cambiarIdioma(idiomaActual);

                cerrarModal(modalLanguage);

                App.utils.mostrarToast(mensaje);

            });

        });

    }
};
