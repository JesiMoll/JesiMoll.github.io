document.addEventListener('DOMContentLoaded', function() {
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

  // Mostrar información enviada
  var infoEnviadaDiv = document.getElementById('info-enviada');
  infoEnviadaDiv.textContent = 'Información enviada:\n\n';
  infoEnviadaDiv.textContent += 'Nombre: ' + nombre + '\n';
  infoEnviadaDiv.textContent += 'Email: ' + email + '\n';
  infoEnviadaDiv.textContent += 'Mensaje: ' + mensaje;
  infoEnviadaDiv.classList.remove('hidden'); // Mostrar el elemento

  // Restablecer el formulario
  form.reset();
});

function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
});