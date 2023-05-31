
document.getElementById('formulario-contacto').addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar que el formulario se envíe normalmente
  
  var form = event.target;
  var nombre = form.nombre.value;
  var email = form.email.value;
  var mensaje = form.mensaje.value;

  // Validación de datos
  var nombreError = document.getElementById('nombre-error');
  var emailError = document.getElementById('email-error');
  var mensajeError = document.getElementById('mensaje-error');
  
  nombreError.textContent = '';
  emailError.textContent = '';
  mensajeError.textContent = '';
  
  if (nombre === '') {
    nombreError.textContent = 'Por favor, ingresa tu nombre.';
  }
  
  if (email === '') {
    emailError.textContent = 'Por favor, ingresa tu email.';
  } else if (!isValidEmail(email)) {
    emailError.textContent = 'Por favor, ingresa un email válido.';
  }

  // Aquí puedes agregar más código para realizar acciones adicionales, como enviar los datos del formulario o mostrar mensajes de éxito, etc.
});
