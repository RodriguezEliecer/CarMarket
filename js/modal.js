// modal.js

// Espera a que el DOM esté cargado antes de ejecutar
    document.addEventListener('DOMContentLoaded', () => {
        const botonesCotizar = document.querySelectorAll('.btn-cotizar');
        const modal = document.getElementById('modalCotizar');
        const cerrarModal = document.getElementById('cerrarModal');
        const autoSeleccionado = document.getElementById('autoSeleccionado');
        const formCtz = document.getElementById('form');
        const formCto = document.getElementById('formContacto');

            if (!modal || !cerrarModal || !form) return; // seguridad

            // Abrir modal al hacer clic en un botón "Cotizar"
            botonesCotizar.forEach(btn => {
                btn.addEventListener('click', () => {
                    const nombreAuto = btn.dataset.auto || "Vehículo";
                    autoSeleccionado.textContent = nombreAuto;
                    modal.style.display = 'flex';
                    document.body.style.overflow = 'hidden'; // Evita scroll de fondo
                });
            });
            // Cerrar modal al hacer clic en la X
            cerrarModal.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            });
            // Cerrar modal al hacer clic fuera del contenido
            window.addEventListener('click', e => {
                if (e.target === modal) {
                    modal.style.display = 'none';
                    document.body.style.overflow = '';
                }
            });
            // Envío del formulario (simulado)

                //formulario Cotización de Autos
            formCtz.addEventListener('submit', e => {
                e.preventDefault();
                // Aquí podrías integrar EmailJS, backend, etc.
                alert('Gracias por tu solicitud. Te contactaremos pronto.');
                formCtz.reset();
                modal.style.display = 'none';
                document.body.style.overflow = '';
            });
                //formulario Contacto
            formCto.addEventListener('submit', e => {
                e.preventDefault();
                // Aquí podrías integrar EmailJS, backend, etc.
                alert('Gracias por tu solicitud. Te contactaremos pronto.');
                formCto.reset();
                document.body.style.overflow = '';
            });

    });
