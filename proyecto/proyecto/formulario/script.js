document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Aquí podrías agregar más validaciones si es necesario

    // Mostrar el mensaje de confirmación
    document.getElementById('confirmationMessage').style.display = 'block';

    // Limpiar el formulario
    document.getElementById('contactForm').reset();
});


(function() {
    emailjs.init('33W68GlDYJvMUbl56'); // Reemplaza 'TU_USER_ID' con tu User ID de EmailJS
})();

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Recoger datos del formulario
    var templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Enviar el correo usando EmailJS
    emailjs.send('service_ub5nxzp', 'template_37emxy8', templateParams)
        .then(function(response) {
            console.log('Correo enviado exitosamente!', response.status, response.text);
            // Mostrar mensaje de confirmación
            document.getElementById('confirmationMessage').style.display = 'block';

            // Ocultar mensaje después de 3 segundos
            setTimeout(function() {
                document.getElementById('confirmationMessage').style.display = 'none';
            }, 2000); // 3000 milisegundos = 3 segundos

            // Limpiar el formulario después de enviar
            document.getElementById('contactForm').reset();
        }, function(error) {
            console.error('Error al enviar el correo:', error);
            alert('Ocurrió un error al enviar el mensaje. Por favor, intenta nuevamente.');
        });
});


function goBack() {
     window.history.back();  
}
    